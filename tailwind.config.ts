import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rammetto: ['var(--font-rammetto)'],
      },
      colors: {
        designColor: '#333',
      },
    },
  },
  plugins: [],
} satisfies Config;
