import React, { Component } from "react";
import MovieInfo from "./MovieInfo";
import Navbar from "./Navbar";
import {Route, Switch } from "react-router-dom";
import SearchForm from "./SearchForm";

class App extends Component {
	render() {
		return (
			<Switch>
				<Route
					exact path="/" 
					render={(routeProps) => (
						<div>
							<Navbar />
							<SearchForm {...routeProps} />
						</div>
					)} 
				/>
				
				<Route 
					exact path="/:id"
					render={routeProps => <MovieInfo {...routeProps} />}
				/>
			</Switch>
		)
	}
}

export default App;
