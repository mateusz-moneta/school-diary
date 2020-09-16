import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromDataAccessLogin from './data-access-login.reducer';
import * as DataAccessLoginSelectors from './data-access-login.selectors';

@Injectable()
export class DataAccessLoginFacade {
  loaded$ = this.store.pipe(
    select(DataAccessLoginSelectors.getDataAccessLoginLoaded)
  );
  allDataAccessLogin$ = this.store.pipe(
    select(DataAccessLoginSelectors.getAllDataAccessLogin)
  );
  selectedDataAccessLogin$ = this.store.pipe(
    select(DataAccessLoginSelectors.getSelected)
  );

  constructor(
    private store: Store<fromDataAccessLogin.DataAccessLoginPartialState>
  ) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
