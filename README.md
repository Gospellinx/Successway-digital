# 🚀 Successway Digital & Vocational Guidance Foundation

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2.3-blue?style=flat&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)](https://typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-green?style=flat&logo=tailwind)](https://tailwindcss.com)

A modern, responsive landing page for **Successway Digital & Vocational Guidance Foundation**, a non-profit organization in Kurudu, Abuja, Nigeria. Empowering youth through practical digital ICT training, vocational skills (tailoring, catering), career guidance, and leadership development – no university degree required!

## ✨ Features
- **Hero Section**: Engaging intro with parallax tilt image and call-to-action.
- **About**: Mission, vision, and foundation details.
- **Courses**: 6 dynamic courses (ICT, vocational, career) with cards, pricing, stats.
- **Features**: Key benefits with icons and animations.
- **Student Reviews**: Multi-carousel slider with testimonials.
- **Articles/News**: Blog previews with reactions.
- **Responsive Navbar**: Desktop/mobile with hover animations.
- **Footer & ScrollToTop**: Contact, quick links.
- **Animations**: AOS for smooth scrolls.
- **SEO Optimized**: Metadata, Google Fonts (Space_Grotesk), favicon.

![Screenshot Placeholder](public/images/hero.png) <!-- Replace with actual screenshot -->

Live Demo: [http://localhost:3000](http://localhost:3000) (dev server)

## 🛠 Tech Stack
| Category | Technologies |
|----------|--------------|
| Framework | Next.js 16 (App Router) |
| UI | React 19, TailwindCSS 4 |
| Styling | PostCSS, Custom globals.css |
| Components | react-multi-carousel, react-parallax-tilt, react-icons, AOS |
| Language | TypeScript 5 |
| Configs | ESLint 9, react-compiler |

## 📁 Project Structure
```
successway-digital/
├── components/Home/
│   ├── Hero/          # HeroContent + HeroImage
│   ├── About/
│   ├── Course/        # Courses + CourseCard
│   ├── Feature/
│   ├── Review/        # Slider + SliderCard
│   ├── Article/       # Article + ArticleCard
│   ├── Navbar/        # ResponsiveNav, MobileNav
│   ├── Footer/
│   └── Helper/        # Slider, SliderCard, ScrollToTop
├── data/data.ts       # Courses & Articles data
├── constant/constant.ts # Nav links
├── public/images/     # Assets (hero, courses, reviews)
├── src/app/           # layout.tsx, page.tsx (renders Home), globals.css
├── next.config.ts     # reactCompiler
└── package.json       # Scripts: dev/build/start/lint
```

## 🚀 Quick Start
### Prerequisites
- Node.js 20+

### Installation
```bash
git clone <repo-url>
cd successway-digital
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000).

### Build & Start
```bash
npm run build
npm run start
```

### Lint
```bash
npm run lint
```

## 🔮 Deployment
- **Vercel** (recommended): Connect GitHub repo, auto-deploys.
- Other: Netlify, Railway, or any Node host.

## 📸 Screenshots
Add screenshots:
1. Desktop Hero & Navbar.
2. Mobile responsive.
3. Courses grid.
4. Review slider.

## 🤝 Contributing
1. Fork repo.
2. Create feature branch (`git checkout -b feature/amazing-feature`).
3. Commit (`git commit -m 'Add amazing feature'`).
4. Push & PR.

## 📄 License
MIT License - feel free to use/fork!

## 🙏 Acknowledgments
- [Successway Digital](https://successwaydigital.com) – real-world inspiration.
- Next.js, Tailwind, & open-source community.

---

⭐ Star if useful! Questions? Open an issue.

