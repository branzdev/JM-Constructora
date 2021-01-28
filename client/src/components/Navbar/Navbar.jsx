import React, { useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { HashLink as Link } from 'react-router-hash-link';
//styles
import './navbar.scss';
//images

export default function Navbar() {
	const { scrollY } = useViewportScroll();
	let height;

	const [isSmall, setIsSmall] = useState(false);

	height = useTransform(
		scrollY,
		[0, 700],
		[isSmall ? 70 : 100, isSmall ? 60 : 90]
	);

	useEffect(() => {
		if (window.screen.width >= 640) {
		} else {
			setIsSmall(true);
		}
	}, []);

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
				<li className="navbar__list-item navbar__list-item--logo">
					<Link
						to="/#homeSection"
						className="navbar__list-item-link navbar__list-item-link--logo disable-select"
					/>
				</li>
			</ul>
		</motion.nav>
	);
}
