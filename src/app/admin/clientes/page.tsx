import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createServerClient } from "@/lib/supabase/server";
import { AdminClientForm } from "./ClientForm";
import { logoutAdmin } from "../login/actions";
import { deleteClient } from "./actions";
import { Button } from "@/components/ui/button";
import { LogOut, Trash2, Edit } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "Admin | EchoBox" };

export default async function AdminDashboard() {
  // Autenticación Sencilla y Segura mediante Cookies y Env Var
  const isAdmin = cookies().get("echo_admin_auth")?.value === "true";
  
  if (!isAdmin) {
    redirect("/admin/login");
  }

  // Obtenemos los clientes para el CRUD
  const supabase = createServerClient();
  const { data: clients } = await supabase
    .from("clients")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-[#050505] p-6 text-white pt-24 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <header className="flex justify-between items-center pb-6 border-b border-white/10">
          <div>
            <h1 className="text-3xl font-heading font-bold text-white">Panel de Administración</h1>
            <p className="text-muted-foreground mt-2">Gestión de Socios Comerciales (Supabase Bucket & DB)</p>
          </div>
          <form action={logoutAdmin}>
             <Button variant="outline" className="border-white/10 bg-[#121212] hover:bg-red-500/10 hover:text-red-500 hover:border-red-500 transition-colors">
               <LogOut className="w-4 h-4 mr-2" /> Cerrar Sesión
             </Button>
          </form>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Formulario de Alta */}
          <div className="md:col-span-1 bg-[#0b0b0b] border border-white/10 rounded-2xl p-6 h-fit">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">Nuevo Cliente</h2>
            <AdminClientForm />
          </div>

          {/* Tabla / Lista de Clientes */}
          <div className="md:col-span-2 bg-[#0b0b0b] border border-white/10 rounded-2xl overflow-hidden flex flex-col items-start p-0">
             <div className="p-6 border-b border-white/10 w-full">
               <h2 className="text-xl font-bold flex items-center gap-2">Catálogo de Clientes ({clients?.length || 0})</h2>
             </div>
             
             <div className="w-full divide-y divide-white/5">
                {(!clients || clients.length === 0) ? (
                   <div className="p-12 text-center text-muted-foreground">
                      No tienes clientes registrados todavía.
                   </div>
                ) : (
                   clients.map(client => (
                      <div key={client.id} className="p-4 flex flex-col sm:flex-row items-center justify-between hover:bg-white/5 transition-colors gap-4">
                         <div className="flex items-center gap-4 w-full sm:w-auto">
                            <div className="w-16 h-16 bg-[#1a1a1a] rounded-lg border border-white/10 overflow-hidden flex items-center justify-center p-2">
                               <img src={client.logo_url} alt={client.name} className="max-w-full max-h-full object-contain" />
                            </div>
                            <div>
                               <p className="font-bold text-lg">{client.name}</p>
                               <span className="text-xs text-muted-foreground">{new Date(client.created_at).toLocaleDateString()}</span>
                            </div>
                         </div>
                         <div className="flex items-center gap-2 mt-4 sm:mt-0">
                           <Link href={`/admin/clientes/${client.id}`}>
                             <Button variant="ghost" size="sm" className="text-blue-400 hover:bg-blue-500/20 hover:text-blue-400 font-medium">
                               <Edit className="w-4 h-4 mr-2" /> Editar
                             </Button>
                           </Link>
                           <form action={async () => {
                             "use server";
                             await deleteClient(client.id);
                           }}>
                             <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-500/20 hover:text-red-500 font-medium whitespace-nowrap" title="Eliminar Cliente">
                               <Trash2 className="w-4 h-4 mr-2" /> Borrar
                             </Button>
                           </form>
                         </div>
                      </div>
                   ))
                )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
