"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FooterProps {
  brandName?: string;
  brandDescription?: string;
  socialLinks?: SocialLink[];
  navLinks?: FooterLink[];
  creatorName?: string;
  creatorUrl?: string;
  brandIcon?: React.ReactNode;
  className?: string;
}

export const Footer = ({
  brandName = "Virat Visionsz",
  brandDescription = "Building Legacies with Infinite Vision",
  socialLinks = [],
  navLinks = [],
  creatorName,
  creatorUrl,
  brandIcon,
  className,
}: FooterProps) => {
  return (
    <section className={cn("relative w-full mt-0 overflow-hidden", className)}>
      <footer className="border-t border-[#1a2a5e]/15 bg-white mt-0 relative">
        <div className="max-w-7xl flex flex-col justify-between mx-auto min-h-[30rem] sm:min-h-[35rem] md:min-h-[40rem] relative p-4 py-10">
          {/* Top content */}
          <div className="flex flex-col mb-12 sm:mb-20 md:mb-0 w-full">
            <div className="w-full flex flex-col items-center">
              <div className="space-y-2 flex flex-col items-center flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[#1a2a5e] text-3xl font-bold tracking-tight">
                    {brandName}
                  </span>
                </div>
                <p className="text-[#1a2a5e]/55 font-medium text-center w-full max-w-sm sm:w-96 px-4 sm:px-0 text-sm">
                  {brandDescription}
                </p>
              </div>

              {socialLinks.length > 0 && (
                <div className="flex mb-8 mt-4 gap-4">
                  {socialLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="text-[#1a2a5e]/50 hover:text-[#c8922a] transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-6 h-6 hover:scale-110 duration-300">
                        {link.icon}
                      </div>
                      <span className="sr-only">{link.label}</span>
                    </Link>
                  ))}
                </div>
              )}

              {navLinks.length > 0 && (
                <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-[#1a2a5e]/50 max-w-full px-4">
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      className="hover:text-[#c8922a] duration-300 hover:font-semibold"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-20 md:mt-24 flex flex-col gap-2 md:gap-1 items-center justify-center md:flex-row md:items-center md:justify-between px-4 md:px-0">
            <p className="text-sm text-[#1a2a5e]/40 text-center md:text-left">
              &copy;{new Date().getFullYear()} {brandName} Pvt. Ltd. All rights reserved.
            </p>
            {creatorName && creatorUrl && (
              <nav className="flex gap-4">
                <Link
                  href={creatorUrl}
                  target="_blank"
                  className="text-sm text-[#1a2a5e]/40 hover:text-[#c8922a] transition-colors duration-300 hover:font-medium"
                >
                  Crafted by {creatorName}
                </Link>
              </nav>
            )}
          </div>
        </div>

        {/* Large background text */}
        <div
          className="bg-gradient-to-b from-[#1a2a5e]/15 via-[#1a2a5e]/6 to-transparent bg-clip-text text-transparent leading-none absolute left-1/2 -translate-x-1/2 bottom-40 md:bottom-32 font-extrabold tracking-tighter pointer-events-none select-none text-center px-4"
          style={{
            fontSize: "clamp(2.5rem, 10vw, 9rem)",
            maxWidth: "95vw",
          }}
        >
          {brandName.toUpperCase()}
        </div>

        {/* Bottom logo popup */}
        <div className="absolute hover:border-[#c8922a] duration-300 drop-shadow-[0_0px_20px_rgba(26,42,94,0.15)] bottom-24 md:bottom-20 backdrop-blur-sm rounded-3xl bg-white/80 left-1/2 border-2 border-[#1a2a5e]/10 flex items-center justify-center p-3 -translate-x-1/2 z-10">
          {brandIcon ? (
            <div className="w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 rounded-2xl flex items-center justify-center overflow-hidden">
              {brandIcon}
            </div>
          ) : (
            <div className="w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 rounded-2xl flex items-center justify-center overflow-hidden bg-white">
              <Image
                src="/logo.png"
                alt="Virat Visionsz"
                width={96}
                height={96}
                className="w-full h-full object-contain"
              />
            </div>
          )}
        </div>

        {/* Divider line */}
        <div className="absolute bottom-32 sm:bottom-34 h-px bg-gradient-to-r from-transparent via-[#1a2a5e]/15 to-transparent w-full left-1/2 -translate-x-1/2" />

        {/* Bottom fade */}
        <div className="bg-gradient-to-t from-white via-white/80 to-white/0 absolute bottom-28 w-full h-24 pointer-events-none" />
      </footer>
    </section>
  );
};
