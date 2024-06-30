import { defineConfig, defineKeyframes, defineTextStyles } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{ts,tsx}'],
  outdir: './src/shared/ui/styled-system',
  importMap: '@style',
  theme: {
    extend: {
      keyframes: defineKeyframes({
        skeleton: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      }),
      tokens: {
        colors: {
          pastel: {
            blue: {
              dark: { value: '#c2d8ff' },
              light: { value: '#d9e6ff' },
              DEFAULT: { value: '#f4f8ff' },
            },
            gray: {
              dark: { value: '#' },
              light: { value: '#e1e4ea' },
              DEFAULT: { value: '#ded9e1' },
            },
            lilac: {
              middle: { value: '#dbddfc' },
              dark: { value: '#979ae5' },
              light: { value: '#ebecff' },
              DEFAULT: { value: '#d2d4ff' },
            },
            coral: {
              DEFAULT: { value: '#ffc5c5' },
            },
            mint: {
              DEFAULT: { value: '#d6fed7' },
            },
            olive: {
              DEFAULT: { value: '#e1fac9' },
            },
            yellow: {
              DEFAULT: { value: '#fcf9c5' },
            },
            orange: {
              DEFAULT: { value: '#f6d7b3' },
            },
            purple: {
              DEFAULT: { value: '#edd8f7' },
            },
            emerald: {
              DEFAULT: { value: '#c8efdd' },
            },
            peach: {
              DEFAULT: { value: '#fff1c8' },
            },
          },
        },
      },
      semanticTokens: {
        colors: {
          text: {
            primary: { value: '#222' },
            secondary: { value: '#676767' },
            tertiary: { value: '#bababa' },
            disable: { value: '#d1d1d1' },
            error: { value: '#ca4f44' },
            contrast: { value: '#fff' },
            link: { value: '#275adf' },
          },
          button: {
            secondary: { value: '#f2f2f2' },
            selected: { value: '#222' },
            disabledSkeleton: { value: '#eff0f2' },
          },
          bg: {
            primary: { value: '#fff' },
            secondary: { value: '#f4f5f7' },
            tertiary: { value: '#f0f0f2' },
            skeleton: { value: '#e7e8e990' },
            popup: { value: '#0e0e0f' },
          },
        },
      },
    },
    textStyles: defineTextStyles({
      header1: {
        value: {
          fontFamily: '"JetBrains Mono", sans-serif',
          fontSize: '34px',
          lineHeight: '44px',
          letterSpacing: '-0.2px',
          fontWeight: '500',
        },
      },
      header2: {
        value: {
          fontFamily: '"JetBrains Mono", sans-serif',
          fontSize: '24px',
          lineHeight: '28px',
          letterSpacing: '0.3px',
          fontWeight: '500',
        },
      },
      header3: {
        value: {
          fontFamily: '"JetBrains Mono", sans-serif',
          fontSize: '17px',
          lineHeight: '20px',
          letterSpacing: '0',
          fontWeight: '500',
        },
      },
      body2: {
        value: {
          fontFamily: '"Roboto Mono", sans-serif',
          fontSize: '15px',
          lineHeight: '20px',
          letterSpacing: '-0.2px',
          fontWeight: '400',
        },
      },
      body3: {
        value: {
          fontFamily: '"Roboto Mono", sans-serif',
          fontSize: '13px',
          lineHeight: '16px',
          letterSpacing: '-0.2px',
          fontWeight: '400',
        },
      },
      caption: {
        value: {
          fontFamily: '"Roboto Mono", sans-serif',
          fontSize: '13px',
          lineHeight: '16px',
          letterSpacing: '0.1px',
          fontWeight: '400',
        },
      },
      link: {
        value: {
          fontFamily: '"Roboto Mono", sans-serif',
          fontSize: '15px',
          lineHeight: '20px',
          letterSpacing: '0.2px',
          fontWeight: '500',
        },
      },
      button: {
        value: {
          fontFamily: '"Roboto Mono", sans-serif',
          fontSize: '16px',
          lineHeight: '16px',
          letterSpacing: '0.2px',
          fontWeight: '500',
        },
      },
      buttonMini: {
        value: {
          fontFamily: '"Roboto Mono", sans-serif',
          fontSize: '12px',
          lineHeight: '16px',
          letterSpacing: '0.1px',
          fontWeight: '500',
        },
      },
    }),
  },
});
