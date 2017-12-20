import React, { Component } from 'react';

class FetchData extends Component {
	constructor() {
		super();
		this.state = {
			breed: []
		};
	}

	componentDidMount() {
		fetch('http://localhost:3001/api/dogs')
		.then(results => {
			return results.json();
		}).then(data => {
			let breed = data.results.map((breed) => {
				return(
					<div key={breed.results} />
					)
			})
			this.setState({breed: breed});
			console.log("state", this.state.breed);
		})
	}


	render() {
		return(
			<div className="container2">
				<div className="container1">
					{this.state.breed}
				</div>
			</div>

			)
	}
}

export default FetchData;