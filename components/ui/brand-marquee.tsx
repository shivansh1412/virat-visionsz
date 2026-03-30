"use client";
import React, { useState } from "react";

// img = real official logo URL (fetched from brand websites / CDN)
// fallback = local custom SVG (in /public/brands/)
// svg = ultimate inline React fallback

// ── Row 1: Structural + electrical + smart home ────────────────────────────
const BRANDS_ROW1 = [
  {
    name: "Tata Steel",
    img: "https://cdn.simpleicons.org/tata",
    fallback: "/brands/tata.svg",
    svg: (
      <svg viewBox="0 0 120 40" className="h-7 w-auto">
        <text x="4" y="30" fontFamily="Arial" fontWeight="bold" fontSize="28" fill="#00205B">TATA</text>
        <text x="4" y="40" fontFamily="Arial" fontSize="10" fill="#00205B" letterSpacing="3">STEEL</text>
      </svg>
    ),
  },
  {
    name: "JSW Steel",
    img: "https://www.jswsteel.in/sites/all/themes/jsw_theme/images/logos/jsw-steel.jpeg",
    fallback: "/brands/jsw.svg",
    svg: (
      <svg viewBox="0 0 110 36" className="h-7 w-auto">
        <text x="2" y="28" fontFamily="Arial" fontWeight="900" fontSize="26" fill="#E8391D">JSW</text>
        <text x="2" y="36" fontFamily="Arial" fontSize="9" fill="#333" letterSpacing="2">STEEL</text>
      </svg>
    ),
  },
  {
    name: "UltraTech",
    img: "https://www.ultratechcement.com/content/experience-fragments/ultratechcement/in/ihb/header/master1/_jcr_content/root/container_copy_86747432/container/image_copy.coreimg.png/1727338314222/ultratech-cement-logo.png",
    fallback: "/brands/ultratech.svg",
    svg: (
      <svg viewBox="0 0 160 36" className="h-7 w-auto">
        <text x="2" y="26" fontFamily="Arial" fontWeight="bold" fontSize="16" fill="#003087">ULTRATECH</text>
        <text x="2" y="36" fontFamily="Arial" fontSize="9" fill="#E8391D" letterSpacing="1">CEMENT</text>
      </svg>
    ),
  },
  {
    name: "JK Cement",
    img: "https://www.jkcement.com/wp-content/themes/jkcement/images/new-logo-jk.webp",
    fallback: "/brands/jkcement.svg",
    svg: (
      <svg viewBox="0 0 120 36" className="h-7 w-auto">
        <rect x="0" y="0" width="42" height="36" fill="#C8102E" rx="3"/>
        <text x="6" y="26" fontFamily="Arial" fontWeight="bold" fontSize="22" fill="white">JK</text>
        <text x="48" y="26" fontFamily="Arial" fontWeight="bold" fontSize="14" fill="#1A1A1A">CEMENT</text>
      </svg>
    ),
  },
  {
    name: "Asian Paints",
    img: "https://www.asianpaints.com/content/dam/apcolourcatalogue/asset/ap-revamp/header-unification/ap_logo_black_revamp.svg",
    fallback: "/brands/asian-paints.svg",
    svg: (
      <svg viewBox="0 0 140 36" className="h-7 w-auto">
        <circle cx="14" cy="18" r="12" fill="#E31837"/>
        <text x="30" y="22" fontFamily="Arial" fontWeight="bold" fontSize="14" fill="#1A1A1A">ASIAN</text>
        <text x="30" y="34" fontFamily="Arial" fontWeight="bold" fontSize="14" fill="#E31837">PAINTS</text>
      </svg>
    ),
  },
  {
    name: "Havells",
    img: "https://cdn.simpleicons.org/havells",
    fallback: "/brands/havells.svg",
    svg: (
      <svg viewBox="0 0 130 36" className="h-7 w-auto">
        <text x="2" y="28" fontFamily="Arial" fontWeight="900" fontSize="22" fill="#E31837">havells</text>
        <line x1="2" y1="32" x2="110" y2="32" stroke="#E31837" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    name: "Lauritz Knudsen",
    img: "/brands/lauritz-knudsen.svg",
    fallback: "/brands/lauritz-knudsen.svg",
    svg: (
      <svg viewBox="0 0 300 120" className="h-10 w-auto">
        <rect width="300" height="120" rx="10" fill="#003D7C"/>
        <text x="150" y="52" fontFamily="Arial" fontWeight="700" fontSize="28" fill="white" textAnchor="middle">Lauritz</text>
        <text x="150" y="84" fontFamily="Arial" fontWeight="700" fontSize="28" fill="white" textAnchor="middle">Knudsen</text>
      </svg>
    ),
  },
  {
    name: "Metaworx",
    img: "/brands/metaworks.svg",
    fallback: "/brands/metaworks.svg",
    svg: (
      <svg viewBox="0 0 200 200" className="h-10 w-auto">
        <rect width="200" height="200" rx="16" fill="#000000"/>
        <text x="50" y="92" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="72" fill="white" textAnchor="middle">M</text>
        <text x="150" y="92" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="72" fill="white" textAnchor="middle">A</text>
        <text x="50" y="178" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="72" fill="white" textAnchor="middle">W</text>
        <text x="150" y="178" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="72" fill="white" textAnchor="middle">X</text>
      </svg>
    ),
  },
  {
    name: "Grohe",
    img: "/brands/grohe.svg",
    fallback: "/brands/grohe.svg",
    svg: (
      <svg viewBox="0 0 300 100" className="h-8 w-auto">
        <text x="150" y="65" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="48" fill="#005EA8" textAnchor="middle" letterSpacing="3">GROHE</text>
      </svg>
    ),
  },
  {
    name: "Jaquar",
    img: "/brands/jaquar.svg",
    fallback: "/brands/jaquar.svg",
    svg: (
      <svg viewBox="0 0 300 100" className="h-8 w-auto">
        <text x="150" y="64" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="44" fill="#D4002A" textAnchor="middle" letterSpacing="2">JAQUAR</text>
      </svg>
    ),
  },
];

// ── Row 2: Premium finishes + Italian design + sanitaryware ───────────────
const BRANDS_ROW2 = [
  {
    name: "Caterpillar",
    img: "/brands/caterpillar.svg",
    fallback: "/brands/caterpillar.svg",
    svg: (
      <svg viewBox="0 0 100 36" className="h-7 w-auto">
        <rect x="0" y="0" width="96" height="36" fill="#FFD100" rx="3"/>
        <text x="8" y="26" fontFamily="Arial" fontWeight="900" fontSize="22" fill="#1A1A1A">CAT</text>
        <polygon points="78,10 88,18 78,26" fill="#1A1A1A"/>
      </svg>
    ),
  },
  {
    name: "Kohler",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Kohler_logo.svg/250px-Kohler_logo.svg.png",
    fallback: "/brands/kohler.svg",
    svg: (
      <svg viewBox="0 0 130 36" className="h-7 w-auto">
        <text x="2" y="28" fontFamily="Georgia" fontWeight="bold" fontSize="24" fill="#1A1A1A" letterSpacing="2">KOHLER</text>
        <line x1="2" y1="32" x2="118" y2="32" stroke="#1A1A1A" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "Kajaria",
    img: "https://www.kajariaceramics.com/images/logo-dark.svg",
    fallback: "/brands/kajaria.svg",
    svg: (
      <svg viewBox="0 0 130 36" className="h-7 w-auto">
        <text x="2" y="26" fontFamily="Arial" fontWeight="bold" fontSize="20" fill="#003087">KAJARIA</text>
        <text x="2" y="35" fontFamily="Arial" fontSize="8" fill="#E31837" letterSpacing="2">CERAMICS</text>
      </svg>
    ),
  },
  {
    name: "Berger Paints",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/31/Berger.png",
    fallback: "/brands/berger.svg",
    svg: (
      <svg viewBox="0 0 140 36" className="h-7 w-auto">
        <text x="2" y="24" fontFamily="Arial" fontWeight="bold" fontSize="18" fill="#009639">BERGER</text>
        <text x="2" y="34" fontFamily="Arial" fontSize="10" fill="#555" letterSpacing="1">PAINTS</text>
      </svg>
    ),
  },
  {
    name: "Hindalco",
    img: "https://www.hindalco.com/Upload/homepage/hindalco-branding-new-logo-v2.svg",
    fallback: "/brands/hindalco.svg",
    svg: (
      <svg viewBox="0 0 140 36" className="h-7 w-auto">
        <text x="2" y="26" fontFamily="Arial" fontWeight="bold" fontSize="18" fill="#1B3A6B">HINDALCO</text>
        <text x="2" y="35" fontFamily="Arial" fontSize="8" fill="#C8922A" letterSpacing="1">INDUSTRIES</text>
      </svg>
    ),
  },
  {
    name: "ACC Cement",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/ACC_Limited_logo.svg/1280px-ACC_Limited_logo.svg.png",
    fallback: "/brands/acc.svg",
    svg: (
      <svg viewBox="0 0 110 36" className="h-7 w-auto">
        <rect x="0" y="4" width="44" height="28" fill="#003087" rx="3"/>
        <text x="4" y="25" fontFamily="Arial" fontWeight="bold" fontSize="20" fill="white">ACC</text>
        <text x="50" y="24" fontFamily="Arial" fontSize="13" fill="#003087" fontWeight="bold">CEMENT</text>
      </svg>
    ),
  },
  {
    name: "Legrand",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Legrand.svg/250px-Legrand.svg.png",
    fallback: "/brands/legrand.svg",
    svg: (
      <svg viewBox="0 0 130 36" className="h-7 w-auto">
        <circle cx="16" cy="18" r="14" fill="#009639"/>
        <text x="14" y="23" fontFamily="Arial" fontWeight="bold" fontSize="13" fill="white" textAnchor="middle">L</text>
        <text x="36" y="26" fontFamily="Arial" fontWeight="bold" fontSize="18" fill="#1A1A1A">LEGRAND</text>
      </svg>
    ),
  },
  {
    name: "B&B Italia",
    img: "/brands/bb-italia.svg",
    fallback: "/brands/bb-italia.svg",
    svg: (
      <svg viewBox="0 0 300 100" className="h-8 w-auto">
        <text x="150" y="60" fontFamily="Georgia, serif" fontWeight="400" fontSize="38" fill="#1a1a1a" textAnchor="middle" letterSpacing="4">B&amp;B ITALIA</text>
        <line x1="20" y1="72" x2="280" y2="72" stroke="#1a1a1a" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    name: "Minotti",
    img: "/brands/minotti.png",
    fallback: "/brands/minotti.png",
    svg: (
      <svg viewBox="0 0 300 100" className="h-8 w-auto">
        <text x="150" y="62" fontFamily="Georgia, serif" fontWeight="400" fontSize="42" fill="#2c2c2c" textAnchor="middle" letterSpacing="6">MINOTTI</text>
      </svg>
    ),
  },
  {
    name: "Poliform",
    img: "/brands/poliform.svg",
    fallback: "/brands/poliform.svg",
    svg: (
      <svg viewBox="0 0 300 100" className="h-8 w-auto">
        <text x="150" y="62" fontFamily="Arial, sans-serif" fontWeight="300" fontSize="40" fill="#1a1a1a" textAnchor="middle" letterSpacing="8">POLIFORM</text>
      </svg>
    ),
  },
  {
    name: "Gessi",
    img: "/brands/gessi.svg",
    fallback: "/brands/gessi.svg",
    svg: (
      <svg viewBox="0 0 300 100" className="h-8 w-auto">
        <text x="150" y="64" fontFamily="Georgia, serif" fontWeight="400" fontSize="46" fill="#1a1a1a" textAnchor="middle" letterSpacing="6">GESSI</text>
        <text x="150" y="84" fontFamily="Arial, sans-serif" fontSize="11" fill="#888" textAnchor="middle" letterSpacing="3">ITALIAN DESIGN</text>
      </svg>
    ),
  },
];

function repeat<T>(arr: T[], times = 4): T[] {
  return Array.from({ length: times }).flatMap(() => arr);
}

interface BrandCardProps {
  name: string;
  img: string;
  fallback: string;
  svg: React.ReactNode;
}

function BrandCard({ name, img, fallback, svg }: BrandCardProps) {
  const [level, setLevel] = useState<0 | 1 | 2>(0);

  return (
    <div className="flex-shrink-0 flex flex-col items-center gap-2 mx-3">
      <div className="h-16 w-44 rounded-xl border border-[#1a2a5e]/10 bg-white shadow-sm flex items-center justify-center px-3 transition-all duration-300 hover:shadow-md hover:border-[#c8922a]/40 hover:scale-105 cursor-default">
        {level === 0 && (
          <img
            src={img}
            alt={name}
            className="max-h-11 max-w-[140px] w-full object-contain"
            onError={() => setLevel(1)}
          />
        )}
        {level === 1 && (
          <img
            src={fallback}
            alt={name}
            className="max-h-11 max-w-[140px] w-full object-contain"
            onError={() => setLevel(2)}
          />
        )}
        {level === 2 && (
          <div className="flex items-center justify-center w-full h-full">
            {svg}
          </div>
        )}
      </div>
      <span className="text-[10px] font-medium text-[#1a2a5e]/45 tracking-wide whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function BrandMarquee() {
  return (
    <section className="relative py-20 overflow-hidden bg-[#f8f9fb] border-y border-[#1a2a5e]/8">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, #1a2a5e18 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Header */}
      <div className="relative max-w-5xl mx-auto px-6 text-center mb-10">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c8922a]/30 bg-[#c8922a]/8 text-[#c8922a] text-xs font-bold tracking-[0.15em] uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c8922a] animate-pulse" />
          Trusted Partners &amp; Materials
        </span>
        <h2 className="text-3xl md:text-4xl font-light text-[#1a2a5e] tracking-tight">
          Built with{" "}
          <span className="font-semibold text-[#c8922a]">Industry Leaders</span>
        </h2>
        <p className="mt-3 text-sm md:text-base text-[#1a2a5e]/55 max-w-xl mx-auto leading-relaxed">
          From structural steel to Italian bespoke furniture — we source only from the world&apos;s most trusted names.
        </p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative overflow-hidden mb-4">
        <div className="flex animate-marquee-left">
          {repeat(BRANDS_ROW1).map((brand, i) => (
            <BrandCard key={i} name={brand.name} img={brand.img} fallback={brand.fallback} svg={brand.svg} />
          ))}
        </div>
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#f8f9fb] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#f8f9fb] to-transparent z-10" />
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee-right">
          {repeat(BRANDS_ROW2).map((brand, i) => (
            <BrandCard key={i} name={brand.name} img={brand.img} fallback={brand.fallback} svg={brand.svg} />
          ))}
        </div>
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#f8f9fb] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#f8f9fb] to-transparent z-10" />
      </div>
    </section>
  );
}
