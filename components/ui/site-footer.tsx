"use client";

import { Footer } from "@/components/ui/modem-animated-footer";
import { Linkedin, Mail, Phone } from "lucide-react";

const socialLinks = [
  {
    icon: <Linkedin className="w-6 h-6" />,
    href: "https://www.linkedin.com/in/viratsinghvv",
    label: "LinkedIn",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    href: "mailto:viratvisionsz@gmail.com",
    label: "Email",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    href: "tel:+918448197778",
    label: "Phone",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Director's Note", href: "/about#director" },
  { label: "Magazine", href: "/about#magazine" },
  { label: "Brochure", href: "/about#brochure" },
  { label: "Interiors", href: "/about#interiors" },
  { label: "Exteriors", href: "/about#exteriors" },
  { label: "Smart Homes", href: "/about#smart-homes" },
  { label: "MEP", href: "/about#mep" },
  { label: "Turnkey", href: "/about#turnkey" },
  { label: "Contact", href: "mailto:viratvisionsz@gmail.com" },
];

export default function SiteFooter() {
  return (
    <Footer
      brandName="Virat Visionsz"
      brandDescription="Building Legacies with Infinite Vision — Delhi NCR's trusted EPC partner for residential, commercial, and institutional projects."
      socialLinks={socialLinks}
      navLinks={navLinks}
      creatorName="Virat Visionsz Pvt Ltd"
      creatorUrl="mailto:viratvisionsz@gmail.com"
    />
  );
}
