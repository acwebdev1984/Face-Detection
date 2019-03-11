import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js'
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js'
import Logo from './components/Logo/logo.js'
import  ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js'
import  Rank from './components/Rank/Rank.js';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


const app = new Clarifai.App({
 apiKey: 'dde753addb764a059ff1aca5655cb765'
});


// particles is just the interactive background
const particleOptions = {
      "particles": {
          "number": {
              "value": 50
          },
          "size": {
              "value": 3
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "repulse"
              }
          }
      }
  }

class App extends Component {
  constructor(){
    super();
    this.state = {

      input: '',
      imageUrl: '',

    }
  }




// below function for when the input is changed 
// In this case, we set the state of the input field, to its current value (what is entered)
onInputChange = (event) => {
  this.setState({input: event.target.value})

}
// below function for when the button is clicked/submitted.
// in the case we set the state of imgUrl to the value of input.
onSubmit = () => {
 this.setState({imageUrl:this.state.input});
  
// code taken from the Clarifai API pages:
  app.models.predict(
    Clarifai.FACE_DETECT_MODEL,
    this.state.input)
  .then(
    function(response) {
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    },
    function(err) {
      console.log("error");
    }
  );
}

  render() {
    return (
      <div className="App">
      <Particles className = 'Particles'
         params={particleOptions}
       />
        
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm
         onSubmit ={this.onSubmit} 
         onInputChange = {this.onInputChange}
         />
        <FaceRecognition imageUrl = {this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
