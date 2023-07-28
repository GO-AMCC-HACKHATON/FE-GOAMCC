/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "fe-orange": "#F09000",
        "fe-primary": "#FFF8DF",
        "fe-secondary": "#FFE999",
        "fe-dark": "#1F2833"
      },
      fontSize: {
        "fe-h1": "44px",
        "fe-h2": "36px",
        "fe-h3": "28px",
        "fe-h4": "24px",
        "fe-h5": "20px"
      },
    },
  },
  plugins: [],
};
