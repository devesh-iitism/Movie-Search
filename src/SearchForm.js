import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import "./SearchForm.css";

class SearchForm extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			Title: "",
		  	Poster: "",
			Rated: "",
			Runtime: "",
			Genre: "",
			Plot: "",
			Actors: ""
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleSubmit(event) {
		event.preventDefault();
		// console.log(this.state.movieName)
		const url = `https://www.omdbapi.com/?apikey=thewdb&t=${this.state.Title}&y=&plot=short&r=json`;
		axios.get(url)
		  .then((response) => {
			console.log(response.data);
			this.props.history.push({
			  pathname: `/${response.data.Title}`,
			  state: {
				  Title: response.data.Title,
				  Poster: response.data.Poster,
				  Rated: response.data.Rated,
				  Runtime: response.data.Runtime,
				  Genre: response.data.Genre,
				  Plot: response.data.Plot,
				  Actors: response.data.Actors
			  }
			})
		  });
	}
	
	handleChange(e) {
		this.setState({Title: e.target.value})
	}
	
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
			  <div className="mb-3 searchBar">
				<input
					onChange={this.handleChange}
					type="text" className="form-control"
					id="movieName" 
					aria-describedby="movieName" 
					placeholder="Search Movie Name..."
				/>
			  </div>
			  <button type="submit" className="btn btn-primary">Search</button>
			</form>
		)
	}
}

export default SearchForm;
