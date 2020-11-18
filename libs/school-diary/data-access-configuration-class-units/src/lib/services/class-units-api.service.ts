import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CreateClassUnitRequestPayload } from '../request-payloads/create-class-unit.request-payload';
import { CreateClassUnitSuccessPayload } from '../payloads/create-class-unit-success.payload';
import { DeleteClassUnitRequestPayload } from '../request-payloads/delete-class-unit.request-payload';
import { DeleteClassUnitSuccessPayload } from '../payloads/delete-class-unit-success.payload';
import { GetClassUnitsRequestPayload } from '../request-payloads/get-class-units.request-payload';
import { GetClassUnitsSuccessPayload } from '../payloads/get-class-units-success.payload';
import { UpdateClassUnitRequestPayload } from '../request-payloads/update-class-unit.request-payload';
import { UpdateClassUnitSuccessPayload } from '../payloads/update-class-unit-success.payload';

@Injectable()
export class ClassUnitsApiService {
  readonly endpoints = {
    createClassUnit: '/api/class_unit',
    deleteClassUnit: '/api/class_unit',
    getClassUnits: '/api/class_unit',
    updateClassUnit: '/api/class_unit'
  };

  constructor(private httpClient: HttpClient) {}

  createClassUnit(requestPayload: CreateClassUnitRequestPayload): Observable<CreateClassUnitSuccessPayload> {
    return this.httpClient.post<CreateClassUnitSuccessPayload>(this.endpoints.createClassUnit, requestPayload);
  }

  deleteClassUnit(requestPayload: DeleteClassUnitRequestPayload): Observable<DeleteClassUnitSuccessPayload> {
    const params = new HttpParams().set('id', requestPayload.id.toString());
    return this.httpClient.delete<DeleteClassUnitSuccessPayload>(this.endpoints.deleteClassUnit, { params });
  }

  getClassUnits(requestPayload: GetClassUnitsRequestPayload): Observable<GetClassUnitsSuccessPayload> {
    const params = new HttpParams()
      .set('limit', requestPayload.limit.toString())
      .set('page', requestPayload.page.toString());

    return this.httpClient.get<GetClassUnitsSuccessPayload>(this.endpoints.getClassUnits, { params });
  }

  updateClassUnit(requestPayload: UpdateClassUnitRequestPayload): Observable<UpdateClassUnitSuccessPayload> {
    return this.httpClient.put<UpdateClassUnitSuccessPayload>(this.endpoints.updateClassUnit, requestPayload);
  }
}
