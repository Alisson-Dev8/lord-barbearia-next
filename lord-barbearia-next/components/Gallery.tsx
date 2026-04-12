"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/assets/gallery-1.jpg", alt: "Corte degradê", label: "DEGRADÊ" },
  { src: "/assets/gallery-2.jpg", alt: "Barba completa", label: "BARBA" },
  { src: "/assets/gallery-3.jpg", alt: "Corte moderno", label: "MODERNO" },
  { src: "/assets/gallery-4.jpg", alt: "Navalha", label: "NAVALHA" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4 font-medium">Nosso trabalho</p>
          <h2 className="font-display text-5xl md:text-7xl tracking-wider">GALERIA</h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              className={`overflow-hidden group relative cursor-pointer ${i === 0 ? "md:row-span-2" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={`relative w-full ${i === 0 ? "h-full min-h-[300px] md:min-h-[600px]" : "aspect-[3/4]"}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/70 transition-all duration-500 flex flex-col items-center justify-center">
                <span className="font-display text-2xl md:text-3xl tracking-[0.3em] text-foreground opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {img.label}
                </span>
                <div className="w-8 h-px bg-gold opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 mt-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}