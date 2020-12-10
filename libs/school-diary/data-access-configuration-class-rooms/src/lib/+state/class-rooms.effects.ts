import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';

import { ClassRoomsApiService } from '../services/class-rooms-api.service';
import { ClassRoomsPartialState } from './class-rooms.reducer';
import { CreateClassRoomFailPayload } from '../payloads/create-class-room-fail.payload';
import { CreateClassRoomSuccessPayload } from '../payloads/create-class-room-success.payload';
import { DeleteClassRoomFailPayload } from '../payloads/delete-class-room-fail.payload';
import { DeleteClassRoomSuccessPayload } from '../payloads/delete-class-room-success.payload';
import { fromClassRoomsActions } from './class-rooms.actions';
import { GetClassRoomFailPayload } from '../payloads/get-class-room-fail.payload';
import { GetClassRoomSuccessPayload } from '../payloads/get-class-room-success.payload';
import { GetClassRoomsFailPayload } from '../payloads/get-class-rooms-fail.payload';
import { GetClassRoomsSuccessPayload } from '../payloads/get-class-rooms-success.payload';
import { UpdateClassRoomFailPayload } from '../payloads/update-class-room-fail.payload';
import { UpdateClassRoomSuccessPayload } from '../payloads/update-class-room-success.payload';

@Injectable()
export class ClassRoomsEffects {

  @Effect()
  createClassRoom$ = this.dp.pessimisticUpdate(fromClassRoomsActions.Types.CreateClassRoom, {
    run: (action: fromClassRoomsActions.CreateClassRoom) =>
      this.classRoomsApiService.createClassRoom(action.payload)
        .pipe(
          map((payload: CreateClassRoomSuccessPayload) => new fromClassRoomsActions.CreateClassRoomSuccess(payload)),
          tap(() => {
            this.router.navigate(['/configuration/class-rooms/list'])
          })
        ),
    onError: (action: fromClassRoomsActions.CreateClassRoom, payload: CreateClassRoomFailPayload) =>
      new fromClassRoomsActions.CreateClassRoomFail(payload)
  });

  @Effect()
  deleteClassRoom$ = this.dp.pessimisticUpdate(fromClassRoomsActions.Types.DeleteClassRoom, {
    run: (action: fromClassRoomsActions.DeleteClassRoom) =>
      this.classRoomsApiService.deleteClassRoom(action.payload)
        .pipe(
          map((payload: DeleteClassRoomSuccessPayload) => new fromClassRoomsActions.DeleteClassRoomSuccess(payload)),
        ),
    onError: (action: fromClassRoomsActions.DeleteClassRoom, payload: DeleteClassRoomFailPayload) =>
      new fromClassRoomsActions.DeleteClassRoomFail(payload)
  });

  @Effect()
  getClassRoom$ = this.dp.fetch(fromClassRoomsActions.Types.GetClassRoom, {
    run: (action: fromClassRoomsActions.GetClassRoom) =>
      this.classRoomsApiService.getClassRoom(action.payload)
        .pipe(
          map((payload: GetClassRoomSuccessPayload) => new fromClassRoomsActions.GetClassRoomSuccess(payload))
        ),
    onError: (action: fromClassRoomsActions.GetClassRoom, payload: GetClassRoomFailPayload) =>
      new fromClassRoomsActions.GetClassRoomFail(payload)
  });

  @Effect()
  getClassRooms$ = this.dp.fetch(fromClassRoomsActions.Types.GetClassRooms, {
    run: (action: fromClassRoomsActions.GetClassRooms) =>
      this.classRoomsApiService.getClassRooms(action.payload)
        .pipe(
          map((payload: GetClassRoomsSuccessPayload) => new fromClassRoomsActions.GetClassRoomsSuccess(payload))
        ),
    onError: (action: fromClassRoomsActions.GetClassRooms, payload: GetClassRoomsFailPayload) =>
      new fromClassRoomsActions.GetClassRoomsFail(payload)
  });

  @Effect()
  updateClassRoom$ = this.dp.pessimisticUpdate(fromClassRoomsActions.Types.UpdateClassRoom, {
    run: (action: fromClassRoomsActions.UpdateClassRoom) =>
      this.classRoomsApiService.updateClassRoom(action.payload)
        .pipe(
          map((payload: UpdateClassRoomSuccessPayload) => new fromClassRoomsActions.UpdateClassRoomSuccess(payload)),
          tap(() => {
            this.router.navigate(['/configuration/class-rooms/list'])
          })
        ),
    onError: (action: fromClassRoomsActions.UpdateClassRoom, payload: UpdateClassRoomFailPayload) =>
      new fromClassRoomsActions.UpdateClassRoomFail(payload)
  });

  constructor(
    private actions$: Actions,
    private dp: DataPersistence<ClassRoomsPartialState>,
    private classRoomsApiService: ClassRoomsApiService,
    private router: Router
  ) {}
}
