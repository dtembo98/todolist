const mongoose = require('mongoose')
const schema = mongoose.Schema;


const todolistSchema = new schema({


       taskName: {type:String,required:true},
       isComplete:{type:Boolean,default:false},
       subtasks:[{subtaskName:{type:String,required:true},isComplete:{type:Boolean,default:false}}]
   


});


module.exports = mongoose.model('todolist',todolistSchema);
