const express = require('express');
const app = express();
const connectDB = require('../api/DB/connect')
require('dotenv').config();
const authRoute = require('./Route/Auth');
const userRoute = require('./Route/User');
const productRoute = require('./Route/product');
const cartRoute = require('./Route/Cart');
const orderRoute = require('./Route/Order');
const stripeRoute = require('./Route/Stripe');
const cors = require('cors');

const vercel= ''

// middle wire
app.use(cors())
app.use(express.json());
// API 
app.use('/api/auth',authRoute)
app.use('/api/users',userRoute)
app.use('/api/products',productRoute)
app.use('/api/carts',cartRoute)
app.use('/api/orders',orderRoute)
app.use('/api/checkout',stripeRoute)



const start = async()=>{
    
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(5000,()=>console.log('Server is listing to 5000'));
    } catch (error) {
        console.log(error); 
    }
   
}

start();