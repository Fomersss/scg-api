import express from 'express';
import { findRestuarant, findValue } from '../controllers/scg'

const router = express.Router()

router.get('/scg/findvalue', findValue)
router.get('/scg/restaurant', findRestuarant)

export default router;