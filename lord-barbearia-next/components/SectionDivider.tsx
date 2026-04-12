"use client";

import { motion } from "framer-motion";
import { Scissors } from "lucide-react";

export default function SectionDivider({ icon = false }: { icon?: boolean }) {
  return (
    <div className="relative py-6">
      <div className="section-divider" />
      {icon && (
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4"
          initial={{ opacity: 0, rotate: -90 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Scissors className="w-4 h-4 text-gold/40" strokeWidth={1} />
        </motion.div>
      )}
    </div>
  );
}
