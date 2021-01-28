import React from 'react';
import { motion } from 'framer-motion';
import { Image, Placeholder } from 'cloudinary-react';

//styles
import './servicesPageCard.scss';

export default function ServicesPageCard(props) {
	return (
		<motion.a
			whileTap={{ scale: 0.8 }}
			href="#servicesFormHeader"
			className="servicesPageCard"
		>
			<Image
				className="servicesPageCard__image"
				cloudName="bmongemendez"
				publicId={props.publicId}
				responsive
				width="auto"
				crop="scale"
				loading="lazy"
				dpr="auto"
				fetchFormat="auto"
				quality="auto"
				alt={props.alt}
			>
				<Placeholder />
			</Image>
			<div className="servicesPageCard__text-container">
				<span className="servicesPageCard__text">{props.text}</span>
				<span className="servicesPageCard__text-quotation">Cotizar</span>
			</div>
		</motion.a>
	);
}
