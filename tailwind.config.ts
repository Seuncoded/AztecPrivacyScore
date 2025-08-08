import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        aztec: {
          purple: '#7F5AF0',
          ink: '#16161A',
          mist: '#94a3b8',
          lime: '#2CB67D'
        }
      }
    },
  },
  plugins: [],
}
export default config
