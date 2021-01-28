import React, { useEffect, useState, useRef } from 'react';
import { Image, Placeholder } from 'cloudinary-react';
//styles
import './proyectsCard.scss';

export default function ProyectsCard(props) {
	const proyectsCardRef = useRef();
	const [imageContainerHeight, setImageContainerHeight] = useState(576);

	useEffect(() => {
		const proyectsCard = proyectsCardRef.current;
		setImageContainerHeight(proyectsCard.getBoundingClientRect().height);
	}, []);
	return (
		<div className="proyectsCard  disable-select">
			<div ref={proyectsCardRef} className="proyectsCard__image-container">
				<Image
					className="proyectsCard__image "
					cloudName="bmongemendez"
					responsive
					publicId={props.publicId}
					height={imageContainerHeight}
					width="auto"
					crop="fill"
					loading="lazy"
					dpr="auto"
					fetchFormat="auto"
					quality="auto"
					alt="Proyecto JMéndez Constructora"
				>
					<Placeholder />
				</Image>
			</div>
			<div className="proyectsCard__text-container">
				<p className="proyectsCard__tex">{props.text}</p>
			</div>
		</div>
	);
}
