import React from 'react';
import { Link } from 'react-router-dom';
//styles
import './imageGallery.scss';
//images
import img6 from '../../img/imageGallery6.jpg';
import img14 from '../../img/imageGallery14.jpg';
import img24 from '../../img/imageGallery24.jpg';
import img26 from '../../img/imageGallery26.JPG';
import img27 from '../../img/imageGallery27.JPG';

export default function ImageGallery() {
	return (
		<div id="imageGallerySection" className="imageGallery section">
			<div className="imageGallery__header-container header-container">
				<h1 className="imageGallery__header1 header1 header1--dark">
					Galería de
				</h1>
				<h2 className="imageGallery__header2 header2 header2--dark">
					Imágenes
				</h2>
			</div>

			<div className="imageGallery__container">
				<div className="imageGallery__image-container">
					<Link className="imageGallery__image-link" to="/imageGallery">
						<img
							src={img14}
							alt="JMéndez Constructora Imágenes"
							className="imageGallery__image"
						/>
					</Link>
				</div>
				<div className="imageGallery__image-container">
					<Link className="imageGallery__image-link" to="/imageGallery">
						<img
							src={img6}
							alt="JMéndez Constructora Imágenes"
							className="imageGallery__image"
						/>
					</Link>
				</div>

				<div className="imageGallery__image-container">
					<Link className="imageGallery__image-link" to="/imageGallery">
						<img
							src={img26}
							alt="JMéndez Constructora Imágenes"
							className="imageGallery__image"
						/>
					</Link>
				</div>

				<div className="imageGallery__image-container">
					<Link className="imageGallery__image-link" to="/imageGallery">
						<img
							src={img24}
							alt="JMéndez Constructora Imágenes"
							className="imageGallery__image"
						/>
					</Link>
				</div>

				<div className="imageGallery__image-container">
					<Link className="imageGallery__image-link" to="/imageGallery">
						<img
							src={img27}
							alt="JMéndez Constructora Imágenes"
							className="imageGallery__image"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
}
