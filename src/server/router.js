import express from 'express';
import HomeController from '@/server/controllers/HomeController';
import SubmissionController from '@/server/controllers/SubmissionController';

const router = express.Router();

router.post('/prequalify', SubmissionController);

router.get('/', HomeController);

export default router;
