import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionTranslationKeyPipe } from './pipes/action-translation-key.pipe';

@NgModule({
  declarations: [ActionTranslationKeyPipe],
  exports: [
    ActionTranslationKeyPipe
  ],
  imports: [CommonModule]
})
export class SchoolDiaryDomainModule {}
