# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## Step 1: Install Dependencies (1 min)

```bash
npm install
```

## Step 2: Start Development Server (30 sec)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Step 3: Add Your Information (3 min)

### 1. Personal Info

Edit `src/data/personal.ts`:

```typescript
name: "Your Name"
title: "Your Title"
email: "your@email.com"
```

### 2. Add a Project

Edit `src/data/projects.ts`:

```typescript
{
  id: "1",
  title: "My Project",
  description: "What it does",
  technologies: ["React", "Node.js"],
  category: "fullstack",
  featured: true,
  date: "2024-01",
}
```

### 3. Add Skills

Edit `src/data/skills.ts`:

```typescript
{ name: "JavaScript", category: "frontend", level: "expert" }
```

## Step 4: See Your Portfolio! (Now)

Your portfolio is live at [http://localhost:3000](http://localhost:3000)

## Next Steps

1. **Add images**: Put your photos in `public/images/`
2. **Customize colors**: Edit `tailwind.config.ts`
3. **Add more sections**: See `CUSTOMIZATION_GUIDE.md`
4. **Deploy**: Push to GitHub and deploy on Vercel

## Need Help?

- Full guide: [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)
- Architecture: [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)

That's it! You're ready to showcase your work! 🎉
