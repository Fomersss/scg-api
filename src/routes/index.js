import express from 'express';
import { findRestuarant, findValue } from '../controllers/scg'

const router = express.Router()

// router.post('/scg/calculate', findValue)
router.get('/scg/restuarant', findRestuarant)

export default router;