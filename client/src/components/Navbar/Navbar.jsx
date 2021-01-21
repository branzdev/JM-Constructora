import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

//styles
import './navbar.scss';
//images
import logo from '../../img/logoMinimal.svg';

export default function Navbar() {
	const { scrollY } = useViewportScroll();
	let height = useTransform(scrollY, [0, 700], [100, 90]);

	return (
		<motion.nav className="navbar" style={{ height: height }}>
			<ul className="navbar__list">
				<li className="navbar__list-item">
					<a className="navbar__list-item-link" href="tel:+506-8815-8298">
						+(506) 8925 3143
					</a>
				</li>
				<li className="navbar__list-item">
					<a
						className="navbar__list-item-link"
						href="mailto:info@jmendezconstructorasa.com"
					>
						info@jmendezconstructorasa.com
					</a>
				</li>
				<li className="navbar__list-item ">
					<Link
						to="/"
						className="navbar__list-item-link navbar__list-item-link--logo disable-select"
					>
						<motion.img
							whileTap={{ scale: 0.9 }}
							className="navbar__list-item-link-image"
							src={logo}
							alt=""
						/>
					</Link>
				</li>
			</ul>
		</motion.nav>
	);
}
