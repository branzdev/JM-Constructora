import React, { useRef, useState, useEffect } from 'react';
import { Image, Placeholder } from 'cloudinary-react';

//styles
import './imageGalleryImage.scss';

export default function ImageGalleryImage(props) {
	const imageContainerRef = useRef();

	const [height, setHeight] = useState();

	useEffect(() => {
		const image = imageContainerRef.current;
		setHeight(Math.round(image.getBoundingClientRect().height));

		function resized() {
			// Haven't resized in 100ms
			console.log('resized');
			setHeight(Math.round(image.getBoundingClientRect().height));
		}

		let doSomethingAfterResize;
		window.onresize = function () {
			clearTimeout(doSomethingAfterResize);
			doSomethingAfterResize = setTimeout(resized, 100);
		};
	}, []);

	return (
		<div
			ref={imageContainerRef}
			className={`image-container ${props.className}`}
		>
			<Image
				cloudName="bmongemendez"
				publicId={props.publicId}
				className={`image ${props.className}`}
				loading="lazy"
				fetchFormat="auto"
				dpr="auto"
				responsive
				width="auto"
				quality="auto"
				height={height}
				// width={width} //it's not good because it is going to create a lot of different crops from deifferent widths
				// flags="ignore_aspect_ratio"
				crop="fill"
			>
				<Placeholder />
			</Image>
		</div>
	);
}
