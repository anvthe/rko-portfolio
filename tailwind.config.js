import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
        './node_modules/flowbite/**/*.js'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // TikTok Colors
                'tiktok-primary': '#FE2C55',
                'tiktok-secondary': '#25F4EE',
                'tiktok-dark': '#121212',
                'tiktok-light': '#FFFFFF',
                'tiktok-text': '#161823',
                'tiktok-gray': '#8A8B91',

                // YouTube Colors
                'youtube-primary': '#FF0000',
                'youtube-dark': '#282828',
                'youtube-light': '#F9F9F9',
                'youtube-text': '#030303',
                'youtube-gray': '#606060',

                // Notification Colors
                'notification-error': '#DC3545',
                'notification-success': '#28A745',
                'notification-warning': '#FFC107',
                'notification-info': '#17A2B8',

                // UI States
                'hover-dark': 'rgba(0, 0, 0, 0.05)',
                'hover-light': 'rgba(255, 255, 255, 0.1)',
                'overlay-70': 'rgba(0, 0, 0, 0.7)',
                'overlay-50': 'rgba(0, 0, 0, 0.5)',
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '26': '6.5rem',
                '30': '7.5rem',
                'screen-90': '90vh',
                'screen-80': '80vh',
            },
            aspectRatio: {
                'vertical': '9/16',
                'shorts': '4/5',
                'horizontal': '16/9',
            },
            animation: {
                // TikTok Animations
                'heartbeat': 'heartbeat 1s ease infinite',
                'spin-fast': 'spin 0.7s linear infinite',
                'float': 'float 3s ease-in-out infinite',

                // YouTube Animations
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'slide-in': 'slideIn 0.3s ease-out',

                // Notifications
                'toast-in': 'toastIn 0.3s ease-out',
                'toast-out': 'toastOut 0.3s ease-in',
            },
            keyframes: {
                heartbeat: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '25%': { transform: 'scale(1.2)' },
                    '50%': { transform: 'scale(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                slideIn: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                toastIn: {
                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                toastOut: {
                    '0%': { transform: 'translateY(0)', opacity: '1' },
                    '100%': { transform: 'translateY(100%)', opacity: '0' },
                },
            },
        },
    },
    plugins: [
        require('flowbite/plugin'),
        require('tailwind-scrollbar-hide'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
        function({ addUtilities }) {
            addUtilities({
                /* TikTok-like Utilities */
                '.tiktok-scroll': {
                    'scroll-snap-type': 'y mandatory',
                    'scroll-behavior': 'smooth',
                },
                '.tiktok-section': {
                    'scroll-snap-align': 'start',
                    'height': '100vh',
                },
                '.tiktok-video-container': {
                    'aspect-ratio': '9/16',
                    'max-height': '90vh',
                },

                /* YouTube-like Utilities */
                '.youtube-grid': {
                    'grid-template-columns': 'repeat(auto-fill, minmax(300px, 1fr))',
                },
                '.youtube-thumbnail': {
                    'aspect-ratio': '16/9',
                },

                /* Notification System */
                '.notification-toast': {
                    'position': 'fixed',
                    'bottom': '1rem',
                    'right': '1rem',
                    'z-index': '9999',
                    'max-width': '350px',
                },

                /* Responsive Video Controls */
                '.video-controls-container': {
                    'position': 'absolute',
                    'bottom': '0',
                    'left': '0',
                    'right': '0',
                    'background': 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                    'padding': '1rem',
                    'transition': 'all 0.3s ease',
                },

                /* Dark/Light Mode Transition */
                '.theme-transition': {
                    'transition': 'background-color 0.3s ease, color 0.3s ease',
                },
            })
        }
    ],
}