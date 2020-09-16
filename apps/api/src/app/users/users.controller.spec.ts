import { Test, TestingModule } from '@nestjs/testing';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UserSController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();
  });
});
