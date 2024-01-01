import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#4361ee",  // Changed the default color to #4361ee
                    50: "#f2f4fd",
                    100: "#d7e0fc",
                    200: "#bbc9fb",
                    300: "#9faef9",
                    400: "#8694f8",
                    500: "#6d7af6",
                    600: "#5964ed",
                    700: "#4361ee",
                    800: "#3e46c3",
                    900: "#323b9e",
                    light: "#d7e0fc",
                },
                secondary: {
                    DEFAULT: "#805dca",  // Changed the default color to #805dca
                    50: "#e6d7f1",
                    100: "#d0b5e3",
                    200: "#b08ed4",
                    300: "#9167c5",
                    400: "#774db9",
                    500: "#805dca",
                    600: "#6d4eb7",
                    700: "#5c409e",
                    800: "#4d3485",
                    900: "#3b286c",       
                    light: "#e6d7f1",
                },
                success: {
                    DEFAULT: "#10B981",
                    50: "#ECFDF5",
                    100: "#D1FAE5",
                    200: "#A7F3D0",
                    300: "#6EE7B7",
                    400: "#34D399",
                    500: "#10B981",
                    600: "#059669",
                    700: "#047857",
                    800: "#065F46",
                    900: "#064E3B",
                    light: "#D1FAE5",
                },
                danger: {
                    DEFAULT: "#EF4444",
                    50: "#FEF2F2",
                    100: "#FEE2E2",
                    200: "#FECACA",
                    300: "#FCA5A5",
                    400: "#F87171",
                    500: "#EF4444",
                    600: "#DC2626",
                    700: "#B91C1C",
                    800: "#991B1B",
                    900: "#7F1D1D",
                    light: "#FEE2E2",
                },
                warning: {
                    DEFAULT: "#F59E0B",
                    50: "#FFFBEB",
                    100: "#FEF3C7",
                    200: "#FDE68A",
                    300: "#FCD34D",
                    400: "#FBBF24",
                    500: "#F59E0B",
                    600: "#D97706",
                    700: "#B45309",
                    800: "#92400E",
                    900: "#78350F",
                    light: "#FEF3C7",
                },
                info: {
                    DEFAULT: "#2196f3",
                    50: "#EFF6FF",
                    100: "#DBEAFE",
                    200: "#BFDBFE",
                    300: "#93C5FD",
                    400: "#60A5FA",
                    500: "#2196F3",
                    600: "#1E88E5",
                    700: "#1976D2",
                    800: "#1565C0",
                    900: "#0D47A1",
                    light: "#DBEAFE",
                },
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    darkMode: "class",

    plugins: [forms],
};
