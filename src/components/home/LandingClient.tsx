"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  QrCode,
  Smartphone,
  Search,
  PlayCircle,
  Music,
  DownloadCloud,
  TrendingUp,
  MonitorOff,
  Coins,
  FastForward,
  ShieldCheck,
  Zap,
  Palette,
  Eye,
  AppWindow,
  Radio,
  HardDrive,
  Wifi,
  Tv,
  Speaker
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export function LandingClient({ clients }: { clients: any[] }) {
  return (
    <div className="flex flex-col w-full bg-[#0b0b0b] overflow-hidden selection:bg-primary/30 selection:text-white pb-32">
      
      {/* 1. HERO */}
      <section className="relative w-full min-h-[95vh] flex items-center pt-24 pb-16">
        <div className="absolute inset-0 bg-radial-gradient from-primary/15 via-[#0b0b0b] to-[#0b0b0b] pointer-events-none" />
        <div className="container relative mx-auto px-4 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col justify-center space-y-8 max-w-2xl z-10"
          >
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-heading font-black tracking-tight text-white leading-tight">
              Revoluciona la<br />
              <span className="text-primary drop-shadow-[0_0_20px_rgba(255,107,0,0.5)]">experiencia musical</span><br />
              de tu negocio.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              La primera plataforma de rockola virtual que devuelve el poder a tus clientes y maximiza la rentabilidad de tu bar o restaurante. Sin fricciones tecnológicas.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contacto">
                <Button size="xl" className="w-full sm:w-auto font-semibold bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(255,107,0,0.4)] hover:shadow-[0_0_30px_rgba(255,107,0,0.6)] group transition-all">
                  Solicitar demo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contacto">
                <Button size="xl" variant="outline" className="w-full sm:w-auto font-semibold bg-white/5 border-white/10 hover:bg-white/10 text-white">
                  Contáctanos
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto w-full flex justify-center items-center h-[500px]"
          >
            {/* Visual: Celular Físico con 1.png Adentro */}
            <div className="absolute w-[260px] h-[480px] bg-black border-[6px] border-[#1e1e1e] rounded-[2.5rem] shadow-[0_0_50px_rgba(255,107,0,0.2)] z-20 flex flex-col overflow-hidden transform rotate-[-5deg] hover:rotate-[2deg] hover:scale-105 transition-all duration-700 ease-out group">
              {/* Notch superior simulado (La cámara/isla del celular) */}
              <div className="w-24 h-6 bg-[#1e1e1e] rounded-b-2xl mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-30 flex justify-center items-end pb-1.5">
                 <div className="w-8 h-1 rounded-full bg-black/50" />
              </div>
              
              {/* Pantalla del celular simulando App Nativa Edge-to-Edge */}
              <div className="w-full h-full relative bg-[#0b0b0b] flex overflow-hidden rounded-[2rem]">
                <img 
                  src="/1.png" 
                  alt="EchoBox WebApp Interface" 
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-[2s] ease-out will-change-transform"
                />
                {/* Sombra interna leve inferior simulando curva de cristal */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
              </div>
            </div>
            
            <div className="absolute right-0 bottom-0 w-[400px] h-[250px] bg-[#0b0b0b] border border-white/10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 hidden md:flex flex-col p-4 transform translate-x-12 translate-y-12">
              <span className="text-xs font-bold uppercase text-primary mb-4 tracking-widest">Dashboard en Vivo</span>
              <div className="flex gap-4">
                <div className="flex-1 h-24 bg-white/5 rounded-lg p-3">
                   <span className="text-xs text-muted-foreground block mb-2">Créditos Hoy</span>
                   <span className="text-2xl font-bold text-white">$4,500</span>
                </div>
                <div className="flex-1 h-24 bg-primary/10 border border-primary/20 rounded-lg p-3">
                   <span className="text-xs text-primary block mb-2">Canción Sonando</span>
                   <div className="w-3/4 h-2 bg-primary/40 rounded mt-2"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ¿QUÉ ES ECHOBOX? */}
      <section className="py-24 border-y border-white/5 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">¿Qué es EchoBox?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              EchoBox es el sistema de control musical SaaS para la industria del entretenimiento. Permite a tus usuarios <strong>solicitar canciones directamente desde su smartphone sin descargar aplicaciones</strong> y asegura para ti un panel de administración total sobre la fila de reproducción, cobros e ingresos extras que el ambiente genera.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. ¿CÓMO FUNCIONA? */}
      <section className="py-28">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">¿Cómo funciona?</h2>
            <p className="mt-4 text-muted-foreground text-lg">4 pasos, fricción cero.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <QrCode />, title: "1. Escanea QR", desc: "El usuario abre la cámara y lee el código en su mesa." },
              { icon: <Smartphone />, title: "2. Accede", desc: "Se despliega la WebApp directamente en su celular." },
              { icon: <Search />, title: "3. Busca", desc: "Encuentra su canción y canjea créditos para ponerla." },
              { icon: <PlayCircle />, title: "4. Se Reproduce", desc: "El sistema organiza todo dinámicamente en tu local." }
            ].map((s, i) => (
              <motion.div key={i} variants={scaleUp}>
                <Card className="bg-[#121212] border-white/5 text-center p-8 group hover:border-primary/40 transition-colors h-full">
                  <div className="mx-auto w-16 h-16 bg-white/5 group-hover:bg-primary/10 border border-white/10 group-hover:border-primary/20 rounded-full flex items-center justify-center text-primary mb-6 transition-all">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. BENEFICIOS */}
      <section className="py-28 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">Beneficios</h2>
            <p className="mt-4 text-muted-foreground text-lg">Para restaurantes, cantinas y sport bars modernos.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Música ilimitada", desc: "Integración gigante con el catálogo musical más amplio.", icon: <Music className="w-8 h-8 text-white" /> },
              { title: "Sin apps", desc: "0 MB de descargas requeridas para que el cliente la utilice.", icon: <DownloadCloud className="w-8 h-8 text-white" /> },
              { title: "Generación de ingresos", desc: "Margen de ganancia inigualable por vender ambiente musical.", icon: <TrendingUp className="w-8 h-8 text-white" /> },
              { title: "Sin equipo especial", desc: "Usa tus pantallas y sonido actual, solo inyectamos EchoBox.", icon: <MonitorOff className="w-8 h-8 text-white" /> }
            ].map((b, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex gap-6 p-6 rounded-2xl bg-[#121212] border border-white/5">
                <div className="p-4 bg-primary rounded-xl flex items-center justify-center shrink-0">
                  {b.icon}
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">{b.title}</h4>
                  <p className="text-muted-foreground">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. ECHOBOX COMO NEGOCIO */}
      <section className="py-28">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-3xl md:text-5xl font-heading font-bold text-white mb-16">
            Rendimiento y Negocio
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
            
            {/* Tarjeta 1: Economía (Muestra 2.png) */}
            <motion.div variants={fadeInUp} className="text-left border border-white/5 bg-[#121212] rounded-[2rem] hover:border-primary/30 transition-colors overflow-hidden flex flex-col group">
              <div className="p-8 pb-0">
                <Coins className="text-primary w-10 h-10 mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">Economía de créditos</h4>
                <p className="text-muted-foreground">Tú decides a cuánto vendes los créditos y los super-cobros por adelantarlos en fila. Configura márgenes brutales en tiempo real y regala saldo a VIPs.</p>
              </div>
              <div className="mt-8 relative h-64 w-full overflow-hidden bg-[#0b0b0b] translate-y-4 group-hover:translate-y-0 transition-transform duration-500 rounded-t-3xl border-t border-white/10 mx-6 w-[calc(100%-3rem)]">
                 <img src="/2.png" alt="Configuración de Precios" className="absolute top-0 left-0 w-full h-auto object-cover object-top" />
                 <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#121212] to-transparent pointer-events-none" />
              </div>
            </motion.div>

            {/* Tarjeta 2: Auditoría (Muestra 4.png) */}
            <motion.div variants={fadeInUp} className="text-left border border-white/5 bg-[#121212] rounded-[2rem] hover:border-primary/30 transition-colors overflow-hidden flex flex-col group">
              <div className="p-8 pb-0">
                <ShieldCheck className="text-primary w-10 h-10 mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">Auditoría Financiera</h4>
                <p className="text-muted-foreground">Visibilidad perfecta de todo el dinero inyectado al ecosistema digital. Calcula la comisión total y lo que te llevas a tu bolsillo libre de mermas.</p>
              </div>
              <div className="mt-8 relative h-64 w-full overflow-hidden bg-[#0b0b0b] translate-y-4 group-hover:translate-y-0 transition-transform duration-500 rounded-t-3xl border-t border-white/10 mx-6 w-[calc(100%-3rem)]">
                 <img src="/4.png" alt="Reporte Financiero" className="absolute top-0 left-0 w-full h-auto object-cover object-top" />
                 <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#121212] to-transparent pointer-events-none" />
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 6. CONTROL Y ADMINISTRACIÓN */}
      <section className="py-28 bg-[#0a0a0a]">
         <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-10">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                Control y Administración
              </motion.h2>
              <motion.div variants={fadeInUp} className="flex gap-4">
                 <Zap className="text-red-500 w-8 h-8 shrink-0" />
                 <div><h4 className="text-xl font-bold text-white">Botón de Pánico</h4><p className="text-muted-foreground">Pausa y silencia de inmediato.</p></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex gap-4">
                 <Palette className="text-primary w-8 h-8 shrink-0" />
                 <div><h4 className="text-xl font-bold text-white">Branding Visual</h4><p className="text-muted-foreground">Logo y arte de tu marca siempre en pantalla.</p></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex gap-4">
                 <Eye className="text-primary w-8 h-8 shrink-0" />
                 <div><h4 className="text-xl font-bold text-white">Monitoreo en Tiempo Real</h4><p className="text-muted-foreground">Administra quién pone qué desde la barra.</p></div>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="rounded-[2rem] border border-white/10 bg-[#1e1e1e] overflow-hidden flex flex-col relative shadow-2xl shadow-primary/10 group aspect-[4/3]">
              <div className="absolute inset-0 bg-primary/10 blur-3xl z-0" />
              <img src="/3.png" alt="Gestión Musical Dashboard" className="relative z-10 w-full h-full object-cover object-left transform group-hover:scale-[1.03] transition-transform duration-700" />
            </motion.div>
          </div>
         </div>
      </section>

      {/* 6.5 PANEL EXPLORER CAROUSEL (Muestra 5.png, 6.png, 7.png) */}
      <section className="py-20 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-4 mb-12 text-center">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">El Centro de Comando más Completo</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">Más de 15 módulos corporativos operando silenciosamente en el background de tu caja para garantizar fiabilidad total y una administración transparente.</p>
        </div>
        <div className="w-full flex gap-6 px-4 md:px-12 overflow-x-auto pb-8 snap-x snap-mandatory">
           {/* Slider 1 */}
           <div className="shrink-0 w-[85vw] md:w-[60vw] max-w-4xl snap-center rounded-[2rem] border border-white/10 bg-[#121212] overflow-hidden flex flex-col group cursor-grab active:cursor-grabbing">
             <div className="h-12 border-b border-white/5 bg-[#1a1a1a] flex items-center px-4 gap-2">
               <div className="w-3 h-3 rounded-full bg-red-500/50" />
               <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
               <div className="w-3 h-3 rounded-full bg-green-500/50" />
               <span className="ml-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Histórico de Ventas de Saldo</span>
             </div>
             <img src="/5.png" className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700" alt="Acumulado Periodo" />
           </div>

           {/* Slider 2 */}
           <div className="shrink-0 w-[85vw] md:w-[60vw] max-w-4xl snap-center rounded-[2rem] border border-white/10 bg-[#121212] overflow-hidden flex flex-col group cursor-grab active:cursor-grabbing">
             <div className="h-12 border-b border-white/5 bg-[#1a1a1a] flex items-center px-4 gap-2">
               <div className="w-3 h-3 rounded-full bg-red-500/50" />
               <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
               <div className="w-3 h-3 rounded-full bg-green-500/50" />
               <span className="ml-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Trazabilidad Absoluta de Códigos</span>
             </div>
             <img src="/6.png" className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700" alt="Códigos Cajeros" />
           </div>

           {/* Slider 3 */}
           <div className="shrink-0 w-[85vw] md:w-[60vw] max-w-4xl snap-center rounded-[2rem] border border-white/10 bg-[#121212] overflow-hidden flex flex-col group cursor-grab active:cursor-grabbing">
             <div className="h-12 border-b border-white/5 bg-[#1a1a1a] flex items-center px-4 gap-2">
               <div className="w-3 h-3 rounded-full bg-red-500/50" />
               <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
               <div className="w-3 h-3 rounded-full bg-green-500/50" />
               <span className="ml-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Jerarquías de Staff y Empleados</span>
             </div>
             <img src="/7.png" className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700" alt="Gestión de Empleados" />
           </div>
        </div>
      </section>

      {/* 7. TECNOLOGÍA */}
      <section className="py-28 border-y border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">Tecnología Sólida</h2>
            <p className="text-lg text-muted-foreground mt-4">Arquitctura Vercel + AWS lista para alto flujo de personas.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center p-6">
               <AppWindow className="text-primary w-12 h-12 mb-4" />
               <h4 className="text-xl font-bold text-white mb-2">Módulo PWA</h4>
               <p className="text-muted-foreground">Funciona fluidamente en mobile como app nativa, pero desde Chrome Safari sin descargas irritantes.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center p-6">
               <Radio className="text-primary w-12 h-12 mb-4" />
               <h4 className="text-xl font-bold text-white mb-2">WebSockets</h4>
               <p className="text-muted-foreground">Lo que tu cliente presiona en la mesa, aparece en la pantalla principal en milisegundos reales.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center p-6">
               <HardDrive className="text-primary w-12 h-12 mb-4" />
               <h4 className="text-xl font-bold text-white mb-2">Caché Persistente</h4>
               <p className="text-muted-foreground">A prueba de fallas. Si el internet parpadea, tu fila de reproducción no se pierde jamas.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 8. REQUERIMIENTOS TÉCNICOS */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleUp} className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 text-center shadow-[0_0_50px_rgba(255,107,0,0.05)]">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">Requerimientos Mínimos</h2>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
               <div className="flex items-center gap-3"><Wifi className="text-primary w-6 h-6" /><span className="text-white font-medium">Internet Wifi Standard</span></div>
               <div className="flex items-center gap-3"><Tv className="text-primary w-6 h-6" /><span className="text-white font-medium">Pantalla (SmartTV o PC)</span></div>
               <div className="flex items-center gap-3"><Speaker className="text-primary w-6 h-6" /><span className="text-white font-medium">Salida de Audio Conectada</span></div>
            </div>
            <p className="mt-8 text-muted-foreground text-sm uppercase tracking-wider font-semibold">Si los cumples, estás listo para rodar esta misma semana.</p>
          </motion.div>
        </div>
      </section>

      {/* 9. NUESTROS CLIENTES (DINÁMICO SUPABASE) */}
      <section className="py-28 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">Nuestros Clientes</h2>
             <p className="text-lg text-muted-foreground mt-4">Negocios que ya revolucionaron su piso.</p>
          </motion.div>
          
          {clients.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto mb-10">
              {clients.map((client) => (
                <div key={client.id} className="aspect-square bg-[#121212] border border-white/5 hover:border-white/10 transition-colors rounded-xl flex items-center justify-center p-4">
                   {/* Fallback image o logo publico */}
                   <img src={client.logo_url} alt={client.name} className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100" />
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto text-center p-12 bg-white/5 border border-white/10 rounded-2xl mb-10 border-dashed">
              <p className="text-muted-foreground">La red EchoBox se está preparando. (Base de datos de Clientes Supabase Inicializada)</p>
            </div>
          )}

          <div className="text-center">
            <Link href="/clientes" className="text-primary font-bold hover:underline underline-offset-4">
               Ver catálogo completo de establecimientos &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 10. CTA FINAL */}
      <section className="pt-20 relative">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-4xl md:text-6xl font-heading font-black text-white mb-8">
            El entorno musical de alta conversión
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleUp}>
             <Link href="/contacto">
               <Button size="xl" className="font-bold text-lg px-12 py-8 rounded-full shadow-[0_0_30px_rgba(255,107,0,0.4)] text-white hover:scale-105 transition-transform">
                 Contáctanos e Instala Hoy
               </Button>
             </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
