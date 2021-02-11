import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-light bg-light">
					<div className="container-fluid">
					  <span className="navbar-brand mb-0 h1">Movies List</span>
					</div>
				</nav>
			</div>
		)
	}
}

export default Navbar;
