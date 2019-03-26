import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
	//
	return(
		
		<div className = 'center ma2'>
			<div className = 'absolute mt2'>
				<img id = 'inputImage'  src = {imageUrl} width = '500px' height ='auto' alt = 'face?'/>
				<div className = 'bounding-box' style ={{top:box.topRow, right:box.rightCol, bottom:box.bottomRow, left:box.leftCol}}></div>

			</div>
		</div>
			);
}
// The bounding-box div is accepting Styles from the app.js complex math( as per the Clarifai API website demo) 
export default FaceRecognition;