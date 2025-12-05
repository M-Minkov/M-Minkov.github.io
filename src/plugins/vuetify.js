import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1976d2',
          secondary: '#0d47a1',
          accent: '#42a5f5',
          background: '#ffffff',
          surface: '#f5f5f5',
        },
      },
    },
  },
})
