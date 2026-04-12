"use client";

import { motion } from "framer-motion";
import { Scissors, Sparkles, Droplets } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Corte Social",
    description: "Corte clássico social com acabamento impecável e atenção aos detalhes.",
    price: "R$ 35",
  },
  {
    icon: Sparkles,
    title: "Corte Degradê",
    description: "Degradê preciso com transição perfeita e estilo moderno.",
    price: "R$ 40",
  },
  {
    icon: Droplets,
    title: "Combo Completo",
    description: "Cabelo, barba e sobrancelha — o pacote completo para o cavalheiro.",
    price: "R$ 70",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4 font-medium">O que oferecemos</p>
          <h2 className="font-display text-5xl md:text-7xl tracking-wider">SERVIÇOS</h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="bg-background p-12 text-center group hover:bg-card transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="w-16 h-16 mx-auto mb-8 border border-border group-hover:border-gold/30 rounded-full flex items-center justify-center transition-colors duration-500">
                <service.icon className="w-7 h-7 text-muted-foreground group-hover:text-gold transition-colors duration-500" strokeWidth={1} />
              </div>
              <h3 className="font-display text-3xl tracking-wider mb-4">{service.title.toUpperCase()}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">{service.description}</p>
              <p className="font-display text-3xl tracking-wider text-gold">{service.price}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-xs uppercase tracking-[0.3em] mb-8">Somente por agendamento</p>
          <a
            href="https://markey.pro/6u35v9gh7n2088"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-accent-foreground px-10 py-4 text-sm font-semibold uppercase tracking-[0.25em] hover:bg-gold-light transition-colors rounded-md"
          >
            Agendar Agora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
