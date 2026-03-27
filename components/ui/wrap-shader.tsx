"use client";

import { BackgroundPaths } from "@/components/ui/background-paths";

export default function WarpShaderSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated background — deep navy with flowing gold & blue paths */}
      <BackgroundPaths />

      {/* Content overlay */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-8">
        <div className="max-w-6xl w-full text-center space-y-12">
          {/* Section header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#c8922a] animate-pulse" />
              <span className="text-white/90 text-sm font-medium tracking-widest uppercase">
                What We Do
              </span>
            </div>
            <h2 className="text-white text-4xl md:text-6xl font-sans font-light leading-tight">
              Services We{" "}
              <span className="font-semibold text-[#c8922a]">Offer</span>
            </h2>
            <p className="text-white/75 text-lg md:text-xl font-light max-w-2xl mx-auto">
              From concept to completion — end-to-end EPC solutions for every scale of ambition.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {[
              {
                title: "Residential Construction",
                description:
                  "Individual Homes, Housing Complexes, Apartment Buildings",
                icon: "🏠",
              },
              {
                title: "Commercial Projects",
                description:
                  "Office Buildings, Retail Centers, Mixed-Use Developments",
                icon: "🏢",
              },
              {
                title: "Luxury Villas",
                description:
                  "Custom Architecture, Premium Materials, Luxury Amenities",
                icon: "🏛️",
              },
              {
                title: "Government Tenders",
                description:
                  "Public Infrastructure, Educational Buildings, Healthcare",
                icon: "🏗️",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-left hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-[#c8922a]/40"
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-white text-lg font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom tagline */}
          <p className="text-[#c8922a]/60 text-sm tracking-widest uppercase font-light pt-4">
            Building Legacies with Infinite Vision
          </p>
        </div>
      </div>
    </section>
  );
}
