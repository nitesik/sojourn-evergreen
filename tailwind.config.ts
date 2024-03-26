import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFE500",
        // secondary: "#87CEFA",
        secondary: "#8FE388",
        main: "var(--background-color)",
      },
      fontFamily: {
        jolly: "Jolly Lodger",
      },
      backgroundImage: {
        bhutan: "url('/bhutan-background2.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
