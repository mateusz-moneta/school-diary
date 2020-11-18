import { CreateClassRoomRequestPayload } from './create-class-room.request-payload';

export interface UpdateClassRoomRequestPayload extends CreateClassRoomRequestPayload {
  id: number;
}
