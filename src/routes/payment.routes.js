import express from 'express';
const router = express.Router();

import PaymentController from '../controllers/payment.controller.js'; // Import the controller

/** 
 * 
*/


router.post("/payment", PaymentController.createPayment);

export default router;