import React from 'react';


const FaceRecognition = ({imageUrl}) => {
	//
	return(
		
		<div>
			<div className = 'absolute, mt2'>
				<img className = 'center, ma2' src = {imageUrl} width = '500px' height ='auto' alt = 'face?'/>
			</div>
		</div>
			);
}
// 
export default FaceRecognition;