import * as yup from 'yup';

export default yup.object().shape({
	username: yup
		.string()
		.email()
		.required(),
	password: yup
		.string()
		.required('Password is required.')
		.min(8, 'Password must container 8 characters.')
		.matches(
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
			'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
		),
	passwordConfirmation: yup
		.string()
		.required()
		.oneOf([yup.ref('password'), null], 'Passwords must match')
});
