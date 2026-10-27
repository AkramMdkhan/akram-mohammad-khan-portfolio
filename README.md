# Akram Mohammad Khan | Developer Portfolio

A modern, responsive portfolio website for **Akram Mohammad Khan**, a MERN Stack Developer. It presents my skills, projects and contact details in a clean dark design with smooth animations.

**Live site:** https://akram-mohammad-khan-portfolio.vercel.app/

## Features

- **Responsive navbar** with smooth scrolling, a highlight for the active section and a mobile menu
- **Hero section** with a typing effect, my photo with orbiting tech icons, a resume download button and social links
- **About Me** section in a bento-style layout (journey, work I enjoy, hobbies, personality)
- **Skills** shown as icon tiles grouped into Frontend, Backend and Tools
- **Projects** section with cards that tilt in 3D on hover
- **Project details pages** (`/projects/[slug]`) with the tech stack, description, live link, GitHub link, challenges faced and future plans
- **Contact** section with email, phone and WhatsApp
- **Animations** including scroll reveal, floating background icons and hover effects, with support for reduced-motion settings
- **Fully responsive** on mobile, tablet, laptop and desktop

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- Deployed on [Vercel](https://vercel.com/)

## Projects Featured

| Project | Description |
|---|---|
| **BazarDor** | Bengali grocery price tracker with authentication, protected pages and a MongoDB database |
| **Fit Log** | Workout planner with a plan and saved list, search and sorting |
| **DevStack** | Explore developer technologies and build a custom tech stack |

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/AkramMdkhan/akram-portfolio.git
cd akram-portfolio
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

To create a production build:

```bash
npm run build
npm start
```

## Project Structure

```
src/
  app/                  Pages and layout
    projects/[slug]/    Project details page
  components/           Navbar, Hero, About, Skills, Projects, Contact, Footer
  data/projects.ts      All project information in one place
public/                 Images and resume
```

## Contact

- Email: akrammdkhan10@gmail.com
- GitHub: [AkramMdkhan](https://github.com/AkramMdkhan)
- LinkedIn: www.linkedin.com/akrammdkhan

---

Designed and built by Akram Mohammad Khan.
