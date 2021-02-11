import React, { Component } from "react";
import axios from 'axios';
import "./SearchForm.css";

class SearchForm extends Component {
	constructor(props) {
		super(props);
		
		this.state = {movieName: ""}
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick() {
		console.log(this.state.movieName)
		const url = `https://www.omdbapi.com/?apikey=thewdb&t=${this.state.movieName}&y=&plot=short&r=json`;
		
		axios.get(url)
		  .then((response) => {
			console.log(response.data);
			console.log(response.status);
		  });
	}
	
	handleChange(e) {
		this.setState({movieName: e.target.value})
	}
	
	render() {
		return (
			<form>
			  <div className="mb-3 searchBar">
				<input onChange={this.handleChange} type="text" className="form-control" id="movieName" aria-describedby="movieName" />
			  </div>
			  <button type="button" onClick={this.handleClick} className="btn btn-primary">Search</button>
			</form>
		)
	}
}

export default SearchForm;
