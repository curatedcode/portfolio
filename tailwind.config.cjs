const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "site-blue": "#0a192f",
        "site-blue-lighter": "#b3bdcc",
        "site-blue-lightest": "#e2e8f0",
      },
      height: {
        "screen-minus-top": "calc(100vh - 3.5rem)",
      },
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  future: { hoverOnlyWhenSupported: true },
};
