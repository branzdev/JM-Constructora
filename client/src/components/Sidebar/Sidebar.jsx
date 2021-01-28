import React, { useRef, useState } from 'react';
import { motion /* useViewportScroll, useTransform */ } from 'framer-motion';
import { HashLink as Link } from 'react-router-hash-link';
import { Image, Placeholder } from 'cloudinary-react';

//styles
import './sidebar.scss';
//images

export default function Sidebar() {
	//const { scrollY } = useViewportScroll();
	const sidebarRef = useRef();

	const [isSidebarActive, setIsSidebarActive] = useState(false);

	//let height = useTransform(scrollY, [0, 700], [180, 130]);

	const handleOnClick = () => {
		const sidebar = sidebarRef.current;
		setIsSidebarActive(!isSidebarActive);
		sidebar.classList.toggle('sidebar--active');
	};

	const handleOnClickLink = () => {
		const sidebar = sidebarRef.current;
		sidebar.classList.remove('sidebar--active');
		setIsSidebarActive(false);
	};

	return (
		<motion.div
			ref={sidebarRef}
			//style={!isSidebarActive && { height: height }}
			className="sidebar"
		>
			<div className="sidebar__active-background"></div>
			<div className="sidebar__background"></div>
			<motion.div className="sidebar__opener">
				<motion.div
					onClick={handleOnClick}
					whileTap={{ scale: 0.9 }}
					className="sidebar__opener-icon"
				>
					<div className="sidebar__opener-icon-line"></div>
					<div className="sidebar__opener-icon-line"></div>
					<div className="sidebar__opener-icon-line"></div>
				</motion.div>

				<motion.p
					whileTap={{ scale: 0.9 }}
					onClick={handleOnClick}
					className="sidebar__opener-text disable-select"
				>
					{!isSidebarActive ? 'MENÚ' : 'CERRAR'}
				</motion.p>
			</motion.div>
			<div className="sidebar__logo-container">
				<Image
					className="sidebar__logo"
					cloudName="bmongemendez"
					publicId="jmendezconstructorasa/logoSvg"
					responsive
					width="auto"
					crop="scale"
					loading="lazy"
					dpr="auto"
					fetchFormat="auto"
					quality="auto"
					alt="Logo JMéndez Constructora"
				>
					<Placeholder />
				</Image>
			</div>

			<ul className="sidebar__list">
				<motion.li whileTap={{ scale: 0.9 }} className="sidebar__list-item">
					<Link
						to="/#homeSection"
						onClick={handleOnClickLink}
						className="sidebar__list-item-link"
					>
						Inicio
					</Link>
				</motion.li>
				<motion.li whileTap={{ scale: 0.9 }} className="sidebar__list-item">
					<Link
						to="/#proyectsSection"
						onClick={handleOnClickLink}
						className="sidebar__list-item-link"
					>
						Proyectos Recientes
					</Link>
				</motion.li>
				<motion.li whileTap={{ scale: 0.9 }} className="sidebar__list-item">
					<Link
						to="/services/rental"
						onClick={handleOnClickLink}
						className="sidebar__list-item-link"
					>
						Nuestros Servicios
					</Link>
				</motion.li>
				<motion.li
					whileTap={{ scale: 0.9 }}
					className="sidebar__list-item sidebar__list-item--secondary"
				>
					<Link
						to="/services/rental"
						onClick={handleOnClickLink}
						className="sidebar__list-item-link"
					>
						- Alquiler de maquinaria
					</Link>
				</motion.li>
				<motion.li
					whileTap={{ scale: 0.9 }}
					className="sidebar__list-item sidebar__list-item--secondary"
				>
					<Link
						to="/services/construction"
						onClick={handleOnClickLink}
						className="sidebar__list-item-link"
					>
						- Construcción de obras civiles
					</Link>
				</motion.li>
				<motion.li whileTap={{ scale: 0.9 }} className="sidebar__list-item">
					<Link
						to="/imageGallery"
						onClick={handleOnClickLink}
						className="sidebar__list-item-link"
					>
						Galería de Imágenes
					</Link>
				</motion.li>
				<motion.li whileTap={{ scale: 0.9 }} className="sidebar__list-item">
					<Link
						to="/#aboutSection"
						onClick={handleOnClickLink}
						className="sidebar__list-item-link"
					>
						Acerca de Nosotros
					</Link>
				</motion.li>
				<motion.li whileTap={{ scale: 0.9 }} className="sidebar__list-item">
					<Link
						to="/#contactSection"
						onClick={handleOnClickLink}
						className="sidebar__list-item-link"
					>
						Contáctenos
					</Link>
				</motion.li>
			</ul>
		</motion.div>
	);
}
