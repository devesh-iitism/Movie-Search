import React, { Component } from "react";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<SearchForm />
			</div>
		)
	}
}

export default App;
