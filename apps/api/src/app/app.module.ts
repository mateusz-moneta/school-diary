import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { UserType } from './users/entities/user-type.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Lato2020',
      database: 'postgres',
      entities: [User, UserType],
      synchronize: true,
    }),
    UsersModule
  ]
})
export class AppModule {}
