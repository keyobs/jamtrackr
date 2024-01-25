import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { getLocales } from 'expo-localization';

import i18nEN from './en';
import i18nFR from './fr';

export type TLocale = 'en' | 'fr';

// try to init app language with current language based on device settings
const getinitLocale = () => {
    const userLanguage = getLocales()[0].languageCode;
    return ['en', 'fr'].includes(userLanguage) ? userLanguage : 'en';
};

const resources = {
    en: {
        translation: i18nEN,
    },
    fr: {
        translation: i18nFR,
    },
};

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    debug: false,
    resources,
    lng: getinitLocale(),
});

export default i18n;
