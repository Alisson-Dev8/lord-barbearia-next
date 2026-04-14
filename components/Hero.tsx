"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.8 + i * 0.03 },
  }),
};

const tagline = "Tradição e estilo em cada corte";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/assets/hero-barbershop.jpg"
          alt="Interior da barbearia"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/assets/logo-lord.png"
            alt="Lord Barbearia"
            width={288}
            height={100}
            className="w-56 md:w-72 mx-auto mb-6"
          />
        </motion.div>

        <motion.div
          className="w-16 h-px bg-gold mx-auto mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-12 tracking-[0.2em] uppercase">
          {tagline.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterAnimation}
              initial="hidden"
              animate="visible"
              className="inline-block"
              style={{ whiteSpace: char === " " ? "pre" : undefined }}
            >
              {char}
            </motion.span>
          ))}
        </p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <a
            href="https://markey.pro/6u35v9gh7n2088"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-accent-foreground px-10 py-4 text-sm font-semibold uppercase tracking-[0.25em] hover:bg-gold-light transition-colors rounded-md"
          >
            Agendar Horário
          </a>
          <a
            href="#servicos"
            className="border border-foreground/30 px-10 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-foreground hover:border-gold hover:text-gold transition-colors rounded-md"
          >
            Serviços
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-5 h-8 border-2 border-gold/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-gold/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
