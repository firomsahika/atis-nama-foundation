import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e4356",
        secondary: "#9e4127",
        background: "#fbf9f1",
        "on-background": "#1b1c17",
      },
      fontFamily: {
        // Use 'Poppins' as the primary string
        poppins: ["var(--font-poppins)"],
        // If you want it to be the default 'sans' font:
        sans: ["var(--font-poppins)"],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 40s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
