import React from "react";
import Album from "./routes/Album";
import CardPage from "./routes/CardPage";
import "./styles.css";
import "./output.css";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
	if (!window.location.origin.includes("localhost")) {
		ReactGA.initialize("UA-206534709-1");
	}
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Album />
				</Route>
				<Route exact path='/user/:username'>
					<Album />
				</Route>
			</Switch>
			<Route exact path='/card/:cardId'>
				<CardPage />
			</Route>
		</Router>
	);
}
