import React, { useLayoutEffect } from 'react';
//styles
import './imageGalleryPage.scss';
//components
import ImageGalleryImage from '../ImageGalleryImage/ImageGalleryImage';
//images

export default function ImageGalleryPage() {
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	});
	return (
		<div className="imageGalleryPage">
			<div className="imageGalleryPage__top-content-container">
				<div className="header-container imageGalleryPage__header-container">
					<h1 className="header1 header1--dark imageGalleryPage__header1">
						Galería de
					</h1>
					<h2 className="header2 header2--dark imageGalleryPage__header2">
						Imágenes
					</h2>
				</div>
				<div className="imageGalleryPage__section-selector-container">
					<div
						className="imageGalleryPage__section-selector"
						whileTap={{ scaleY: 0.8 }}
					>
						<span
							className="imageGalleryPage__section-selector-link"
							to="/services/rental"
						>
							JMéndez Constructora
						</span>
					</div>
				</div>
			</div>
			<div className="imageGalleryPage__images-container">
				<ImageGalleryImage
					publicId="jmendezconstructorasa/imageGallery1"
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<ImageGalleryImage
					publicId="jmendezconstructorasa/imageGallery2"
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<ImageGalleryImage
					publicId="jmendezconstructorasa/imageGallery3"
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<ImageGalleryImage
					publicId="jmendezconstructorasa/imageGallery4"
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<ImageGalleryImage
					publicId="jmendezconstructorasa/imageGallery5"
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<ImageGalleryImage
					publicId="jmendezconstructorasa/imageGallery6"
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<ImageGalleryImage
					publicId="jmendezconstructorasa/imageGallery7"
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<ImageGalleryImage
					publicId="jmendezconstructorasa/imageGallery8"
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<ImageGalleryImage
					publicId="jmendezconstructorasa/imageGallery9"
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<ImageGalleryImage
					publicId="jmendezconstructorasa/imageGallery10"
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<ImageGalleryImage
					publicId="jmendezconstructorasa/imageGallery11"
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<ImageGalleryImage
					publicId="jmendezconstructorasa/imageGallery12"
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<ImageGalleryImage
					publicId="jmendezconstructorasa/imageGallery13"
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<ImageGalleryImage
					publicId="jmendezconstructorasa/imageGallery14"
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<ImageGalleryImage
					publicId="jmendezconstructorasa/imageGallery15"
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<ImageGalleryImage
					publicId="jmendezconstructorasa/imageGallery16"
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<ImageGalleryImage
					publicId="jmendezconstructorasa/imageGallery17"
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<ImageGalleryImage
					publicId="jmendezconstructorasa/imageGallery18"
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<ImageGalleryImage
					publicId="jmendezconstructorasa/imageGallery19"
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<ImageGalleryImage
					publicId="jmendezconstructorasa/imageGallery20"
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<ImageGalleryImage
					publicId="jmendezconstructorasa/imageGallery21"
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<ImageGalleryImage
					publicId="jmendezconstructorasa/imageGallery22"
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<ImageGalleryImage
					publicId="jmendezconstructorasa/imageGallery23"
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<ImageGalleryImage
					publicId="jmendezconstructorasa/imageGallery24"
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<ImageGalleryImage
					publicId="jmendezconstructorasa/imageGallery25"
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<ImageGalleryImage
					publicId="jmendezconstructorasa/imageGallery26"
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<ImageGalleryImage
					publicId="jmendezconstructorasa/imageGallery27"
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
			</div>
		</div>
	);
}
