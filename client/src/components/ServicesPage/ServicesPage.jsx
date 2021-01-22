import React, { useLayoutEffect, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Route, Link, useLocation } from 'react-router-dom';

//styles
import './servicesPage.scss';
//components
import Form from '../Form/Form';
import RentalServices from '../RentalServices/RentalServices';
import ConstructionServices from '../ConstructionServices/ConstructionServices';

export default function ServicesPage() {
	const location = useLocation();
	const rentalSelectorRef = useRef();
	const constructionSelectorRef = useRef();

	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	});

	const handleClasses = (addClass, removeClass) => {
		addClass.classList.add('servicesPage__section-selector-selected');

		removeClass.map((current) => {
			return current.classList.remove(
				'servicesPage__section-selector-selected'
			);
		});
	};

	useEffect(() => {
		const rentalSelector = rentalSelectorRef.current;
		const constructionSelector = constructionSelectorRef.current;
		const currentLocation = location.pathname;

		switch (currentLocation) {
			case '/services/rental':
				handleClasses(rentalSelector, [constructionSelector]);
				break;
			case '/services/construction':
				handleClasses(constructionSelector, [rentalSelector]);
				break;
			default:
				break;
		}
	}, [location]);

	return (
		<div className="servicesPage">
			<div className="servicesPage__top-content-container">
				<div className="header-container servicesPage__header-container">
					<h1 className="header1 header1--dark servicesPage__header1">
						Nuestros
					</h1>
					<h2 className="header2 header2--dark servicesPage__header2">
						Servicios
					</h2>
				</div>

				<div className="servicesPage__section-selector-container">
					<motion.div
						ref={rentalSelectorRef}
						className="servicesPage__section-selector"
						whileTap={{ scaleY: 0.8 }}
					>
						<Link
							className="servicesPage__section-selector-link"
							to="/services/rental"
						>
							Alquiler de Maquinaria
						</Link>
					</motion.div>
					<motion.div
						ref={constructionSelectorRef}
						className="servicesPage__section-selector"
						whileTap={{ scaleY: 0.8 }}
					>
						<Link
							className="servicesPage__section-selector-link"
							to="/services/construction"
						>
							Construcción de Obras Civiles
						</Link>
					</motion.div>
				</div>
			</div>
			<div className="servicesPage__container">
				<Route path="/services/rental">
					<RentalServices />
				</Route>
				<Route path="/services/construction">
					<ConstructionServices />
				</Route>
			</div>
			<div
				id="servicesFormHeader"
				className="header-container servicesPage__header-container"
			>
				<h1 className="header1 header1--dark servicesPage__header1">Cotizar</h1>
				<h2 className="header2 header2--dark servicesPage__header2">
					Servicio
				</h2>
			</div>
			<Form location="services" />
		</div>
	);
}
