import express from 'express';
import { calculate, scg } from '../controllers/index'

const router = express.Router()

router.post('/scg', calculate)

export default router;