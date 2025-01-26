/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import aspectRatio from '@tailwindcss/aspect-ratio';
import { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontSize: {
        '5xs': '8px',
        '4xs': '9px',
        '3xs': '10px',
        '2xs': '11px',
        tiny: '13px',
        md: '15px',
      },
      fontFamily: {
        serif: ['Lato', ...defaultTheme.fontFamily.serif],
      },
      backgroundColor: {
        secondary: '#f2f2f2',
      },
      borderColor: {
        DEFAULT: '#303030',
      },
      colors: {
        primary: '#1DA1F2',
        secondary: '#949C9E',
      },
    },
  },
  plugins: [typography, containerQueries, aspectRatio],
} as Partial<Config>;
