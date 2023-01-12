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
