const mongoose=require("mongoose")
const Schema=mongoose.Schema

const projectTeamSchema=new Schema({
    projectId:{
        type:Schema.Types.ObjectId,
        ref:"Project",
        require:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"users",
        require:true
    }

},{
    timestamps:true
})

module.exports=mongoose.model("projectTeam",projectTeamSchema)