import { portfolio, defaultLang } from './portfolio';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in portfolio) return lang as keyof typeof portfolio;
  return defaultLang;
}

// only 2 depth
//export function useTranslations(lang: keyof typeof portfolio) {
//  return function t(key: keyof typeof portfolio[typeof defaultLang]) {
//    return portfolio[lang][key] || portfolio[defaultLang][key];
//  }
//}

type TranslationObject = {
  [key: string]: string | TranslationObject | string[];
};

export function useTranslations(lang: keyof typeof portfolio ) {
  return function t(key: keyof typeof portfolio[typeof defaultLang]) {
    const translate = (obj: TranslationObject, keys: string[]): string | TranslationObject | string[] | undefined => {
      const currentKey = keys.shift();
      if (currentKey !== undefined && obj[currentKey] !== undefined) {
        if (keys.length === 0) {
          // If this is the last key
          if (Array.isArray(obj[currentKey])) {
            // If it's an array, return it
            return obj[currentKey] as string[];
          } else if (typeof obj[currentKey] === 'string') {
            // If it's a string, return the translation string
            return obj[currentKey] as string;
          } else {
            // If it's an object, return it
            return obj[currentKey] as TranslationObject;
          }
        } else {
          // If it's not the last key, continue recursively
          return translate(obj[currentKey] as TranslationObject, keys);
        }
      } else {
        return undefined; // If current key doesn't exist, return undefined
      }
    };

    const keys = key.split('.');
    const translation = translate(portfolio[lang], [...keys]);
    if (translation !== undefined) {
      // If translation is not undefined, return it
      return translation;
    } else {
      // If translation not found in the requested language, fallback to default language
      const fallbackTranslation = translate(portfolio[defaultLang], [...keys]);
      if (fallbackTranslation !== undefined) {
        return fallbackTranslation;
      } else {
        console.error(`Translation for key '${key}' not found.`);
        return ''; // Return empty string if translation not found
      }
    }
  };
}

