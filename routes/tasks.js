var taskController = require('./../controllers/task');

module.exports = function(app) {
    app.get('/tasks', taskController.getAllTasks);
    app.post('/tasks', taskController.getTaskByDate);
    app.post('/addtask', taskController.addTask);
    app.post('/modifytask', taskController.modifyTask);
}