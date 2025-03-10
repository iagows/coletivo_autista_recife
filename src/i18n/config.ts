import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation from './pt-BR/translation.json';

i18next.use(initReactI18next).init({
    lng: 'pt-BR',
    debug: true,
    resources: {
        "pt-BR": {
            translation,
        },
    },
    // if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
    // set returnNull to false (and also in the i18next.d.ts options)
    // returnNull: false,
});