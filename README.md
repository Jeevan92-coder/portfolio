
# 🚀 Meher Jeevan — Advanced Professional Portfolio

A modern, fully-featured portfolio website built with **Next.js 13**, **React 18**, **Framer Motion**, and **Tailwind CSS**.

---

## ✨ Features

- 🎨 **Custom Cursor** — Smooth animated cursor with hover interactions
- ✨ **Particle System** — Interactive tsparticles background on hero
- 🎭 **Page Transitions** — Layered slide-in transitions between pages
- 📊 **Animated Stats** — CountUp animations for metrics
- 🎠 **Project Sliders** — Swiper.js carousels for work & services
- 💬 **Testimonials** — Star-rated client reviews with navigation
- 📱 **Fully Responsive** — Mobile-first, works on all screen sizes
- ⚡ **Performance** — Optimized with Next.js SSG/ISR
- 🎯 **SEO Ready** — Meta tags, Open Graph, sitemap-ready
- 📬 **Contact Form** — Netlify Forms integration

---

## 📁 Folder Structure

```
meher-jeevan-portfolio/
│
├── 📁 components/            ← Reusable UI components
│   ├── Avatar.jsx            ← Animated SVG developer illustration
│   ├── Bulb.jsx              ← Decorative light glow element
│   ├── Circles.jsx           ← Decorative circle rings element
│   ├── Header.jsx            ← Top header with logo + socials
│   ├── Layout.jsx            ← Page wrapper (meta, cursor, nav)
│   ├── Nav.jsx               ← Vertical icon navigation (right side)
│   ├── ParticlesContainer.jsx← tsparticles interactive background
│   ├── ProjectsBtn.jsx       ← Animated rotating "My Portfolio" button
│   ├── ServiceSlider.jsx     ← Swiper slider for services cards
│   ├── Socials.jsx           ← Social media icon links
│   ├── TestimonialSlider.jsx ← Swiper slider for client testimonials
│   ├── TopLeftImg.jsx        ← Top-left decorative glow
│   ├── Transition.jsx        ← Page transition overlay animation
│   └── WorkSlider.jsx        ← Swiper slider for project cards
│
├── 📁 pages/                 ← Next.js pages (auto-routed)
│   ├── _app.jsx              ← App wrapper (AnimatePresence + Layout)
│   ├── index.jsx             ← Home page (Hero)
│   ├── about/
│   │   └── index.jsx         ← About page (skills, stats, experience)
│   ├── services/
│   │   └── index.jsx         ← Services page
│   ├── work/
│   │   └── index.jsx         ← Work/Projects page
│   ├── testimonials/
│   │   └── index.jsx         ← Testimonials page
│   └── contact/
│       └── index.jsx         ← Contact form page
│
├── 📁 public/                ← Static assets (images, SVGs, fonts)
│   ├── site-bg.svg           ← SVG background pattern
│   ├── circle-star.svg       ← Circular star decorative SVG
│   ├── __forms.html          ← Netlify Forms detection file
│   └── favicon.ico           ← Browser tab icon
│
├── 📁 styles/
│   └── globals.css           ← Global styles, custom cursor, Tailwind
│
├── variants.js               ← Framer Motion animation variants
├── tailwind.config.js        ← Tailwind config (colors, animations)
├── next.config.js            ← Next.js config
├── postcss.config.js         ← PostCSS config
└── package.json              ← Dependencies
```

---

## 🛠️ Setup & Run

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Install & Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# → http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

---

## 🎨 Customization Guide

### Change Your Name & Info
- `components/Header.jsx` — Logo text
- `pages/index.jsx` — Hero title and subtitle
- `pages/about/index.jsx` — `aboutData` array (skills, experience, awards)
- `components/Socials.jsx` — `socialData` array (your social links)

### Change Projects
- `components/WorkSlider.jsx` — `workSlides` array

### Change Services
- `components/ServiceSlider.jsx` — `serviceData` array

### Change Testimonials
- `components/TestimonialSlider.jsx` — `testimonialData` array

### Change Colors
- `tailwind.config.js` — `colors.accent` (currently `#F13024`)

---

## 📦 Tech Stack

| Technology    | Purpose                          |
|--------------|----------------------------------|
| Next.js 13   | Framework, routing, SSG          |
| React 18     | UI components                    |
| Framer Motion| Page transitions & animations    |
| Tailwind CSS | Utility-first styling            |
| Swiper.js    | Touch-friendly carousels         |
| tsParticles  | Interactive particle background  |
| react-countup| Animated number counters         |
| react-icons  | Icon library                     |

---

## 🚀 Deploy

### Netlify (Recommended)
1. Push to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Contact form works out of the box via Netlify Forms!

### Vercel
```bash
npx vercel
```

---

Made with ❤️ by **Meher Jeevan**
