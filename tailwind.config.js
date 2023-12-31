import typographyPlugin from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "borderAccordeon": "var(--cAccordeon)",
        "orangePrice": "var(--oPrice)",
        "hCard": "var(--hCard)",
        "buttonCard" : "var(--buttonCard)",
        "countAcc": "var(--countAcc)",
        "optionAcc": "var(--optionAcc)",
        "descriptionCard": "var(--descriptionCard)",
        "buttonFilter": "var(--buttonFilter)",
        "buttonFilterFont" : "var(--buttonFilterFont)"
      },
      boxShadow: {
        "shCardOne": "var(--shCardOne)",
        "shCardTwo": "var(--shCardTwo)"
      },
      
    },
  },
  plugins: [
    typographyPlugin,
  ],
}

