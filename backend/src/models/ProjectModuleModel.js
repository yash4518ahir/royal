const mongoose=require("mongoose")
const Schema=mongoose.Schema

const projectModuleSchema=new Schema({
    projectId:{
        type:Schema.Types.ObjectId, 
        ref:"Project"
    },
    moduleName:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    estimatedHours:{
        type:Number,
        required:true
    },
    status:{
        type:String
    },
    startDate:{
        type:Date,
        required:true
    }
},{
    timestamps:true
})

module.exports=mongoose.model("projectModule",projectModuleSchema)