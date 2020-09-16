import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { DataAccessLoginEntity } from './data-access-login.models';
import { DataAccessLoginEffects } from './data-access-login.effects';
import { DataAccessLoginFacade } from './data-access-login.facade';

import * as DataAccessLoginSelectors from './data-access-login.selectors';
import * as DataAccessLoginActions from './data-access-login.actions';
import {
  DATAACCESSLOGIN_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './data-access-login.reducer';

interface TestSchema {
  dataAccessLogin: State;
}

describe('DataAccessLoginFacade', () => {
  let facade: DataAccessLoginFacade;
  let store: Store<TestSchema>;
  const createDataAccessLoginEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as DataAccessLoginEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(DATAACCESSLOGIN_FEATURE_KEY, reducer),
          EffectsModule.forFeature([DataAccessLoginEffects]),
        ],
        providers: [DataAccessLoginFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(DataAccessLoginFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allDataAccessLogin$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(DataAccessLoginActions.loadDataAccessLogin());

        list = await readFirst(facade.allDataAccessLogin$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadDataAccessLoginSuccess` to manually update list
     */
    it('allDataAccessLogin$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allDataAccessLogin$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          DataAccessLoginActions.loadDataAccessLoginSuccess({
            dataAccessLogin: [
              createDataAccessLoginEntity('AAA'),
              createDataAccessLoginEntity('BBB'),
            ],
          })
        );

        list = await readFirst(facade.allDataAccessLogin$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
