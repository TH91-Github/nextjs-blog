import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundSize: ({ theme }) => ({
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        ...theme('spacing')
      }),
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    future: { // 모바일에선 hover 동작하지 않도록
      hoverOnlyWhenSupported: true,
    },
  },
  plugins: [],
};
export default config;
