import express from 'express'
import { allOrders, updateStatus, userOrders, placeOrder, placeOrderRazorpay, placeOrderStripe } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'



const orderRouter = express.Router()

//Admin features
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

// Payment features
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

//User feature
orderRouter.post('/userOrders',authUser,userOrders)

export default orderRouter