/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1366px",
      },
    },
    extend: {
      fontFamily: {
        serif4: ["var(--font-source-serif-4)"],
        montserrat: ["var(--font-montserrat)"],
      },
      height: {
        header: "104px",
      },
      colors: {
        primary: "#124874",
        sub: "#191919",
        sub2: "#3D3D3D",
        bg: "#FAFAFA",
        red: "#CF373D",
      },
      borderRadius: {
        "10px": "10px",
        "20px": "20px",
        inherit: "inherit",
      },
      aspectRatio: {
        "news-main": "633/700",
        "news-video": "633/330",
        "news-sub": "633/330",
        " admissions": "1366/512",
      },
      maxWidth: {
        container: "1366px",
      },
      padding: {
        "30px": "30px",
        "50px": "50px",
        "60px": "60px",
      },
      fontSize: {
        "25px": ["25px", "34px"],
        "40px": ["40px", "55px"],
        "16px": ["16px", "19.5px"],
      },
      margin: {
        "30px": "30px",
      },
    },
  },
  plugins: [],
};
