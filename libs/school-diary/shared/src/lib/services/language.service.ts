import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { Language, LanguageItem } from '@school-diary/school-diary/domain';
import { SettingsFacade } from '@school-diary/school-diary/data-access-settings';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLanguage: Language;

  readonly languageList: LanguageItem[] = [
    { code: Language.EN, titleTranslationKey: 'SHARED.ENGLISH' },
    { code: Language.PL, titleTranslationKey: 'SHARED.POLISH' }
  ];

  constructor(private settingsFacade: SettingsFacade, private translateService: TranslateService) {
    this.handleCurrentLanguage();
  }

  setLanguage(code: string): void {
    this.translateService.setDefaultLang(code);
    this.translateService.use(code);
  }

  translate(key: string): Observable<string> {
    return this.translateService.get(key);
  }

  private handleCurrentLanguage(): void {
    this.settingsFacade.language$.subscribe(language => {
      this.currentLanguage = language;
      this.setLanguage(this.currentLanguage);
    })
  }
}
