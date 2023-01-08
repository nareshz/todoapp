var db = require('./../settings/main_db');
var task = require('./../models/Task')(db);

taskCount = 0;

module.exports = {
    getAllTasks: async function (req, res) {
        try {
            const tasks = await task.find();
            res.json(tasks);
        } catch (error) {
            res.json({message: error});
        }
    },

    getTaskByDate: async function (req, res) {
        try {
            const tasks = await task.find({ //query today up to tonight
                date: req.body.date,
            });
            res.json(tasks);
        } catch (error) {
            res.json({message: error});
        }
    },

    addTask: async function (req, res) {
        taskCount++;
        const entity = new task({
            taskId: taskCount,
            description: req.body.description
        });
        try {
            const savedTask = await entity.save();
            res.json(savedTask); 
        } catch (error) {
            res.json({ message: error });
        }
    },

    modifyTask: async function(req, res) {
        try {
            const result = await task.findOneAndUpdate(
                { taskId: req.body.taskId },
                { description: req.body.description },
                { new: true }
            );
            res.json(result);
        } catch (error) {
            res.json({ message: error });
        }
    },
};