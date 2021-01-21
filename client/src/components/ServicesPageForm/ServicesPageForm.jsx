import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
//styles
import './servicesPageForm.scss';
//components
import Button from '../Button/Button';

export default function Form(props) {
	const defaultFormData = {
		name: '',
		email: '',
		phone: '',
		message: '',
	};

	const defaultIsRequired = {
		nameRequired: '',
		emailRequired: '',
		phoneRequired: '',
		messageRequired: '',
	};

	const [formData, setFormData] = useState(defaultFormData);

	const [isRequired, setIsRequired] = useState(defaultIsRequired);

	const {
		nameRequired,
		emailRequired,
		phoneRequired,
		messageRequired,
	} = isRequired;

	const { name, email, phone, message } = formData;

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
			setIsRequired(defaultIsRequired);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const formIsFilled = (name && email && phone && message) !== '';

		if (formIsFilled) {
			setIsRequired(defaultIsRequired);
			axios({
				method: 'POST',
				url: '/sendMail',
				data: formData,
			})
				.then((response) => {
					console.log(response.data);
					if (response.data.status === 'success') {
						Swal.fire({
							title: 'Gracias!',
							text:
								'Solicitud enviada correctamente, nos pondremos en contacto contigo lo antes posible.',
							icon: 'success',
							//timer: 2000,
							customClass: {
								container: 'sweet-alert2__container',
								popup: 'sweet-alert2__popup',
								title: 'sweet-alert2__title',
								confirmButton: 'sweet-alert2__confirm-button',
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
						type="number"
						className={`form__input form__input--phone ${phoneRequired}`}
						placeholder="Teléfono"
						name="phone"
						value={phone}
						required
					/>
					<div className={`form__input-line ${phoneRequired}`}></div>
				</div>
				<div className="form__input-container">
					<textarea
						onChange={handleOnChange}
						className={`form__input form__textArea ${messageRequired}`}
						placeholder="Descripción de la solicitud..."
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
