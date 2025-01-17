import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
  orderNumber: {
    type: String,
    unique: true,
    required: true,
    default: () =>
      "ORD-" + Math.random().toString(36).substring(2, 8).toUpperCase(),
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set the current timestamp
    required: true,
  },
  customerInfo: {
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email",
      ],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
  },
  shippingAddress: {
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    city: {
      type: String,
      required: [true, "City is required"],
    },
    zipCode: {
      type: String,
      required: [true, "ZIP code is required"],
    },
    country: {
      type: String,
      required: [true, "Country is required"],
    },
  },
  orderItems: [
    {
      productId: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
    },
  ],
  paymentInfo: {
    method: {
      type: String,
      required: true,
      enum: ["credit_card", "paypal", "bank_transfer"],
    },
    status: {
      type: String,
      required: true,
      enum: ["pending", "completed", "failed"],
    },
  },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
