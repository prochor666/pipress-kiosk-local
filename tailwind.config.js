module.exports = {
    content: [
        'src/vue-components/*.vue',
        'src/App.vue',
        'src/composables/*.js'
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            zIndex: {
                '1000': 1000,
                '2000': 2000,
            },

            // animation class
            animation: {
                fadein: 'fadeIn 500ms ease-in',
                fadeout: 'fadeOut 500ms ease-out',
            },

            // actual animation
            keyframes: theme => ({
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeOut: {
                    '100%': { opacity: '1' },
                    '0%': { opacity: '0' },
                },
            }),
        },
    },
    variants: {
        extend: {
            backgroundColor: ['checked'],
            borderColor: ['checked'],
        },
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
};
