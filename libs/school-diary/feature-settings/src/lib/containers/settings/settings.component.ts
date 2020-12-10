import { Component } from '@angular/core';
import { filter, take } from 'rxjs/operators';

import { LanguageService } from '@school-diary/school-diary/shared';
import { SettingsFacade } from '@school-diary/school-diary/data-access-settings';
import { Language } from '@school-diary/school-diary/domain';

@Component({
  selector: 'school-diary-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  private languageIndex = 0;

  readonly languages = this.languageService.languageList;

  constructor(private languageService: LanguageService, private settingsFacade: SettingsFacade) {}

  languageChange(value: number): void {
    this.languageIndex = value;
  }

  save(): void {
    this.settingsFacade.language$
      .pipe(
        take(1),
        filter(language => this.languages[this.languageIndex].code !== language)
      )
      .subscribe(() => {
        this.settingsFacade.changeLanguage(this.languages[this.languageIndex].code as Language);
      });
  }
}
