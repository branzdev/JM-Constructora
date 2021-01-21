import React from 'react';
//styles
import './rentalServices.scss';
//components
import ServicesPageCard from '../ServicesPageCard/ServicesPageCard';
//images
import roadReclaimer from '../../img/roadReclaimer.png';
import excavator from '../../img/excavator.png';
import motorGrader from '../../img/motorGrader.png';
import mackDump from '../../img/mackDump.png';
import dozer from '../../img/dozer.png';
import backhoe from '../../img/backhoe.png';

export default function RentalServices() {
	return (
		<div className="rentalServices">
			<ServicesPageCard image={roadReclaimer} text="Recuperadora de Caminos" />
			<ServicesPageCard image={excavator} text="Excavadora" />
			<ServicesPageCard image={dozer} text="Tractor Topador" />
			<ServicesPageCard image={motorGrader} text="Motoniveladora" />
			<ServicesPageCard image={mackDump} text="Vagoneta" />
			<ServicesPageCard image={backhoe} text="Retroexcavadora" />
		</div>
	);
}
