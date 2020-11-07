import React from "react";
import Album from "./components/Album";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Album />
        </Route>
        <Route exact path='/:username'>
          <Album />
        </Route>
      </Switch>
    </Router>
  );
}
