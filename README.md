# Questgen Documentation

## Project Overview


AI-powered educational platform that creates dynamic animations and adaptive learning experiences. Focuses on visualizing threshold concepts to enhance knowledge retention and reduce learning time.


## Technical Stack
- Framework: Next.js 15
- Styling: Tailwind CSS with neomorphic design
- Font: Geist/Geist Mono
- State Management: React 19
- Build Tool: Turbopack
- Linting: ESLint with Next.js core web vitals

## Project Structure
```
questgen-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with font configuration
│   │   └── page.tsx          # Main page composition
│   ├── components/
│   │   ├── Header.tsx        # Navigation bar
│   │   ├── Hero.tsx          # Landing section
│   │   ├── Features.tsx      # Key features grid
│   │   └── Stats.tsx         # Performance metrics
│   └── styles/
│       └── globals.css       # Global styles and neomorphic effects
```

## Key Components

### 1. Hero Section

```1:63:questgen-app/src/components/Hero.tsx
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="container py-20 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-16">
          <div className="inline-block p-4  rounded-2xl">
            <Image
              src="/enlighten-logo.png"
              alt="enlighten Logo"
              width={96}
              height={96}
              // className="w-16 h-16"
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-6xl font-bold mb-8 tracking-tight">
          Discover a new way to learn with AI
        </h1>

        {/* Subheading */}
        <p className="text-xl text-gray-600 mb-12">
          Featuring AI-powered animations and adaptive learning — New content generated instantly.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center">
          <a href="https://getwaitlist.com/waitlist/25045" className="bg-black text-white py-4 px-8 rounded-full shadow-neumorphic">
            Join Waitlist
          </a>
        </div>
        <div className="flex justify-center mt-8">
  <div className="animate-bounce">
    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </div>
</div>

        {/* Trusted By Section
        <div className="mt-24">
          <p className="text-sm text-gray-500 mb-8">Trusted by educators at</p>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            {['harvard', 'stanford', 'mit', 'oxford', 'cambridge'].map((logo) => (
              <Image
                key={logo}
                src={`/${logo}-logo.png`}
                alt={`${logo} logo`}
                width={120}
                height={32}
                className="trusted-logo"
              />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
```

- Animated CTA button
- Dynamic logo display
- Bouncing scroll indicator

### 2. Neomorphic Design System

```11:27:src/app/globals.css
@font-face {
  font-family: 'Inter';
  src: url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
}

body {
  background: var(--background);
  color: var(--text-primary);
  font-family: 'Inter', sans-serif;
}

.btn-primary {
  @apply bg-black text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity;
}

.btn-secondary {
  @apply bg-white text-black px-6 py-3 rounded-full font-medium border border-gray-200 hover:border-gray-400 transition-colors;
}
```

- Custom box-shadow implementations
- Interactive hover states
- CSS variables for consistent theming

### 3. Adaptive Features Grid

```1:30:questgen-app/src/components/Features.tsx
export default function Features() {
  const features = [
    {
      title: "AI-Generated Animations",
      description: "Story-driven prompts that break down concepts into step-by-step animated sequences."
    },
    {
      title: "L0 Adaptive Learning",
      description: "Intelligent personalization model that adapts to individual learning patterns."
    },
    {
      title: "Learning Integration",
      description: "Seamlessly enhances traditional teaching methods with powerful visual aids."
    }
  ]

  return (
    <section className="max-w-6xl mx-auto py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="neo-container p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- Responsive 3-column layout
- Dynamic content rendering
- Neomorphic card components

## Getting Started

### Installation
```bash
npm install
npm run dev
```

### Environment Requirements
- Node.js 18+
- npm 9+
- Next.js 15

## Development Guidelines

1. **Styling Convention**

```22:28:questgen-app/src/app/globals.css
.btn-primary {
  @apply bg-black text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity;
}

.btn-secondary {
  @apply bg-white text-black px-6 py-3 rounded-full font-medium border border-gray-200 hover:border-gray-400 transition-colors;
}
```

- Use Tailwind utility classes first
- Extend with custom CSS variables when needed
- Maintain neomorphic consistency

2. **Component Structure**

```1:17:questgen-app/src/app/page.tsx
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Stats from '../components/Stats'

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <Hero />
        <Stats />
        <Features />
      </main>
    </>
  )
}
```

- Atomic design pattern
- Mobile-first responsive approach
- TypeScript interfaces for props

## Deployment

Vercel recommended (configured in `next.config.ts`):

```1:7:questgen-app/next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```


## Roadmap
(from project documentation)
```markdown:Questgen_ Effective Education Delivery Using AI-Powered Animated Learning.md
startLine: 36
endLine: 66
```

## Contributing
1. Fork the repository
2. Create feature branches
3. Submit PRs with:
   - TypeScript type definitions
   - Responsive design verification
   - ESLint compliance

## License
MIT License (see repository for details)

---
