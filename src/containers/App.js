import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

import Landing from "./Landing/Landing";
import CardGenerator from "./CardGenerator/CardGenerator";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/card-generator" component={CardGenerator} />
      </Switch>
    );
  }
}

export default App;
