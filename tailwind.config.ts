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
        black: 'var(--color-black)',
        error: 'var(--color-error)'
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
        '0%': { opacity: "0", height:"0px", transform: "scaleY(0)"},
        "100%": {opacity: "100%", height:"100%", transform: "scaleY(1)"}
      },
      hideTo0: {
        "0%": {opacity: "100%", height:"100%", transform: "scaleY(1)"},
        '100%': { opacity: "0", height:"0px", transform: "scaleY(0)"}
        
      },
      zoom: {
        '50%': {  transform: "scale(130%)"},
        "100%": {transform: "scale(1)"}
      },
      slideInFromBottonm: {
        '0%': {  opacity: "0", transform: "translateY(100px)"},
        '100%': {  opacity: "100%", transform: "translateY(0)"},
      },
    },
    animation: {
      show: "show 1s",
      showFrom0: "showFrom0 1s",
      hideTo0: "hideTo0 1s",
      showFromRight: "showFromRight 1s",
      ping1: "ping 1s infinite",
      slideBottom: "slideInFromBottonm 1.2s",
    }
    
    }
  },
  plugins: [
    require('@kamona/tailwindcss-perspective'),
    
  ],
}
export default config
