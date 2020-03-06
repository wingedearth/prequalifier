import express from 'express';
import HomeController from '@/server/controllers/HomeController';
import NewUserController from '@/server/controllers/NewUserController';
import SubmissionController from '@/server/controllers/SubmissionController';
import SadPandaController from '@/server/controllers/SadPandaController';

const router = express.Router();

router.post('/prequalify', SubmissionController);

router.get('/sadpanda', SadPandaController);

router.get('/newuser', NewUserController);

router.get('/', HomeController);

export default router;
