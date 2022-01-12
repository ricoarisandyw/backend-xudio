import { Controller, Get } from '@nestjs/common';
import companies from 'model/seed/company.seed';
import { success } from 'utils/wrapper';

@Controller('company')
export class CompanyController {
  @Get()
  getCompany(): string {
    return success([
      {
        uuid: '2',
        name: 'PT. Jaya Abadi',
        dueDate: '2022-01-10T14:06:55.441Z',
        createdAt: '2022-01-10T14:06:55.441Z',
        updatedAt: '2022-01-10T14:06:55.441Z',
      },
    ]);
  }

  @Get(':companyId')
  getCompanyByID(): string {
    return success({
      uuid: '2',
      name: 'PT. Jaya Abadi',
      dueDate: '2022-01-10T14:06:55.441Z',
      createdAt: '2022-01-10T14:06:55.441Z',
      updatedAt: '2022-01-10T14:06:55.441Z',
    });
  }

  @Get(':companyId/user')
  getUserByCompanyID(): string {
    return success([
      {
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
      },
      {
        uuid: '2',
        email: 'lesley@mail.com',
        image:
          'https://i.picsum.photos/id/45/200/200.jpg?hmac=D9U6XUZsrWfv7UlIM9gKYtENGZ6jeG3H6qGxMT5gxsY',
        name: 'Lesley',
        nip: '1234',
        password: '123456',
        role: 'admin',
        createdAt: '2022-01-10T14:06:55.441Z',
        updatedAt: '2022-01-10T14:06:55.441Z',
      },
    ]);
  }
}
