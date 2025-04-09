const mongoose = require("mongoose")
const Schema = mongoose.Schema

const statusSchema = new Schema({
    statusName:{
        enum:['Pending','In Progress','Completed'],
        type:String,
        require:true,
        default:'Pending'
    }
},{
    timestamps:true
})

module.exports=mongoose.model("status",statusSchema)