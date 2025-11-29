# Developer Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ⚡ Built with Next.js 15 App Router
- 🎨 Styled with Tailwind CSS
- 📱 Fully Responsive Design
- 🌙 Dark/Light Mode Support
- 🎯 TypeScript for Type Safety
- 🚀 Optimized for Performance
- ♿ Accessibility Focused

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # React components
│   ├── features/    # Feature-specific components
│   ├── layout/      # Layout components (Header, Footer)
│   ├── sections/    # Page sections
│   └── ui/          # Reusable UI components
├── data/            # Content data files
├── lib/             # Utility functions
└── types/           # TypeScript type definitions
```

## Customization

To customize the portfolio:

1. Update personal information in `src/data/personal.ts`
2. Add/edit projects in `src/data/projects.ts`
3. Update experience in `src/data/experience.ts`
4. Modify skills in `src/data/skills.ts`

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click Deploy!

Your portfolio will be live at `https://your-project.vercel.app`

## License

This project is open source and available under the MIT License.
