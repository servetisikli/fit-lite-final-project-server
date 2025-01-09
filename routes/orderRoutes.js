import express from 'express';
import { createOrder, getOrders, getOrder, updateOrderStatus } from '../controllers/orderController.js';

const router = express.Router();

router.route('/orders').post(createOrder).get(getOrders);
router.route('/orders/:id').get(getOrder).put(updateOrderStatus);

export default router;