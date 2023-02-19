/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, tsx, jsx, ts}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        cancel: "url('./src/assets/cancel.svg')",
      },
    },
  },
  plugins: [],
};
