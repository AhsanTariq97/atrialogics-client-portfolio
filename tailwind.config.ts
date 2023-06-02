import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rammetto: ['var(--font-rammetto)'],
        mono: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
