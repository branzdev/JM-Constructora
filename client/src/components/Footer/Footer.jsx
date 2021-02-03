import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Image, Placeholder } from 'cloudinary-react';

//styles
import './footer.scss';
//components
import GoogleMap from '../GoogleMap/GoogleMap';

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
					<Image
						className="footer__socials-image footer__socials-image--whatsapp"
						cloudName="bmongemendez"
						publicId="jmendezconstructorasa/whatsapp.svg"
						dpr="auto"
						quality="auto"
						loading="lazy"
						alt="JMéndez Constructora whatsapp"
					>
						<Placeholder />
					</Image>
				</a>
				<a
					className="footer__socials-link footer__socials-link--facebook"
					href="https://www.facebook.com/Jmendez-Constructora-544605816027897"
					target="_blank"
					rel="noreferrer"
				>
					<Image
						className="footer__socials-image footer__socials-image--facebook"
						cloudName="bmongemendez"
						publicId="jmendezconstructorasa/facebook.svg"
						dpr="auto"
						quality="auto"
						loading="lazy"
						alt="JMéndez Constructora facebook"
					>
						<Placeholder />
					</Image>
				</a>
				<a
					className="footer__socials-link footer__socials-link--instagram"
					href="https://www.instagram.com/jmendez.constructora/"
					target="_blank"
					rel="noreferrer"
				>
					<Image
						className="footer__socials-image footer__socials-image--instagram"
						cloudName="bmongemendez"
						publicId="jmendezconstructorasa/instagram.svg"
						dpr="auto"
						quality="auto"
						loading="lazy"
						alt="JMéndez Constructora instagram"
					>
						<Placeholder />
					</Image>
				</a>
				<a
					className="footer__socials-link footer__socials-link--phone"
					href="tel:+506-8815-8298"
				>
					<Image
						className="footer__socials-image footer__socials-image--phone"
						cloudName="bmongemendez"
						publicId="jmendezconstructorasa/phone.svg"
						dpr="auto"
						quality="auto"
						loading="lazy"
						alt="JMéndez Constructora teléfono"
					>
						<Placeholder />
					</Image>
				</a>
			</div>
			<div className="footer__content">
				<Image
					className="footer_content-logo"
					cloudName="bmongemendez"
					publicId="jmendezconstructorasa/logoContact"
					fetchFormat="auto"
					dpr="auto"
					quality="auto"
					loading="lazy"
					alt="Logo JMéndez Constructora"
				>
					<Placeholder />
				</Image>
				<ul className="footer__content-sitemap">
					<li className="footer__content-sitemap-item">
						<Link
							to="/#homeSection"
							className="footer__content-sitemap-item-link"
						>
							Inicio
						</Link>
					</li>
					<li className="footer__content-sitemap-item">
						<Link
							to="/#proyectsSection"
							className="footer__content-sitemap-item-link"
						>
							Proyectos
						</Link>
					</li>
					<li className="footer__content-sitemap-item">
						<Link
							to="/#imageGallerySection"
							className="footer__content-sitemap-item-link"
						>
							Galería de Imágenes
						</Link>
					</li>
					<li className="footer__content-sitemap-item">
						<Link
							to="/#aboutSection"
							className="footer__content-sitemap-item-link"
						>
							Acerca de Nosotros
						</Link>
					</li>
					<li className="footer__content-sitemap-item">
						<Link
							to="/#contactSection"
							className="footer__content-sitemap-item-link"
						>
							Contacto
						</Link>
					</li>
					<li className="footer__content-sitemap-item">
						<Link
							to="/services/rental"
							className="footer__content-sitemap-item-link"
						>
							Servicios
						</Link>
					</li>
					<li className="footer__content-sitemap-item footer__content-sitemap-item--secondary">
						<Link
							to="/services/rental"
							className="footer__content-sitemap-item-link"
						>
							Alquiler de Equipo
						</Link>
					</li>
					<li className="footer__content-sitemap-item footer__content-sitemap-item--secondary">
						<Link
							to="/services/construction"
							className="footer__content-sitemap-item-link"
						>
							Construcción de Obras Civiles
						</Link>
					</li>
				</ul>
				<div className="footer__content-location-container">
					<div className="footer__content-location-background"></div>
					<div className="footer__content-location-map">
						<GoogleMap />
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
						<Image
							className="footer__bottom-line-image footer__bottom-line-phone-img"
							cloudName="bmongemendez"
							publicId="jmendezconstructorasa/phone.svg"
							dpr="auto"
							quality="auto"
							loading="lazy"
							alt="Phone Logo"
							title="Llamar"
						>
							<Placeholder />
						</Image>
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
						<Image
							className="footer__bottom-line-image footer__bottom-line-mail-img"
							cloudName="bmongemendez"
							publicId="jmendezconstructorasa/mail.svg"
							dpr="auto"
							quality="auto"
							loading="lazy"
							alt="Email Logo"
							title="Enviar Email"
						>
							<Placeholder />
						</Image>
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
						<Image
							className="footer__bottom-line-image footer__bottom-line-address-img"
							cloudName="bmongemendez"
							publicId="jmendezconstructorasa/home.svg"
							dpr="auto"
							quality="auto"
							loading="lazy"
							alt="Home Logo"
							title="Como LLegar?"
						>
							<Placeholder />
						</Image>
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
