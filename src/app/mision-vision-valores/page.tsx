"use client";

import { motion } from "framer-motion";
import { Target, Eye, Gem, Zap, HeartHandshake, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function MisionVisionValores() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/* HEADER SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-radial-gradient from-primary/10 via-[#0b0b0b] to-[#0b0b0b] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-8 relative z-10 text-center max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground text-sm font-semibold mb-6 uppercase tracking-wider">
              <Gem className="h-4 w-4 text-primary" /> Filosofía
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">
              Misión, Visión y Valores
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Los pilares fundamentales que nos impulsan a crear la mejor experiencia en la industria del entretenimiento.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISION & VISION */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Card className="bg-[#121212] border-white/5 h-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary origin-bottom scale-y-50 group-hover:scale-y-100 transition-transform" />
                <CardContent className="p-10 flex flex-col items-start gap-6">
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <Target className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-white">Nuestra Misión</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Transformar y democratizar el control del ambiente musical en establecimientos públicos. Proveemos la herramienta tecnológica definitiva que da libertad al cliente de escoger su música sin fricciones, al mismo tiempo que maximizamos la rentabilidad para el dueño del local mediante experiencias compartidas de entretenimiento.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="bg-[#121212] border-white/5 h-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-white/20 origin-bottom scale-y-50 group-hover:scale-y-100 transition-transform" />
                <CardContent className="p-10 flex flex-col items-start gap-6">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <Eye className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-white">Nuestra Visión</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Llegar a ser el estándar global de interacción musical en la industria de la hospitalidad. Queremos que el término &quot;poner música&quot; en el futuro sea sinónimo de la experiencia conectada, rápida y social que hoy define a EchoBox.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALORES SECTION */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Nuestros Valores</h2>
            <p className="text-xl text-muted-foreground">La brújula detrás de cada línea de código y cada cliente nuevo.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-6"
          >
            {[
              { icon: <Zap className="text-primary" />, title: "Fricción Cero", desc: "Si el usuario tiene que pensar o esforzarse para usar nuestra plataforma, fallamos. Menos clics y más ambiente." },
              { icon: <ShieldCheck className="text-primary" />, title: "Transparencia", desc: "Cuentas claras, negocios largos. Nuestro panel auditor protege el ingreso de cada crédito vendido." },
              { icon: <HeartHandshake className="text-primary" />, title: "Relación Ganar-Ganar", desc: "El usuario disfruta su música favorita y el dueño del local incrementa su rentabilidad. Un ciclo perfecto." },
              { icon: <Target className="text-primary" />, title: "Innovación Constante", desc: "Nunca nos conformamos. Iteramos y mejoramos la plataforma todos los días en base al feedback real de bares." }
            ].map((valor, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#0b0b0b] border border-white/5 hover:bg-[#121212] transition-colors">
                  <div className="p-3 rounded-lg bg-white/5 flex-shrink-0">
                    {valor.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{valor.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{valor.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
