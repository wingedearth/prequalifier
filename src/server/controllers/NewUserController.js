import buildPage from '@/server/buildPage';
import NewUser from '@/components/NewUser';

const edition = 'us';
const title = 'New User Registration';
const entryName = 'newuser';

/**
 * @function NewUserController
 * @description Main Express Controller
 * @param {Object} req - Express request
 * @param {Object} res - Express response
 */
const NewUserController = (req, res) => {
	const data = {
		edition,
		title
	};

	// build page
	const page = buildPage(req, res, data, NewUser, { entryName });

	// send page in response
	res.send(page);
};

export default NewUserController;
