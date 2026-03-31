"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import {
  ArrowUpRight,
  Building2,
  Layers,
  Cpu,
  Leaf,
  Wrench,
  Zap,
  Package,
  ClipboardList,
  Home,
  BookOpen,
  FileText,
  Quote,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

// ─── helpers ──────────────────────────────────────────────────────────────────
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c8922a]/30 bg-[#c8922a]/8 text-[#c8922a] text-xs font-bold tracking-[0.15em] uppercase mb-5">
      <span className="w-1.5 h-1.5 rounded-full bg-[#c8922a] animate-pulse" />
      {text}
    </span>
  );
}

// ─── services data ────────────────────────────────────────────────────────────
const SERVICES = [
  {
    id: "interiors",
    icon: <Home className="w-6 h-6" />,
    tag: "Interiors",
    title: "Luxury Interior Design",
    desc: "Bespoke living and working spaces crafted with premium materials, artisan finishing, and spatial intelligence. We transform bare shells into environments that inspire — blending form, function, and a deep understanding of how people inhabit space.",
    points: [
      "Custom millwork & joinery",
      "Italian marble & engineered stone",
      "Designer lighting & bespoke fixtures",
      "Modular kitchen systems",
      "False ceilings & wall panelling",
      "Full FF&E procurement & installation",
    ],
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
  },
  {
    id: "exteriors",
    icon: <Building2 className="w-6 h-6" />,
    tag: "Architecture",
    title: "Exterior Excellence",
    desc: "Contemporary facades, landscape design, and streetscapes that command attention and age gracefully. Our architecture team combines global design sensibility with deep knowledge of local climate, zoning, and material behaviour.",
    points: [
      "Facade systems — ACP, cladding, exposed concrete",
      "Landscape & hardscape design",
      "Entrance lobbies & podium levels",
      "Terrace & rooftop amenity spaces",
      "Boundary walls, gates & guardhouses",
      "External lighting & wayfinding",
    ],
    img: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=1200&q=80",
  },
  {
    id: "furnishings",
    icon: <Layers className="w-6 h-6" />,
    tag: "Premium Furnishings",
    title: "High-End Fittings & Fixtures",
    desc: "Curated furniture collections, designer lighting, and custom millwork — every detail considered, every surface resolved. We source from India's top suppliers and international brands to deliver spaces that feel complete from day one.",
    points: [
      "Imported furniture & décor",
      "Grohe, Kohler & Duravit sanitaryware",
      "Custom upholstery & soft furnishings",
      "Art curation & installation",
      "Window treatments & drapery",
      "Turnkey FF&E delivery",
    ],
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
  },
  {
    id: "smart-homes",
    icon: <Cpu className="w-6 h-6" />,
    tag: "Technology",
    title: "Smart Home Systems",
    desc: "Integrated automation — lighting, climate, security, and AV systems woven seamlessly into the architecture. Whether a single villa or a multi-tower residential complex, we design smart systems that are intuitive, reliable, and built to last.",
    points: [
      "KNX / Lutron / Crestron integration",
      "Voice & app-controlled lighting",
      "HVAC zoning & BMS",
      "CCTV, access control & video intercom",
      "Home theatre & multi-room audio",
      "EV charging infrastructure",
    ],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
  },
  {
    id: "renovation",
    icon: <Wrench className="w-6 h-6" />,
    tag: "Renovation",
    title: "Reworks & Renovation",
    desc: "Surgical transformation of existing structures — breathing new life into old spaces without unnecessary demolition or disruption. Our renovation team specialises in occupied buildings, delivering upgrades on time with minimal impact on residents or operations.",
    points: [
      "Structural retrofitting & strengthening",
      "Complete residential refurbishment",
      "Heritage restoration & conservation",
      "Commercial fit-outs & office remodels",
      "Bathroom & kitchen renovations",
      "Tenant improvement works",
    ],
    img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1200&q=80",
  },
  {
    id: "sustainable",
    icon: <Leaf className="w-6 h-6" />,
    tag: "Sustainability",
    title: "Green & Sustainable Builds",
    desc: "Low-carbon materials, passive design strategies, and GRIHA-aligned construction practices that reduce operational costs and environmental impact. We believe that responsible building and premium quality are not mutually exclusive.",
    points: [
      "GRIHA / IGBC certification support",
      "Passive solar & natural ventilation design",
      "Rainwater harvesting systems",
      "Solar PV & rooftop energy systems",
      "Fly-ash brick & recycled aggregate",
      "Waste segregation & site sustainability plans",
    ],
    img: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=1200&q=80",
  },
  {
    id: "mep",
    icon: <Zap className="w-6 h-6" />,
    tag: "Engineering",
    title: "MEP Systems",
    desc: "Mechanical, Electrical & Plumbing engineered for performance, code compliance, and longevity. Our in-house MEP engineers work hand-in-glove with the architecture team from day one — not as an afterthought — ensuring every system is coordinated, efficient, and maintainable.",
    points: [
      "LT & HT electrical systems",
      "HVAC — VRF, chillers & split systems",
      "Plumbing, drainage & firefighting",
      "Lifts & vertical transportation",
      "Generator & UPS systems",
      "BIM-coordinated MEP drawings",
    ],
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
  },
  {
    id: "turnkey",
    icon: <Package className="w-6 h-6" />,
    tag: "Delivery",
    title: "Turnkey Projects",
    desc: "Design, procure, build, and hand over — complete end-to-end delivery under one roof. Clients who choose our turnkey model benefit from a single point of accountability, tighter cost control, and a dramatically shorter overall timeline.",
    points: [
      "Single-contract EPC delivery",
      "In-house design + engineering team",
      "Bulk procurement & supply chain management",
      "Quality assurance & third-party audits",
      "Regulatory approvals & liaison",
      "Post-handover maintenance & DLP",
    ],
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
  },
  {
    id: "project-management",
    icon: <ClipboardList className="w-6 h-6" />,
    tag: "Project Management",
    title: "Expert Project Oversight",
    desc: "Dedicated project managers ensure every milestone is delivered on time and within budget. We bring structure, rigour, and clear communication to every project — so clients always know exactly where their build stands.",
    points: [
      "MS Project / Primavera P6 scheduling",
      "Weekly progress reports & dashboards",
      "Cost tracking & budget variance analysis",
      "Contractor coordination & dispute resolution",
      "Site safety & compliance management",
      "Handing-over documentation & O&M manuals",
    ],
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
  },
];

