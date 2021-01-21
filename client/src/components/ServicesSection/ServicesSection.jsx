import React from 'react';
//components
import ServicesSectionCard from '../ServicesSectionCard/ServicesSectionCard';
//styles
import './servicesSection.scss';
//images
import serviceRent from '../../img/serviceRent.jpg';
import serviceConstruction from '../../img/serviceConstruction.jpg';
export default function Services() {
	return (
		<div id="servicesSection" className="services section">
			<div className="services__header-container header-container">
				<h1 className="services__header1 header1 header1--light">Nuestros</h1>
				<h2 className="services__header2 header2 header2--light">Servicios</h2>
			</div>
			<div className="services__cards-container">
				<ServicesSectionCard
					link="rental"
					image={serviceRent}
					text="Alquiler de equipo"
				/>
				<ServicesSectionCard
					link="construction"
					image={serviceConstruction}
					text="Construcción de Obras Civiles"
				/>
			</div>
		</div>
	);
}
