/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';

import preset from './preset';

export default {
  content: [
    './projects/**/*.{html,ts}',
    './src/**/*.{html,ts}',
    './.storybook/preview.ts',
  ],
  presets: [preset],
} satisfies Config;
