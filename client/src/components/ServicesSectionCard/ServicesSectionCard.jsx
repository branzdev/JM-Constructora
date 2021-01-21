import React from 'react';
import { Link } from 'react-router-dom';

//styles
import './servicesSectionCard.scss';

export default function ServicesCard(props) {
	return (
		<div className="servicesCard">
			<p className="servicesCard__hoverText">{props.text}</p>
			<img
				className="servicesCard__image"
				src={props.image}
				alt="Servicios de empresa constructora JMéndez"
			/>
			<Link to={`/services/${props.link}`}>
				<div className="servicesCard__text-container disable-select">
					<span className="servicesCard__text">{props.text}</span>
				</div>
			</Link>
		</div>
	);
}
