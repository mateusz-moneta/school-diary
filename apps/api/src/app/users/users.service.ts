import { Injectable } from '@angular/core';
import { InjectRepository } from '@nestjs/typeorm';

import { RegisterData, User } from '@school-diary/shared';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserRepository) private readonly userRepository: UserRepository) {}

  create(registerData: RegisterData): Promise<User> {
    return this.userRepository.createUser(registerData);
  }
}

