import React from 'react';
//styles
import './proyectsCard.scss';

export default function ProyectsCard(props) {
	return (
		<div className="proyectsCard  disable-select">
			<img
				className="proyectsCard__image disable-select"
				src={props.image}
				alt="Proyecto de Construcción"
			/>
			<div className="proyectsCard__text-container">
				<p className="proyectsCard__tex">{props.text}</p>
			</div>
		</div>
	);
}
