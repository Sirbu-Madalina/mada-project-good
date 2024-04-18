module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#9B745C',
        'medium': '#AD8A74',
        'light': '#FFFCF6',
        'skills': '#EFE7DA',
      },
      fontFamily: {
        'lora': ['Lora', 'serif'],
        'hind': ['Hind Madurai', 'sans-serif'],
        'trirong': ['Trirong', 'serif'],
      },
      fontweight: {
        'regular': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        
      }
    },
  },
  plugins: [],
}
/* /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./index.html", "/src/**/*.{vue,js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         'dark': '#9B745C',
//         'medium': '#AD8A74',
//         'light': '#FFFCF6',
//         'skills': '#EFE7DA',
//       },
//       fontFamily: {
//         'lora': ['Lora', 'serif'],
//         'hind': ['Hind Madurai', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// }

 