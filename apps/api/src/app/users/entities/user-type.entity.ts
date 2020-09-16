import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { UserTypeDefinition } from '@school-diary/shared';

@Entity()
export class UserType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('enum', { enum: UserTypeDefinition })
  userType: string;
}
