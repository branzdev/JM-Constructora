import React, { useLayoutEffect } from 'react';
//styles
import './imageGalleryPage.scss';
//components
import Image from '../Image/Image';
//images
import img1 from '../../img/imageGallery1.jpg';
import img2 from '../../img/imageGallery2.jpg';
import img3 from '../../img/imageGallery3.jpg';
import img4 from '../../img/imageGallery4.jpg';
import img5 from '../../img/imageGallery5.jpg';
import img6 from '../../img/imageGallery6.jpg';
import img7 from '../../img/imageGallery7.jpg';
import img8 from '../../img/imageGallery8.jpg';
import img9 from '../../img/imageGallery9.jpg';
import img10 from '../../img/imageGallery10.jpg';
import img11 from '../../img/imageGallery11.jpg';
import img12 from '../../img/imageGallery12.jpg';
import img13 from '../../img/imageGallery13.jpg';
import img14 from '../../img/imageGallery14.jpg';
import img15 from '../../img/imageGallery15.jpg';
import img16 from '../../img/imageGallery16.jpg';
import img17 from '../../img/imageGallery17.jpg';
import img18 from '../../img/imageGallery18.jpg';
import img19 from '../../img/imageGallery19.jpg';
import img20 from '../../img/imageGallery20.jpg';
import img21 from '../../img/imageGallery21.jpg';
import img22 from '../../img/imageGallery22.jpg';
import img23 from '../../img/imageGallery23.jpg';
import img24 from '../../img/imageGallery24.jpg';
import img25 from '../../img/imageGallery25.jpg';
import img26 from '../../img/imageGallery26.JPG';
import img27 from '../../img/imageGallery27.JPG';

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
				<Image
					image={img1}
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<Image
					image={img2}
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<Image
					image={img3}
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<Image
					image={img4}
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<Image
					image={img5}
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<Image
					image={img6}
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<Image
					image={img7}
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<Image
					image={img8}
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<Image
					image={img9}
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<Image
					image={img10}
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<Image
					image={img11}
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<Image
					image={img12}
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<Image
					image={img13}
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<Image
					image={img14}
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<Image
					image={img15}
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<Image
					image={img16}
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<Image
					image={img17}
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<Image
					image={img18}
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<Image
					image={img19}
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<Image
					image={img20}
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<Image
					image={img21}
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<Image
					image={img22}
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<Image
					image={img23}
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<Image
					image={img24}
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<Image
					image={img25}
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<Image
					image={img26}
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
				<Image
					image={img27}
					alt="JMéndez Constructora Imágenes"
					className="imageGalleryPage__images-img"
				/>
			</div>
		</div>
	);
}
