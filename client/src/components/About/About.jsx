import React from 'react';
//styles
import './about.scss';

export default function About() {
	return (
		<div id="aboutSection" className="about section">
			<div className="about__header-container header-container">
				<h1 className="about__header1 header1 header1--dark">Acerca de</h1>
				<h2 className="about__header2 header2 header2--dark">Nosotros</h2>
			</div>
			<div className="about__mission">
				<div className="about__mission-container">
					<h2 className="about__mission-header header2 header2--light">
						Misión
					</h2>
					<p className="about__mission-text">
						Somos una empresa nacional familiar dedicada a crear, desarrollar y
						comercializar proyectos de construcción, contribuyendo así con el
						éxito de nuestros clientes y el desarrollo del país. Se trabaja con
						el compromiso de satisfacer las necesidades de nuestros clientes
						generando bienestar y calidad de vida. Contamos con gente exitosa
						comprometida con la filosofía de aportar al desarrollo social,
						dentro de altos estándares de productividad y calidad.
					</p>
				</div>
			</div>
			<div className="about__vission">
				<div className="about__vission-container">
					<h2 className="about__vission-header header2 header2--dark">
						Visión
					</h2>
					<p className="about__vission-text">
						Ser una empresa constructora consolidada y reconocida por ser una
						organización confiable y honesta, con proyectos de excelente
						calidad, mejorando continuamente los procesos y fortaleciendo la
						competencia del equipo humano.
					</p>
				</div>
			</div>
			<div className="about__quote">
				" Somos una empresa familiar que trabaja en pro del desarrollo del país,
				construyendo y mejorando los caminos y edificaciones a lo largo y ancho
				del territorio. "
			</div>
		</div>
	);
}
