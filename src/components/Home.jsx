import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useAppContext } from './AppContext';
import validationSchema from './validationSchema';
import './Home.scss';

// Auto Purchase Price (Currency)

// Auto Make (Text)

// Auto Model (Text)

// User Estimated Yearly Income (Currency)

// User Estimated Credit Score (Number from 300-850)

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
				onSubmit={(values, { setSubmitting }) => {
					console.log('values:', values);
				}}
			>
				{({ errors, touched, values }) => {
					console.log('values:', values);
					console.log('errors:', errors);
					console.log('touched:', touched);

					return (
						<Form>
							<Field name="price" type="text" placeholder="Price of Vehicle" />
							{touched.price && errors.price && (
								<p className="home__error">{errors.price}</p>
							)}
							<Field name="make" type="text" placeholder="Vehicle Make" />
							<Field name="model" type="text" placeholder="Vehicle Model" />
							<Field name="income" placeholder="Your Annual Income (USD)" />
							<Field name="creditScore" placeholder="Your Estimated Credit Score" />
							<div className="home__submit">
								<button type="submit">Submit</button>
							</div>
						</Form>
					);
				}}
			</Formik>
		</main>
	);
};

export default Home;
