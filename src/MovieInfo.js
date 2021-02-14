import React, { Component } from "react";
import "./MovieInfo.css";

class MovieInfo extends Component {
	render() {
		console.log(this.props.location.state);
		const { Title, Poster, Rated, Runtime, Genre, Plot, Actors } = this.props.location.state;
		return (
			<div className="container">
			  <div className="cellphone-container">    
				  <div className="movie">       
					<div className="menu"><i className="material-icons"></i></div>
					<div className="movie-img" style={{backgroundImage: `url(${Poster})`}}></div>
					<div className="text-movie-cont">
					  <div className="mr-grid">
						<div className="col1">
						  <h1>{Title}</h1>
						  <ul className="movie-gen">
							<li>{Rated}  /</li>
							<li>{Runtime}  /</li>
							<li>{Genre}</li>
						  </ul>
						</div>
					  </div>
					  <div className="mr-grid summary-row">
						<div className="col2">
						  <h5>SUMMARY</h5>
						</div>
						<div className="col2">
						   <ul className="movie-likes">
							<li><i className="material-icons">&#xE813;</i>124</li>
							<li><i className="material-icons">&#xE813;</i>3</li>
						  </ul>
						</div>
					  </div>
					  <div className="mr-grid">
						<div className="col1">
						  <p className="movie-description">{Plot}</p>
						</div>
					  </div>
					  <div className="mr-grid actors-row">
						<div className="col1">
						  <p className="movie-actors">{Actors}</p>
						</div>
					  </div>
					  <div className="mr-grid action-row">
						<div className="col2"><div className="watch-btn"><h3><i className="material-icons">&#xE037;</i>WATCH TRAILER</h3></div>
						</div>
						<div className="col6 action-btn"><i className="material-icons">&#xE161;</i>
						</div>
						<div className="col6 action-btn"><i className="material-icons">&#xE866;</i>
						</div>
						<div className="col6 action-btn"><i className="material-icons">&#xE80D;</i>
						</div>
					  </div>
					</div>
				  </div>
			  </div>
			</div>
			
			// <div>
			// 	<div className="container">
			// 		<img src={`${poster}`} />
			// 		<h1>{`${movieName}`}</h1>
			// 	</div>
			// </div>
		)
	}
}

export default MovieInfo;
