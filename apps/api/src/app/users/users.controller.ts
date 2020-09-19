import { Body, Controller, Post } from '@nestjs/common';

import { RegisterData } from '@school-diary/shared';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('register')
  register(@Body() registerData: RegisterData): Promise<User> {
    return this.userService.create(registerData);
  }
}
