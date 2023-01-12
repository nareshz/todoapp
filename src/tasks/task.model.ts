import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
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

export interface Task extends mongoose.Document {
    taskId: number;
    description: string;
    date: Date;
}