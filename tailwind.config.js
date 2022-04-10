module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        fblack: {
          DEFAULT: '#172121',
        },
        fgreen: {
          light3: "#c2ffe2",
          light2: "#85ffc6",
          light1: "#47ffa9",
          DEFAULT: "#00e061",
          dark1: "#00b850",
          dark2: "#008f3e",
          dark3: "#00662c",
        },
        fpurple: {
          DEFAULT: "#6f00ff",
          dark1: "#6100e0"
        },
        forange: {
          DEFAULT: "#ff6f00"
        }
      },
      extend: {
        boxShadow: {
          full: '0px 0px 10px 4px rgba(0, 0, 0, 0.05), 0px 4px 5px -4px rgba(0, 0, 0, 0.3)',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
