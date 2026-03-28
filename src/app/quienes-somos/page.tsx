"use client";

import { motion } from "framer-motion";
import { Users, Music, Zap, HeartHandshake } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function QuienesSomos() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/* HEADER SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-radial-gradient from-primary/10 via-[#0b0b0b] to-[#0b0b0b] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-8 relative z-10 text-center max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground text-sm font-semibold mb-6 uppercase tracking-wider">
              <Users className="h-4 w-4 text-primary" /> Sobre Nosotros
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">
              Nuestra Historia
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              En EchoBox creemos que la música es el motor principal de cualquier experiencia social. Nacimos con la visión de devolverle al usuario el control de su ambiente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <h2 className="text-3xl font-heading font-bold text-white">El problema de la rockola tradicional</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Durante décadas, las rockolas físicas ocuparon un espacio sagrado en bares y cantinas. Sin embargo, su evolución se estancó. Los equipos se volvieron obsoletos, ocupaban demasiado espacio físico, tenían fallas mecánicas y requerían que el cliente abandonara su mesa e interrumpiera su plática para ir a depositar monedas.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Nos dimos cuenta de que todos llevamos una rockola de nueva generación en el bolsillo: el smartphone.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-[#121212] border border-white/10 flex items-center justify-center p-8 group hover:border-primary/50 transition-colors"
            >
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
              <div className="text-center z-10">
                <Music className="w-20 h-20 text-primary mx-auto mb-4 opacity-50" />
                <span className="text-white/50 font-heading font-black text-2xl uppercase tracking-widest">Evolución</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION STRIP */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="container mx-auto px-4 sm:px-8 text-center max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl md:text-4xl font-heading font-bold text-white leading-tight mb-8">
              Decidimos digitalizar la experiencia y crear un puente directo entre el celular del cliente y las bocinas del negocio.
            </h3>
            <Link href="/mision-vision-valores">
              <Button variant="outline" size="lg" className="border-primary/20 hover:border-primary/50 hover:bg-primary/5 text-white">
                <HeartHandshake className="w-5 h-5 mr-2" />
                Conoce nuestra Misión y Valores
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