// ─── stats ─────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "500+", label: "Projects Delivered" },
  { value: "₹2,000Cr+", label: "Value Constructed" },
  { value: "NCR & Beyond", label: "Geographic Reach" },
];

// ─── page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <main className="bg-white text-[#1a2a5e]">
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-[#0d1833]">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"
            alt="Virat Visionsz — building under construction"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1833] via-[#0d1833]/60 to-transparent" />
        </div>

        {/* Nav back link */}
        <div className="absolute top-6 left-6 z-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-[#c8922a] text-sm font-medium transition-colors duration-200"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-16 pt-32">
          <FadeIn>
            <SectionLabel text="About Virat Visionsz" />
            <h1 className="text-4xl md:text-6xl font-light text-white leading-tight">
              Building Legacies with{" "}
              <span className="font-semibold text-[#c8922a]">
                Infinite Vision
              </span>
            </h1>
            <p className="mt-5 text-white/65 text-lg max-w-2xl leading-relaxed">
              Turning empty land into landscapes — enduring landmarks across
              Delhi NCR and beyond, residential, commercial, institutional, and
              everything in between.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Location bar ───────────────────────────────────────────────── */}
      <section className="bg-[#1a2a5e] py-10">
        <FadeIn className="text-center">
          <p className="text-4xl md:text-5xl font-bold text-[#c8922a] tracking-wide">
            NCR &amp; Beyond
          </p>
          <p className="mt-2 text-white/50 text-sm tracking-widest uppercase">
            Geographic Reach
          </p>
        </FadeIn>
      </section>

      {/* ── Who we are ────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f8f9fb] border-b border-[#1a2a5e]/8">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <SectionLabel text="Who We Are" />
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">
              More than a builder —{" "}
              <span className="font-semibold text-[#c8922a]">
                a complete vision
              </span>
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <FadeIn delay={0.1}>
              <div className="space-y-5 text-[#1a2a5e]/70 leading-relaxed text-base">
                <p>
                  <strong className="text-[#1a2a5e]">
                    Virat Visionsz Pvt Ltd
                  </strong>{" "}
                  is a Delhi NCR-based EPC (Engineering, Procurement &
                  Construction) company delivering high-quality residential,
                  commercial, and institutional projects.
                </p>
                <p>
                  Founded on the belief that great construction is equal parts
                  engineering rigour and aesthetic sensibility, we have grown
                  from a small contracting firm into a full-service build
                  company capable of delivering projects from concept through
                  to handover under one roof.
                </p>
                <p>
                  Our strength lies in the seamless integration of design,
                  procurement, and construction — eliminating the coordination
                  gaps that plague traditional project delivery and giving
                  clients a single, accountable partner for the entire journey.
                </p>
                <p>
                  We source exclusively from India's most trusted material
                  brands — Tata Steel, JSW, UltraTech, Asian Paints, Havells —
                  and apply rigorous quality control at every stage to ensure
                  every structure we deliver is built to last.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-4">
                {[
                  "End-to-end EPC delivery — design, procure, build, hand over",
                  "In-house architecture, structural & MEP engineering teams",
                  "Transparent project management with live dashboard reporting",
                  "Exclusive use of premium, certified material brands",
                  "ISO-aligned quality control at every construction stage",
                  "Post-handover DLP support and maintenance services",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#c8922a] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1a2a5e]/75 text-sm leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
                {/* Company logo below tick marks */}
                <div className="pt-6 mt-2 border-t border-[#1a2a5e]/8 flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="Virat Visionsz"
                    className="w-full max-w-xs object-contain"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Director's Note ───────────────────────────────────────────── */}
      <section id="director" className="py-24 bg-white border-b border-[#1a2a5e]/8">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <SectionLabel text="Director's Note" />
          </FadeIn>
          <div className="grid md:grid-cols-5 gap-12 items-start mt-4">
            {/* Photo */}
            <FadeIn delay={0.1} className="md:col-span-2">
              <div className="relative">
                {/* Full portrait — plain image, no wrapper */}
                <img
                  src="/virat-singh.png"
                  alt="Virat Singh — Founder & Managing Director"
                  className="w-full h-auto block rounded-xl"
                />
                {/* Name card */}
                <div className="absolute -bottom-5 -right-5 bg-[#1a2a5e] text-white rounded-xl px-5 py-4 shadow-xl">
                  <p className="font-bold text-base leading-tight">Virat Singh</p>
                  <p className="text-[#c8922a] text-xs tracking-widest uppercase mt-0.5">
                    Founder & MD
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Quote & bio */}
            <FadeIn delay={0.2} className="md:col-span-3">
              <Quote className="w-10 h-10 text-[#c8922a]/30 mb-4" />
              <blockquote className="text-xl md:text-2xl font-light text-[#1a2a5e] leading-relaxed italic mb-8">
                "Every structure carries a quiet responsibility — to honour
                engineering, respect investment, and endure for generations."
              </blockquote>
              <div className="space-y-4 text-[#1a2a5e]/65 leading-relaxed text-base border-t border-[#1a2a5e]/8 pt-6">
                <p>
                  At Virat Visionsz, we believe true greatness is not built —
                  it is envisioned. What began as an ambition for quality
                  infrastructure evolved into a deeper purpose: to shape
                  skylines, strengthen communities, and create structures worthy
                  of time itself.
                </p>
                <p>
                  In an industry tested by delays and compromise, we chose a
                  different path. Not promises — <strong className="text-[#1a2a5e]">but assurance.</strong> Not claims
                  — <strong className="text-[#1a2a5e]">but practice.</strong> Virat Visionsz was founded on this
                  conviction: <strong className="text-[#1a2a5e]">Precision over haste. Transparency over
                  explanation. Integrity over convenience.</strong>
                </p>
                <p>
                  I take pride in what we have built, and greater responsibility
                  in what lies ahead. At Virat Visionsz, we do not merely
                  construct buildings.{" "}
                  <strong className="text-[#1a2a5e]">We shape legacies.</strong>
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Magazine ──────────────────────────────────────────────────── */}
      <section id="magazine" className="py-24 bg-[#f8f9fb] border-b border-[#1a2a5e]/8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80"
                  alt="Virat Visionsz Magazine 2024"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1833]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-white/80 text-xs tracking-widest uppercase mb-1">
                    2024 Edition
                  </p>
                  <p className="text-white font-semibold text-lg">
                    Virat Visionsz Magazine
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <SectionLabel text="Publication" />
              <h2 className="text-3xl font-light tracking-tight mb-5">
                The Virat Visionsz{" "}
                <span className="font-semibold text-[#c8922a]">Magazine</span>
              </h2>
              <p className="text-[#1a2a5e]/65 leading-relaxed mb-6">
                Our annual magazine is a window into the world of Virat
                Visionsz — featuring completed projects, material innovations,
                insights from our design team, and an in-depth look at the
                forces shaping Delhi NCR's built environment.
              </p>
              <p className="text-[#1a2a5e]/65 leading-relaxed mb-8">
                The 2024 edition covers our most ambitious residential and
                commercial projects of the year, a special feature on
                sustainable construction in North India, and an exclusive
                interview with our founder on the future of the industry.
              </p>
              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1a2a5e] text-white text-sm font-semibold hover:bg-[#c8922a] transition-colors duration-300 cursor-pointer">
                <BookOpen className="w-4 h-4" />
                Read the 2024 Edition
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Brochure ──────────────────────────────────────────────────── */}
      <section id="brochure" className="py-24 bg-white border-b border-[#1a2a5e]/8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn className="order-2 md:order-1" delay={0.1}>
              <SectionLabel text="Company Profile" />
              <h2 className="text-3xl font-light tracking-tight mb-5">
                Our Complete{" "}
                <span className="font-semibold text-[#c8922a]">Brochure</span>
              </h2>
              <p className="text-[#1a2a5e]/65 leading-relaxed mb-6">
                The Virat Visionsz company brochure provides a comprehensive
                overview of our services, project portfolio, team credentials,
                and contact information — everything a prospective client or
                partner needs to understand who we are and what we do.
              </p>
              <p className="text-[#1a2a5e]/65 leading-relaxed mb-8">
                Available as a downloadable PDF, the brochure is ideal for
                sharing with project stakeholders, architects, consultants, and
                government bodies evaluating us for upcoming tenders.
              </p>
              <a
                href="/brochure.pdf"
                download="Virat-Visionsz-Brochure.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-[#1a2a5e] text-[#1a2a5e] text-sm font-semibold hover:bg-[#1a2a5e] hover:text-white transition-colors duration-300"
              >
                <FileText className="w-4 h-4" />
                Download PDF Brochure
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </FadeIn>
            <FadeIn className="order-1 md:order-2">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80"
                  alt="Virat Visionsz Company Brochure"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f8f9fb] border-b border-[#1a2a5e]/8">
        <div className="max-w-5xl mx-auto px-6 mb-14 text-center">
          <FadeIn>
            <SectionLabel text="What We Do" />
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              Our Services &{" "}
              <span className="font-semibold text-[#c8922a]">Capabilities</span>
            </h2>
            <p className="mt-4 text-[#1a2a5e]/55 text-base max-w-xl mx-auto leading-relaxed">
              From architecture through to automation — every discipline under
              one roof, every detail in our hands.
            </p>
          </FadeIn>
        </div>

        <div className="max-w-5xl mx-auto px-6 space-y-20">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.id}
              id={svc.id}
              className="grid md:grid-cols-2 gap-12 items-center scroll-mt-24"
            >
              {/* Image — alternates sides */}
              <FadeIn
                delay={0.05}
                className={i % 2 === 1 ? "order-1 md:order-2" : ""}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1833]/50 to-transparent" />
                  {/* Tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#c8922a] text-white text-[10px] font-bold tracking-widest uppercase">
                    {svc.tag}
                  </span>
                </div>
              </FadeIn>

              {/* Text */}
              <FadeIn
                delay={0.12}
                className={i % 2 === 1 ? "order-2 md:order-1" : ""}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-2.5 rounded-xl bg-[#1a2a5e]/8 text-[#c8922a]">
                    {svc.icon}
                  </span>
                  <span className="text-xs font-bold tracking-widest uppercase text-[#c8922a]">
                    {svc.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-[#1a2a5e] mb-3">
                  {svc.title}
                </h3>
                <p className="text-[#1a2a5e]/60 leading-relaxed mb-6 text-sm">
                  {svc.desc}
                </p>
                <ul className="space-y-2">
                  {svc.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c8922a] flex-shrink-0 mt-2" />
                      <span className="text-[#1a2a5e]/65 text-sm leading-relaxed">
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA / Contact strip ───────────────────────────────────────── */}
      <section id="contact" className="py-20 bg-[#1a2a5e]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-[#c8922a] text-xs font-bold tracking-[0.2em] uppercase mb-3">
              Let's Build Together
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Have a project in mind?{" "}
              <span className="font-semibold text-[#c8922a]">Talk to us.</span>
            </h2>
            <p className="text-white/55 max-w-xl mx-auto mb-10 leading-relaxed">
              Whether you're planning a new build, a renovation, or need an EPC
              partner for a large-scale development — we'd love to hear from
              you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="tel:+918448197778"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#c8922a] text-white text-sm font-semibold hover:bg-[#b07820] transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
              <a
                href="mailto:viratvisionsz@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white text-sm font-semibold hover:border-[#c8922a] hover:text-[#c8922a] transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </div>
            {/* Contact details */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/40 text-sm">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#c8922a]/60" />
                Delhi NCR, India
              </span>
              <span className="hidden sm:block text-white/20">|</span>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c8922a]/60" />
                +91 84481 97778
              </span>
              <span className="hidden sm:block text-white/20">|</span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#c8922a]/60" />
                viratvisionsz@gmail.com
              </span>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
