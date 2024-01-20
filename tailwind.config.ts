import type { Config } from 'tailwindcss'
import colors from './src/colors'
import * as ramps from './src/ramps'

export default {
  content: ['./src/**/*.{ts,tsx}', './index.html'],
  theme: {
    colors,
    extend: {
      colors: {
        ...ramps,
      }
    },
  },
  plugins: [],
} satisfies Config

