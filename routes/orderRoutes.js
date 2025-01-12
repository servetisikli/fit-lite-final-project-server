import express from 'express';
import { createOrder, getOrders, getOrder, updateOrderStatus } from '../controllers/orderController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/orders').post(createOrder).get(protect, getOrders);
router.route('/orders/:id').get(protect, getOrder).put(protect, updateOrderStatus);

export default router;