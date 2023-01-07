// Route for listing all the tasks for a given date
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Gets back all the tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.json({message: error});
    }
});

// Gets backs tasks based on a specified date
router.post('/', async (req, res) => {
    try {
        const tasks = await Task.find({ //query today up to tonight
            date: req.body.date,
        });
        res.json(tasks);
    } catch (error) {
        res.json({message: error});
    }
});

module.exports = router;