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
        '0%': { opacity: "0%", transform: "scale(50%) translateX(-100%) " },
        "100%": {opacity: "100%",transform: "scale(1) translateX(none)"}
      },
      showFromRight: {
        '0%': {opacity:"0%", transform: "translateX(60%) scale(50%)"},
        "100%": {opacity: "100%",transform: "scale(1) translateX(none)"}
      },
      showFrom0: {
        '0%': { opacity: "0", heigth:"0px", transform: "scaleY(0)"},
        "100%": {opacity: "100%", heigth:"100%", transform: "scaleY(1)"}
      },
      hideTo0: {
        "0%": {opacity: "100%", heigth:"100%", transform: "scaleY(1)"},
        '100%': { opacity: "0", heigth:"0px", transform: "scaleY(0)"}
        
      }
    },
    animation: {
      show: "show 0.7s",
      showFrom0: "showFrom0 1s",
      hideTo0: "hideTo0 1s",
      showFromRight: "showFromRight 1s",
      ping1: "ping 1s infinite",
  
    }
    
    }
  },
  plugins: [],
}
export default config
