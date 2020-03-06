import buildPage from '@/server/buildPage';
import Disqualified from '@/components/Disqualified';

const entryName = 'sadpanda';
const title = 'Disqualified';
const edition = 'us';

/**
 * @function SadPandaController
 * @description This directs your request to a tragic message of woe
 * @param {Object} req - Express request
 * @param {Object} res - Express response
 */
const SadPandaController = (req, res) => {
	const data = {
		edition,
		title
	};

	// build page
	const page = buildPage(req, res, data, Disqualified, { entryName });

	// send page in response
	res.send(page);
};

export default SadPandaController;
