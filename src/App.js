import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, Characters, Movies } from "./";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/characters" exact component={() => <Characters />} />
            <Route path="/movies" exact component={() => <Movies />} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
