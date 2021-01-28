import React from 'react';
import { Image, Placeholder } from 'cloudinary-react';

//styles
import './constructionServices.scss';

export default function ConstructionServices() {
	return (
		<div className="constructionServices section">
			{/* 	<div className="constructionServices__header-container header-container">
				<h1 className="constructionServices__header1 header1 header1--dark">
					Construcción
				</h1>
			</div> */}

			<div className="constructionServices__container">
				<p className="constructionServices__text">
					Contamos con un equipo de profesionales y maquinaria totalmente
					capacitada para llevar acabo cualquier tipo de construcción de obra
					civil. Si desea obtener más información o cotizar su proyecto, llena
					el formulario de cotización y nos pondremos en contacto contigo lo más
					pronto posible para hacer realidad su proyecto.
				</p>
				<Image
					className="constructionServices__image"
					cloudName="bmongemendez"
					publicId="jmendezconstructorasa/logoSVG"
					responsive
					width="300"
					height="260"
					crop="fill"
					loading="lazy"
					dpr="auto"
					fetchFormat="auto"
					quality="auto"
					alt="Logo JMéndez Constructora"
				>
					<Placeholder />
				</Image>
			</div>
		</div>
	);
}
