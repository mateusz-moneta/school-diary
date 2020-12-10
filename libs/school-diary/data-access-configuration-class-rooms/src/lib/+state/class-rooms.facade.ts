import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromClassRooms from './class-rooms.reducer';
import { classRoomsQuery } from './class-rooms.selectors';
import { CreateClassRoomRequestPayload } from '../request-payloads/create-class-room.request-payload';
import { DeleteClassRoomRequestPayload } from '../request-payloads/delete-class-room.request-payload';
import { fromClassRoomsActions } from './class-rooms.actions';
import { GetClassRoomRequestPayload } from '../request-payloads/get-class-room.request-payload';
import { GetClassRoomsRequestPayload } from '../request-payloads/get-class-rooms.request-payload';
import { UpdateClassRoomRequestPayload } from '../request-payloads/update-class-room.request-payload';

@Injectable()
export class ClassRoomsFacade {
  classRooms$ = this.store.pipe(select(classRoomsQuery.getClassRooms));
  selectedClassRoom$ = this.store.pipe(select(classRoomsQuery.getSelectedClassRoom));

  constructor(private store: Store<fromClassRooms.ClassRoomsPartialState>) {}

  createClassRoom(createClassRoomRequestPayload: CreateClassRoomRequestPayload): void {
    this.store.dispatch(new fromClassRoomsActions.CreateClassRoom(createClassRoomRequestPayload));
  }

  deleteClassRoom(deleteClassRoomRequestPayload: DeleteClassRoomRequestPayload): void {
    this.store.dispatch(new fromClassRoomsActions.DeleteClassRoom(deleteClassRoomRequestPayload));
  }

  getClassRoom(getClassRoomRequestPayload: GetClassRoomRequestPayload): void {
    this.store.dispatch(new fromClassRoomsActions.GetClassRoom(getClassRoomRequestPayload));
  }

  getClassRooms(getClassRoomsRequestPayload: GetClassRoomsRequestPayload = { page: 1, limit: 10 }): void {
    this.store.dispatch(new fromClassRoomsActions.GetClassRooms(getClassRoomsRequestPayload));
  }

  updateClassRoom(updateClassRoomRequestPayload: UpdateClassRoomRequestPayload): void {
    this.store.dispatch(new fromClassRoomsActions.UpdateClassRoom(updateClassRoomRequestPayload));
  }
}
