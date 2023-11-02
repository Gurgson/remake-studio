import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: {
        accent: 'var(--color-accent)',
        white: 'var(--color-white)',
        black: 'var(--color-black)'
      },
      secondary: {
        grey: 'var(--color-grey)',
        greyDark: 'var(--color-grey-dark)',
        greyLight: 'var(--color-grey-light)'
      }
    },
    extend:{
     keyframes: {
      show: {
        '0%': { opacity: "0%", transform: "translateX(-100%)" },
        "100%": {opacity: "100%",transform: "translateX(none)"}
      },
      hide: {
        '0%': { opacity: "100%"},
        "100%": {opacity: "0%"}
      }
    },
    animation: {
      show: "show 0.7s",
      hide: "hide 1s"
    }
    
    }
  },
  plugins: [],
}
export default config
