import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyController } from './company/company.controller';
import { UserController } from './user/user.controller';
import { CourseController } from './course/course.controller';
import { RoomController } from './room/room.controller';
import { ScoreController } from './score/score.controller';

@Module({
  imports: [],
  controllers: [AppController, CompanyController, UserController, CourseController, RoomController, ScoreController],
  providers: [AppService],
})
export class AppModule {}
