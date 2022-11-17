import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    rollNo:String,
    password:{
        type:String,
    
    }
})

module.exports = mongoose.models.User || mongoose.model('User',UserSchema);