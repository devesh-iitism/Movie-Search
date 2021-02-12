import React, { Component } from "react";

class MovieInfo extends Component {
	render() {
		console.log(this.props.location.state);
		const { movieName, poster } = this.props.location.state;
		return (
			<div>
				<div className="container">
					<img src={`${poster}`} />
					<h1>{`${movieName}`}</h1>
				</div>
			</div>
		)
	}
}

export default MovieInfo;
