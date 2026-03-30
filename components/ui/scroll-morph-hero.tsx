"use client";
import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";

// --- Types ---
export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface FlipCardProps {
  src: string;
  index: number;
  total: number;
  phase: AnimationPhase;
  target: { x: number; y: number; rotation: number; scale: number; opacity: number };
  label: string;
}

// --- Constants ---
const IMG_WIDTH = 60;
const IMG_HEIGHT = 85;
const TOTAL_IMAGES = 20;
const MAX_SCROLL = 3000;

// Construction & architecture images for Virat Visionsz
const IMAGES = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&q=80",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=300&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&q=80",
  "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=300&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&q=80",
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&q=80",
  "https://images.unsplash.com/photo-1622015663319-e97e697503ee?w=300&q=80",
  "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=300&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=300&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&q=80",
  "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?w=300&q=80",
  "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=300&q=80",
  "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=300&q=80",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=300&q=80",
  "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?w=300&q=80",
  "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=300&q=80",
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=300&q=80",
];

const IMAGE_LABELS = [
  "Luxury Villa", "High Rise", "Blueprint", "Residential", "Villa Exterior",
  "Modern Home", "Apartment", "Site Work", "Steel Structure", "Interior",
  "Premium Home", "Living Space", "Office Building", "Architecture", "Urban Design",
  "Custom Home", "Interior Design", "Commercial", "Infrastructure", "EPC Project",
];

// Linear interpolation helper
const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

