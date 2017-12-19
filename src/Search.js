import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Header from './Header';

const style = {
	paddingTop: '20px'
}

export default class Example extends React.Component {

	//set state

  render() {
    return (
      <div>
      <Header />
      <Form className="container col-10" style={style}>
      	<p>Search & Rescue your next furry friend!</p>
      	  <FormGroup>
          <Label for="exampleSearch">Zip Code</Label>
          <Input type="search" name="search" id="zipCode" placeholder="94133" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSearch">Search Breed</Label>
          <Input type="search" name="search" id="breed" placeholder="Dachshund" />
        </FormGroup>
        <Button>Submit</Button>
        <p>Powered by Petfinder.</p>
      </Form>
      </div>
    );
  }
}