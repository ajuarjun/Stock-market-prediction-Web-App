import React, {useState, useEffect} from "react";
import Chart from "react-google-charts";
import "./styles.css";

function Line(data){
  const [slide, setSlide] = useState(50);
  const hasWindow = typeof window !== 'undefined';

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    return {
      width,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);

  function plotData(data){
    const obj ={}
    for(const i of Array(100).keys()){
      obj[data["data"]["label"][i]]=parseFloat(data["data"]["open"][i]);
    }
    const arr = Object.entries(obj);
    return arr;
  }

  function handleChange(event){
    setSlide(event.target.value);
  }

  const pts = plotData(data).slice(0,slide).reverse();

 // console.log(data["data"]["label"]);
  return(
    <div>
    <div className="slidecontainer">
      <input type="range" onInput={handleChange} min="10" max="100" value={slide} className="slider" id="myRange"/>
    </div>
    <Chart className="fill"
      chartType="Line"
      width={'100%'}
      height={'500'}
      loader={<div className="loader"></div>}
      data={[
        [
          { type: 'string', label: 'Date' },
          'Open',
        ],
        ...pts,
        ["Tomorrow", data["data"]["tomorrow"]["open"]]
      ]}
      options={{
        chart: {
          title:
          'Stock Values',
        },
        width: windowDimensions["width"]-40,
        height: 400,
    series: {
    // Gives each series an axis name that matches the Y-axis below.
      0: { axis: 'Price' },
      1: { axis: 'Date' },
    },
    axes: {
    // Adds labels to each axis; they don't have to match the axis names.
      y: {
        Temps: { label: 'Price' },
        Daylight: { label: 'Date' },
      },
    },
    }}
    rootProps={{ 'data-testid': '4' }}
    />

    </div>
  )
}

export default Line;
