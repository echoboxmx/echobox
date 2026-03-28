"use client";

import { motion } from "framer-motion";
import { Send, Smartphone, Building2, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { submitContact } from "./actions";

// Reemplazar submit behavior nativo si se desea loading state, o dejar el action the <form className="space-y-6" action={submitContact}>
// como pide Server Actions puro. Lo dejaremos usando transition/action puro para simplicidad y poder redirigir.

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Contact() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-[500px] bg-primary/10 blur-[150px] -z-10 rounded-full pointer-events-none" />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">
              Digitaliza tu <span className="text-primary glow-text">Negocio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Llena el siguiente formulario y te redirigiremos a WhatsApp para agendar una demo o cotizar la instalación en tu local.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <Card className="bg-[#121212]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(255,107,0,0.05)] rounded-[2rem] overflow-hidden p-0 sm:p-2">
              <div className="grid md:grid-cols-5 gap-8 bg-[#0b0b0b] rounded-[1.5rem] p-8 md:p-12">
                
                {/* Lateral Banner */}
                <div className="md:col-span-2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-heading font-bold text-white mb-4">Empecemos a ganar</h3>
                    <p className="text-muted-foreground mb-8 text-lg">
                      La instalación usualmente tarda menos de 10 minutos si cumples con los requerimientos básicos.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 text-white/80">
                         <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl border border-primary/20">
                            <Smartphone className="w-6 h-6" />
                         </div>
                         <div className="flex flex-col">
                            <span className="font-bold text-white">Atención Vía WhatsApp</span>
                            <span className="text-sm text-muted-foreground">Inmediata y directa</span>
                         </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 p-6 rounded-2xl bg-[#121212] border border-white/5 relative overflow-hidden group">
                     <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                     <h4 className="text-primary font-bold mb-2 relative z-10">Soporte Técnico</h4>
                     <p className="text-sm text-muted-foreground relative z-10">Operamos respaldando tu negocio todos los fines de semana.</p>
                  </div>
                </div>

                {/* Formulario Principal */}
                <div className="md:col-span-3">
                  <form className="space-y-8" action={submitContact}>
                    {/* Sección 1: Datos Personales */}
                    <div className="space-y-4">
                      <h4 className="text-white font-semibold flex items-center gap-2 border-b border-white/10 pb-2">
                         1. Información General
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2 col-span-2 sm:col-span-1">
                          <Label htmlFor="name" className="text-white/70">Nombre Completo *</Label>
                          <Input id="name" name="name" required placeholder="Ej. Carlos Mendoza" className="bg-[#1a1a1a] border-white/10 text-white focus-visible:ring-primary" />
                        </div>
                        <div className="space-y-2 col-span-2 sm:col-span-1">
                          <Label htmlFor="business" className="text-white/70">Nombre del Negocio *</Label>
                          <Input id="business" name="business" required placeholder="Ej. Cantina La 10" className="bg-[#1a1a1a] border-white/10 text-white focus-visible:ring-primary" />
                        </div>
                        <div className="space-y-2 col-span-2 sm:col-span-1">
                          <Label htmlFor="phone" className="text-white/70">Teléfono (WhatsApp) *</Label>
                          <Input id="phone" name="phone" required type="tel" placeholder="10 dígitos" className="bg-[#1a1a1a] border-white/10 text-white focus-visible:ring-primary" />
                        </div>
                        <div className="space-y-2 col-span-2 sm:col-span-1">
                          <Label htmlFor="city" className="text-white/70">Ciudad *</Label>
                          <Input id="city" name="city" required placeholder="Ej. CDMX" className="bg-[#1a1a1a] border-white/10 text-white focus-visible:ring-primary" />
                        </div>
                        <div className="space-y-2 col-span-2">
                          <Label htmlFor="email" className="text-white/70">Email (Opcional)</Label>
                          <Input id="email" name="email" type="email" placeholder="correo@negocio.com" className="bg-[#1a1a1a] border-white/10 text-white focus-visible:ring-primary" />
                        </div>
                      </div>
                    </div>

                    {/* Sección 2: Checkboxes Infra */}
                    <div className="space-y-4 pt-4">
                      <h4 className="text-white font-semibold flex items-center gap-2 border-b border-white/10 pb-2">
                         2. Requerimientos Técnicos Activos
                      </h4>
                      <p className="text-sm text-primary font-medium tracking-wide">
                        💡 Esto nos ayuda a saber si tu negocio está listo para EchoBox.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4 mt-4">
                        <div className="flex items-center space-x-3 bg-[#1a1a1a] px-4 py-3 rounded-lg border border-white/5 hover:border-white/20 transition-colors">
                          <Checkbox id="hasTv" name="hasTv" className="border-white/20 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                          <Label htmlFor="hasTv" className="text-white/80 cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Tiene TV / Pantallas
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 bg-[#1a1a1a] px-4 py-3 rounded-lg border border-white/5 hover:border-white/20 transition-colors">
                          <Checkbox id="hasSpeakers" name="hasSpeakers" className="border-white/20 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                          <Label htmlFor="hasSpeakers" className="text-white/80 cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Tiene Sistema de Bocinas
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 bg-[#1a1a1a] px-4 py-3 rounded-lg border border-white/5 hover:border-white/20 transition-colors">
                          <Checkbox id="hasInternet" name="hasInternet" className="border-white/20 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                          <Label htmlFor="hasInternet" className="text-white/80 cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Tiene Internet (WiFi)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 bg-[#1a1a1a] px-4 py-3 rounded-lg border border-white/5 hover:border-white/20 transition-colors">
                          <Checkbox id="hasPc" name="hasPc" className="border-white/20 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                          <Label htmlFor="hasPc" className="text-white/80 cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Tiene Laptop o PC 
                          </Label>
                        </div>
                      </div>
                    </div>

                    {/* Mensaje */}
                    <div className="space-y-2 pt-2">
                       <Label htmlFor="message" className="text-white/70">Mensaje Adicional o Dudas</Label>
                       <Textarea id="message" name="message" placeholder="¿Tienes alguna situación particular en el local?" className="bg-[#1a1a1a] border-white/10 text-white min-h-[100px] focus-visible:ring-primary" />
                    </div>

                    <Button type="submit" size="xl" className="w-full font-bold">
                       Enviar y contactar por WhatsApp <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </div>

              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
