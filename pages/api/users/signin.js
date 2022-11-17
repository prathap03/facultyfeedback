

import dbConnect from "../../../utils/dbconnect"
import User from "../../../utils/models/User"
import { generateToken } from "../../../utils/utils";
import bcrypt from 'bcrypt';



export default async function handler(req,res){

await dbConnect()
    try{
        const user = await User.findOne({ rollNo: req.body.rollNo });
        if (user) {
          
            if (bcrypt.compareSync(req.body.password, user.password)) {
            
                res.send({
                    _id: user.id,
                    rollNo: user.rollNo,
                    token: generateToken(user)
                })
                res.redirect("/")
              }
            }else{
                res.status(401).send({message: 'Invalid RollNo or password'});
            }
        
    } catch(error){
        console.log(error)
        res.status(400).send(error)
    }
}
