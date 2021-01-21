import React from 'react';
import { motion } from 'framer-motion';
//styles
import './servicesPageCard.scss';

export default function ServicesPageCard(props) {
	return (
		<motion.a
			whileTap={{ scale: 0.8 }}
			href="#servicesFormHeader"
			className="servicesPageCard"
		>
			<img
				src={props.image}
				alt="Recuperadora De Caminos"
				className="servicesPageCard__image"
			/>
			<div className="servicesPageCard__text-container">
				<span className="servicesPageCard__text">{props.text}</span>
				<span className="servicesPageCard__text-quotation">Cotizar</span>
			</div>
		</motion.a>
	);
}
