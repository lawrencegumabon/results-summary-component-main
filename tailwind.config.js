/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        //Primary
        'Light-red': 'hsl(0, 100%, 67%)',
        'Orangey-yellow': 'hsl(39, 100%, 56%)',
        'Green-teal': 'hsl(166, 100%, 37%)',
        'Cobalt-blue': 'hsl(234, 85%, 45%)',

        //Gradients
        'Light-slate-blue' : 'hsl(252, 100%, 67%)',
        'Light-royal-blue' : 'hsl(241, 81%, 54%)',
        'Violet-blue' : 'hsla(256, 72%, 46%, 1)',
        'Persian-blue' : 'hsla(241, 72%, 46%, 0)',

        //Neutral
        'White': 'hsl(0, 0%, 100%)',
        'Pale-blue': 'hsl(221, 100%, 96%)',
        'Light-lavender': 'hsl(241, 100%, 89%)',
        'Dark-gray-blue': 'hsl(224, 30%, 27%)'
      },
      fontFamily:{
        'Hanken': ['Hanken Grotesk', 'sans-serif'],
      },
      spacing: {
        '375': '23.438rem',
        '304': '19rem',
      }
    },
  },
  plugins: [],
}
