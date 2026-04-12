"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rafael S.",
    text: "Melhor barbearia de Campo Grande! Atendimento impecável e o degradê ficou perfeito. Recomendo demais.",
    rating: 5,
  },
  {
    name: "Lucas M.",
    text: "Ambiente muito agradável, profissionais atenciosos. Sempre saio satisfeito. Virei cliente fiel!",
    rating: 5,
  },
  {
    name: "Pedro H.",
    text: "O combo completo vale muito a pena. Barba, cabelo e sobrancelha com qualidade premium. Top demais!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4 font-medium">O que dizem</p>
          <h2 className="font-display text-5xl md:text-7xl tracking-wider">DEPOIMENTOS</h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-card p-12 text-center relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Quote className="w-8 h-8 text-gold/20 mx-auto mb-6" strokeWidth={1} />
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="w-8 h-px bg-gold/30 mx-auto mb-4" />
              <p className="font-display text-lg tracking-wider">{t.name.toUpperCase()}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
