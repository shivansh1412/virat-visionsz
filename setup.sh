#!/bin/bash
set -e
echo "🏗  Setting up Virat Visionsz Next.js project..."

# ── package.json ──────────────────────────────────────────────────────────────
cat > package.json << 'EOF'
{
  "name": "virat-visionsz",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.5",
    "react": "^18",
    "react-dom": "^18",
    "@paper-design/shaders-react": "^0.0.72",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "lucide-react": "^0.383.0",
    "tailwind-merge": "^2.3.0",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "eslint": "^8",
    "eslint-config-next": "14.2.5"
  }
}
EOF

# ── tsconfig.json ─────────────────────────────────────────────────────────────
cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOF

# ── next.config.mjs ───────────────────────────────────────────────────────────
cat > next.config.mjs << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {};
export default nextConfig;
EOF

# ── postcss.config.mjs ───────────────────────────────────────────────────────
cat > postcss.config.mjs << 'EOF'
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: { tailwindcss: {}, autoprefixer: {} },
};
export default config;
EOF

# ── tailwind.config.ts ────────────────────────────────────────────────────────
cat > tailwind.config.ts << 'EOF'
import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#1a2a5e", light: "#243570", dark: "#111e45" },
        gold: { DEFAULT: "#c8922a", light: "#d4a843", dark: "#a97520" },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: { lg: "var(--radius)", md: "calc(var(--radius) - 2px)", sm: "calc(var(--radius) - 4px)" },
      fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
EOF

# ── .gitignore ────────────────────────────────────────────────────────────────
cat > .gitignore << 'EOF'
/node_modules
/.next/
/out/
/build
.DS_Store
.env*.local
.env
.vercel
*.tsbuildinfo
next-env.d.ts
EOF

# ── app/ ──────────────────────────────────────────────────────────────────────
mkdir -p app components/ui lib

cat > app/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 220 20% 97%;
    --foreground: 226 57% 16%;
    --card: 0 0% 100%;
    --card-foreground: 226 57% 16%;
    --popover: 0 0% 100%;
    --popover-foreground: 226 57% 16%;
    --primary: 226 57% 24%;
    --primary-foreground: 0 0% 100%;
    --secondary: 39 65% 47%;
    --secondary-foreground: 0 0% 100%;
    --muted: 220 15% 92%;
    --muted-foreground: 220 10% 45%;
    --accent: 39 65% 47%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 220 15% 88%;
    --input: 220 15% 88%;
    --ring: 226 57% 24%;
    --radius: 0.5rem;
  }
  .dark {
    --background: 226 57% 10%;
    --foreground: 0 0% 98%;
    --primary: 39 65% 47%;
    --primary-foreground: 226 57% 10%;
    --secondary: 226 45% 25%;
    --secondary-foreground: 0 0% 98%;
    --muted: 226 45% 20%;
    --muted-foreground: 220 10% 65%;
    --accent: 226 45% 25%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 226 45% 22%;
    --input: 226 45% 22%;
    --ring: 39 65% 47%;
  }
}
@layer base {
  * { @apply border-border; }
  body { @apply bg-background text-foreground; font-feature-settings: "rlig" 1, "calt" 1; }
}
html { scroll-behavior: smooth; }
EOF

cat > app/layout.tsx << 'EOF'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Virat Visionsz Pvt Ltd — Building Legacies with Infinite Vision",
  description: "An EPC organisation committed to structures that perform, endure, and define the landscape for decades.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
EOF

cat > app/page.tsx << 'EOF'
import WarpShaderHero from "@/components/ui/wrap-shader";

export default function Home() {
  return (
    <div className="min-h-screen h-full w-full">
      <WarpShaderHero />
    </div>
  );
}
EOF

# ── components/ui/wrap-shader.tsx ─────────────────────────────────────────────
cat > components/ui/wrap-shader.tsx << 'EOF'
"use client";

import { Warp } from "@paper-design/shaders-react";

export default function WarpShaderHero() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Warp
          style={{ height: "100%", width: "100%" }}
          proportion={0.45}
          softness={1}
          distortion={0.25}
          swirl={0.8}
          swirlIterations={10}
          shape="checks"
          shapeScale={0.1}
          scale={1}
          rotation={0}
          speed={1}
          colors={[
            "hsl(226, 57%, 24%)",
            "hsl(39, 65%, 47%)",
            "hsl(226, 45%, 35%)",
            "hsl(42, 63%, 55%)",
          ]}
        />
      </div>
      <div className="relative z-10 min-h-screen flex items-center justify-center px-8">
        <div className="max-w-4xl w-full text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-yellow-300 animate-pulse" />
            <span className="text-white/90 text-sm font-medium tracking-widest uppercase">EPC Excellence</span>
          </div>
          <h1 className="text-white text-5xl md:text-7xl font-sans font-light text-balance leading-tight">
            Our Vision,{" "}
            <span className="font-semibold text-[#d4a843]">Your Legacy</span>
          </h1>
          <p className="text-white/85 text-xl md:text-2xl font-sans font-light leading-relaxed max-w-3xl mx-auto">
            An EPC organisation committed to structures that perform, endure, and define the landscape for decades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button className="px-8 py-4 bg-[#c8922a] hover:bg-[#d4a843] rounded-full text-white font-semibold tracking-wide transition-all duration-300 hover:scale-105 shadow-lg">
              Start Your Project
            </button>
            <button className="px-8 py-4 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full text-white font-medium hover:bg-white/25 transition-all duration-300 hover:scale-105">
              View Portfolio
            </button>
          </div>
          <p className="text-white/50 text-sm tracking-widest uppercase font-light pt-4">
            Building Legacies with Infinite Vision
          </p>
        </div>
      </div>
    </main>
  );
}
EOF

# ── lib/utils.ts ──────────────────────────────────────────────────────────────
cat > lib/utils.ts << 'EOF'
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
EOF

echo ""
echo "✅ All files created! Now run:"
echo ""
echo "   npm install"
echo "   npm run dev"
echo ""
echo "Then open http://localhost:3000"
