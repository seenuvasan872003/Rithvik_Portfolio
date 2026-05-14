/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brutal-yellow': '#FFDE59',
                'brutal-blue': '#5CE1E6',
                'brutal-pink': '#FF6B6B',
                'brutal-green': '#A3E635',
                'brutal-dark': '#1e293b',
            },
            fontFamily: {
                'vt323': ['"VT323"', 'monospace'],
                'poppins': ['"Poppins"', 'sans-serif'],
            },
            boxShadow: {
                'brutal': '4px 4px 0px 0px rgba(0,0,0,1)',
                'brutal-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
            }
        },
    },
    plugins: [],
}
