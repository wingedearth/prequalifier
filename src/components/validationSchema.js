import * as yup from 'yup';

export default yup.object().shape({
	price: yup
		.number()
		.typeError('The price must be a number with no commas.')
		.min(1, 'The car must cost at least $1')
		.max(1000000, 'We do not provide loans for cars costing more than $1 million.')
		.required(),
	make: yup.string().required(),
	model: yup.string().required(),
	income: yup
		.number()
		.typeError('Your income must be a number with no commas.')
		.required()
		.positive(),
	creditScore: yup
		.number()
		.typeError('Your credit score must be a number.')
		.required()
		.integer()
		.min(350, 'Credit score cannot be below 350.')
		.max(850, `Credit score cannot be above 850.`)
});
