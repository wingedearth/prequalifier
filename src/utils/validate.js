/**
 * @function validateRequest
 * @description Validates submitted values for good/bad request. Returns true if validation passes.
 * @param {Number} Object.price
 * @param {String} Object.make
 * @param {String} Object.model
 * @param {Number} Object.income
 * @param {Number} Object.creditScore
 * @returns {Boolean}
 */
export const validateRequest = ({ price, make, model, income, creditScore }) =>
	price > 0 &&
	price <= 1000000 &&
	make &&
	typeof make === 'string' &&
	model &&
	typeof make === 'string' &&
	income > 0 &&
	creditScore >= 350 &&
	creditScore <= 850;

/**
 * @function qualify
 * @description Applies business rule to determine if submitted data qualifies for loan
 * @param {Number} Object.price
 * @param {Number} Object.income
 * @param {Number} Object.creditScore
 * @returns {Boolean}
 */
export const qualify = ({ price, income, creditScore }) =>
	price <= income / 5 && creditScore >= 600;
