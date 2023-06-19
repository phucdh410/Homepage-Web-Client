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
        },
        extend: {
            fontFamily: {
                serif4: ["var(--font-source-serif-4)"],
                roboto: ["var(--font-roboto)"],
                raleway: ["var(--font-raleway)"],
                montserrat: ["var(--font-montserrat)"],
            },
        },
    },
    plugins: [],
};
