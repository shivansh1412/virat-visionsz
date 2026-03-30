"use client"
import { LayoutGroup, motion } from "framer-motion"
import Link from "next/link"
import { TextRotate } from "@/components/ui/text-rotate"
import Floating, { FloatingElement } from "@/components/ui/parallax-floating"

const constructionImages = [
  {
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    title: "Glass skyscraper",
  },
  {
    url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    title: "Construction crane at sunset",
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    title: "Modern residential home",
  },
  {
    url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2231&auto=format&fit=crop",
    title: "Architectural blueprints",
  },
  {
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    title: "Luxury villa exterior",
  },
]

export function LandingHero() {
  return (
    <section className="w-full h-screen overflow-hidden flex flex-col items-center justify-center relative bg-[#f0f2f5]">
      {/* Parallax floating images */}
      <Floating sensitivity={-0.5} className="h-full">
        <FloatingElement depth={0.5} className="top-[15%] left-[2%] md:top-[22%] md:left-[5%]">
          <motion.img
            src={constructionImages[0].url}
            alt={constructionImages[0].title}
            className="w-16 h-12 sm:w-24 sm:h-16 md:w-28 md:h-20 lg:w-36 lg:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg] shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[2%] left-[8%] md:top-[5%] md:left-[10%]">
          <motion.img
            src={constructionImages[1].url}
            alt={constructionImages[1].title}
            className="w-40 h-28 sm:w-48 sm:h-36 md:w-56 md:h-44 lg:w-64 lg:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-12 shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />
        </FloatingElement>

        <FloatingElement depth={4} className="top-[82%] left-[5%] md:top-[75%] md:left-[7%]">
          <motion.img
            src={constructionImages[2].url}
            alt={constructionImages[2].title}
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 object-cover -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />
        </FloatingElement>

        <FloatingElement depth={2} className="top-[2%] left-[82%] md:top-[3%] md:left-[80%]">
          <motion.img
            src={constructionImages[3].url}
            alt={constructionImages[3].title}
            className="w-40 h-36 sm:w-48 sm:h-44 md:w-60 md:h-52 lg:w-64 lg:h-56 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[6deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[72%] left-[80%] md:top-[65%] md:left-[80%]">
          <motion.img
            src={constructionImages[4].url}
            alt={constructionImages[4].title}
            className="w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[19deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          />
        </FloatingElement>
      </Floating>

      {/* Center content */}
      <div className="flex flex-col justify-center items-center w-[260px] sm:w-[340px] md:w-[520px] lg:w-[680px] z-50 pointer-events-auto">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-center w-full justify-center items-center flex-col flex whitespace-pre leading-tight tracking-tight space-y-2 md:space-y-4"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
        >
          <span className="font-light text-[#1a2a5e]">We Build</span>
          <LayoutGroup>
            <motion.span layout className="flex whitespace-pre justify-center">
              <TextRotate
                texts={[
                  "Legacies",
                  "Your Vision",
                  "Luxury Villas",
                  "The Future",
                  "Communities",
                  "Excellence",
                  "Landmarks",
                ]}
                mainClassName="overflow-hidden pr-3 text-[#c8922a] py-0 pb-2 md:pb-4 rounded-xl font-semibold"
                staggerDuration={0.03}
                staggerFrom="last"
                rotationInterval={3000}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
            </motion.span>
          </LayoutGroup>
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base md:text-xl lg:text-2xl text-center pt-6 sm:pt-8 md:pt-10 text-[#1a2a5e]/60 font-light max-w-xl leading-relaxed"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
        >
          An EPC organisation committed to structures that perform, endure, and define the landscape for decades.
        </motion.p>

        <motion.div
          className="flex flex-row justify-center gap-4 items-center mt-8 sm:mt-12 md:mt-14"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.7 }}
        >
          <Link href="/about#contact">
            <motion.button
              className="text-sm sm:text-base md:text-lg font-semibold tracking-tight text-white bg-[#c8922a] hover:bg-[#d4a843] px-6 py-3 md:px-8 md:py-3.5 rounded-full shadow-xl"
              whileHover={{ scale: 1.05, transition: { type: "spring", damping: 30, stiffness: 400 } }}
            >
              Start Your Project <span className="ml-1">→</span>
            </motion.button>
          </Link>
          <Link href="/#portfolio">
            <motion.button
              className="text-sm sm:text-base md:text-lg font-semibold tracking-tight text-white bg-[#1a2a5e] hover:bg-[#243570] px-6 py-3 md:px-8 md:py-3.5 rounded-full shadow-xl"
              whileHover={{ scale: 1.05, transition: { type: "spring", damping: 30, stiffness: 400 } }}
            >
              View Portfolio
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
