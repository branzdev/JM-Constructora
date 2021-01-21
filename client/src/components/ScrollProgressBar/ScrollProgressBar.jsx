import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
//styles
import './scrollProgressBar.scss';

export default function ScrollProgressBar() {
	const { scrollYProgress } = useViewportScroll();
	const width = useTransform(scrollYProgress, [0, 1], [`${0}%`, `${100}%`]);
	return (
		<motion.div style={{ width }} className="scrollProgressBar"></motion.div>
	);
}
