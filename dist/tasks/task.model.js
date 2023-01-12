"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchema = void 0;
const mongoose = require("mongoose");
exports.TaskSchema = new mongoose.Schema({
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
//# sourceMappingURL=task.model.js.map