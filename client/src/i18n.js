import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en.json';
import translationES from './locales/es.json';

const availableLanguages = ['en', 'es'];

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
};


i18n
  .use(Backend) // load translations using http (default                                               public/assets/locals/en/translations)
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({

    resources,
    lng: "en",
    fallbackLng: "en", // use en if detected lng is not available

    react: {
      useSuspense: true
    },
    
    detection: {
      checkWhitelist: true,  //options for language detection
    },

    debug: true,

    whitelist: availableLanguages,

    backend: {
      loadPath: '/locales/{{lng}}.json',
      allowMultiLoading: true
    },

    interpolation: {
      escapeValue: false, // no need for react. it escapes by default
    },
  });

export default i18n;