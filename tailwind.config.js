/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#1E2A47",
        "custom-bg-blue": "#141D2F",
      },
      width: {
        120: "120px",
      },
      height: {
        120: "120px",
      },

      fontSize: {
        h1: ["26px", "36px"],
        h2: ["22px", "33px"],
        h3: ["16px", "24px"],
        h4: ["13px", "20px"],
        body: ["15px", "25px"],
      },
    },
  },
  plugins: [],
};
