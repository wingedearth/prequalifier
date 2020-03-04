import * as yup from 'yup';

export default yup.object().shape({
	price: yup
		.number()
		.min(1, 'The car must cost at least $1')
		.max(1000000, 'We do not provide loans for cars costing more than $1 million.')
		.required(),
	make: yup.string().required(),
	model: yup.string().required(),
	income: yup
		.number()
		.required()
		.positive(),
	creditScore: yup
		.number()
		.required()
		.integer()
		.min(350, 'Credit score cannot be below 350.')
		.max(850, `Credit score cannot be above 850.`)
});
