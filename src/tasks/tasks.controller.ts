import { Controller, Get, Body, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller()
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get('/tasks')
  async getAllTasks() {
    const tasks = await this.taskService.getTasks();
    return tasks;
  }

  @Post('/tasks')
  async getTasksByDate(
    @Body('date') date: Date
  ) {
    const tasks = await this.taskService.getTaskByDate(date);
    return tasks;
  }

  @Post('/addtask')
  async addTask(
    @Body('description') description: string
  ) {
    const savedTask = await this.taskService.insertTask(description);
    return savedTask;
  }

  @Post('/modifytask')
  async modifyTask(
    @Body('taskId') taskId: number,
    @Body('description') description: string
  ) {
    const updatedTask = await this.taskService.updateTask(taskId, description);
    return updatedTask;
  }
}
