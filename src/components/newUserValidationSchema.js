import * as yup from 'yup';

export default yup.object().shape({
	username: yup
		.string()
		.email()
		.required(),
	password: yup
		.string()
		.required('Password is required.')
		.min(9, 'Password must have more then 8 characters.')
		.matches(
			/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
			'Password must have at least one uppercase, one lowercase, a number and a special character'
		),
	passwordConfirmation: yup
		.string()
		.required('Passwords must match.')
		.oneOf([yup.ref('password'), null], 'Passwords must match')
});
