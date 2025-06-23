import userModel from '../models/userModel.js'

//Add products to user cart
const addToCart = async (req, res) => {
    try {
        const { userId, itemId, size } = req.body;

        // Find the user and get their current cart data
        const userData = await userModel.findById(userId);
        let cartData = userData.cartData;

        // Update cartData with new item or increment item quantity
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = { [size]: 1 };  // Add new item with size
        }

        // Update user data with the new cartData
        await userModel.findByIdAndUpdate(userId, { cartData });

        res.json({ success: true, message: "Added to cart." });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};




//update user cart
const updateCart = async (req,res) => {
    try {
        const {userId, quantity, itemId, size} = req.body;

    const userData = await userModel.findById(userId)
    let cartData = await userData.cartData;

    cartData[itemId][size] = quantity

    await userModel.findByIdAndUpdate(userId, {cartData})
    res.json({success:true,message:"Cart Updated."})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
    
}

//get user cart data
const getUserCart = async (req,res) => {
    try {
        const { userId } = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        res.json({success:true, cartData});

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}


export {addToCart , updateCart, getUserCart}