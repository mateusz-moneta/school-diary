import { Language, TranslationsScope } from '@school-diary/school-diary/domain';
import { TranslationsGroup } from '../interfaces/translations-group.interface';

export interface GetTranslationsGroupSuccessPayload {
  languageCode: Language;
  translationsGroup: TranslationsGroup;
  translationsScope: TranslationsScope;
}
