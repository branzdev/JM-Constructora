import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
//styles
import './form.scss';
//components
import Button from '../Button/Button';

export default function Form(props) {
	const defaultFormData = {
		name: '',
		email: '',
		subject: '',
		message: '',
		phone: '',
	};

	const defaultIsRequired = {
		nameRequired: '',
		emailRequired: '',
		subjectRequired: '',
		messageRequired: '',
		phoneRequired: '',
	};

	const [isLocatedServices, setIsLocatedServices] = useState();
	const [location, setLocation] = useState('');

	useEffect(() => {
		setLocation(props.location);

		location === 'services' && setIsLocatedServices(true);
	}, [props.location, location]);

	const [formData, setFormData] = useState(defaultFormData);

	const [isRequired, setIsRequired] = useState(defaultIsRequired);

	const {
		nameRequired,
		emailRequired,
		subjectRequired,
		messageRequired,
		phoneRequired,
	} = isRequired;

	const { name, email, subject, message, phone } = formData;

	const resetForm = () => {
		setFormData(defaultFormData);
	};

	const validateRequired = (key, value) => {
		if (value === '') {
			setIsRequired((prevState) => ({
				...prevState,
				[`${key}Required`]: 'form__input-required',
			}));
		} else {
			setIsRequired((prevState) => ({
				...prevState,
				[`${key}Required`]: '',
			}));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const formIsFilled = isLocatedServices
			? (name && email && phone && message) !== ''
			: (name && email && subject && message) !== '';

		if (formIsFilled) {
			setIsRequired(defaultIsRequired);
			axios({
				method: 'POST',
				url: '/api/sendMail',
				data: formData,
			})
				.then((response) => {
					console.log(response.data);
					if (response.data.status === 'success') {
						Swal.fire({
							title: 'Gracias!',
							text: isLocatedServices
								? 'Solicitud enviada correctamente, nos pondremos en contacto contigo lo antes posible.'
								: 'Mensaje Enviado Correctamente.',
							icon: 'success',
							timer: isLocatedServices ? 0 : 2000,
							customClass: {
								container: 'sweet-alert2__container',
								popup: 'sweet-alert2__popup',
								title: 'sweet-alert2__title',
								confirmButton: 'sweet-alert2__confirm-button',
								content: 'sweet-alert2__content',
							},
						});
						resetForm();
					} else if (response.data.status === 'fail') {
						Swal.fire({
							title: 'Oops...',
							text: 'Ha ocurrido un error, intentalo nuevamente.',
							icon: 'error',
							timer: 2000,
							customClass: {
								container: 'sweet-alert2__container',
								popup: 'sweet-alert2__popup',
								title: 'sweet-alert2__title',
								confirmButton: 'sweet-alert2__confirm-button',
								content: 'sweet-alert2__content',
							},
						});
					}
				})
				.catch((error) => {
					if (!error.response) {
						// network error
						Swal.fire({
							title: 'Error de conexión',
							text: 'Intentalo Nuevamente.',
							icon: 'error',
							toast: true,
							position: 'bottom',
							timer: 3000,
							customClass: {
								container: 'sweet-alert2__container-toast',
								popup: 'sweet-alert2__popup-toast',
								title: 'sweet-alert2__title-toast',
								confirmButton: 'sweet-alert2__confirm-button-toast',
								content: 'sweet-alert2__content-toast',
							},
						});
					} else {
						//console.log(error.response.data.message);
					}
				});
		} else {
			Object.entries(formData).forEach(([key, value]) => {
				validateRequired(key, value);
			});

			Swal.fire({
				title: 'Debes llenar todos los campos!',
				icon: 'error',
				toast: true,
				position: 'bottom',
				timer: 3000,
				customClass: {
					container: 'sweet-alert2__container-toast',
					popup: 'sweet-alert2__popup-toast',
					title: 'sweet-alert2__title-toast',
					confirmButton: 'sweet-alert2__confirm-button-toast',
					content: 'sweet-alert2__content-toast',
				},
			});
		}
	};

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<form onSubmit={handleSubmit} className={`form ${props.className}`}>
			<div className="form__decoration-top-right"></div>
			<div className="form__decoration-bottom-left"></div>
			<div className="form__container">
				<div className="form__input-container">
					<input
						onChange={handleOnChange}
						type="text"
						className={`form__input form__input--name ${nameRequired}`}
						placeholder="Nombre"
						name="name"
						value={name}
						required
					/>
					<div className={`form__input-line ${nameRequired}`}></div>
				</div>
				<div className="form__input-container">
					<input
						onChange={handleOnChange}
						type="email"
						className={`form__input form__input--email ${emailRequired}`}
						placeholder="Correo"
						name="email"
						value={email}
						required
					/>
					<div className={`form__input-line ${emailRequired}`}></div>
				</div>
				<div className="form__input-container">
					<input
						onChange={handleOnChange}
						type="text"
						className={`form__input form__input--subject ${
							isLocatedServices ? phoneRequired : subjectRequired
						}`}
						placeholder={isLocatedServices ? 'Teléfono' : 'Asunto'}
						name={isLocatedServices ? 'phone' : 'subject'}
						value={isLocatedServices ? phone : subject}
						required
					/>
					<div
						className={`form__input-line ${
							isLocatedServices ? phoneRequired : subjectRequired
						}`}
					></div>
				</div>
				<div className="form__input-container">
					<textarea
						onChange={handleOnChange}
						className={`form__input form__textArea ${messageRequired}`}
						placeholder={
							isLocatedServices
								? 'Descripción de la solicitud...'
								: 'En que podemos ayudarte...'
						}
						name="message"
						value={message}
						required
					></textarea>
					<div className={`form__input-line ${messageRequired}`}></div>
				</div>
				<Button
					onClick={handleSubmit}
					className="form__button button--primary"
					text="Enviar"
				/>
			</div>
		</form>
	);
}
