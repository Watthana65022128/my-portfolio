# File Structure

Complete file organization of the portfolio project.

## Directory Tree

```
d:\MB\Portfolio/
│
├── public/                         # Static assets
│   ├── images/                    # Images folder
│   │   └── .gitkeep              # Placeholder
│   └── robots.txt                # SEO robots file
│
├── src/                           # Source code
│   │
│   ├── app/                       # Next.js App Router
│   │   ├── api/                  # API routes
│   │   │   └── contact/
│   │   │       └── route.ts      # Contact form API (66 lines)
│   │   ├── layout.tsx            # Root layout (35 lines)
│   │   ├── page.tsx              # Home page (21 lines)
│   │   └── globals.css           # Global styles (95 lines)
│   │
│   ├── components/                # React components
│   │   │
│   │   ├── features/             # Feature-specific components
│   │   │   ├── contact/
│   │   │   │   ├── ContactForm.tsx      # Form with validation (166 lines)
│   │   │   │   └── SocialLinks.tsx      # Social media links (46 lines)
│   │   │   └── project/
│   │   │       ├── ProjectCard.tsx      # Project card (83 lines)
│   │   │       └── ProjectFilter.tsx    # Category filter (45 lines)
│   │   │
│   │   ├── layout/               # Layout components
│   │   │   ├── Footer.tsx        # Site footer (78 lines)
│   │   │   ├── Header.tsx        # Site header (49 lines)
│   │   │   └── Navigation.tsx    # Navigation menu (92 lines)
│   │   │
│   │   ├── providers/            # Context providers
│   │   │   └── ThemeProvider.tsx # Theme context (54 lines)
│   │   │
│   │   ├── sections/             # Page sections
│   │   │   ├── AboutSection.tsx        # About section (72 lines)
│   │   │   ├── ContactSection.tsx      # Contact section (84 lines)
│   │   │   ├── ExperienceSection.tsx   # Experience timeline (84 lines)
│   │   │   ├── HeroSection.tsx         # Hero/landing (75 lines)
│   │   │   ├── ProjectsSection.tsx     # Projects showcase (49 lines)
│   │   │   └── SkillsSection.tsx       # Skills display (49 lines)
│   │   │
│   │   └── ui/                   # Reusable UI components
│   │       ├── Badge.tsx         # Badge component (35 lines)
│   │       ├── Button.tsx        # Button component (46 lines)
│   │       ├── Card.tsx          # Card component (87 lines)
│   │       ├── Input.tsx         # Input field (45 lines)
│   │       ├── Textarea.tsx      # Textarea field (45 lines)
│   │       └── ThemeToggle.tsx   # Theme toggle button (38 lines)
│   │
│   ├── data/                      # Static content data
│   │   ├── experience.ts         # Work history (69 lines)
│   │   ├── personal.ts           # Personal info (53 lines)
│   │   ├── projects.ts           # Portfolio projects (109 lines)
│   │   └── skills.ts             # Technical skills (67 lines)
│   │
│   ├── lib/                       # Utility functions
│   │   ├── constants.ts          # App constants (60 lines)
│   │   └── utils.ts              # Helper functions (64 lines)
│   │
│   └── types/                     # TypeScript definitions
│       └── index.ts              # Type definitions (72 lines)
│
├── .env.example                   # Environment variables template
├── .eslintrc.json                # ESLint configuration
├── .gitignore                    # Git ignore rules
├── CUSTOMIZATION_GUIDE.md        # Customization instructions
├── FILE_STRUCTURE.md             # This file
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies
├── postcss.config.mjs            # PostCSS configuration
├── PROJECT_SUMMARY.md            # Architecture overview
├── QUICK_START.md                # Quick start guide
├── README.md                     # Main documentation
├── tailwind.config.ts            # Tailwind configuration
└── tsconfig.json                 # TypeScript configuration
```

## File Count by Category

### Components (23 files)
- Layout: 3 files
- Sections: 6 files
- UI: 6 files
- Features: 5 files
- Providers: 1 file
- Pages: 2 files

### Configuration (7 files)
- next.config.ts
- tsconfig.json
- tailwind.config.ts
- postcss.config.mjs
- .eslintrc.json
- .env.example
- .gitignore

### Documentation (5 files)
- README.md
- CUSTOMIZATION_GUIDE.md
- PROJECT_SUMMARY.md
- QUICK_START.md
- FILE_STRUCTURE.md

### Data & Types (5 files)
- types/index.ts
- data/personal.ts
- data/skills.ts
- data/projects.ts
- data/experience.ts

### Utilities (2 files)
- lib/utils.ts
- lib/constants.ts

### API Routes (1 file)
- app/api/contact/route.ts

### Styles (1 file)
- app/globals.css

## Total Statistics

- **Total Files**: 44
- **TypeScript/TSX Files**: 32
- **Configuration Files**: 7
- **Documentation Files**: 5
- **Largest File**: 166 lines (ContactForm.tsx)
- **Average File Size**: ~60 lines
- **All files**: Under 500 lines ✅

## Component Size Distribution

| Size Range | Count |
|------------|-------|
| 0-50 lines | 15 |
| 51-100 lines | 14 |
| 101-200 lines | 3 |
| 201+ lines | 0 |

All components are well below the 500-line limit, with most being under 100 lines.

## Import Aliases

The project uses the `@/*` alias for clean imports:

```typescript
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
```

Configured in `tsconfig.json`:
```json
"paths": {
  "@/*": ["./src/*"]
}
```

## Adding New Files

### New Component
```
src/components/[category]/ComponentName.tsx
```

### New Data File
```
src/data/filename.ts
```

### New Type Definition
```
src/types/filename.ts
```

### New Utility
```
src/lib/filename.ts
```

## Key Files to Customize

1. **`src/data/personal.ts`** - Your personal information
2. **`src/data/projects.ts`** - Your portfolio projects
3. **`src/data/skills.ts`** - Your technical skills
4. **`src/data/experience.ts`** - Your work history
5. **`src/app/layout.tsx`** - SEO metadata
6. **`tailwind.config.ts`** - Theme colors

See [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) for details.
