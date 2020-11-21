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
    createClassRoom: '/api/configuration/class_rooms',
    deleteClassRoom: '/api/configuration/class_rooms',
    getClassRooms: '/api/configuration/class_rooms',
    updateClassRoom: '/api/configuration/class_rooms'
  };

  constructor(private httpClient: HttpClient) {}

  createClassRoom(requestPayload: CreateClassRoomRequestPayload): Observable<CreateClassRoomSuccessPayload> {
    return this.httpClient.post<CreateClassRoomSuccessPayload>(this.endpoints.createClassRoom, requestPayload);
  }

  deleteClassRoom(requestPayload: DeleteClassRoomRequestPayload): Observable<DeleteClassRoomSuccessPayload> {
    return this.httpClient.delete<DeleteClassRoomSuccessPayload>(`${this.endpoints.deleteClassRoom}/${requestPayload.id}`);
  }

  getClassRooms(requestPayload: GetClassRoomsRequestPayload): Observable<GetClassRoomsSuccessPayload> {
    const params = new HttpParams()
      .set('limit', requestPayload.limit.toString())
      .set('page', requestPayload.page.toString());

    return this.httpClient.get<GetClassRoomsSuccessPayload>(this.endpoints.getClassRooms, { params });
  }

  updateClassRoom(requestPayload: UpdateClassRoomRequestPayload): Observable<UpdateClassRoomSuccessPayload> {
    return this.httpClient.put<UpdateClassRoomSuccessPayload>(`${this.endpoints.updateClassRoom}/${requestPayload.id}`, requestPayload);
  }
}
