# 🌌 Md. Tanbeer Hasan — 3D Interactive Portfolio

An enterprise-grade, high-performance, and visually stunning 3D developer portfolio designed with modern aesthetics and interactive elements. Built with **Next.js**, **React**, **Tailwind CSS v4**, **Three.js**, and **GSAP**.

---

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-15%2B-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React 19](https://img.shields.io/badge/React-19-20232a?style=for-the-badge&logo=react&logoColor=61dafb)](https://react.dev)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind%20CSS-v4.0-0f172a?style=for-the-badge&logo=tailwindcss&logoColor=06b6d4)](https://tailwindcss.com)
[![Three.js](https://img.shields.io/badge/Three.js-r172-000000?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org)
[![GSAP](https://img.shields.io/badge/GSAP-v3.12-88ce02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5-007acc?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)

🌐 **Live Portfolio:** [https://tanbeer.digitalplatformbd.com](https://tanbeer.digitalplatformbd.com)

</div>

---

## 🌟 Visual Aesthetics & Design

The portfolio features premium UI/UX design choices that instantly captivate visitors:
*   **3D Particle Background:** A GPU-accelerated interactive particle system built using raw WebGL shaders in Three.js that floats and responds to window resize.
*   **Glassmorphism Theme:** Elegant frosted-glass cards with subtle translucent backdrops, border highlights, and vibrant glowing overlays.
*   **Micro-Animations:** Immersive page entry, component cascades, and interactive triggers built using GSAP (GreenSock Animation Platform).
*   **Dynamic Interactive Cards:** Hover-tilt effects on cards using 3D transform properties that react instantly to cursor positions.
*   **Tailored Color Palettes:** Harmonious combination of deep dark void spaces (`#050505`), futuristic neon teals, and soft blues.
*   **Responsive Layouts:** Designed strictly around a mobile-first philosophy, adapting fluidly across all mobile, tablet, and desktop viewports.

---

## 🚀 Key Features

*   🌌 **Interactive 3D Universe:** Custom Three.js canvas rendering thousands of star particles.
*   ⚙️ **Single Source of Truth:** All content (skills, experience timeline, projects, and personal bios) is managed cleanly within [src/data/portfolio-data.ts](file:///d:/Tanbeer/portfolio/src/data/portfolio-data.ts).
*   ⚡ **Next.js Static HTML Export:** Reconfigured next configuration with `output: 'export'` allowing instantaneous loading times and flexible deployment across any server (cPanel, standard Apache, Nginx, or VPS).
*   📦 **Custom UI Library:** Isolated presentational components including [GlassCard](file:///d:/Tanbeer/portfolio/src/components/ui/GlassCard.tsx), [GradientButton](file:///d:/Tanbeer/portfolio/src/components/ui/GradientButton.tsx), [SkillTag](file:///d:/Tanbeer/portfolio/src/components/ui/SkillTag.tsx), and [SectionHeading](file:///d:/Tanbeer/portfolio/src/components/ui/SectionHeading.tsx).
*   🔍 **Optimized SEO Engine:** Perfect indexing compliance with Google crawlers using dynamic metadata configurations, a custom sitemap generator ([src/app/sitemap.ts](file:///d:/Tanbeer/portfolio/src/app/sitemap.ts)), and automated crawler guides ([src/app/robots.ts](file:///d:/Tanbeer/portfolio/src/app/robots.ts)).
*   💼 **Integrated Contact Modal:** Dynamic modal displaying multi-channel contact handles (Phone, Email, LinkedIn, GitHub) allowing immediate interaction with the developer.
*   📄 **Dynamic CV Downloader:** Downloadable resume link pre-packaged within the hero dashboard.

---

## 🛠️ Architecture & Folder Structure

The project has been structured logically keeping styling decoupled from layout logic and presentational units:

```text
portfolio/
├── public/                 # Static assets (profile photo, CV, icons, favicon)
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── (auth)/         # Grouped authentication paths (Login, etc.)
│   │   ├── globals.css     # Global styles containing Tailwind v4 configuration
│   │   ├── layout.tsx      # Main site wrapper and HTML head configurations
│   │   ├── page.tsx        # Portfolio landing template aggregating all sections
│   │   ├── robots.ts       # Automated robots.txt generator for SEO
│   │   └── sitemap.ts      # Automated sitemap.xml generator for SEO
│   ├── components/         # Modular presentational blocks
│   │   ├── layout/         # Navigation, header, footer layouts
│   │   ├── modals/         # Interactive modals (Contact details)
│   │   ├── sections/       # Semantic section components (Hero, Skills, Experience, Projects)
│   │   ├── three/          # WebGL and Three.js elements (ParticleBackground canvas)
│   │   └── ui/             # Reusable design primitives (Buttons, Cards, Badges)
│   ├── data/               # Centralized static configuration files
│   │   └── portfolio-data.ts # Single source of truth for text/media contents
│   ├── hooks/              # Custom React state hooks
│   │   ├── useCardTilt.ts  # Handles the mouse move 3D tilt transformation calculations
│   │   └── useScrollReveal.ts # Hooks GSAP scroll triggers to elements
│   └── lib/                # Static helpers, context, and core libraries
└── package.json            # Script macros and dependencies
```

---

## ⚡ Quick Start

### Prerequisites
Make sure you have **Node.js (v18.x or later)** and **NPM** installed.

### 1. Install Dependencies
Run the clean package install:
```bash
npm install
```

### 2. Run the Development Server
Launch the dev server locally:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your web browser to view the application.

### 3. Build & Export Production Bundle
To compile typescript types and bundle the assets into optimized static assets (`out/` directory):
```bash
npm run build
```

---

## 🌐 Deployment Instructions

Because the portfolio is configured for **Static Export (`output: 'export'`)**, compiling the project generates a standalone, raw HTML/CSS/JS client-side directory inside `portfolio/out/`. 

This enables you to host the portfolio on **any** web hosting system.

### Option A: Uploading to cPanel / Shared Hosting
1. Run `npm run build` locally.
2. Open your local project folder and navigate to the newly generated `out/` directory.
3. Zip all contents inside the `out/` directory (ensure you zip the files inside, not the folder itself).
4. Log in to your cPanel dashboard, open **File Manager**, and navigate to the directory mapped to your domain (`tanbeer.digitalplatformbd.com`).
5. Upload the zip file and extract it directly into the directory.

### Option B: Deploying on VPS (Nginx / Apache)
1. Run `npm run build` on your VPS or build environment.
2. Copy the files inside the `out/` folder to your web server root:
   ```bash
   cp -r out/* /var/www/tanbeer-portfolio/
   ```
3. Ensure Nginx or Apache is pointing to `/var/www/tanbeer-portfolio/` and handles HTML routes correctly.

---

## 💻 Tech Stack Specifications

*   **Runtime:** Node.js
*   **Meta-Framework:** Next.js 15+ (App Router)
*   **Language:** TypeScript / ES6+
*   **CSS Architecture:** Tailwind CSS v4 & Vanilla CSS variables
*   **Animation System:** GSAP 3.x (ScrollTrigger, Tween)
*   **WebGL Renderer:** Three.js (r172)
