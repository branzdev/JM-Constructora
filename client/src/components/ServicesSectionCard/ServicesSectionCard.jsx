import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Image, Placeholder } from 'cloudinary-react';
//styles
import './servicesSectionCard.scss';

export default function ServicesCard(props) {
	const imageContainerRef = useRef();
	const [imageContainerHeight, setImageContainerHeight] = useState(365);

	useEffect(() => {
		const imageContainer = imageContainerRef.current;
		setImageContainerHeight(imageContainer.getBoundingClientRect().height);
	}, []);
	return (
		<div className="servicesCard">
			<p className="servicesCard__hoverText">{props.text}</p>
			<div ref={imageContainerRef} className="servicesCard__image-container">
				<Image
					className="servicesCard__image"
					cloudName="bmongemendez"
					publicId={props.publicId}
					height={imageContainerHeight}
					responsive
					width="auto"
					crop="fill"
					loading="lazy"
					dpr="auto"
					fetchFormat="auto"
					quality="auto"
					alt="Servicios de empresa JMéndez Constructora"
				>
					<Placeholder />
				</Image>
			</div>

			<Link to={`/services/${props.link}`}>
				<div className="servicesCard__text-container disable-select">
					<span className="servicesCard__text">{props.text}</span>
				</div>
			</Link>
		</div>
	);
}
