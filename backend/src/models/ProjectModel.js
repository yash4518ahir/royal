const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type:String,
        required: true
    },
    technology:{
        enum:['MERN','Python','Java','PHP','Larvel','Flutter'],
        type:String,
        required:true
    },
    estimatedHours:{
        type:String,
        required: true
    },
    startDate:{
        type:Date,
        required:true
    },
    completionDate:{
        type:Date,
        required:true
    }
},{
    timestamps: true
})
module.exports = mongoose.model('Project', projectSchema);