import React, { Component } from "react";
import { Switch, HashRouter, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/dashboard";
import Register from "./components/Register/Register";

class App extends Component {
  render() {
    return (
      <Switch>
        <HashRouter>
          <div>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/register" component={Register} />
          </div>
        </HashRouter>
      </Switch>
    );
  }
}

export default App;
