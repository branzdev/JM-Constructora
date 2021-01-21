import React, { useRef, useEffect } from 'react';
//styles
import './contact.scss';
//components
import Form from '../Form/Form';

export default function Contact() {
	const contactFormSectionRef = useRef();

	useEffect(() => {
		const contactFormSection = contactFormSectionRef.current;

		contactFormSection.style.height = `${contactFormSection.scrollHeight}px`;
	}, []);

	return (
		<div
			ref={contactFormSectionRef}
			id="contactSection"
			className="contact section"
		>
			<div className="contact__header-container header-container">
				<h1 className="contact__header1 header1 header1--dark">Contáctanos</h1>
				<h2 className="contact__header2 header2 header2--dark">Diréctamente</h2>
			</div>
			<Form />
		</div>
	);
}
