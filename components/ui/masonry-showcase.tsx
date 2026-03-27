"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, BookOpen, FileText } from "lucide-react";

// ─── tile data ──────────────────────────────────────────────────────────────
const TILES = [
  // ── Featured / Publication tiles ──────────────────────────────────────────
  {
    id: "director",
    tag: "Director's Note",
    title: "Meet Virat Singh",
    subtitle: "Founder & Managing Director",
    desc: "Two decades of turning empty land into enduring landmarks. In his own words.",
    img: "/virat-singh.png",
    href: "/about",
    cta: "Read His Story",
    imgH: "h-[340px]",
    accent: true,
    icon: null,
    imgPosition: "object-top",
  },
  {
    id: "magazine",
    tag: "Publication",
    title: "Virat Visionsz Magazine",
    subtitle: "2024 Edition",
    desc: "Projects, insights, and innovations from Delhi NCR's most ambitious builder.",
    img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    href: "/about#magazine",
    cta: "Read Now",
    imgH: "h-52",
    accent: false,
    icon: <BookOpen className="w-4 h-4" />,
  },
  {
    id: "brochure",
    tag: "Company Profile",
    title: "Complete Brochure",
    subtitle: "Download PDF",
    desc: "Full overview of our services, portfolio highlights, and contact information.",
    img: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80",
    href: "/about#brochure",
    cta: "Download",
    imgH: "h-44",
    accent: false,
    icon: <FileText className="w-4 h-4" />,
  },

  // ── Service tiles ──────────────────────────────────────────────────────────
  {
    id: "interiors",
    tag: "Interiors",
    title: "Luxury Interior Design",
    subtitle: "",
    desc: "Bespoke spaces crafted with premium materials, artisan finishing, and spatial intelligence.",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    href: "/about#interiors",
    cta: "Explore",
    imgH: "h-64",
    accent: false,
    icon: null,
  },
  {
    id: "exteriors",
    tag: "Architecture",
    title: "Exterior Excellence",
    subtitle: "",
    desc: "Contemporary facades, landscape design, and streetscapes that command attention.",
    img: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=800&q=80",
    href: "/about#exteriors",
    cta: "Explore",
    imgH: "h-52",
    accent: false,
    icon: null,
  },
  {
    id: "furnishings",
    tag: "Premium Furnishings",
    title: "High-End Fittings & Fixtures",
    subtitle: "",
    desc: "Curated furniture collections, designer lighting, and custom millwork — every detail considered.",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    href: "/about#furnishings",
    cta: "Explore",
    imgH: "h-72",
    accent: false,
    icon: null,
  },
  {
    id: "smart-home",
    tag: "Technology",
    title: "Smart Home Systems",
    subtitle: "",
    desc: "Integrated automation — lighting, climate, security, and AV systems woven into the architecture.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    href: "/about#smart-homes",
    cta: "Explore",
    imgH: "h-44",
    accent: false,
    icon: null,
  },
  {
    id: "renovation",
    tag: "Renovation",
    title: "Reworks & Renovation",
    subtitle: "",
    desc: "Surgical transformation of existing structures — breathing new life into old spaces.",
    img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
    href: "/about#renovation",
    cta: "Explore",
    imgH: "h-56",
    accent: false,
    icon: null,
  },
  {
    id: "sustainable",
    tag: "Sustainability",
    title: "Green & Sustainable Builds",
    subtitle: "",
    desc: "Low-carbon materials, passive design strategies, and GRIHA-aligned construction practices.",
    img: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=800&q=80",
    href: "/about#sustainable",
    cta: "Explore",
    imgH: "h-60",
    accent: false,
    icon: null,
  },
  {
    id: "mep",
    tag: "Engineering",
    title: "MEP Systems",
    subtitle: "",
    desc: "Mechanical, Electrical & Plumbing engineered for performance, code compliance, and longevity.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    href: "/about#mep",
    cta: "Explore",
    imgH: "h-48",
    accent: false,
    icon: null,
  },
  {
    id: "turnkey",
    tag: "Delivery",
    title: "Turnkey Projects",
    subtitle: "",
    desc: "Design, procure, build, and hand over — complete end-to-end delivery under one roof.",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    href: "/about#turnkey",
    cta: "Explore",
    imgH: "h-52",
    accent: false,
    icon: null,
  },
  {
    id: "pm",
    tag: "Project Management",
    title: "Expert Oversight",
    subtitle: "",
    desc: "Dedicated project managers ensure every milestone is delivered on time and within budget.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    href: "/about#project-management",
    cta: "Explore",
    imgH: "h-56",
    accent: false,
    icon: null,
  },
];

// ─── card component ──────────────────────────────────────────────────────────
function MasonryCard({
  tile,
  index,
}: {
  tile: (typeof TILES)[number];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 4) * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className="break-inside-avoid mb-4 group"
    >
      <Link href={tile.href} className="block rounded-2xl overflow-hidden bg-white border border-[#1a2a5e]/8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        {/* Image */}
        <div className={`relative ${tile.imgH} overflow-hidden`}>
          <img
            src={tile.img}
            alt={tile.title}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${"imgPosition" in tile && tile.imgPosition ? tile.imgPosition : "object-center"}`}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Tag badge */}
          <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm ${
            tile.accent
              ? "bg-[#c8922a] text-white"
              : "bg-white/20 text-white border border-white/30"
          }`}>
            {tile.tag}
          </span>

          {/* Icon for publication tiles */}
          {tile.icon && (
            <span className="absolute top-3 right-3 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30">
              {tile.icon}
            </span>
          )}
        </div>

        {/* Text content */}
        <div className="px-5 py-4">
          {tile.subtitle && (
            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#c8922a] mb-1">
              {tile.subtitle}
            </p>
          )}
          <h3 className="text-[#1a2a5e] font-semibold text-base leading-snug mb-1.5 group-hover:text-[#c8922a] transition-colors duration-200">
            {tile.title}
          </h3>
          <p className="text-[#1a2a5e]/55 text-sm leading-relaxed mb-3">
            {tile.desc}
          </p>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a2a5e] group-hover:text-[#c8922a] transition-colors duration-200">
            {tile.cta}
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── section ─────────────────────────────────────────────────────────────────
export default function MasonryShowcase() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#f8f9fb] py-24 border-b border-[#1a2a5e]/8">
      {/* Section header */}
      <div ref={headerRef} className="max-w-5xl mx-auto px-6 mb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c8922a]/30 bg-[#c8922a]/8 text-[#c8922a] text-xs font-bold tracking-[0.15em] uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8922a] animate-pulse" />
            Explore Our World
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-[#1a2a5e] tracking-tight">
            More than a Builder —{" "}
            <span className="font-semibold text-[#c8922a]">A Complete Vision</span>
          </h2>
          <p className="mt-4 text-[#1a2a5e]/55 text-base max-w-xl mx-auto leading-relaxed">
            From the Director&apos;s desk to every finishing detail — discover the full depth
            of what Virat Visionsz brings to every project.
          </p>
        </motion.div>
      </div>

      {/* Masonry grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
          {TILES.map((tile, i) => (
            <MasonryCard key={tile.id} tile={tile} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
