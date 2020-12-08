import { Action } from '@ngrx/store';

import { Language } from '@school-diary/school-diary/domain';

export namespace fromSettingsActions {
  export enum Types {
    ChangeLanguage = '[Settings] Change Language',
    CloseSidenav = '[Settings] Close Sidenav',
    OpenSidenav = '[Settings] Open Sidenav'
  }

  export class ChangeLanguage implements Action {
    readonly type = Types.ChangeLanguage;

    constructor(public payload: Language) {
    }
  }

  export class CloseSidenav implements Action {
    readonly type = Types.CloseSidenav;
  }

  export class OpenSidenav implements Action {
    readonly type = Types.OpenSidenav;
  }

  export type CollectiveType =
    | ChangeLanguage
    | CloseSidenav
    | OpenSidenav
}
