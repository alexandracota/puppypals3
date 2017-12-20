// import React, { Component } from 'react';
// import axios from 'axios';

// class FetchData extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			breed: []
// 		};
// 	}

// 	componentDidMount() {
// 		axios.get('http://localhost:3001/api/dogs')
// 		.then(results => {
// 			// return results.json();
// 			return results;
// 		}).then(data => {
// 			let breed = data.results.map((breed) => {
// 				return(
// 					<div key={breed.results} />
// 					)
// 			})
// 			this.setState({breed: breed});
// 			console.log("state", this.state.breed);
// 		})
// 	}


// 	render() {
// 		return(
// 			<div className="container2">
// 				<div className="container1">
// 					{this.state.breed}
// 				</div>
// 			</div>

// 			)
// 	}
// }

// export default FetchData;