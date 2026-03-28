import { createServerClient } from "@/lib/supabase/server";
import { Gem, CalendarDays } from "lucide-react";

export const metadata = {
  title: "Nuestros Clientes | EchoBox",
  description: "Bares y restaurantes que ya cuentan con EchoBox",
};

export default async function ClientesPage() {
  const supabase = createServerClient();
  
  // Obtener la lista completa de clientes ordenados por el más reciente
  const { data: clients, error } = await supabase
    .from("clients")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching clients:", error);
  }

  const clientesList = clients || [];

  return (
    <div className="flex flex-col w-full min-h-screen bg-background relative overflow-hidden">
      {/* Background Decorator */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-primary/10 blur-[150px] -z-10 rounded-full pointer-events-none" />

      {/* Header */}
      <section className="pt-32 pb-16 border-b border-white/5 bg-[#0b0b0b]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground text-sm font-semibold mb-6 uppercase tracking-wider">
            <Gem className="h-4 w-4 text-primary" /> Socios Comerciales
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">
            Nuestros <span className="text-primary glow-text">Clientes</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ellos ya dieron el salto de lo arcaico a lo digital. Ven los resultados cada fin de semana en el ambiente y rentabilidad de su local.
          </p>
        </div>
      </section>

      {/* Grid de Clientes */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 max-w-6xl">
          {clientesList.length === 0 ? (
            <div className="text-center p-20 bg-[#121212] border border-white/5 rounded-2xl border-dashed">
              <h3 className="text-2xl font-bold text-white mb-2">Aún no hay clientes registrados</h3>
              <p className="text-muted-foreground">Sé el primero en aparecer en nuestra vitrina.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clientesList.map((cliente) => (
                <div key={cliente.id} className="group relative rounded-[1.5rem] bg-[#121212] overflow-hidden border border-white/5 hover:border-primary/40 transition-colors shadow-none hover:shadow-[0_0_30px_rgba(255,107,0,0.1)] flex flex-col">
                  
                  {/* Contenedor del Logo (Relación de aspecto 16:9 aprox para verse limpio) */}
                  <div className="h-48 w-full bg-[#1a1a1a] flex items-center justify-center p-8 border-b border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {/* El Logo, con blur genérico de fondo y renderizado limpio frontal */}
                    <img 
                      src={cliente.logo_url} 
                      alt={cliente.name}
                      className="max-h-full max-w-full object-contain relative z-10 transition-transform group-hover:scale-110 duration-500"
                    />
                  </div>

                  {/* Información del Cliente */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2 font-heading">{cliente.name}</h3>
                    {cliente.description && (
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {cliente.description}
                      </p>
                    )}
                    <div className="mt-auto pt-4 border-t border-white/5 flex items-center text-xs text-muted-foreground font-medium">
                      <CalendarDays className="w-4 h-4 mr-2" />
                      Instalado {new Date(cliente.created_at).toLocaleDateString('es-MX', { year: 'numeric', month: 'long' })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
