const Todolist = require('../models/todolist');



exports.getIndex =(req,res) =>
{
    res.send('welcome to our todo app');
};
exports.getAll = (req,res) =>
    {
        Todolist.find()
        .then(todos =>
            {
                res.status(200).json(todos);
            })
            .catch(err =>
                {
                    throw err;
                })
    }


exports.addTask =(req,res) =>
{
    
    const taskName = req.params.taskName;
    const todolist = new Todolist({
        taskName:taskName
              });


todolist.save()
.then(task => {
    return res.status(200).json({task:{task}});
    
})
.catch(err => {
    console.log(err);
})

};

exports.addSubTask = (req,res) =>
{
    const subtaskName = req.params.subtaskName;
    const taskName = req.params.taskName;


    Todolist.findOne({taskName:taskName})
    .then(task =>
        {   let name = task.taskName;
            let newSubTask = {
                subtaskName:subtaskName
            };

            //task.subtasks.subtaskName = subtaskName;
            task.subtasks.push(newSubTask);
            task.save()
            .then(task =>
                {
                    return res.status(200).json({todo:task,message:"sub task was added"});
                })
                .catch(err =>
                    {
                        throw err;
                    });


        })
        .catch(err => {
           console.log(err);

        });
   
    
};

exports.isComplete = (req,res) =>
{

    const isComplete = req.params.isComplete;
    const taskName = req.params.taskName;
    const subtaskName = req.params.subtaskName;

    
   if(isComplete === "true")
    {
    
       Todolist.findOne({taskName:taskName})
       .then(task => 
        {
            
          const subtask =  task.subtasks.find(subtask => {

                return subtask.subtaskName === subtaskName;
            });
            if(subtask)
            {
                subtask.isComplete = true;
                task.save()
                .then(sub =>
                    {
                        res.status(200).json(sub);
                    })
                    .catch(err =>
                        {
                            throw err;
                        });
            }

            

        })
        .catch(err =>
            {
                throw err;
            });
    }

};
exports.deleteTask = (req,res) =>
{
    const taskName = req.params.taskName;
    console.log(taskName)
    Todolist.deleteOne({taskName:taskName})
    .then(results =>
        {
           res.status(200).json(results); 
        })
        .catch(err =>
            {
                throw err;
            })
};

exports.deleteSubTask = (req,res) =>
{
    const taskName = req.params.taskName;
    const subtaskName = req.params.subtaskName;
    Todolist.findOne({taskName:taskName})
    .then(task => 
     {
         
       const subTaskIndex =  task.subtasks.indexOf(subtask => {

             return subtask.subtaskName === subtaskName;
         })
         task.subtasks.splice(subTaskIndex)
         task.save()
         .then(task  =>{
             res.status(200).json(task);
         })
         .catch(err =>
            {
                throw err;
            })
         
     })
     .catch(err =>
        {
            throw err;
        })

   
}