import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import { getDogData } from './utils/API';

class DogData extends Component {
	constructor() {
		super()
		this.state = { data: [] };
	}

	getDogData() {
		getDogData.then((data) => {
			this.setState({ data });
		});
	}

	componentDidMount() {
		this.getDogData();
	}

	render() {
		const { data } = this.state;
		return(
			<div>
				<Header />
				<h3 className="text-center">Dog Data</h3>
				<hr />

				{ data.map((data, index) => (
					<div className="col-sm-6" key={index}>
						<div className="panel panel-primary">
							<div className="panel-heading">
								<h3 className="panel-title"><span className="btn">#{ data.id }</span></h3>
							</div>
							<div className="panel-body">
								<p> { data.data } </p>
							</div>
						</div>
					</div>
				))}
			</div>
		);
	}
}

export default DogData;