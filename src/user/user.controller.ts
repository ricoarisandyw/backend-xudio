import { Controller, Get, Post } from '@nestjs/common';
import { success } from 'utils/wrapper';

@Controller('user')
export class UserController {
  @Post('/login')
  loginUser(): string {
    return success({
      userID: '1',
      isSuccess: true,
      token: 'djso99sd8djisdjsidsjisdjis',
    });
  }

  @Get(':userId')
  getUserById(): string {
    return success({
      uuid: '1',
      email: 'alucard@mail.com',
      image:
        'https://i.picsum.photos/id/45/200/200.jpg?hmac=D9U6XUZsrWfv7UlIM9gKYtENGZ6jeG3H6qGxMT5gxsY',
      name: 'Alucard',
      nip: '1234',
      password: '123456',
      role: 'admin',
      createdAt: '2022-01-10T14:06:55.441Z',
      updatedAt: '2022-01-10T14:06:55.441Z',
    });
  }

  @Get(':userId/course')
  getUserCourseById(): string {
    return success([
      {
        uuid: '2',
        name: 'Course Soldering',
        description: 'Practice soldering',
        companyID: '1',
        progress: 0.3,
        beginDate: '2022-01-10T14:06:55.441Z',
        dueDate: '2022-01-10T14:06:55.441Z',
        createdAt: '2022-01-10T14:06:55.441Z',
        updatedAt: '2022-01-10T14:06:55.441Z',
      },
    ]);
  }

  @Get(':userId/summary')
  getUserSummaryById(): string {
    return success({
      course: '4',
      activeCourse: '3',
      dueCourse: '1',
      passCourse: '2',
      notPassCourse: '2',
    });
  }

  @Get(':userId/score')
  getUserScoreById(): string {
    return success([
      {
        courseID: '2',
        name: 'Course Soldering',
        description: 'Practice soldering',
        dueDate: '2022-01-10T14:06:55.441Z',
        status: 'active',
        score: 80,
        minScore: 70,
        maxScore: 100,
        createdAt: '2022-01-10T14:06:55.441Z',
        updatedAt: '2022-01-10T14:06:55.441Z',
      },
    ]);
  }

  @Get(':userId/rooms')
  getUserRoomById(): string {
    return success([
      {
        name: 'Room 1',
        filled: 2,
        capacity: 10,
        createdAt: '2022-01-10T14:06:55.441Z',
        updatedAt: '2022-01-10T14:06:55.441Z',
      },
      {
        name: 'Room 2',
        filled: 2,
        capacity: 10,
        createdAt: '2022-01-10T14:06:55.441Z',
        updatedAt: '2022-01-10T14:06:55.441Z',
      },
    ]);
  }
}
