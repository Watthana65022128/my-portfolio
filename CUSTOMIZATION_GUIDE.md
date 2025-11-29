# Customization Guide

This guide will help you customize your portfolio website with your own information.

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## Customization Steps

### Step 1: Personal Information

Edit `src/data/personal.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Full Name",
  title: "Your Professional Title",
  tagline: "Your tagline or value proposition",
  bio: [
    "First paragraph about yourself...",
    "Second paragraph...",
    "Third paragraph...",
  ],
  email: "your.email@example.com",
  location: "Your City, Country",
  avatar: "/images/profile.jpg",
  resumeUrl: "/resume.pdf", // Optional
};
```

Update social links:

```typescript
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "github",
  },
  // Add more social links...
];
```

### Step 2: Skills

Edit `src/data/skills.ts`:

Add your skills organized by categories:

```typescript
export const skillGroups: SkillGroup[] = [
  {
    category: "frontend",
    title: "Frontend Development",
    skills: [
      { name: "React", category: "frontend", level: "expert" },
      // Add more skills...
    ],
  },
  // Add more categories...
];
```

Skill levels: `beginner`, `intermediate`, `advanced`, `expert`

### Step 3: Projects

Edit `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Project Name",
    description: "Short description",
    longDescription: "Detailed description (optional)",
    image: "/images/projects/project1.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "fullstack", // web, mobile, fullstack, backend, frontend, other
    liveUrl: "https://example.com", // Optional
    githubUrl: "https://github.com/username/project", // Optional
    featured: true, // Show in featured section
    date: "2024-01",
  },
  // Add more projects...
];
```

### Step 4: Work Experience

Edit `src/data/experience.ts`:

```typescript
export const experiences: Experience[] = [
  {
    id: "1",
    company: "Company Name",
    position: "Job Title",
    location: "City, Country",
    startDate: "2023-01",
    endDate: "2024-01", // Optional if current job
    current: false, // Set to true for current job
    description: "Brief job description",
    responsibilities: [
      "Responsibility 1",
      "Responsibility 2",
      // Add more...
    ],
    technologies: ["Tech1", "Tech2"],
  },
  // Add more experiences...
];
```

### Step 5: Images

#### Profile Photo

Add your profile photo to:
- `public/images/profile.jpg`

#### Project Screenshots

Add project images to:
- `public/images/projects/project1.jpg`
- `public/images/projects/project2.jpg`
- etc.

#### Resume/CV

Add your resume PDF to:
- `public/resume.pdf`

### Step 6: SEO & Metadata

Edit `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Developer Portfolio",
  description: "Your description",
  keywords: ["your", "keywords"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name - Developer Portfolio",
    description: "Your description",
    type: "website",
  },
};
```

Update `public/robots.txt`:

```txt
Sitemap: https://yourwebsite.com/sitemap.xml
```

### Step 7: Theme Colors

Edit `tailwind.config.ts` to customize colors:

```typescript
theme: {
  extend: {
    colors: {
      // Customize your color scheme
    },
  },
},
```

Edit `src/app/globals.css` for CSS variables.

### Step 8: Contact Form

To enable the contact form, you need to set up an email service.

#### Option 1: Resend (Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Create `.env.local`:

```env
RESEND_API_KEY=your_api_key_here
CONTACT_EMAIL=your-email@example.com
```

4. Install Resend:

```bash
npm install resend
```

5. Update `src/app/api/contact/route.ts` (uncomment Resend code)

#### Option 2: Other Email Services

You can also use:
- SendGrid
- Nodemailer
- EmailJS

Update the API route accordingly.

## File Structure

```
src/
├── app/              # Next.js pages and API routes
├── components/       # React components
│   ├── layout/      # Header, Footer, Navigation
│   ├── sections/    # Hero, About, Skills, etc.
│   ├── ui/          # Button, Card, Badge, etc.
│   ├── features/    # Feature-specific components
│   └── providers/   # Context providers
├── data/            # Your content data
├── lib/             # Utility functions
└── types/           # TypeScript definitions
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables (if using contact form)
5. Deploy!

### Build for Production

```bash
npm run build
npm start
```

## Tips

1. **Keep files small**: Each component should be under 500 lines
2. **Use TypeScript**: Take advantage of type safety
3. **Optimize images**: Use Next.js Image component for better performance
4. **Test responsiveness**: Check on mobile, tablet, and desktop
5. **SEO**: Update meta tags and add sitemap

## Troubleshooting

### Port already in use

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### Build errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install
```

## Need Help?

- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind CSS: [tailwindcss.com](https://tailwindcss.com)
- TypeScript: [typescriptlang.org](https://typescriptlang.org)

## License

This template is open source and free to use for your portfolio.
