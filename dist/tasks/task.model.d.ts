import * as mongoose from 'mongoose';
export declare const TaskSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    taskId: number;
    date: Date;
    description: string;
}>;
export interface Task extends mongoose.Document {
    taskId: number;
    description: string;
    date: Date;
}
