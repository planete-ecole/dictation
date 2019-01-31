import i18n from 'i18next'
import { reactI18nextModule } from 'react-i18next'

import en from '../translations/en/dictation'
import fr from '../translations/fr/dictation'

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr }
    },
    lng: 'fr',
    fallbackLng: 'fr',

    interpolation: {
      escapeValue: false
    }
  })

export default i18n
