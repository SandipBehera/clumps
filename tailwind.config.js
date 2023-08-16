/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'xsm':'370px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
  backgroundImage: {
    'contactus-img': "url('./assets/frontent_files/img/product/contact-us.png')",
    'footer-texture': "url('/img/footer-texture.png')",
  }
}