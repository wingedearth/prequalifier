import express from 'express';
import HomeController from '@/server/controllers/HomeController';

const router = express.Router();

router.get('/', HomeController);

export default router;
