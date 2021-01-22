import React from 'react';
//styles
import './footer.scss';
//components
import GoogleMap from '../GoogleMap/GoogleMap';
//images
import whatsapp from '../../img/whatsapp.svg';
import facebook from '../../img/facebook.svg';
import instagram from '../../img/instagram.svg';
import phone from '../../img/phone.svg';
import mail from '../../img/mail.svg';
import home from '../../img/home.svg';
import logoContact from '../../img/logoContact.jpg';

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer__socials-container disable-select">
				<span className="footer__socials-text">Síguenos</span>
				<a
					className="footer__socials-link footer__socials-link--whatsapp"
					href="https://wa.me/50689253143?text=Saludos%20cordiales%2C%20quisiera%20informaci%C3%B3n%20sobre"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src={whatsapp}
						className="footer__socials-image footer__socials-image--whatsapp"
						alt="JMéndez Constructora whatsapp"
					/>
				</a>
				<a
					className="footer__socials-link footer__socials-link--facebook"
					href="https://www.facebook.com/Jmendez-Constructora-544605816027897"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src={facebook}
						className="footer__socials-image footer__socials-image--facebook"
						alt="JMéndez Constructora facebook"
					/>
				</a>
				<a
					className="footer__socials-link footer__socials-link--instagram"
					href="https://www.instagram.com/jmendez.constructora/"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src={instagram}
						className="footer__socials-image footer__socials-image--instagram"
						alt="JMéndez Constructora instagram"
					/>
				</a>
				<a
					className="footer__socials-link footer__socials-link--phone"
					href="tel:+506-8815-8298"
				>
					<img
						src={phone}
						className="footer__socials-image footer__socials-image--phone"
						alt="JMéndez Constructora teléfono"
					/>
				</a>
			</div>
			<div className="footer__content">
				<img src={logoContact} alt="" className="footer_content-logo" />
				<ul className="footer__content-sitemap">
					<li className="footer__content-sitemap-item">
						<a href="#top" className="footer__content-sitemap-item-link">
							Inicio
						</a>
					</li>
					<li className="footer__content-sitemap-item">
						<a
							href="#proyectsSection"
							className="footer__content-sitemap-item-link"
						>
							Proyectos
						</a>
					</li>
					<li className="footer__content-sitemap-item">
						<a
							href="#imageGallerySection"
							className="footer__content-sitemap-item-link"
						>
							Galería de Imágenes
						</a>
					</li>
					<li className="footer__content-sitemap-item">
						<a
							href="#aboutSection"
							className="footer__content-sitemap-item-link"
						>
							Acerca de Nosotros
						</a>
					</li>
					<li className="footer__content-sitemap-item">
						<a
							href="#contactSection"
							className="footer__content-sitemap-item-link"
						>
							Contacto
						</a>
					</li>
					<li className="footer__content-sitemap-item">
						<a
							href="#servicesSection"
							className="footer__content-sitemap-item-link"
						>
							Servicios
						</a>
					</li>
					<li className="footer__content-sitemap-item footer__content-sitemap-item--secondary">
						<a href="##" className="footer__content-sitemap-item-link">
							Alquiler de Equipo
						</a>
					</li>
					<li className="footer__content-sitemap-item footer__content-sitemap-item--secondary">
						<a href="##" className="footer__content-sitemap-item-link">
							Construcción de Obras Civiles
						</a>
					</li>
				</ul>
				<div className="footer__content-location-container">
					<div className="footer__content-location-background"></div>
					<div className="footer__content-location-map">
						{/* <GoogleMap /> */}
					</div>
				</div>
			</div>
			<div className="footer__bottom-line">
				<span className="footer__bottom-line-header">
					Pongámonos en contacto
				</span>
				<div className="footer__bottom-line-container footer__bottom-line-phone">
					<span className="footer__bottom-line-text footer__bottom-line-phone-text">
						Llámanos
					</span>
					<a
						href="tel:+506-8815-8298"
						className="footer__bottom-line-image-link"
					>
						<img
							src={phone}
							alt=""
							title="Llamar"
							className="footer__bottom-line-image footer__bottom-line-phone-img"
						/>
					</a>
					<a
						href="tel:+506-8815-8298"
						className="footer__bottom-line-link footer__bottom-line-phone-phone"
					>
						+(506) 8925 3143
					</a>
				</div>
				<div className="footer__bottom-line-container footer__bottom-line-mail">
					<span className="footer__bottom-line-text footer__bottom-line-mail-text">
						Envíanos un email
					</span>
					<a
						href="mailto:info@jmendezconstructorasa.com"
						className="footer__bottom-line-image-link"
					>
						<img
							src={mail}
							alt=""
							title="Enviar Email"
							className="footer__bottom-line-image footer__bottom-line-mail-img"
						/>
					</a>

					<a
						href="mailto:info@jmendezconstructorasa.com"
						className="footer__bottom-line-link footer__bottom-line-mail-mail"
					>
						info@jmendezconstructorasa.com
					</a>
				</div>
				<div className="footer__bottom-line-container footer__bottom-line-address">
					<span className="footer__bottom-line-text footer__bottom-line-address-text">
						Nuestra Ubicación
					</span>

					<a
						href="https://www.google.com/maps/dir//JM%C3%A9ndez+Constructora+S.A,+Calle+Girasol,+Alajuela+Province,+San+Ramon/@10.1103027,-84.4619438,17z/"
						className="footer__bottom-line-image-link"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src={home}
							title="Como LLegar?"
							alt=""
							className="footer__bottom-line-image footer__bottom-line-address-img"
						/>
					</a>
					<a
						href="https://www.google.com/maps/dir//JM%C3%A9ndez+Constructora+S.A,+Calle+Girasol,+Alajuela+Province,+San+Ramon/@10.1103027,-84.4619438,17z/"
						className="footer__bottom-line-link footer__bottom-line-address-address"
						target="_blank"
						rel="noreferrer"
					>
						Calle Girasol, San Ramón, Provincia de Alajuela, Costa Rica
					</a>
				</div>
			</div>
		</footer>
	);
}
