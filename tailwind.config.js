/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],

  theme: {
    extend: {
      
    
    
   

        fontFamily: {
            'anton': ['Anton'],
            sans: [
             
              'Montserrat',
              
          ],
        },
      

        colors: {
          primary: '#00aeef',
          secondary: '#668fbc',
          section: '#f7fbff',
          blackx: '#000000',
          footer: '#FFFFFF',
          regular: '#6b7280',
        },



        backgroundImage: {
          'mark': "url('/public/images/markProfile.png')",
          'markmobile': "url('/public/images/markProfile2.png')",
          'abstract': "url('/public/images/screen.jpg')",
          'blog': "url('/public/images/blogbanner.jpg')",
          'contact': "url('/public/images/contactbanner.jpg')",
          'contactmobile': "url('/public/images/contactbannersm.jpg')",
        }



        
      },
    },


    




    plugins: [],
  };