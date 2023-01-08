var mongoose = require('mongoose');

module.exports = function(db) {
    const TaskSchema = mongoose.Schema({
        taskId: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    });
    return db.model('Tasks', TaskSchema);
}