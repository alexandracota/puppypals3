import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const style = {
	paddingTop: '20px'
}

export default class FormGroups extends Component {
	render() {
		return (
			<Form className="container col-10" onSubmit={this.props.onSearch} style={style}>
      			<p>Search & Rescue your next furry friend!</p>
      	  		<FormGroup>
          			<Label for="zipCode">Zip Code</Label>
          				<Input
            				onChange={this.props.zipCodeChanged}
            				value={this.props.zipcode}
            				type="text" 
            				id="zipcode" 
            				placeholder="94133" />
        		</FormGroup>
        		<FormGroup>
          			<Label for="breed">Search Breed</Label>
          				<Input 
            				onChange={this.props.breedChanged}
            				value={this.props.breed}
            				type="text" 
            				name="search" 
            				id="breed" 
            				placeholder="Dachshund" />
        		</FormGroup>
       		<Button>Submit</Button>
        		<p>Powered by Petfinder.</p>
      		</Form>


			)
	}
}