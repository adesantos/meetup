import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./views/home";
import { SingleEvent } from "./views/single-event";
import { InfoEvent } from "./views/info-event";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="">
			<BrowserRouter basename={basename}>
				<Navbar />
				<div className="container-fluid">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/single-event:id/:group">
							<SingleEvent />
						</Route>
						<Route exact path="/info-event:id/:group">
							<InfoEvent />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</div>

				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
