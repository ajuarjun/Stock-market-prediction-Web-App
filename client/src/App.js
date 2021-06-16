import Navigation from "./components/Navbar/Nav";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home";
import Stocks from "./components/Stocks/Stocks";
import Graph from "./components/Graph/Graph";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div id="home">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/stocks" exact component={Stocks} />
          <Route path="/stocks/:id" exact component={Graph} />
        </Switch>
        <Contact />
      </div>
    </Router>
  );
}

export default App;
