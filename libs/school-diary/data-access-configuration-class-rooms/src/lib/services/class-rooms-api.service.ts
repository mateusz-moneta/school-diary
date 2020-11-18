import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CreateClassRoomRequestPayload } from '../request-payloads/create-class-room.request-payload';
import { CreateClassRoomSuccessPayload } from '../payloads/create-class-room-success.payload';
import { DeleteClassRoomRequestPayload } from '../request-payloads/delete-class-room.request-payload';
import { DeleteClassRoomSuccessPayload } from '../payloads/delete-class-room-success.payload';
import { GetClassRoomsRequestPayload } from '../request-payloads/get-class-rooms.request-payload';
import { GetClassRoomsSuccessPayload } from '../payloads/get-class-rooms-success.payload';
import { UpdateClassRoomRequestPayload } from '../request-payloads/update-class-room.request-payload';
import { UpdateClassRoomSuccessPayload } from '../payloads/update-class-room-success.payload';

@Injectable()
export class ClassRoomsApiService {
  readonly endpoints = {
    createClassRoom: '/api/class_room',
    deleteClassRoom: '/api/class_room',
    getClassRooms: '/api/class_room',
    updateClassRoom: '/api/class_room'
  };

  constructor(private httpClient: HttpClient) {}

  createClassRoom(requestPayload: CreateClassRoomRequestPayload): Observable<CreateClassRoomSuccessPayload> {
    return this.httpClient.post<CreateClassRoomSuccessPayload>(this.endpoints.createClassRoom, requestPayload);
  }

  deleteClassRoom(requestPayload: DeleteClassRoomRequestPayload): Observable<DeleteClassRoomSuccessPayload> {
    const params = new HttpParams().set('id', requestPayload.id.toString());
    return this.httpClient.delete<DeleteClassRoomSuccessPayload>(this.endpoints.deleteClassRoom, { params });
  }

  getClassRooms(requestPayload: GetClassRoomsRequestPayload): Observable<GetClassRoomsSuccessPayload> {
    const params = new HttpParams()
      .set('limit', requestPayload.limit.toString())
      .set('page', requestPayload.page.toString());

    return this.httpClient.get<GetClassRoomsSuccessPayload>(this.endpoints.getClassRooms, { params });
  }

  updateClassRoom(requestPayload: UpdateClassRoomRequestPayload): Observable<UpdateClassRoomSuccessPayload> {
    return this.httpClient.put<UpdateClassRoomSuccessPayload>(this.endpoints.updateClassRoom, requestPayload);
  }
}
