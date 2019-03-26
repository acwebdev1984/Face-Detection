import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js'
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js'
import Logo from './components/Logo/logo.js'
import  ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js'
import  Rank from './components/Rank/Rank.js';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import signIn from './components/SignIn/SignIn.js';


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
      box: {},

    }
  }

calculateFaceLocation = (data)=> {
const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
// the above takes the response from the API and drills down to the data we want (bounding box)
const image = document.getElementById('inputImage');
// we grab the image (ID on face recog component)
const width = Number(image.width);
const height = Number(image.height);
// we set width and height here, so that if a designer changes on the image in px, this function is calculating based on any width height
return{

// Some complex math below that determins how to position the box around the face
  leftCol: clarifaiFace.left_col * width,
  topRow: clarifaiFace.top_row * height,
  rightCol: width - (clarifaiFace.right_col * width),
  bottomRow: height - (clarifaiFace.bottom_row * height),

  }

}

 displayFaceBox = (box) => {
 console.log(box);
  this.setState({box:box});
  
}

// below function for when the input is changed 
// In this case, we set the state of the input field, to its current value (what is entered)
onInputChange = (event) => {
  this.setState({input: event.target.value});

}
// below function for when the button is clicked/submitted.
// in this case we set the state of imgUrl to the value of input.
onSubmit = () => {
 this.setState({imageUrl:this.state.input});
  
// code taken from the Clarifai API pages:
// its takes the state of the input and then runs the calculateFaceLocation function with the reposne.
  app.models.predict(
    Clarifai.FACE_DETECT_MODEL,
    this.state.input)
  .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
  .catch(err => console.log(err));  

}

  render() {
    return (
      <div className="App">
      <Particles className = 'Particles'
         params={particleOptions}
       />
        
        <Navigation/>
        <signIn/>
        <Logo/>
        <Rank/>
        <ImageLinkForm
         onSubmit = {this.onSubmit} 
         onInputChange = {this.onInputChange}
         />
        <FaceRecognition box = {this.state.box} imageUrl = {this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;