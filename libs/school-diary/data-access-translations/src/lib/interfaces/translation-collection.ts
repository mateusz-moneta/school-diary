import { TranslationsGroup } from './translations-group.interface';
import { Language } from '@school-diary/school-diary/domain';

export interface TranslationCollection {
  [Language.EN]: TranslationsGroup;
  [Language.PL]: TranslationsGroup;
}
