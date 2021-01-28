import React from 'react';
import { Link } from 'react-router-dom';
//styles
import './imageGallery.scss';
//components
import ImageGalleryImage from '../ImageGalleryImage/ImageGalleryImage';

export default function ImageGallery() {
	return (
		<div id="imageGallerySection" className="image-gallery section">
			<div className="image-gallery__header-container header-container">
				<h1 className="image-gallery__header1 header1 header1--dark">
					Galería de
				</h1>
				<h2 className="image-gallery__header2 header2 header2--dark">
					Imágenes
				</h2>
			</div>

			<div className="image-gallery__container">
				<div className="image-gallery__image-container">
					<Link className="image-gallery__image-link" to="/imageGallery">
						<ImageGalleryImage
							className="image-gallery__image"
							publicId="jmendezconstructorasa/imageGallery14"
							alt="Imágen JMéndez Constructora"
						/>
					</Link>
				</div>
				<div className="image-gallery__image-container">
					<Link className="image-gallery__image-link" to="/imageGallery">
						<ImageGalleryImage
							className="image-gallery__image"
							publicId="jmendezconstructorasa/imageGallery6"
							alt="Imágen JMéndez Constructora"
						/>
					</Link>
				</div>

				<div className="image-gallery__image-container">
					<Link className="image-gallery__image-link" to="/imageGallery">
						<ImageGalleryImage
							className="image-gallery__image"
							publicId="jmendezconstructorasa/imageGallery26"
							alt="Imágen JMéndez Constructora"
						/>
					</Link>
				</div>

				<div className="image-gallery__image-container">
					<Link className="image-gallery__image-link" to="/imageGallery">
						<ImageGalleryImage
							className="image-gallery__image"
							publicId="jmendezconstructorasa/imageGallery24"
							alt="Imágen JMéndez Constructora"
						/>
					</Link>
				</div>

				<div className="image-gallery__image-container">
					<Link className="image-gallery__image-link" to="/imageGallery">
						<ImageGalleryImage
							className="image-gallery__image"
							publicId="jmendezconstructorasa/imageGallery27"
							alt="Imágen JMéndez Constructora"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
}
