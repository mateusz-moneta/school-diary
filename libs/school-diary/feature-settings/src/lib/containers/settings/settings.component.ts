import { Component } from '@angular/core';

import { LanguageService } from '@school-diary/school-diary/shared';

@Component({
  selector: 'school-diary-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  private languageIndex = 0;

  readonly languages = this.languageService.languageList;

  constructor(private languageService: LanguageService) {}

  languageChange(value: number): void {
    this.languageIndex = value;
  }
}
