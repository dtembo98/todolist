const mongoose = require('mongoose')
const schema = mongoose.Schema;


const todolistSchema = new schema({


       taskName: {type:String,required:true},
       isComplete:{type:Boolean},
       subtasks:[{subtaskName:{type:String},isComplete:{type:Boolean}}]
   


});


module.exports = mongoose.model('todolist',todolistSchema);
