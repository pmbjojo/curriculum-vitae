# Curriculum Vitae – Joshua Jourdam

Welcome to my digital Curriculum Vitae! This project is a modern, interactive, and easily customizable CV built with cutting-edge web technologies. It is designed to be both a showcase of my professional journey and a template for anyone who wants to create a beautiful, web-based resume.

## Why a Web CV?

It was a pain to create a CV in Word or Canva, so I decided to build my own solution!

Traditional CVs are static and limited in interactivity. By leveraging web technologies, I can:

- Present my experience, education, and skills in a visually engaging way
- Offer interactive features (PDF export, theme switching, responsive design)
- Make updates and customizations easy
- Provide a template for others to use and adapt

## Technologies Used

- **Next.js**: React framework for server-side rendering, static site generation, and API routes
- **TypeScript**: Type safety for maintainable and robust code
- **Tailwind CSS**: Utility-first CSS for rapid, responsive UI development
- **shadcn/ui**: Accessible, unstyled UI primitives (Accordion, Tabs, Tooltip, etc.)
- **Lucide Icons**: Modern, consistent icon set
- **Vercel Analytics**: Simple analytics for deployment
- **Zod**: TypeScript-first schema declaration and validation
- **Puppeteer**: Headless Chrome Node.js API for PDF generation

## Features

- Interactive, responsive web CV
- PDF export (with Puppeteer or @react-pdf/renderer)
- Light/dark mode toggle
- Multi-language support (EN/FR)
- Modular, easily extensible data structure
- Devicon integration for technology icons

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm, pnpm, bun or yarn

### Installation

```sh
# Clone the repository
$ git clone https://github.com/pmbjojo/curriculum-vitae.git
$ cd curriculum-vitae

# Install dependencies
$ npm install
```

### Development

```sh
# Start the development server
$ npm run dev
# Open http://localhost:3000 in your browser
```

### PDF Generation

```sh
# Generate a PDF of the CV (see scripts in package.json)
$ npm run pdf
# The PDF will be generated from the /pdf route and saved in /public
```

## Customization Guide

This project is designed to be easily adapted for your own use. Here’s how you can personalize it:

### 1. Update Personal Data

- All personal data (experience, education, skills, etc.) is stored in `src/data/`.
- Edit the files in `src/data/` to reflect your own background.

### 2. Change Theme & Styles

- Tailwind CSS makes it easy to adjust colors, spacing, and layout.
- Modify `tailwind.config.js` or the classes in component files for custom styles.

### 3. Add/Remove Sections

- Each section (Experience, Education, Projects, etc.) is a React component in `src/app/(web)/_components/` or `src/app/pdf/_components/`.
- Add new sections by creating new components and updating the main page layout.

### 4. Update Icons

- Technology icons are in `/public/icons/` and integrated via Devicon.
- Add your own SVGs or use existing ones.

### 5. Deployment

- Deploy easily to Vercel, Netlify, or any static hosting provider.
- For Vercel: just connect your repo and deploy!
- Try to avoid using dynamic apis to keep the whole website static.

## Scripts

- `dev` : Start development server
- `pdf` : Generate a PDF of the pdf page using puppeteer (must be manually triggered after each update)
- `add` : Shortcut to shadcn cli add script

## Credits

- Built with ❤️ by Joshua Jourdam

---

Feel free to fork, adapt, and use this project for your own professional journey!
