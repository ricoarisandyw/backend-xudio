import { Controller, Get } from '@nestjs/common';
import { success } from 'utils/wrapper';

@Controller('room')
export class RoomController {
  @Get()
  getRooms(): string {
    return success([
      {
        name: 'Room 1',
        filled: 2,
        capacity: 10,
        createdAt: '2022-01-10T14:06:55.441Z',
        updatedAt: '2022-01-10T14:06:55.441Z',
      },
    ]);
  }

  @Get(':roomId/users')
  getRoomUsersById(): string {
    return success([
      {
        uuid: '1212',
        name: 'User 1',
        createdAt: '2022-01-10T14:06:55.441Z',
        updatedAt: '2022-01-10T14:06:55.441Z',
      },
      {
        uuid: '1213',
        name: 'User 2',
        createdAt: '2022-01-10T14:06:55.441Z',
        updatedAt: '2022-01-10T14:06:55.441Z',
      },
    ]);
  }
}
