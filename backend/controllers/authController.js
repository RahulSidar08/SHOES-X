import {User} from "../models/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
const secret_key = process.env.SECRET_KEY;

export const userSignup = async (req,res) => {
    try{
        let {firstName,lastName, email, password } = req.body;
    
        let user = await User.findOne({email:email});
        if(user)
        {
            return res.status(401).send({
                success : false,
                message : "User Alredy exist,please login"
            })
        }
    
        const hashedPassword = await bcrypt.hash(password,10)
    
        let createUser = await User.create({
            firstName,
            lastName,
            email,
            password : hashedPassword
        })
    
        return res.status(200).send({
            success: true,
            message : "User Created Successfully",
            createUser
        })

    }catch(Error) {
        return res.status(500).send({
            Error
        })
    }

};


export const login = async (req,res) => {

    try {
        
            let {firstName,lastName,email,password}  = req.body;
        
            let user = await User.findOne({email:email});
            if(!user)
            {
                return res.status(401).send({
                    success: false,
                    message: "Invalid email or password",
                });
            }

            let checkPassword = await bcrypt.compare(password,user.password);

            if(!checkPassword)
            {
                return res.status(401).send({
                    success:false,
                    message: "Something went wrong"
                })
            }
            let token = jwt.sign(
                { email }, // Payload
                secret_key, // Secret key
                { expiresIn: '1h' } // Options
            );
            
        
            return res.status(200).send({
                success : true,
                message : "User Logged in Successfully",
                token,
                user : firstName +" "+ lastName
            })
        
    } catch (error) {
        return res.status(500).send({
            success:false,
            message : error.message
        })
    }
}