import { EntityRepository, Repository } from 'typeorm';

import { RegisterData } from '@school-diary/shared';
import { User } from '../entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(registerData: RegisterData): Promise<User> {
    const user = new User();

    user.firstName = registerData.firstName;
    user.lastName = registerData.lastName;
    user.email = registerData.email;
    user.password = registerData.password;
    user.userType.userType = registerData.userType;
    user.isActive = true;

    return await this.manager.save(user);
  };
}

