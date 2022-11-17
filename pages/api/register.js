

import dbConnect from "../../utils/dbconnect"
import User from "../../utils/models/User"
import { generateToken } from "../../utils/utils";
import bcrypt from 'bcrypt';



export default async function handler(req,res){

await dbConnect()
    try{
        const user = new User({
            rollNo: req.body.rollNo,
            password: bcrypt.hashSync('srec@123', 8),
          });
          const createdUser = await user.save();
          res.send({
            _id: createdUser._id,
            rollNo: createdUser.rollNo,
            password: createdUser.password,
            token: generateToken(createdUser),
          });
        res.redirect("/")
    } catch(error){
        console.log(error)
        res.status(400).send(error)
    }
}
