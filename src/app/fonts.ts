import { Montserrat, Raleway, Roboto, Source_Serif_4 } from "next/font/google";

export const sourceSerif4 = Source_Serif_4({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-source-serif-4",
});
export const roboto = Roboto({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "700", "900"],
    variable: "--font-roboto",
});
export const raleway = Raleway({
    subsets: ["latin"],
    display: "swap",
    style: ["normal", "italic"],
    variable: "--font-raleway",
});

export const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-montserrat",
});
