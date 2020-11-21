import { ClassRoomSuccessPayload } from './class-room-success.payload';

export interface GetClassRoomsSuccessPayload {
  data: ClassRoomSuccessPayload[];
  records_count: number;
}
