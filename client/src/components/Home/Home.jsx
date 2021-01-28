import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Image, Placeholder } from 'cloudinary-react';
//styles
import './home.scss';
//components
import Button from '../Button/Button';

export default function Home(props) {
	const homeRef = useRef();

	const [homeImageHeihgt, setHomeImageHeihgt] = useState(691);

	useEffect(() => {
		const homeElement = homeRef.current;

		setHomeImageHeihgt(
			homeElement
				.querySelector('.home__image-container')
				.getBoundingClientRect().height
		);

		console.log(homeImageHeihgt);

		//GSAP ANIMATION
		const tl = gsap.timeline({
			defaults: {
				ease: 'power1.out',
			},
		});

		const homeIntroContainer = homeElement.querySelector(
			'.home__intro-container'
		);

		let hasPlayed = window.sessionStorage.getItem('hasAnimationPlayed');

		if (!hasPlayed) {
			window.sessionStorage.setItem('hasAnimationPlayed', true);

			tl.fromTo(
				homeIntroContainer,
				{
					display: 'none',
				},
				{ display: 'flex', duration: 0 }
			);

			tl.to(homeIntroContainer.querySelectorAll('.home__intro-text'), {
				y: '0',
				duration: 1,
				stagger: 0.5,
			});

			tl.to(
				homeIntroContainer.querySelector('.home__intro-text-container'),
				{
					y: '50%',
					duration: 0.8,
				},
				'-=0.3'
			);

			tl.to(
				homeIntroContainer.querySelector('.home__intro-image-container'),
				{
					opacity: '1',
					y: '-50%',
					duration: 0.8,
				},
				'-=0.8'
			);

			tl.to(homeIntroContainer, {
				opacity: '0',
				duration: 0.5,
				delay: 0.4,
			});

			tl.to(homeIntroContainer, {
				display: 'none',
				duration: 0,
			});
		}
	}, []);

	/* 	const getHeight = (containerElement) => {
		const container = homeElement.querySelector(`.${containerElement}`);
		const containerHeight = container.getBoundingClientRect().height;
		console.log(containerHeight);
		return containerHeight;
	};

	getHeight('home__image-container'); */

	const handleOnClick = () => {
		window.location.href = '/#servicesSection';
	};

	return (
		<div ref={homeRef} id="homeSection" className="home section">
			<div className="home__image-container">
				<Image
					fetchFormat="auto"
					className="home__image"
					cloudName="bmongemendez"
					publicId="jmendezconstructorasa/homeImage"
					responsive
					loading="lazy"
					alt="Excavadora"
					width="auto"
					height={homeImageHeihgt}
					crop="fill"
					dpr="auto"
					quality="auto"
					// flags="ignore_aspect_ratio"
				>
					<Placeholder />
				</Image>
			</div>
			<div className="home__items">
				<div className="home__items-slogan">
					<div className="home__items-slogan-background"></div>
					<div className="home__items-slogan-text">"Imagina, Crea, Innova"</div>
				</div>
				<Button
					onClick={handleOnClick}
					className="home__items-button button--primary"
					text="Nuestros Servicios"
				/>
			</div>
			<div className="home__intro-container">
				<div className="home__intro-image-container">
					<Image
						cloudName="bmongemendez"
						publicId="jmendezconstructorasa/logoMinimal"
						responsive
						// loading="lazy"
						className="home__intro-image"
						alt="Logo JMéndez Constructora"
						width="auto"
						crop="fill"
						dpr="auto"
						fetchFormat="auto"
						quality="auto"
						// flags="ignore_aspect_ratio"
					>
						<Placeholder />
					</Image>
				</div>

				<div className="home__intro-text-container">
					<h1 className="hide">
						<span className="home__intro-text">Imagina,</span>
					</h1>
					<h1 className="hide">
						<span className="home__intro-text">Crea,</span>
					</h1>
					<h1 className=" hide">
						<span className="home__intro-text">Innova</span>
					</h1>
				</div>
			</div>
			{/* eslint-disable-next-line */}
			<a href="#proyectsSection" className="home__arrow"></a>
		</div>
	);
}
