const express = require('express');
const router = express.Router();
const todoControllers = require('../controllers/todolist');

router.get('/',todoControllers.getIndex);
router.post('/api/addtask/:taskName',todoControllers.addTask);
router.post('/api/:taskName/:subtaskName',todoControllers.addSubtask);




module.exports = router;