const mongoose=require("mongoose")
const Schema=mongoose.Schema

const userTaskSchema=new Schema({
    userId:{
        type:Schema.Types.ObjectId, 
        ref:"users"
    },
    taskId:{
        type:Schema.Types.ObjectId, 
        ref:"task"
    }
},{
    timestamps:true
})

module.exports=mongoose.model("userTask",userTaskSchema)