import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useAppContext } from './AppContext';
import validationSchema from './validationSchema';
import TextInput from '@/components/text-input/TextInput';
import axios from 'axios';
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
		<main className="home">
			<h1>{title}</h1>
			<h6>Qualify For an Auto Loan Today! Why Wait??</h6>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				validateOnBlur={true}
				onSubmit={(values, { setSubmitting }) => {
					axios({
						method: 'post',
						url: '/prequalify',
						data: values
					}).then(({ data, status }) => {
						console.log('api response status:', status);
						console.log('api response data:', data);
					});
				}}
			>
				{({ errors, isValid, touched, values }) => {

					return (
						<Form>
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
		</main>
	);
};

export default Home;
