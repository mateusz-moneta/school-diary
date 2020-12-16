import { Language, TranslationsScope } from '@school-diary/school-diary/domain';

export interface GetTranslationsGroupRequestPayload {
  languageCode: Language;
  translationsScope: TranslationsScope;
}
