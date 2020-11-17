import { Pipe, PipeTransform } from '@angular/core';

import { Action } from '../enums/action.enum';

@Pipe({
  name: 'actionTranslationKey'
})
export class ActionTranslationKeyPipe implements PipeTransform {

  transform(action: Action): string {
    if (action === Action.CREATE) {
      return 'SHARED.CREATE';
    }

    return 'SHARED.EDIT';
  }
}
