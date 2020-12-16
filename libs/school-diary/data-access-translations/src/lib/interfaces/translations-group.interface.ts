import { Translation } from './translation.interface';

export interface TranslationsGroup {
  [group: string]: Translation[];
}
