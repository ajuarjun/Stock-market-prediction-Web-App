import keras
from keras.models import Sequential
from keras.layers import Dense
from keras.layers import LSTM
from dotenv import load_dotenv
load_dotenv()
import os

import numpy as np

from flask import Flask, jsonify
from flask_cors import CORS
from alpha_vantage.timeseries import TimeSeries

app = Flask(__name__)
CORS(app)

def create_model(stock, price):
    model = Sequential()
    model.add(LSTM(units=4, activation="sigmoid", input_shape=(None,1)))
    model.add(Dense(units=1))

    model.load_weights("./model/"+price+stock+".h5")
    return model

models = {"IBM":
    {
    "hmodel" : create_model("IBM", "high"),
    "lmodel" : create_model("IBM", "low"),
    "cmodel" : create_model("IBM", "close"),
    "omodel" : create_model("IBM", "open")
    },
    "WIT":
    {
    "hmodel" : create_model("WIT", "high"),
    "lmodel" : create_model("WIT", "low"),
    "cmodel" : create_model("WIT", "close"),
    "omodel" : create_model("WIT", "open")
    },
    "TTM":
    {
    "hmodel" : create_model("TTM", "high"),
    "lmodel" : create_model("TTM", "low"),
    "cmodel" : create_model("TTM", "close"),
    "omodel" : create_model("TTM", "open")
    }}

def prediction(model, price, data):
    arr=[]
    mini = 0
    maxi = 1
    for key in list(data.keys()):
        arr.append(data[key][price])

    if(len(arr)>0):
        mini = min(arr)
        maxi = max(arr)

        input = np.array(data[list(data.keys())[0]][price]).reshape(-1,1)
        input[0][0]=(input[0][0]-mini)/(maxi-mini)
        input = np.reshape(input,(1,1,1))
        return (model.predict(input)[0].reshape(-1,1)[0][0]*(maxi-mini))+mini


@app.route("/", methods=["GET"])
def homePage():
    return jsonify({"message":"The api is working!!!"})

@app.route("/api/<company>", methods=["GET"])
def stock(company):
    ts = TimeSeries(key = os.environ.get("API_KEY"), output_format="JSON")
    data = ts.get_daily(company)
    x = dict([item, dict([i[3:], float(v)] for i,v in value.items())] for item, value in data[0].items())

    open = prediction(models[company]["omodel"], "open", x)
    close = prediction(models[company]["cmodel"], "close", x)
    high = prediction(models[company]["hmodel"], "high", x)
    low = prediction(models[company]["lmodel"], "low", x)
    temp = list(data[0])[0:1]

    obj = {
        "label": [item for item,value in data[0].items()],
        "open" : [value["1. open"] for item,value in data[0].items()],
        "high" : [data[0][key]["2. high"] for key in temp],
        "low"  : [data[0][key]["3. low"] for key in temp],
        "close": [data[0][key]["4. close"] for key in temp],
        "tomorrow": {
            "open": open,
            "high": high,
            "low": low,
            "close": close
        }
    }

    return jsonify(obj)

if __name__ == "__main__":
    app.run()
