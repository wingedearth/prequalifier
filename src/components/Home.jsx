import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useAppContext } from './AppContext';
import validationSchema from './validationSchema';
import TextInput from '@/components/text-input/TextInput';
import axios from 'axios';
import BadRequest from './BadRequest';
import './Home.scss';

const initialValues = {
	price: '',
	make: '',
	model: '',
	income: '',
	creditScore: ''
};

const Home = () => {
	const { title } = useAppContext();

	return (
		<div className="home">
			<h1 className="home__banner">{title}</h1>
			<h6>Qualify For an Auto Loan Today! Why Wait??</h6>
			<Formik
				initialStatus={{
					badreq: false
				}}
				initialValues={initialValues}
				validationSchema={validationSchema}
				validateOnBlur={true}
				onSubmit={(values, { resetForm, setStatus, setValues }) => {
					setStatus({ badreq: false });

					axios({
						method: 'post',
						url: '/prequalify',
						data: values
					}).then(({ data, status }) => {
						if (status >= 400 || !data?.validRequest) {
							setStatus({ badreq: true });
							setValues(initialValues);
						} else if (!data?.qualified) {
							window.location.href = '/sadpanda';
						} else {
							window.location.href = '/newuser';
						}
					});
				}}
			>
				{({ errors, isValid, status, touched, values }) => {

					return (
						<Form>
							<BadRequest badreq={status?.badreq} />
							<Field
								component={TextInput}
								label="Price of Vehicle (USD)"
								name="price"
								placeholder="Price"
							/>
							<Field
								component={TextInput}
								label="Vehicle Make"
								name="make"
								placeholder="Make"
							/>
							<Field
								component={TextInput}
								label="Vehical Model"
								name="model"
								placeholder="Model"
							/>
							<Field
								component={TextInput}
								label="Your Annual Income (USD)"
								name="income"
								placeholder="Income"
							/>
							<Field
								component={TextInput}
								label="Your Estimated Credit Score (350-850)"
								name="creditScore"
								placeholder="Credit Score"
							/>
							<div className="home__submit">
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

export default Home;
