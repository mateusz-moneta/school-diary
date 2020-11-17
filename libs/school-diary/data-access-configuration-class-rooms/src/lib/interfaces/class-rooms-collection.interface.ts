import { ClassRoom } from '@school-diary/school-diary/domain';

export interface ClassRoomsCollection {
  data: ClassRoom[],
  recordsCount: number
}
