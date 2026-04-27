"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="agendar" className="py-28 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4 font-medium">Contato</p>
          <h2 className="font-display text-5xl md:text-7xl tracking-wider">VISITE-NOS</h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-6" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-px bg-border max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-card p-12 text-center">
            <div className="w-14 h-14 mx-auto mb-6 border border-border rounded-full flex items-center justify-center">
              <MapPin className="w-5 h-5 text-gold" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-xl tracking-wider mb-4">ENDEREÇO</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              R. das Balsas, 87<br />
              Conj. Res. Estrela do Sul<br />
              Campo Grande - MS
            </p>
          </div>
          <div className="bg-card p-12 text-center">
            <div className="w-14 h-14 mx-auto mb-6 border border-border rounded-full flex items-center justify-center">
              <Clock className="w-5 h-5 text-gold" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-xl tracking-wider mb-4">HORÁRIO</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Segunda a Sexta: 8h às 20h<br />
              Sábado: 8h às 19h
            </p>
          </div>
          <div className="bg-card p-12 text-center">
            <div className="w-14 h-14 mx-auto mb-6 border border-border rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5 text-gold" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-xl tracking-wider mb-4">CONTATO</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              (67) 99213-2933
            </p>
            <a
              href="https://markey.pro/6u35v9gh7n2088"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-accent-foreground px-8 py-3 text-xs font-semibold uppercase tracking-[0.25em] hover:bg-gold-light transition-colors rounded-md"
            >
              Agendar Horário
            </a>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <iframe
            title="Localização Lord Barbearia"
            src="https://www.google.com/maps?q=R.%20das%20Balsas%2C%2087%20-%20Conj.%20Res.%20Estrela%20do%20Sul%2C%20Campo%20Grande%20-%20MS%2C%2079013-220&z=16&output=embed"
            width="100%"
            height="300"
            style={{ border: 0, filter: "grayscale(1) invert(1) contrast(1.2) opacity(0.7)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
