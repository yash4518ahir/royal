
const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    status:{
        type:Boolean,
        default:true
    },
    roleId:{
        type:Schema.Types.ObjectId,
        ref:"roles"
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }

})

module.exports = mongoose.model("users",userSchema)
