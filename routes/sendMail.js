var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();

router.post('/', async function (req, res, next) {
	const { name, phone, email, subject, message } = req.body;

	const htmlBody = `
	<h1> ${subject ? subject : 'Cotización de Servicio'} </h1>
	<ul>
		<li>
			Nombre: ${name}
		</li>
		<li>
			Correo: ${email}
		</li>
		${phone && `<li>Teléfono: ${phone}</li>`}
	</ul>
	<p>${message}</p>
	<a style="background: #2a56ac; color: #fafafa; text-decoration: none; padding: 15px; border-radius: 8px; display: inline-block; margin-top: 15px;" href="mailto:${email}">Responder</a>
	`;

	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		host: process.env.EMAIL_SENDER_HOST,
		port: process.env.EMAIL_SENDER_PORT,
		secure: false, // true for 465, false for other ports
		auth: {
			user: process.env.EMAIL_SENDER_EMAIL,
			pass: process.env.EMAIL_SENDER_PASSWORD,
		},
	});

	transporter.verify(function (error, success) {
		if (error) {
			console.log(error);
		} else {
			console.log('Server is ready to take our messages');
		}
	});

	let mail = {
		from: process.env.EMAIL_FROM, // sender address
		to: process.env.EMAIL_DESTINATION, // list of receivers
		subject: `${subject ? subject : 'Cotización de Servicio'}`, // Subject line
		html: htmlBody, // html body
	};

	// send mail with defined transport object
	let info = await transporter.sendMail(mail, (err, data) => {
		if (err) {
			res.json({
				status: 'fail',
			});
		} else {
			res.json({
				status: 'success',
			});
		}
	});
});

module.exports = router;
