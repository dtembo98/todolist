const express = require('express');
const router = express.Router();
const todoControllers = require('../controllers/todolist');

router.get('/',todoControllers.getIndex);
router.get('/api/getall',todoControllers.getAll);
router.post('/api/addtask/:taskName',todoControllers.addTask);
router.post('/api/:taskName/:subtaskName',todoControllers.addSubTask);
router.patch('/api/isComplete/:taskName/:subtaskName/:isComplete',todoControllers.isComplete);
router.delete('/api/deletetask/:taskName',todoControllers.deleteTask);
router.delete('/api/delete/:taskName/:subtaskName',todoControllers.deleteSubTask);





module.exports = router;