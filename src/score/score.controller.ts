import { Controller, Get, Post } from '@nestjs/common';
import { success } from 'utils/wrapper';

@Controller('score')
export class ScoreController {
  @Get('/user/:userId/total')
  getUserTotalScoreById(): string {
    return success({
      userId: '213131',
      totalScore: '1000',
      averageScore: '84',
      status: 'active',
      minScore: '80',
      maxScore: '90',
      minScoreId: '121',
      maxScoreId: '123',
    });
  }

  @Post('/score')
  postScore(): string {
    return success({
      isSuccess: true,
    });
  }
}
