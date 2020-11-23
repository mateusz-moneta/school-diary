import { User } from '@school-diary/school-diary/domain';

export interface TeachersCollection {
  data: User[];
  records_count: number;
}
