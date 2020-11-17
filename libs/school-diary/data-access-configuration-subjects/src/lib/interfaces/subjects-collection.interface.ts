import { Subject } from '@school-diary/school-diary/domain';

export interface SubjectsCollection {
  data: Subject[],
  recordsCount: number
}
