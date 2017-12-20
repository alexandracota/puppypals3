import React from 'react';
import axios from 'axios';
import Header from './Header';
import FormGroups from './FormGroups';
import FetchData from './utils/FetchData';

export default class Example extends React.Component {

//constructor & super
constructor(props) {
  super(props);
  this.state = {
    breed: ' ',
    zipcode: ' ',
    savedData: [],
  }
  //bind functions
  this.handleBreed = this.handleBreed.bind(this);
  this.handleZipCode = this.handleZipCode.bind(this);
  this.getData = this.getData.bind(this);
  // this.update = this.update.bind(this);
}

//component will mount to get saved dog data
componentWillMount() {
  axios({
    method: 'get',
    baseURL: '/api',
  }).then(response => {
    this.setState({
      savedData: response.data
    })
  })
}

//function to handle change on breed input
handleBreed(e) {
  this.setState({
    breed: e.target.value
  })
}
//function to handle change on zip input
handleZipCode(e) {
  this.setState({
    zipcode: e.target.value
  })
}
//function to get data from the Petfinder API
getData(e) {
  //prevent default
  e.preventDefault();
  //initial form values
  let formValues = {
    breed: this.state.breed,
    zipcode: this.state.zipcode
  }
  //set params
  let params = Object.assign(formValues, {
    'api_key': "8348332a8da031d8f93b32dfa995402a",
    'api_secret': "1f33002ca632d2767fcaf3bd7dd275bb"
  });
  params.breed = `${params.breed}`;
  params.zipcode = `${params.zipcode}`;
  //use axios to get JSON data
  axios({
    method: 'get',
    baseURL: 'http://api.petfinder.com/breed.list?format=json?',
    params: params
    //.then prepare to render the data
  }).then(data => {
    const dataToBeRendered = [];
    const dataArr = data.data.response.docs;
    dataArr.forEach(breed => {
    dataToBeRendered.push({
      //need to write the render for this somewhere
      breedResults: breed
    });
  });
  //set state and clean out form input state
  this.setState({
    breedResults: dataToBeRendered,
    breed: ' ',
    zipcode: ' '

  });
  });

}


  render() {
    return (
      <div>
      <Header />
      <FormGroups
        onSearch={this.getData}
        zipCodeChanged={this.handleZipCode}
        breedChanged={this.handleBreed}
        zipcode={this.state.zipcode}
        breed={this.state.breed}
       />
      <FetchData />
      </div>
    );
  }
}