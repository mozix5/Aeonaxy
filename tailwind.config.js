/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#121661",
        "link-text": "#1072eb",
      },
      padding: {
        large: "4.5rem 13rem",
        small: "3rem 1.5rem",
        medium: "4rem 2rem",
      },
    },
  },
  plugins: [],
};
