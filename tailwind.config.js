/** @type {import('tailwindcss').Config} */
export default {
  // content: [
  //   "./components/**/*.{js,vue,ts}",
  //   "./layouts/**/*.vue",
  //   "./pages/**/*.vue",
  //   "./plugins/**/*.{js,ts}",
  //   "./app.vue",
  //   "./error.vue",
  // ],
  theme: {
    extend: {
      colors: {
        primary: '#0a94ff',
        secondary: '#707070',
        accent1: '#895bf1',
        accent2: '#f3654a',
        accent3: '#ffb536',
        accent4: '#1ad598',

        // *** BACKGROUNDS COLORS ***
        navbarBg: '#fff',
        dashboardBg: '#f4f5f6',
        tableBg: '#f9fafc',

        // *** FONTS COLORS ***
        text: '#000027',
        textLight: '#fff',
        subtext: '#8d98a9',
        hint: '#b3bccb',

        // *** BORDERS AND OUTLINES COLORS ***
        outline: '#e2e7f1',
        outlineDark: '#ced6e3',
      },
      fontSize: {
        main: '0.7rem',
        base: '0.4rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      borderRadius: {
        'large': '18px',
      }
    },
  },
  plugins: [],
}

