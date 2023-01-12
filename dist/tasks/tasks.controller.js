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
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const tasks_service_1 = require("./tasks.service");
const passport_1 = require("@nestjs/passport");
let TasksController = class TasksController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    async getAllTasks() {
        const tasks = await this.taskService.getTasks();
        return tasks;
    }
    async getTasksByDate(date) {
        const tasks = await this.taskService.getTaskByDate(date);
        return tasks;
    }
    async addTask(description) {
        const savedTask = await this.taskService.insertTask(description);
        return savedTask;
    }
    async modifyTask(taskId, description) {
        const updatedTask = await this.taskService.updateTask(taskId, description);
        return updatedTask;
    }
};
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('basic')),
    (0, common_1.Get)('/tasks'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "getAllTasks", null);
__decorate([
    (0, common_1.Post)('/tasks'),
    __param(0, (0, common_1.Body)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "getTasksByDate", null);
__decorate([
    (0, common_1.Post)('/addtask'),
    __param(0, (0, common_1.Body)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "addTask", null);
__decorate([
    (0, common_1.Post)('/modifytask'),
    __param(0, (0, common_1.Body)('taskId')),
    __param(1, (0, common_1.Body)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "modifyTask", null);
TasksController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TasksController);
exports.TasksController = TasksController;
//# sourceMappingURL=tasks.controller.js.map