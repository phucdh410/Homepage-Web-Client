/** @type {import('tailwindcss').Config} */

const HEADER_HEIGHT = 104;

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
      fontSize: {
        "25px": ["25px", "34px"],
        "32px": "32px",
        "35px": "35px",
        "40px": ["40px", "55px"],
        "16px": ["16px", "19.5px"],
        clamp1: "clamp(1.25rem, 0.9375rem + 1.5625vw, 2.1875rem)",
        "clamp-section-title": "clamp(1.25rem, 0.8676rem + 1.912vw, 2.5rem);",
        "clamp-home-section-title":
          "clamp(1.625rem, 1.4121rem + 0.9082vw, 2.1875rem)",
        clamp16px: "clamp(0.75rem, 0.6554rem + 0.4036vw, 1rem)",
        clamp25px: "clamp(1.125rem, 0.9594rem + 0.7064vw, 1.5625rem)",
        clamp40px: "clamp(1.5rem, 1.1216rem + 1.6145vw, 2.5rem)",
      },
      lineHeight: {
        "20px": "20px",
        "21px": "21px",
        "25px": "25px",
        "26px": "26px",
        "35px": "35px",
        "48px": "48px",
      },
      letterSpacing: {
        "0.3px": "0.3px",
        "0.32px": "0.32px",
        "0.42px": "0.42px",
        "0.48px": "0.48px",
        "0.64px": "0.64px",
        "0.72px": "0.72px",
        "0.75px": "0.75px",
        "1.05px": "1.05px",
        "1.2px": "1.2px",
      },
      height: {
        header: `${HEADER_HEIGHT}px`,
        inherit: "inherit",
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
        admissions: "1366/512",
        "training-sub": "408/285",
        research: "406/285",
        coop: "633/350",
      },
      maxWidth: {
        container: "1366px",
      },
      zIndex: {
        1: 1,
      },
      padding: {
        "10px": "10px",
        "15px": "15px",
        "30px": "30px",
        "50px": "50px",
        "60px": "60px",
      },
      margin: {
        "10px": "10px",
        "20px": "20px",
        "30px": "30px",
        "60px": "60px",
        header: `${HEADER_HEIGHT}px`,
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
