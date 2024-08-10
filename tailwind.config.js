/** @type {import('tailwindcss').Config} */
module.exports = {
      darkMode: 'selector',
      content: ["*"],
      theme: {
            extend: {
                  colors: {
                        backgroundColorLight: "#f4effb",
                        backgroundColorDark: "#1f1a27",
                        navbarLight: "#7936dd",
                        navbarDark: "#351762",
                        primaryFontColor: "#ffffff",
                        fontColorLight: "#0e0916",
                        fontColorDark: "#eee9f6",
                        hoverLight: "#b184f5",
                        hovereDark: "#370a7b",
                        buttonColorLight: "#883bfc",
                        buttonColorDark: "#5003c4"
                  },  
            },
      },
      plugins: [],
}

