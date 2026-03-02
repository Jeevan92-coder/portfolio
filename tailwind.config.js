/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#0d0d1a",
        secondary: "#1a1a2e",
        accent: "#F13024",
        "accent-hover": "#d42518",
        purple: "#7c3aed",
        "purple-light": "#a855f7",
      },
      backgroundImage: {
        explosion: "url('/bg-explosion.png')",
        circles: "url('/bg-circles.png')",
        circleStar: "url('/circle-star.svg')",
        site: "url('/site-bg.svg')",
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
        "spin-medium": "spin 4s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 2s infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "slide-in": "slideIn 0.6s ease forwards",
        "fade-up": "fadeUp 0.8s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(241,48,36,0.3)" },
          "50%": { boxShadow: "0 0 50px rgba(241,48,36,0.7), 0 0 100px rgba(241,48,36,0.3)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        slideIn: {
          from: { transform: "translateX(-100%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        fadeUp: {
          from: { transform: "translateY(30px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
      },
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        "glow-accent": "0 0 30px rgba(241,48,36,0.4)",
        "glow-purple": "0 0 30px rgba(124,58,237,0.4)",
        "card": "0 8px 32px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
