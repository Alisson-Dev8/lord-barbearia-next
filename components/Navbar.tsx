"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#agendar", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg shadow-background/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#">
          <Image src="/assets/logo-lord.png" alt="Lord Barbearia" width={120} height={40} className="h-10 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="https://markey.pro/6u35v9gh7n2088"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-accent-foreground px-6 py-2 text-xs font-semibold uppercase tracking-[0.25em] hover:bg-gold-light transition-colors rounded-md"
          >
            Agendar
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="https://markey.pro/6u35v9gh7n2088"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gold text-accent-foreground px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-center rounded-md"
          >
            Agendar
          </a>
        </div>
      )}
    </motion.nav>
  );
}
