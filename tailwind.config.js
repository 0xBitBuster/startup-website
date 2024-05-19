/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    safelist: [{ pattern: /rotate-/ }],
    theme: {
        extend: {
            colors: {
                color: {
                    1: "#AC6AFF",
                    2: "#FFC876",
                    3: "#FF776F",
                    4: "#7ADB78",
                    5: "#858DFF",
                    6: "#FF98E2",
                },
                n: {
                    2: "#CAC6DD",
                    3: "#ADA8C3",
                    4: "#757185",
                    6: "#252134",
                    8: "#0E0C15"
                },
            },
            fontFamily: {
                sans: ["var(--font-sora)", ...fontFamily.sans],
                code: "var(--font-code)",
                grotesk: "var(--font-grotesk)",
            },
            letterSpacing: {
                tagline: ".15em",
            },
            spacing: {
                0.25: "0.0625rem",
                7.5: "1.875rem",
                15: "3.75rem",
            },
            transitionDuration: {
                DEFAULT: "200ms",
            },
            transitionTimingFunction: {
                DEFAULT: "linear",
            },
            backgroundImage: {
                "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
                "conic-gradient": "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
            },
            zIndex: {
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5"
            },
            rotate: {
                135: '135deg',
                225: '225deg',
                270: '270deg',
                315: '315deg'
            }
        }
    }
};
