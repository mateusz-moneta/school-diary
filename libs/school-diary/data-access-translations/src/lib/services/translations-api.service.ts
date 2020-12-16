import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GetTranslationsGroupRequestPayload } from '../request-payloads/get-translations-group.request-payload';
import { TranslationsGroup } from '../interfaces/translations-group.interface';

@Injectable()
export class TranslationsApiService {
  readonly endpoints = {
    getTranslationGroup: '/api/translations',
  };

  constructor(private httpClient: HttpClient) {}

  getTranslationsGroup(requestPayload: GetTranslationsGroupRequestPayload): Observable<TranslationsGroup> {
    const params = new HttpParams()
      .set('language_code', requestPayload.languageCode)
      .set('translations_scope', requestPayload.translationsScope);

    return this.httpClient.get<TranslationsGroup>(this.endpoints.getTranslationGroup, { params });
  }
}
