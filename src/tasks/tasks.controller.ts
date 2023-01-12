import { Controller, Get, Body, Post, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @UseGuards(AuthGuard('basic'))
  @Get('/tasks')
  async getAllTasks() {
    const tasks = await this.taskService.getTasks();
    return tasks;
  }

  @UseGuards(AuthGuard('basic'))
  @Post('/tasks')
  async getTasksByDate(
    @Body('date') date: Date
  ) {
    const tasks = await this.taskService.getTaskByDate(date);
    return tasks;
  }

  @UseGuards(AuthGuard('basic'))
  @Post('/addtask')
  async addTask(
    @Body('description') description: string
  ) {
    const savedTask = await this.taskService.insertTask(description);
    return savedTask;
  }

  @UseGuards(AuthGuard('basic'))
  @Post('/modifytask')
  async modifyTask(
    @Body('taskId') taskId: number,
    @Body('description') description: string
  ) {
    const updatedTask = await this.taskService.updateTask(taskId, description);
    return updatedTask;
  }
}
