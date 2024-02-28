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
        primary_200:"#e7f9ff",
        primary_700:"#2684ff",
        secondary_700:"#01b46e",
        btn_reset:'#e0e0e0',
        btn_reset_hover:"#d5d5d5"
      },
      backgroundColor:{
        btn_avatar : 'rgba(0, 0, 0, 0.04)',
        loading : 'rgba(44, 44, 45,0.3)'
      },
      boxShadow:{
        default :'0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        0 :'rgba(149, 157, 165, 0.2) 0px 8px 24px;',
        11 :'box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;'
      },
      
    },
  },
  plugins: [],
}
export default config
