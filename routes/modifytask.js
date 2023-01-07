// Route for adding a new task
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.get('/', (req, res) => {
    res.send('We are modifying a task');
});

// Modifies the task with a new description finding by taskId
router.post('/', async (req, res) => {
    try {
        const result = await Task.findOneAndUpdate(
            { taskId: req.body.taskId },
            { description: req.body.description },
            { new: true }
        );
        res.json(result);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;