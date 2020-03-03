import buildPage from '@/server/buildPage';
import Home from '@/components/Home';

const edition = 'us';
const title = 'Prequalifer';
const entryName = 'home';

/**
 * @function HomeController
 * @description Main Express Controller
 * @param {Object} req - Express request
 * @param {Object} res - Express response
 */
const HomeController = (req, res) => {
	const data = {
		edition,
		title
	};

	/*
	 * TODO: when API call is added, build page should be an async process (i.e. "await buildPage")
	 * HomeController will then need to be an async function (i.e. "async (req, res) => ...")
	 */

	// build page
	const page = buildPage(req, res, data, Home, { entryName });

	// send page in response
	res.send(page);
};

export default HomeController;
