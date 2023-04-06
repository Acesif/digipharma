import userModel from '../Model/userModel.js';
import { hashPassword } from '../Helpers/helper.js';

export const registerController = async(req,res) =>{
    try {
        const {userName,email,password} = req.body;
        //validation
        if(!userName){
            return res.send({error:'Name is required'})
        }
        if(!email){
            return res.send({error:'Email is required'})
        }
        if(!password){
            return res.send({error:'Password is required'})
        }
        // check item
        const existingUser = await userModel.findOne({email})
        // existing item
        if(existingUser){
            return res.status(200).send({
                success: true,
                message: 'Account already exists. Please Log in'
            })
        }
        // register user
        const hashedPassword = await hashPassword(password);
        // save user
        const user = new userModel({userName,email,password: hashedPassword}).save()

        res.status(201).send({
            success: true,
            message: 'User successfully registered',
            user,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Registration',
            error,
        })
    }
}