// --- FlipCard Component ---
function FlipCard({ src, index, target, label }: FlipCardProps) {
  return (
    <motion.div
      animate={{
        x: target.x,
        y: target.y,
        rotate: target.rotation,
        scale: target.scale,
        opacity: target.opacity,
      }}
      transition={{ type: "spring", stiffness: 90, damping: 22 }}
      style={{
        position: "absolute",
        width: IMG_WIDTH,
        height: IMG_HEIGHT,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="cursor-pointer group"
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ rotateY: 180 }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-gray-200"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={src}
            alt={label}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
        </div>
        {/* Back Face */}
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg flex flex-col items-center justify-center p-2"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "linear-gradient(135deg, #1a2a5e, #243570)",
          }}
        >
          <p className="text-[7px] font-bold text-[#d4a843] uppercase tracking-widest mb-1">Project</p>
          <p className="text-[9px] font-semibold text-white text-center leading-tight">{label}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// --- Main Component ---
export default function ScrollMorphHero() {
  const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Container size observer
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });
    observer.observe(containerRef.current);
    setContainerSize({
      width: containerRef.current.offsetWidth,
      height: containerRef.current.offsetHeight,
    });
    return () => observer.disconnect();
  }, []);

  // Virtual scroll
  const virtualScroll = useMotionValue(0);
  const scrollRef = useRef(0);
  // Prevents the smooth-scroll-to-next-section from firing multiple times
  // during a trackpad momentum burst
  const transitioningRef = useRef(false);

  const scrollToNextSection = () => {
    if (transitioningRef.current) return;
    transitioningRef.current = true;
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    // Re-enable after transition completes so the user can scroll back & forth
    setTimeout(() => { transitioningRef.current = false; }, 1200);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Always own the event while this section is active — no raw passthrough
      e.preventDefault();

      if (e.deltaY > 0 && scrollRef.current >= MAX_SCROLL) {
        // Animation done + still scrolling down → controlled smooth transition
        scrollToNextSection();
        return;
      }
      if (e.deltaY < 0 && scrollRef.current <= 0) {
        // At the very top scrolling up → let browser handle naturally
        // (don't call scrollTo, just stop intercepting)
        return;
      }

      const newScroll = Math.min(Math.max(scrollRef.current + e.deltaY, 0), MAX_SCROLL);
      scrollRef.current = newScroll;
      virtualScroll.set(newScroll);
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY; };
    const handleTouchMove = (e: TouchEvent) => {
      const rawDelta = touchStartY - e.touches[0].clientY;
      touchStartY = e.touches[0].clientY;
      // Multiply touch delta so a single swipe completes the animation quickly on mobile
      const delta = rawDelta * 3.5;

      e.preventDefault();

      if (delta > 0 && scrollRef.current >= MAX_SCROLL) {
        scrollToNextSection();
        return;
      }
      if (delta < 0 && scrollRef.current <= 0) return;

      const newScroll = Math.min(Math.max(scrollRef.current + delta, 0), MAX_SCROLL);
      scrollRef.current = newScroll;
      virtualScroll.set(newScroll);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: false });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, [virtualScroll]);

  // Motion transforms
  const morphProgress = useTransform(virtualScroll, [0, 600], [0, 1]);
  const smoothMorph = useSpring(morphProgress, { stiffness: 140, damping: 30 });
  const scrollRotate = useTransform(virtualScroll, [600, 3000], [0, 360]);
  const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 140, damping: 30 });

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 60, damping: 24 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normalized = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseX.set(normalized * 100);
    };
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX]);

  // Intro sequence
  useEffect(() => {
    const t1 = setTimeout(() => setIntroPhase("line"), 500);
    const t2 = setTimeout(() => setIntroPhase("circle"), 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Random scatter positions
  const scatterPositions = useMemo(() =>
    IMAGES.map(() => ({
      x: (Math.random() - 0.5) * 1500,
      y: (Math.random() - 0.5) * 1000,
      rotation: (Math.random() - 0.5) * 180,
      scale: 0.6,
      opacity: 0,
    })),
  []);

  // Live motion values
  const [morphValue, setMorphValue] = useState(0);
  const [rotateValue, setRotateValue] = useState(0);
  const [parallaxValue, setParallaxValue] = useState(0);

  useEffect(() => {
    const u1 = smoothMorph.on("change", setMorphValue);
    const u2 = smoothScrollRotate.on("change", setRotateValue);
    const u3 = smoothMouseX.on("change", setParallaxValue);
    return () => { u1(); u2(); u3(); };
  }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

  // Content fade-in
  const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
  const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f0f2f5 0%, #e8eaf0 50%, #f5f0e8 100%)" }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center" style={{ perspective: "1000px" }}>

        {/* Initial text — fades out as morph begins */}
        <div className="absolute z-30 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2 px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={
              introPhase === "circle" && morphValue < 0.5
                ? { opacity: 1 - morphValue * 2, y: 0, filter: "blur(0px)" }
                : { opacity: 0, filter: "blur(10px)" }
            }
            transition={{ duration: 1 }}
            className="flex flex-col items-center gap-3"
          >
            {/* Logo */}
            <img
              src="/logo.png"
              alt="Virat Visionsz"
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 object-contain mb-2 drop-shadow-xl"
            />
            <h1 className="text-lg sm:text-2xl font-light tracking-tight text-[#1a2a5e] md:text-4xl">
              Where Vision Meets{" "}
              <span className="font-semibold text-[#c8922a]">Concrete</span>
            </h1>
            <p className="mt-1 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#1a2a5e]/50 uppercase">
              Scroll to Explore Our Work
            </p>
          </motion.div>
        </div>

        {/* Arc content — fades in after morph */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="absolute top-[8%] z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4"
        >
          <img
            src="/logo.png"
            alt="Virat Visionsz"
            className="w-24 h-24 object-contain mb-4 drop-shadow-lg"
          />
          <p className="text-xs font-bold tracking-[0.25em] text-[#c8922a] uppercase mb-2">
            Virat Visionsz Pvt. Ltd.
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-[#1a2a5e] tracking-tight mb-1 leading-tight">
            Engineered to{" "}
            <span className="font-semibold text-[#c8922a]">Endure.</span>
          </h2>
          <p className="text-xs md:text-sm font-semibold tracking-[0.15em] text-[#1a2a5e]/40 uppercase mb-3">
            Building Legacies with Infinite Vision
          </p>
          <p className="text-sm md:text-base text-[#1a2a5e]/55 max-w-lg leading-relaxed">
            End-to-end EPC delivery — from luxury residentials and commercial landmarks
            <br className="hidden md:block" />
            to government infrastructure across Delhi NCR.
          </p>
        </motion.div>

        {/* Image cards */}
        <div className="relative flex items-center justify-center w-full h-full">
          {IMAGES.slice(0, TOTAL_IMAGES).map((src, i) => {
            let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

            if (introPhase === "scatter") {
              target = scatterPositions[i];
            } else if (introPhase === "line") {
              const lineSpacing = 70;
              const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
              target = {
                x: i * lineSpacing - lineTotalWidth / 2,
                y: 0, rotation: 0, scale: 1, opacity: 1,
              };
            } else {
              const isMobile = containerSize.width < 768;
              const isSmall = containerSize.width < 480;
              const minDimension = Math.min(containerSize.width, containerSize.height);

              // Global scale factor — shrinks everything proportionally on small screens
              const globalScale = isSmall
                ? Math.min(containerSize.width / 560, 0.6)
                : isMobile
                ? Math.min(containerSize.width / 720, 0.82)
                : 1;

              // Circle — radius scales with screen so images never overflow
              const circleRadius = Math.min(minDimension * 0.35, 320) * globalScale;
              const circleAngle = (i / TOTAL_IMAGES) * 360;
              const circleRad = (circleAngle * Math.PI) / 180;
              const circlePos = {
                x: Math.cos(circleRad) * circleRadius,
                y: Math.sin(circleRad) * circleRadius,
                rotation: circleAngle + 90,
              };

              // Arc
              const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
              const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);
              const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25);
              const arcCenterY = arcApexY + arcRadius;
              const spreadAngle = isMobile ? 100 : 130;
              const startAngle = -90 - spreadAngle / 2;
              const step = spreadAngle / (TOTAL_IMAGES - 1);
              const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
              const boundedRotation = -scrollProgress * spreadAngle * 0.8;
              const currentArcAngle = startAngle + i * step + boundedRotation;
              const arcRad = (currentArcAngle * Math.PI) / 180;
              const arcPos = {
                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                rotation: currentArcAngle + 90,
                scale: (isMobile ? 1.4 : 1.8) * globalScale,
              };

              target = {
                x: lerp(circlePos.x, arcPos.x, morphValue),
                y: lerp(circlePos.y, arcPos.y, morphValue),
                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                scale: lerp(globalScale, arcPos.scale, morphValue),
                opacity: 1,
              };
            }

            return (
              <FlipCard
                key={i}
                src={src}
                index={i}
                total={TOTAL_IMAGES}
                phase={introPhase}
                target={target}
                label={IMAGE_LABELS[i]}
              />
            );
          })}
        </div>
      </div>

      {/* Scroll-down hint — appears once animation is done */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
        animate={{
          opacity: morphValue > 0.9 ? 1 : 0,
          y: morphValue > 0.9 ? 0 : 10,
        }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-xs font-semibold tracking-[0.2em] text-[#1a2a5e]/50 uppercase">
          Continue
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4v12M4 10l6 6 6-6" stroke="#c8922a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
