import React from 'react';
import axios from 'axios';
import Header from './Header';
import FormGroups from './FormGroups';
// import FetchData from './utils/FetchData';

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
// componentWillMount() {
//   axios({
//     method: 'get',
//     baseURL: '/api/dogs',
//   }).then(response => {
//     this.setState({
//       savedData: response.data
//     })
//   })
// }

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
  //use axios to get JSON data
  axios.get({
    url: 'http://api.petfinder.com/pet.find?key=8348332a8da031d8f93b32dfa995402a&format=json&animal=dog&location='+ formValues.zipcode + '&breed=' + formValues.breed + '&callback?',
    headers: {
      'Content_Type': 'Access-Control-Allow-Headers'
    }
    //.then prepare to render the data
  }).then((response) => {
    console.log(response);

    // const dataToBeRendered = [];
    // const dataArr = data.data.response.docs;
    // dataArr.forEach(breed => {
    // dataToBeRendered.push({
    //   //need to write the render for this somewhere
    //   breedResults: breed
    }).catch((error) => {
      console.log(error);
    })
  };
  //set state and clean out form input state
//   this.setState({
//     breedResults: dataToBeRendered,
//     breed: ' ',
//     zipcode: ' '

//   });
//   });

// }


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
      </div>
    );
  }
}