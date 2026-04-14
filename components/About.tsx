"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const stats = [
    { number: "15+", label: "Anos de História" },
    { number: "10k+", label: "Cortes Feitos" },
    { number: "05", label: "Especialistas" },
  ];

  return (
    <section id="sobre" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Detalhe de fundo sutil (Marca d'água) */}
      <div className="absolute left-[-5%] top-[10%] text-[20rem] font-display opacity-[0.02] select-none pointer-events-none">
        LORD
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Coluna da Imagem com Moldura */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Moldura decorativa atrás da imagem */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-gold/20 translate-x-2 translate-y-2 z-0" />
            
            <div className="relative z-10 overflow-hidden bg-muted aspect-[4/5]">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                transition={{ duration: 1.2 }}
                className="w-full h-full"
              >
                <Image
                  src="/assets/barber-tools.jpg"
                  alt="Ferramentas premium da Barbearia Lord"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </motion.div>
              
              {/* Selo de Qualidade Flutuante */}
              <div className="absolute bottom-6 right-6 bg-gold p-4 text-background z-20 hidden sm:block">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase leading-none">Original</p>
                <p className="font-display text-2xl leading-none mt-1">EST. 2011</p>
              </div>
            </div>
          </motion.div>

          {/* Coluna de Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <header className="mb-8">
              <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">
                Nossa Essência
              </span>
              <h2 className="font-display text-5xl md:text-7xl tracking-tight mb-6">
                A LORD <span className="text-gold">.</span>
              </h2>
              <div className="w-20 h-px bg-gold/60" />
            </header>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
              <p>
                Há mais de uma década, a <strong className="text-foreground font-medium">Lord</strong> 
                redefine o conceito de barbearia. Não entregamos apenas cortes; preservamos o ritual clássico 
                do cuidado masculino com um toque de sofisticação contemporânea.
              </p>
              <p>
                Cada detalhe em nosso espaço foi projetado para quem não abre mão da excelência. 
                Utilizamos as melhores técnicas do mundo e produtos premium para garantir que seu 
                estilo seja único e impecável.
              </p>
            </div>

            {/* Stats com design refinado */}
            <div className="grid grid-cols-3 gap-4 pt-12 border-t border-white/5 mt-12">
              {stats.map((stat) => (
                <div key={stat.label} className="group">
                  <p className="font-display text-3xl md:text-4xl text-gold mb-1 transition-transform group-hover:-translate-y-1 duration-300">
                    {stat.number}
                  </p>
                  <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
