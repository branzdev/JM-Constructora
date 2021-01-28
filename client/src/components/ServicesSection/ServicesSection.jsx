import React from 'react';
//components
import ServicesSectionCard from '../ServicesSectionCard/ServicesSectionCard';
//styles
import './servicesSection.scss';

export default function Services() {
	return (
		<div id="servicesSection" className="services section">
			<div className="servicesSection__cotainer">
				<div className="services__header-container header-container">
					<h1 className="services__header1 header1 header1--light">Nuestros</h1>
					<h2 className="services__header2 header2 header2--light">
						Servicios
					</h2>
				</div>
				<div className="services__cards-container">
					<ServicesSectionCard
						link="rental"
						publicId="jmendezconstructorasa/serviceRent"
						text="Alquiler de equipo"
					/>
					<ServicesSectionCard
						link="construction"
						publicId="jmendezconstructorasa/serviceConstruction"
						text="Construcción de Obras Civiles"
					/>
				</div>
			</div>
		</div>
	);
}
