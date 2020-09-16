import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserType } from './entities/user-type.entity';

@Module({
  controllers: [UsersController],
  imports: [
    TypeOrmModule.forFeature([User, UserType]),
  ],
  exports: [TypeOrmModule],
  providers: [UsersService]
})
export class UsersModule {}
