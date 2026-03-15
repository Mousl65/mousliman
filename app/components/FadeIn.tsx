"use client";
import { motion } from "framer-motion";

export default function FadeIn({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Départ : invisible et un peu plus bas
      whileInView={{ opacity: 1, y: 0 }} // Arrivée : visible et à sa place
      viewport={{ once: true }} // L'animation ne se joue qu'une seule fois
      transition={{ duration: 0.6, delay: delay }} // Vitesse et délai
    >
      {children}
    </motion.div>
  );
}