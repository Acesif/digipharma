import userModel from '../model/userModel.js';
import { comparePassword, hashPassword } from '../Helpers/helper.js';
import JWT from 'jsonwebtoken';

export const registerController = async(req,res) =>{
    try {
        const {username,email,password} = req.body;
        //validation
        if(!username){
            return res.send({message:'Name is required'})
        }
        if(!email){
            return res.send({message:'Email is required'})
        }
        if(!password){
            return res.send({message:'Password is required'})
        }
        // check item
        const existingUser = await userModel.findOne({email})
        // existing item
        if(existingUser){
            return res.status(200).send({
                success: false,
                message: 'Account already exists. Please Log in'
            })
        }
        // register user
        const hashedPassword = await hashPassword(password);
        // save user
        const user = await new userModel({username,email,password: hashedPassword}).save()

        res.status(201).send({
            success: true,
            message: 'User successfully registered',
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Registration',
            error
        })
    }
}
// POST LOGIN
export const loginController = async (req,res) =>{
    try {
        const {email,password} = req.body;
        // validation
        if(!email || !password){
            return res.status(404).send({
                success: false,
                message: "Invalid email or password",

            })
        }
        // check user
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(404).send({
                success: false,
                message: "email not registered"
            })
        }
        const match = await comparePassword(password,user.password);
        if(!match){
            return res.status(200).send({
                success: false,
                message: "Invalid password"
            })
        }
        const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'});
        res.status(200).send({
            success: true,
            message: "Login successful",
            user:{
                name: user.username,
                email: user.email
            },
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Login",
            error
        })
    }
}

// test controller

export const testController = (req,res) =>{
    res.send("Protected Route");
}