import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"

//Placing order through COD
const placeOrder = async (req,res) => {
    try {
        const { userId, amount, items, address} = req.body;
        const orderData = {
            userId, amount, items,address,
            paymentMethod:"COD",
            payemnt:false,
            date:Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})
        res.json({success:true,message:"Order Placed"})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
        
    }
}

//Placing order through stripe
const placeOrderStripe = async (req,res) => {

}

//Placing order through razorpay
const placeOrderRazorpay = async (req,res) => {

}

//All orders data for admin panel
const allOrders = async (req,res) => {
    try {
        const orders = await orderModel.find({})
        res.json({success:true,orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
        
    }
}

//user order data for frontend
const userOrders = async (req,res) => {
    try {
        const {userId} = req.body;

        const orders = await orderModel.find({ userId })
        res.json({success:true,orders})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

//update order status for admin panel
const updateStatus = async (req,res) => {
    try {
        
        const { orderId, status} = req.body

        await orderModel.findByIdAndUpdate(orderId,{status})
        res.json({success:true,message:"Status Updated."})


    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

export {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus}


