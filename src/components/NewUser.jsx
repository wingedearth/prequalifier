import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { useAppContext } from './AppContext';
import validationSchema from './newUserValidationSchema';
import TextInput from '@/components/text-input/TextInput';
import BadRequest from './BadRequest';
import './NewUser.scss';

const initialValues = {
	password: '',
	passwordConfirmation: '',
	username: ''
};

/**
 * @function Registered
 * @returns {React.ReactElement}
 */
const Registered = () => (
	<div className="registration">
		<h1 className="registration__banner">Your registration request has been submitted!</h1>
		<h6>Please allow 6-8 weeks for us to process your information.</h6>
	</div>
);

/**
 * @function NewUser
 * @description provides a form for submission new user login information
 * @returns {ReactElement}
 */
const NewUser = () => {
	const [registered, updateRegistered] = useState(false);
	const { title } = useAppContext();

	return registered ? (
		<Registered />
	) : (
		<div className="new-user">
			<h1 className="new-user__banner">{title}</h1>
			<h6>Register a New User Account!</h6>
			<Formik
				initialStatus={{
					badreq: false
				}}
				initialValues={initialValues}
				validationSchema={validationSchema}
				validateOnBlur={true}
				onSubmit={(values, { resetForm, setStatus, setValues }) => {
					updateRegistered(true);
				}}
			>
				{({ errors, isValid, status, touched, values }) => {
					return (
						<Form>
							<BadRequest badreq={status?.badreq} />
							<Field
								component={TextInput}
								label="User Name"
								name="username"
								placeholder="Enter an email address"
							/>
							<Field
								component={TextInput}
								label="Password"
								name="password"
								placeholder="Enter Password"
							/>
							<Field
								component={TextInput}
								label="Password Confirmation"
								name="passwordConfirmation"
								placeholder="Confirm Password"
							/>
							<div className="new-user__submit">
								<button
									className="button is-primary"
									disabled={!isValid}
									type="submit"
								>
									Submit
								</button>
							</div>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};

export default NewUser;
