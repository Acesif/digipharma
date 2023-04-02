import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js';
import authRoutes from './Routes/authRoute.js'

//config .env
dotenv.config(); 

// rest obj
const app = express();

//database config
connectDB();

//middleware
app.use(express.json())
app.use(morgan('dev'))

//routes
app.unsubscribe('/api/v1/auth',authRoutes)

// rest api
app.get('/',(req,res)=>{
    res.send('<h1>Welcome to DigiPharma</h1>')
})
//port
const PORT = process.env.PORT || 8080
// run listen
app.listen(PORT, ()=>{
    console.log(`server running on ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white);
})