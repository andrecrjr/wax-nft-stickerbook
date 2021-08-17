import React from "react";
import Album from "./routes/Album";
import Suggestion from "./routes/Suggestion";
import CardPage from "./routes/CardPage";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Album />
        </Route>
        <Route exact path='/user/:username'>
          <Album />
        </Route>
        <Route exact path='/suggestion'>
          <Suggestion />
        </Route>
      </Switch>
      <Route exact path='/info/:cardId'>
        <CardPage />
      </Route>
    </Router>
  );
}
