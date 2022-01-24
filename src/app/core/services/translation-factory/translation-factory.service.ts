import { HttpClient } from '@angular/common/http';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
export const TranslationFiles = [
  'assets/translations/common.'
];

export function TranslationFactory(httpClient: HttpClient){
  const resources = TranslationFiles.map((x) => ({ prefix: x, suffix: '.json'}))
  return new MultiTranslateHttpLoader(httpClient, resources);
}
