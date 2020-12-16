import { Action } from '@ngrx/store';

import { GetTranslationsGroupFailPayload } from '../payloads/get-translations-group-fail.payload';
import { GetTranslationsGroupActionPayload } from '../payloads/get-translations-group.action-payload';
import { GetTranslationsGroupSuccessPayload } from '../payloads/get-translations-group-success.payload';

export namespace fromTranslationsActions {
  export enum Types {
    GetTranslationsGroup = '[Translations] Get Translations Group',
    GetTranslationsGroupFail = '[Translations] Get Translations Group Fail',
    GetTranslationsGroupSuccess = '[Translations] Get Translations Group Success'
  }

  export class GetTranslationsGroup implements Action {
    readonly type = Types.GetTranslationsGroup;

    constructor(public payload: GetTranslationsGroupActionPayload) {}
  }

  export class GetTranslationsGroupFail implements Action {
    readonly type = Types.GetTranslationsGroupFail;

    constructor(public payload: GetTranslationsGroupFailPayload) {}
  }

  export class GetTranslationsGroupSuccess implements Action {
    readonly type = Types.GetTranslationsGroupSuccess;

    constructor(public payload: GetTranslationsGroupSuccessPayload) {}
  }

  export type CollectiveType =
    | GetTranslationsGroup
    | GetTranslationsGroupFail
    | GetTranslationsGroupSuccess
}
