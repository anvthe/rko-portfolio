/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#2563eb",       // Blue accent
                secondary: "#64748b",     // Muted gray-blue
                accent: "#fbbf24",        // Warm yellow
                background: "#f8fafc",    // Light background
                dark: "#0f172a",          // Dark background for dark mode
            },
            fontFamily: {
                sans: ["Inter", "ui-sans-serif", "system-ui"],
                heading: ["Poppins", "sans-serif"],
            },
            boxShadow: {
                soft: "0 4px 20px rgba(0, 0, 0, 0.05)",
            },
        },
    },
    plugins: [],
}
