const Todolist = require('../models/todolist');



exports.getIndex =(req,res) =>
{
    res.send('welcome to our todo app');
};
exports.addTask =(req,res) =>
{
    
    const taskName = req.params.taskName;
    const todolist = new Todolist({
        taskName:taskName,
        isComplete:false,
        subtasks:[]
        });


todolist.save()
.then(task => {
    return res.status(200).json({task:{task}});
    
})
.catch(err => {
    console.log(err);
})

};

exports.addSubtask = (req,res) =>
{
    const subtaskName = req.params.subtaskName;
    const taskName = req.params.taskName;


    Todolist.find({taskName:taskName})
    .then(task =>
        {
            console.log(task)
            task.name =subtaskName;
            task.subtasks = {subtaskName:subtaskName,isComplete:false};
            task.save()
            .then(task =>
                {
                    console.log(task);
                })


        })
        .catch(err => {
           console.log(err);

        });
   
    
};