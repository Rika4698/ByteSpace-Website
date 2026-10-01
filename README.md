# 🎓 ByteSpace — Modern E-Learning & Course Creator Platform

<div align="center">

  <img src="public/logo/logo-dark.svg" alt="ByteSpace Logo" width="220" />

  <p align="center">
    <strong>Unlock your creativity, master in-demand skills, and build your digital future.</strong>
  </p>

  <p align="center">
    <a href="https://bytespace-website-rose.vercel.app/" target="_blank">
      <img src="https://img.shields.io/badge/Live_Demo-Vercel-black?style=for-the-badge&logo=vercel" alt="Live Demo" />
    </a>
    <a href="https://github.com/Rika4698/ByteSpace-Website" target="_blank">
      <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" alt="Repository" />
    </a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-16.x-000000?style=flat-square&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Zod-Validation-3E67B1?style=flat-square&logo=zod" alt="Zod" />

  </p>
</div>

---

## 🌟 Overview

**ByteSpace** is a modern, high-performance web platform designed to bridge the gap between passionate learners and world-class creators. It offers an engaging educational marketplace where students can explore diverse topics—from UI/UX design and web development to business and photography—while creators are empowered with intuitive course management and monetization tools.

Built on the latest **Next.js (App Router)**, **React 19**, and **Tailwind CSS v4**, the platform prioritizes blazing-fast performance, accessibility, responsive design, and cutting-edge visual aesthetics inspired by a modern Figma design system.

🔗 **Live Preview:** **https://bytespace-website-rose.vercel.app/**

---

## ✨ Key Features

### 👨‍🎓 For Learners
- **Interactive Course Directory:** Browse courses across diverse categories including UI/UX Design, Graphic Design, Big Data, Productivity, and Entrepreneurship.
- **Dynamic Category Filtering:** Instantly filter courses with responsive category pills and real-time state toggling without full-page reloads.
- **Rich Course Previews:** Cards displaying instructor credits, lesson counts, estimated duration, student ratings, price tag ($25 lifetime access), and enrolled learner badges.
- **Learning Tracks:** 6 specialized domains (Design, Development, IT & Software, Business, Marketing, Photography) to accelerate career progression.

### 🎨 For Creators
- **Creator Hub & Community:** Connect with a network of over 10,000+ local and global creators.
- **Course Studio & Monetization:** High-visibility creator dashboard widgets displaying revenue metrics (Month-to-Date, Year-to-Date) and student enrollment analytics.
- **Seamless Onboarding:** Simple, guided registration for creators looking to publish courses and share their expertise.

### 🔐 Authentication & Security
- **Zod & React Hook Form:** Client-side and server-side type-safe form validation with instant inline error states.
- **Server Actions:** Secure Next.js server actions for user sign-in and registration flows.
- **Notification Feedback:** Toast notifications powered by `react-hot-toast`.

### 🎨 Design & User Experience
- **Tailwind CSS v4 Design System:** Custom theme with tokenized color palettes (*Electric Violet* primary and *Neon Lime* secondary), custom typography, and layout containers.
- **Bespoke Typography:** Clean, modern font pairing using **Poppins** for expressive headings and **Satoshi Variable** for readable body text.
- **Ambient Visuals:** Subtle radial glowing blobs, 120px grid backgrounds, 3D geometric accents, and an infinite marquee for partner brand logos.
- **Full Responsiveness:** Tailored layouts for mobile, tablet, desktop, and ultra-wide displays with accessible navigation and drawer menus.

---

## 🛠️ Tech Stack & Architecture

