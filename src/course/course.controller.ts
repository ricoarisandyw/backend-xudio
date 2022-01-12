import { Controller, Get, Post } from '@nestjs/common';
import { success } from 'utils/wrapper';

@Controller('course')
export class CourseController {
  @Post('/upload')
  uploadCourse(): string {
    return success({
      isSuccess: true,
      token: 'djso99sd8djisdjsidsjisdjis',
    });
  }

  @Get()
  getCourse(): string {
    return success([
      {
        uuid: '2',
        name: 'Course Soldering',
        description: 'Practice soldering',
        companyID: '1',
        beginDate: '2022-01-10T14:06:55.441Z',
        dueDate: '2022-01-10T14:06:55.441Z',
        createdAt: '2022-01-10T14:06:55.441Z',
        updatedAt: '2022-01-10T14:06:55.441Z',
      },
    ]);
  }

  @Get(':courseId')
  getCourseById(): string {
    return success({
      uuid: '2',
      name: 'Course Soldering',
      description: 'Practice soldering',
      companyID: '1',
      beginDate: '2022-01-10T14:06:55.441Z',
      dueDate: '2022-01-10T14:06:55.441Z',
      createdAt: '2022-01-10T14:06:55.441Z',
      updatedAt: '2022-01-10T14:06:55.441Z',
    });
  }

  @Get(':courseId/files')
  getCourseFilesById(): string {
    return success([
      {
        courseId: '121',
        fileName: 'haha',
        fileUrl: 'www.oke.co/ini_gambar.png',
        createdAt: '2022-01-10T14:06:55.441Z',
        updatedAt: '2022-01-10T14:06:55.441Z',
      },
      {
        courseId: '1213',
        fileName: 'haha 2',
        fileUrl: 'www.oke.co/ini_gambar_2.png',
        createdAt: '2022-01-10T14:06:55.441Z',
        updatedAt: '2022-01-10T14:06:55.441Z',
      },
    ]);
  }

  @Post(':courseId/join')
  joinCourse(): string {
    return success({
      isSuccess: true,
    });
  }
}
