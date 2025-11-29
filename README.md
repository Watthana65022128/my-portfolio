# Developer Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS following SOLID principles and clean code practices.

## ✨ Features

- 🎨 Modern and clean design
- 🌓 Dark/Light theme toggle with persistence
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Optimized performance with Next.js
- 🎯 SEO friendly with meta tags
- 📧 Contact form with validation
- 🎭 Smooth scroll animations
- ♿ Accessible (WCAG AA compliant)
- 📦 All files under 500 lines (maintainable code)
- 🏗️ SOLID principles implementation

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS 3.4+
- **UI:** Custom components built from scratch
- **Type Safety:** Full TypeScript coverage

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # React components
│   ├── layout/      # Header, Footer, Navigation
│   ├── sections/    # Page sections
│   ├── ui/          # Reusable UI components
│   ├── features/    # Feature-specific components
│   └── animations/  # Animation wrappers
├── data/            # Static content data
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── services/        # Business logic & API calls
└── types/           # TypeScript definitions
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

See the detailed [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) for step-by-step instructions.

Quick steps:
1. Update personal information in `src/data/personal.ts`
2. Add your projects in `src/data/projects.ts`
3. List your skills in `src/data/skills.ts`
4. Add work experience in `src/data/experience.ts`
5. Replace images in `public/images/`
6. Update SEO metadata in `src/app/layout.tsx`

## 🏗️ Code Quality

This project follows best practices:

- ✅ **SOLID Principles**: Clean architecture and separation of concerns
- ✅ **File Size Limit**: All files under 500 lines for maintainability
- ✅ **TypeScript Strict**: Full type safety throughout
- ✅ **Component Composition**: Small, reusable components
- ✅ **Clean Code**: Self-documenting, readable code

See [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) for architecture details.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

Deploy easily to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or deploy to:
- Netlify
- AWS Amplify
- Any Node.js hosting platform

## 📚 Documentation

- [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) - How to customize your portfolio
- [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) - Architecture and code quality details

## 📄 License

MIT License - feel free to use this template for your own portfolio!
