import React from 'react';
//styles
import './rentalServices.scss';
//components
import ServicesPageCard from '../ServicesPageCard/ServicesPageCard';

export default function RentalServices() {
	return (
		<div className="rentalServices">
			<ServicesPageCard
				publicId="jmendezconstructorasa/roadReclaimer.png"
				text="Recuperadora de Caminos"
				alt="Recuperadora de Caminos JMéndez Constructora"
			/>
			<ServicesPageCard
				publicId="jmendezconstructorasa/excavator.png"
				text="Excavadora"
				alt="Excavadora JMéndez Constructora"
			/>
			<ServicesPageCard
				publicId="jmendezconstructorasa/dozer.png"
				text="Tractor Topador"
				alt="Tractor Topador JMéndez Constructora"
			/>
			<ServicesPageCard
				publicId="jmendezconstructorasa/motorGrader.png"
				text="Motoniveladora"
				alt="Motoniveladora JMéndez Constructora"
			/>
			<ServicesPageCard
				publicId="jmendezconstructorasa/mackDump.png"
				text="Vagoneta"
				alt="Vagoneta JMéndez Constructora"
			/>
			<ServicesPageCard
				publicId="jmendezconstructorasa/backhoe.png"
				text="Retroexcavadora"
				alt="Retroexcavadora JMéndez Constructora"
			/>
		</div>
	);
}
