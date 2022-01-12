import UserModel from '../UserModel';

// use random email
const users: UserModel[] = [
  {
    uuid: '1',
    email: 'alucard@mail.com',
    image: '',
    name: 'Alucard',
    nip: '1234',
    password: '123456',
    role: 'admin',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    uuid: '2',
    email: 'beatrix@mail.com',
    image: '',
    name: 'Beatrix',
    nip: '1234',
    password: '123456',
    role: 'admin',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default users;
