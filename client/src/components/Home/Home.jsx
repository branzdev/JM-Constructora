import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
//styles
import './home.scss';
//components
import Button from '../Button/Button';
//images
import logoMinimal from '../../img/logoMinimal.svg';

export default function Home(props) {
	const homeIntroContainerRef = useRef();

	useEffect(() => {
		const tl = gsap.timeline({
			defaults: {
				ease: 'power1.out',
			},
		});

		const homeIntroContainer = homeIntroContainerRef.current;

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
				y: '0%',
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
				homeIntroContainer.querySelector('.home__intro-image'),
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

	const handleOnClick = () => {
		window.location.href = '/#servicesSection';
	};

	return (
		<div id="homeSection" className="home section">
			<div className="home__image"></div>
			<div className="home__items">
				<div className="home__items-line"></div>
				<div className="home__items-line"></div>
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
			<div ref={homeIntroContainerRef} className="home__intro-container">
				<img
					className="home__intro-image"
					src={logoMinimal}
					alt="Lgo JMéndez Constructora"
				/>
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