| Technology | Purpose |
| :--- | :--- |
| **[Next.js](https://nextjs.org/) (v16 App Router)** | Full-stack React framework with SSR, Server Components & Server Actions |
| **[React](https://react.dev/) (v19)** | Declarative component UI library |
| **[TypeScript](https://www.typescriptlang.org/)** | Static typing for enterprise stability and developer productivity |
| **[Tailwind CSS](https://tailwindcss.com/) (v4)** | Next-generation utility-first styling with `@theme` design tokens |
| **[React Hook Form](https://react-hook-form.com/)** | Flexible and performant form state management |
| **[Zod](https://zod.dev/)** | TypeScript-first schema validation for forms and inputs | 
| **[React Hot Toast](https://react-hot-toast.com/)** | Lightweight, animated toast notifications |
| **[Vercel](https://vercel.com/)** | Cloud platform for automated CI/CD and edge deployment |

---

## 📂 Project Structure

```bash
bytespace-website/
├── public/                 # Static assets, 3D shapes, images & brand logos
│   ├── course-avatar/      # Enrolled student avatars
│   ├── courses/            # Course cover thumbnails
│   ├── learning-icon/      # Learning path category icons
│   ├── logo/               # Dark & light ByteSpace SVG logos
│   ├── shapes/             # 3D decorative geometry elements
│   ├── sponsors/           # Partner and sponsor logos
│   └── student/            # Hero & growth section illustrations
├── src/
│   ├── app/                # Next.js App Router root
│   │   ├── (auth)/         # Authentication route group (sign-in, sign-up)
│   │   │   ├── sign-in/    # Sign In page
│   │   │   ├── sign-up/    # Sign Up page
│   │   │   └── server.ts   # Next.js Server Actions for auth
│   │   ├── (common)/       # Main website route group
│   │   │   ├── layout.tsx  # Common layout with Navbar and Footer
│   │   │   └── page.tsx    # Homepage landing page
│   │   ├── fonts/          # Satoshi variable font files
│   │   ├── globals.css     # Tailwind v4 theme tokens, utilities & keyframes
│   │   ├── layout.tsx      # Root HTML & body layout with Toaster & fonts
│   │   └── not-found.tsx   # Custom 404 page
│   ├── components/         # Reusable React components
│   │   ├── all-icons/      # Custom SVG icons (Cart, CheckCircle, etc.)
│   │   ├── home-section/   # Landing page section modules
│   │   │   ├── auth/       # Auth form layouts & fields
│   │   │   ├── courses/    # CategoryTabsCards & CourseSection
│   │   │   ├── cta-section/# Creator CTA banner with 3D shapes
│   │   │   ├── explore-learning/ # Learning path grid
│   │   │   ├── footer/     # Footer with newsletter & links
│   │   │   ├── hero/       # Hero section with search & floating stats
│   │   │   ├── navbar/     # Responsive navbar & mobile menu
│   │   │   ├── professional-growth/ # Learner stats & Creator dashboard
│   │   │   ├── sponsors/   # Infinite marquee partner reel
│   │   │   └── testimonial/# Community review cards
│   │   └── ui/             # Core UI atoms (Button, Card, Input, Heading, etc.)
│   ├── data-info/          # Mock data models, course catalog & navigation links
│   ├── hooks/              # Custom React hooks
│   └── schema/             # Zod validation schemas (SignIn & SignUp)
├── package.json            # Project dependencies and script runner
├── tsconfig.json           # TypeScript configuration
└── next.config.ts          # Next.js configuration
```

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally on your machine.

### Prerequisites

Make sure you have installed:
- **Node.js**: `v18.17.0` or later ([Download Node.js](https://nodejs.org/))
- **Package Manager**: `npm`, `yarn`, `pnpm`, or `bun`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rika4698/ByteSpace-Website.git
   cd ByteSpace-Website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View in browser:**
   Open [http://localhost:3000](http://localhost:3000) in your browser to explore the website.

---


## 🎨 Design System & Color Palette

The project utilizes a custom, cohesive design system created in Tailwind CSS v4:

- **Primary Colors ("Electric Violet"):**
  - Brand Main: `#003be2` (`--color-primary-800`)
  - Accent / Hover: `#0445ff` (`--color-primary-600`)
  - Deep Navy: `#071e5f` (`--color-primary-950`)
- **Secondary Colors ("Neon Lime / Volt"):**
  - Accent Highlight: `#d4fb20` (`--color-secondary-400`)
  - Brand Neon: `#cbfc01` (`--color-secondary-500`)
- **Neutrals:**
  - Background Light: `#FAFAFA` / `#ffffff`
  - Subtle Gray: `#f5f5f6` (`--color-neutral-50`)
  - Text Primary: `#242528` (`--color-neutral-950`)
- **Typography:**
  - Headings: `Poppins` (Google Font)
  - Body & UI: `Satoshi Variable` (Local Font)

---

## 🌐 Deployment

This project is optimized for deployment on the [Vercel Platform](https://vercel.com/):

1. Push your latest code changes to your GitHub repository.
2. Import the project in the [Vercel Dashboard](https://vercel.com/dashboard).
3. The platform will automatically detect Next.js and apply optimal build settings (`npm run build`).
4. Click **Deploy** to launch your live site.




---

<div align="center">

  Created by <a href="https://github.com/Rika4698"><strong>Rika4698</strong></a>

Portfolio: <a href="https://sharmin-rika-portfolio.vercel.app/"><strong>Sharmin Akter Reka</strong></a>

</div>
