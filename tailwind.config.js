/** @type {import('tailwindcss').Config} */


import baseColor from 'tailwindcss/colors'



// Use the baseColor object directly in the configuration


baseColor.black = '#1b1c1e'


export default {
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
      fontSize: {
         "3xl": "clamp(60px, 20vw, 100px)",
         ultra: "clamp(48px, 10vw, 128px)",
         tarif: "clamp(6px, 5vw, 24px)",
         xl: "clamp(30px, 5vw, 70px)",
         lg: "clamp(12px, 5vw, 48px)",
         "36px": "clamp(18px, 4vw, 36px)",
         "32px": "clamp(21px, 4vw, 32px)",
         "md+": "clamp(17px, 4vw, 34px)",
         md: "clamp(10px, 4vw, 28px)",
         "md-": "clamp(6px, 4vw, 18px)",
         extramd: "clamp(10px, 3vw, 28px)",
         sm: "clamp(9px, 3vw, 18px)",
         small: "clamp(6px, 3vw, 18px)",
      },
      colors: baseColor,
      extend: {
         colors: {
            primary: "#ecd23b",
            violet: "#412E52",
            darkViolet: "#22182B",
            grey: "#C5C3C3",
            brown: "#AB8E67",
            pumpkin: "#FF7A00",
            yellow: "#FFEC44",
            korpHeader: "#25200C",
            korpPrimary: "#201E1F",
            NYblack: "#002106",
            NYgreen: "#009848",
            NYcream: "#E7C296",
            NYbrown: "#BC8E4A",
            NYred: "#EF004B",
            NYheader: "#041106",
            FBlack: '#081130',
            ChillBrown: '#593723',
            ChillHeadBrown: '#483122'
         },
         container: {
            center: true,
            padding: "1.25rem",
         },
         screens: {
            "3xl": "2500px",
            vsm: "355px",
            "900p": "900px",
            "370p": "370px",
         },
         keyframes: {
            jump: {
               "0%, 100%": { transform: "translate(0, 0)" },
               "50%": { transform: "translate(0, -20px)" },
            },
         },
      },
   },
   plugins: [
      function ({ addVariant }) {
         addVariant(
            "supports-backdrop-blur",
            "@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))"
         )
      },
   ],
}
