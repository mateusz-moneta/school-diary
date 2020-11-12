import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { LanguageItem } from '@school-diary/school-diary/domain';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLanguage = 'en';
  languageList: LanguageItem[] = [
    { code: 'en', title: 'English' },
    { code: 'pl', title: 'Polski' }
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
