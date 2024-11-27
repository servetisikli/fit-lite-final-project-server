import Order from "../models/orderModel.js";

// Get user orders
export const getOrderDetails = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }); // Fetch only the orders of the logged-in user
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Could not fetch orders", error: error.message });
  }
};

// Create a new order
export const createOrder = async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    return res.status(400).json({ message: "No order items" });
  } else {
    const order = new Order({
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    try {
      const createdOrder = await order.save();
      res.status(201).json(createdOrder);
    } catch (error) {
      res.status(500).json({ message: "Could not create order", error: error.message });
    }
  }
};