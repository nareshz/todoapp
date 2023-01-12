import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { startOfDay, endOfDay } from 'date-fns';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  private taskCount: number = 0;

  constructor(
    @InjectModel('Task') private readonly taskModel: Model<Task>,
  ) {}

  async insertTask(description: string) {
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

  async getTaskByDate(searchDate: Date) {
    const date = new Date(searchDate);
    const tasks = await this.taskModel.find({ //query today up to tonight
        date: { 
            $gt: startOfDay(date),
            $lt: endOfDay(date)
        },
    });
    return tasks.map(task => ({
      id: task.id,
      taskId: task.taskId,
      description: task.description,
      date: task.date,
    }));
  }
  
  async updateTask(taskId: number, newDescription: string) {
    const result = await this.taskModel.findOneAndUpdate(
      { taskId: taskId },
      { description: newDescription },
      { new: true }
    );
    return result;
  }
}
