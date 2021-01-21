import React from 'react';
//styles
import './image.scss';

export default function Image(props) {
	return (
		<div className={`image-container ${props.className}`}>
			<img src={props.image} alt={props.alt} className="image"></img>
		</div>
	);
}
