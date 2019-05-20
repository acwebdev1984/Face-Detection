import React from 'react';
import Tilt from 'react-tilt'
import avatar from './myAvatar.png'

const Logo = () => {
	return(




		<div className = 'ma4, pa3 '>
			<Tilt className="T centre ilt br2 shadow-2" options={{ max : 50 }} style={{ height: 200, width: 200 }} >
 				<div className="Tilt-inner">
 				<img alt='logo' src={avatar}/>  </div>
			</Tilt>
		</div>

			);
}

export default Logo;