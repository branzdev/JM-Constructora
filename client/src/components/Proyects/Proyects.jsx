import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
//styles
import './proyects.scss';
//components
import ProyectsCard from '../ProyectsCard/ProyectsCard';
//images
import proyect1__image from '../../img/proyect1.jpg';

export default function Proyects() {
	const ref = useRef(null);
	const [startX, setStartX] = useState(0);
	const [isDown, setIsDown] = useState(false);
	const [scrollLeft, setScrollLeft] = useState(0);
	const [scrollLeftValue, setScrollLeftValue] = useState(0);
	const [
		proyectsCardsContainerMaxScroll,
		setProyectsCardsContainerMaxScroll,
	] = useState(0);

	useEffect(() => {
		setProyectsCardsContainerMaxScroll(
			ref.current.scrollWidth - ref.current.clientWidth
		);
	}, []);

	const handleOnMouseDown = (e) => {
		if (ref.current.classList.contains('proyects__cards-container')) {
			setIsDown(true);
			ref.current.classList.add('active');
			setStartX(e.pageX - ref.current.offsetLeft);
			setScrollLeft(ref.current.scrollLeft);
		}
	};

	const handleOnMouseUp = () => {
		setIsDown(false);
		ref.current.classList.remove('active');
	};

	const handleOnMouseMove = (e) => {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - ref.current.offsetLeft;
		const walk = (x - startX) * 1; //scroll-fast
		ref.current.scrollLeft = scrollLeft - walk;
	};

	const handleOnChange = (e) => {
		ref.current.scrollLeft = e.target.value;
	};

	const handleOnScroll = (e) => {
		setScrollLeftValue(ref.current.scrollLeft);
	};

	return (
		<motion.div id="proyectsSection" className="proyects section">
			<div className="header-container">
				<h1 className="proyects__header1 header1 header1--dark">Proyectos</h1>
				<h2 className="proyects__header2 header2 header2--dark">Recientes</h2>
			</div>
			<div
				onMouseDown={handleOnMouseDown}
				onMouseUp={handleOnMouseUp}
				onMouseMove={handleOnMouseMove}
				onScroll={handleOnScroll}
				ref={ref}
				className="proyects__cards-container"
			>
				<ProyectsCard
					image={proyect1__image}
					text="Suministro, Acarreo y Colocación de Base"
				/>
				<ProyectsCard
					image={proyect1__image}
					text="Suministro, Acarreo y Colocación de Carpeta Asfáltica"
				/>
				<ProyectsCard
					image={proyect1__image}
					text="Suministro, Acarreo y Colocación de Base"
				/>
				<ProyectsCard
					image={proyect1__image}
					text="Suministro, Acarreo y Colocación de Base"
				/>
				<ProyectsCard
					image={proyect1__image}
					text="Suministro, Acarreo y Colocación de Base"
				/>
			</div>
			<div className="proyects__slider">
				<input
					onChange={handleOnChange}
					type="range"
					min="0"
					max={proyectsCardsContainerMaxScroll}
					value={scrollLeftValue}
					className="proyects__slider-bar-control"
				></input>
				{/* <div className="proyects__slider-bar-control">
					<div className="proyects__slider-bar-control-lines-container">
						<div className="proyects__slider-bar-control-line"></div>
						<div className="proyects__slider-bar-control-line"></div>
						<div className="proyects__slider-bar-control-line"></div>
					</div>
				</div> */}
			</div>
		</motion.div>
	);
}
