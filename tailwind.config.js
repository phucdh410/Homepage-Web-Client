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
        xs: "400px",
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
        raleway: ["var(--font-raleway)"],
      },
      height: {
        header: "104px",
      },
      backgroundColor: {
        primary: "#124874",
      },
      colors: {
        primary: "#124874",
        sub: "#191919",
        sub2: "#3D3D3D",
        bg: "#FAFAFA",
        red: "#CF373D",
        "primary-red": "#CF373D",
        des: "#5B5B5B",
      },
      borderRadius: {
        "10px": "10px",
        "20px": "20px",
        inherit: "inherit",
        "15px": "15px",
        "30px": "30px",
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
        "10px": "10px",
        "30px": "30px",
        "50px": "50px",
        "60px": "60px",
      },
      zIndex: {
        1: 1,
      },
      margin: {
        "10px": "10px",
        "30px": "30px",
        admissions: "1366/512",
        "training-sub": "408/285",
        research: "406/285",
        "60px": "60px",
        coop: "633/350",
      },
      fontSize: {
        "25px": ["25px", "34px"],
        "40px": ["40px", "55px"],
        "16px": ["16px", "19.5px"],
        clamp1: "clamp(1.25rem, 0.9375rem + 1.5625vw, 2.1875rem)",
        "clamp-section-title": "clamp(1.25rem, 0.8676rem + 1.912vw, 2.5rem);",
        "clamp-home-section-title":
          "clamp(1.625rem, 1.4121rem + 0.9082vw, 2.1875rem)",
      },
      boxShadow: {
        custom: "15px 15px 60px 0px rgba(19, 70, 131, 0.10)",
        "timeline-node": "0px 0px 20px 0px rgba(18, 72, 116, 0.50)",
      },
      gap: {
        "30px": "30px",
      },
      content: {
        "''": "''",
      },
    },
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1366px",
    },
  },
  plugins: [],
};
