import React from 'react';
import { motion } from 'framer-motion';

//styles
import './button.scss';

export default function Button(props) {
	return (
		<motion.button
			onClick={props.onClick}
			whileTap={{ scale: 0.9 }}
			className={`button ${props.className}`}
		>
			{props.text}
		</motion.button>
	);
}
