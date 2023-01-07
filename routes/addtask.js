// Route for adding a new task
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

taskCount = 0

router.get('/', (req, res) => {
    res.send('We are adding a task');
});

// Creates a new task
router.post('/', async (req, res) => {
    taskCount = taskCount + 1;
    const task = new Task({
        taskId: taskCount,
        description: req.body.description
        // date at the time of addition will be taken automatically
    });
    try {
        const savedTask = await task.save();
        res.json(savedTask); 
    } catch (error) {
        res.json({ message: err });
    }
});

module.exports = router;