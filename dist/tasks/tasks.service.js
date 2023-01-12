"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const date_fns_1 = require("date-fns");
let TasksService = class TasksService {
    constructor(taskModel) {
        this.taskModel = taskModel;
        this.taskCount = 0;
    }
    async insertTask(description) {
        const taskID = this.taskCount;
        const newTask = new this.taskModel({
            taskId: taskID,
            description: description
        });
        this.taskCount += 1;
        const savedTask = await newTask.save();
        return savedTask;
    }
    async getTasks() {
        const tasks = await this.taskModel.find().exec();
        return tasks.map(task => ({
            id: task.id,
            taskId: task.taskId,
            description: task.description,
            date: task.date,
        }));
    }
    async getTaskByDate(searchDate) {
        const date = new Date(searchDate);
        const tasks = await this.taskModel.find({
            date: {
                $gt: (0, date_fns_1.startOfDay)(date),
                $lt: (0, date_fns_1.endOfDay)(date)
            },
        });
        return tasks.map(task => ({
            id: task.id,
            taskId: task.taskId,
            description: task.description,
            date: task.date,
        }));
    }
    async updateTask(taskId, newDescription) {
        const result = await this.taskModel.findOneAndUpdate({ taskId: taskId }, { description: newDescription }, { new: true });
        return result;
    }
};
TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Task')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map