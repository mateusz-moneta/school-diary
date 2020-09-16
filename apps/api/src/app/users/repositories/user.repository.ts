import { EntityRepository, Repository } from 'typeorm';

import { RegisterData, UserTypeDefinition } from '@school-diary/shared';
import { User } from '../entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(registerData: RegisterData) {
    const user = new User();

    user.email = registerData.email;
    user.username = registerData.username;
    user.password = registerData.password;
    user.userType.userType = UserTypeDefinition.STANDARD_USER;
    user.isActive = true;

    return await this.save(user);
  };
}

