import express from 'express';
import Controller from '@/server/controllers/Controller';

const router = express.Router();

router.get('/', Controller);

export default router;
