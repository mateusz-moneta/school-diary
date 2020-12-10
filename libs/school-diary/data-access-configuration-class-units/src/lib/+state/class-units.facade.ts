import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromClassUnits from './class-units.reducer';
import { classUnitsQuery } from './class-units.selectors';
import { CreateClassUnitRequestPayload } from '../request-payloads/create-class-unit.request-payload';
import { DeleteClassUnitRequestPayload } from '../request-payloads/delete-class-unit.request-payload';
import { fromClassUnitsActions } from './class-units.actions';
import { GetClassUnitRequestPayload } from '../request-payloads/get-class-unit.request-payload';
import { GetClassUnitsRequestPayload } from '../request-payloads/get-class-units.request-payload';
import { UpdateClassUnitRequestPayload } from '../request-payloads/update-class-unit.request-payload';

@Injectable()
export class ClassUnitsFacade {
  classUnits$ = this.store.pipe(select(classUnitsQuery.getClassUnits));
  selectedClassUnit$ = this.store.pipe(select(classUnitsQuery.getSelectedClassUnit));

  constructor(private store: Store<fromClassUnits.ClassUnitsPartialState>) {}

  createClassUnit(createClassUnitRequestPayload: CreateClassUnitRequestPayload): void {
    this.store.dispatch(new fromClassUnitsActions.CreateClassUnit(createClassUnitRequestPayload));
  }

  deleteClassUnit(deleteClassUnitRequestPayload: DeleteClassUnitRequestPayload): void {
    this.store.dispatch(new fromClassUnitsActions.DeleteClassUnit(deleteClassUnitRequestPayload));
  }

  getClassUnit(getClassUnitRequestPayload: GetClassUnitRequestPayload): void {
    this.store.dispatch(new fromClassUnitsActions.GetClassUnit(getClassUnitRequestPayload));
  }

  getClassUnits(getClassUnitsRequestPayload: GetClassUnitsRequestPayload = { page: 1, limit: 10 }): void {
    this.store.dispatch(new fromClassUnitsActions.GetClassUnits(getClassUnitsRequestPayload));
  }

  updateClassUnit(updateClassRoomRequestPayload: UpdateClassUnitRequestPayload): void {
    this.store.dispatch(new fromClassUnitsActions.UpdateClassUnit(updateClassRoomRequestPayload));
  }
}
