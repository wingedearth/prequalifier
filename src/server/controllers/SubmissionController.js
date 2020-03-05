import { qualify, validateRequest } from '@/utils/validate';

/**
 * @function SubmissionController
 * @description Main Express Controller
 * @param {Object} req - Express request
 * @param {Object} res - Express response
 */
const SubmissionController = (req, res) => {
	const { price, make, model, income, creditScore } = req?.body || {};
	const parsedData = {
		price: Number(price),
		make,
		model,
		income: Number(income),
		creditScore: Number(creditScore)
	};

	const validRequest = validateRequest(parsedData);
	const qualified = qualify(parsedData);

	// send response
	res.json({
		...parsedData,
		validRequest,
		qualified
	});
};

export default SubmissionController;
