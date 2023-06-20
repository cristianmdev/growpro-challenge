import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      es: {
        translations: {
          "bicycle": "bicicleta",
          "bicycles": "bicicletas",
          "type": "tipo",
          "subcategory": "subcategoría",
          "electric": "electrica",
          "electrics": "electricas",
          "modern": "moderna",
          "moderns": "modernas",
          "old": "vintage"
        }
      }
    },
    fallbackLng: "es",
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;