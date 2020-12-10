import { Action } from '@ngrx/store';

import { CreateClassRoomFailPayload } from '../payloads/create-class-room-fail.payload';
import { CreateClassRoomRequestPayload } from '../request-payloads/create-class-room.request-payload';
import { CreateClassRoomSuccessPayload } from '../payloads/create-class-room-success.payload';
import { DeleteClassRoomFailPayload } from '../payloads/delete-class-room-fail.payload';
import { DeleteClassRoomRequestPayload } from '../request-payloads/delete-class-room.request-payload';
import { DeleteClassRoomSuccessPayload } from '../payloads/delete-class-room-success.payload';
import { GetClassRoomFailPayload } from '../payloads/get-class-room-fail.payload';
import { GetClassRoomRequestPayload } from '../request-payloads/get-class-room.request-payload';
import { GetClassRoomSuccessPayload } from '../payloads/get-class-room-success.payload';
import { GetClassRoomsFailPayload } from '../payloads/get-class-rooms-fail.payload';
import { GetClassRoomsRequestPayload } from '../request-payloads/get-class-rooms.request-payload';
import { GetClassRoomsSuccessPayload } from '../payloads/get-class-rooms-success.payload';
import { UpdateClassRoomRequestPayload } from '../request-payloads/update-class-room.request-payload';
import { UpdateClassRoomFailPayload } from '../payloads/update-class-room-fail.payload';
import { UpdateClassRoomSuccessPayload } from '../payloads/update-class-room-success.payload';

export namespace fromClassRoomsActions {
  export enum Types {
    CreateClassRoom = '[Class Rooms] Create Class Room',
    CreateClassRoomFail = '[Class Rooms] Create Class Room Fail',
    CreateClassRoomSuccess = '[Class Rooms] Create Class Room Success',
    DeleteClassRoom = '[Class Rooms] Delete Class Room',
    DeleteClassRoomFail = '[Class Rooms] Delete Class Room Fail',
    DeleteClassRoomSuccess = '[Class Rooms] Delete Class Room Success',
    GetClassRoom = '[Class Rooms] Get Class Room',
    GetClassRoomFail = '[Class Rooms] Get Class Room Fail',
    GetClassRoomSuccess = '[Class Rooms] Get Class Room Success',
    GetClassRooms = '[Class Rooms] Get Class Rooms',
    GetClassRoomsFail = '[Class Rooms] Get Class Rooms Fail',
    GetClassRoomsSuccess = '[Class Rooms] Get Class Rooms Success',
    UpdateClassRoom = '[Class Rooms] Update Class Room',
    UpdateClassRoomFail = '[Class Rooms] Update Class Room Fail',
    UpdateClassRoomSuccess = '[Class Rooms] Update Class Room Success'
  }

  export class CreateClassRoom implements Action {
    readonly type = Types.CreateClassRoom;

    constructor(public payload: CreateClassRoomRequestPayload) {}
  }

  export class CreateClassRoomFail implements Action {
    readonly type = Types.CreateClassRoomFail;

    constructor(public payload: CreateClassRoomFailPayload) {}
  }

  export class CreateClassRoomSuccess implements Action {
    readonly type = Types.CreateClassRoomSuccess;

    constructor(public payload: CreateClassRoomSuccessPayload) {}
  }

  export class DeleteClassRoom implements Action {
    readonly type = Types.DeleteClassRoom;

    constructor(public payload: DeleteClassRoomRequestPayload) {}
  }

  export class DeleteClassRoomFail implements Action {
    readonly type = Types.DeleteClassRoomFail;

    constructor(public payload: DeleteClassRoomFailPayload) {}
  }

  export class DeleteClassRoomSuccess implements Action {
    readonly type = Types.DeleteClassRoomSuccess;

    constructor(public payload: DeleteClassRoomSuccessPayload) {}
  }

  export class GetClassRoom implements Action {
    readonly type = Types.GetClassRoom;

    constructor(public payload: GetClassRoomRequestPayload) {}
  }

  export class GetClassRoomFail implements Action {
    readonly type = Types.GetClassRoomFail;

    constructor(public payload: GetClassRoomFailPayload) {}
  }

  export class GetClassRoomSuccess implements Action {
    readonly type = Types.GetClassRoomSuccess;

    constructor(public payload: GetClassRoomSuccessPayload) {}
  }

  export class GetClassRooms implements Action {
    readonly type = Types.GetClassRooms;

    constructor(public payload: GetClassRoomsRequestPayload) {}
  }

  export class GetClassRoomsFail implements Action {
    readonly type = Types.GetClassRoomsFail;

    constructor(public payload: GetClassRoomsFailPayload) {}
  }

  export class GetClassRoomsSuccess implements Action {
    readonly type = Types.GetClassRoomsSuccess;

    constructor(public payload: GetClassRoomsSuccessPayload) {}
  }

  export class UpdateClassRoom implements Action {
    readonly type = Types.UpdateClassRoom;

    constructor(public payload: UpdateClassRoomRequestPayload) {}
  }

  export class UpdateClassRoomFail implements Action {
    readonly type = Types.UpdateClassRoomFail;

    constructor(public payload: UpdateClassRoomFailPayload) {}
  }

  export class UpdateClassRoomSuccess implements Action {
    readonly type = Types.UpdateClassRoomSuccess;

    constructor(public payload: UpdateClassRoomSuccessPayload) {}
  }

  export type CollectiveType =
    | CreateClassRoom
    | CreateClassRoomFail
    | CreateClassRoomSuccess
    | DeleteClassRoom
    | DeleteClassRoomFail
    | DeleteClassRoomSuccess
    | GetClassRoom
    | GetClassRoomFail
    | GetClassRoomSuccess
    | GetClassRooms
    | GetClassRoomsFail
    | GetClassRoomsSuccess
    | UpdateClassRoom
    | UpdateClassRoomFail
    | UpdateClassRoomSuccess
}
