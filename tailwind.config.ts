import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width:{
      },
      colors:{
        primary_700:"#2684ff",
        secondary_700:"#01b46e",
        btn_reset:'#e0e0e0',
        btn_reset_hover:"#d5d5d5"
      },
      backgroundColor:{
        btn_avatar : 'rgba(0, 0, 0, 0.04)'
      }
    },
  },
  plugins: [],
}
export default config
