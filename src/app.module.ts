import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TasksModule, 
    MongooseModule.forRoot(
      `mongodb://nareshz:password@ac-usohh8h-shard-00-00.edxhl1z.mongodb.net:27017,ac-usohh8h-shard-00-01.edxhl1z.mongodb.net:27017,ac-usohh8h-shard-00-02.edxhl1z.mongodb.net:27017/todoapp?ssl=true&replicaSet=atlas-1346dg-shard-0&authSource=admin&retryWrites=true&w=majority`
    ),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
