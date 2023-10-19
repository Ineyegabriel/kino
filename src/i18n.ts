import { initReactI18next } from 'react-i18next';
import i18n, { TOptions } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // load translation using xhr -> see /public/locales — https://github.com/i18next/i18next-http-backend
  .use(LanguageDetector) // detect user language - https://github.com/i18next/i18next-browser-languageDetector
  .use(initReactI18next) // init i18next - https://www.i18next.com/overview/configuration-options
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      requestOptions: {
        mode: 'cors',
        credentials: 'same-origin',
        cache: 'default',
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    lng: 'en',
    ns: ['global'],
  });

const t = i18n.t.bind(i18n);

/**
 * Translate function that can be used outside react components and hooks
 * @param translationKey for example: customerHomepage:search.title
 * @param options when we need to pass a js value to translation
 * @returns text from key
 */
export const translate = (translationKey: string, options?: TOptions): string => t(translationKey, options);

export default i18n;
