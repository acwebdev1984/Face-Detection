import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
	// passing function as props, using destructuring
	return(
		
		<div>
			<p className = 'f3 white'>
				{'This App, will detect faces within your images, try it out!'}
			</p>
			<div className = 'form'>

			<div>
				<input className = 'f4 pa2 w-60 center' type='tex' onChange={onInputChange}/>
				<button 
				className = 'w-20 grow f4 link pv2 dib bg-yellow'
				onClick = {onSubmit}
				> Find Face
				 </button>
			</div>
			</div>
		</div>
			);
}
// above, we have activated functions onInput change & onSubmit, when either there is a change to the input or the button is pressed.
export default ImageLinkForm;