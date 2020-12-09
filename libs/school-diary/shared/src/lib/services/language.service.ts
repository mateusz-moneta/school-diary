import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { Language, LanguageItem } from '@school-diary/school-diary/domain';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLanguage = 'en';

  readonly languageList: LanguageItem[] = [
    { code: Language.EN, titleTranslationKey: 'SHARED.ENGLISH' },
    { code: Language.PL, titleTranslationKey: 'SHARED.POLISH' }
  ];

  constructor(private translateService: TranslateService) {
    this.setLanguage(this.currentLanguage);
  }

  setLanguage(code: string): void {
    this.translateService.setDefaultLang(code);
    this.translateService.use(code);
  }

  translate(key: string): Observable<string> {
    return this.translateService.get(key);
  }
}
