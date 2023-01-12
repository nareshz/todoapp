/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { TasksService } from './tasks.service';
export declare class TasksController {
    private readonly taskService;
    constructor(taskService: TasksService);
    getAllTasks(): Promise<{
        id: any;
        taskId: number;
        description: string;
        date: Date;
    }[]>;
    getTasksByDate(date: Date): Promise<{
        id: any;
        taskId: number;
        description: string;
        date: Date;
    }[]>;
    addTask(description: string): Promise<import("./task.model").Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    modifyTask(taskId: number, description: string): Promise<(import("./task.model").Task & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
}
