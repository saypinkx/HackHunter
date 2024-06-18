import { defineConfig, defineTextStyles } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{ts,tsx}'],
  outdir: './src/shared/ui/styled-system',
  importMap: '@style',
  theme: {
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
