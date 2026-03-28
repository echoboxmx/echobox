import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createServerClient } from "@/lib/supabase/server";
import { ClientEditForm } from "./ClientEditForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = { title: "Editar Cliente | EchoBox Admin" };

export default async function EditClientPage({ params }: { params: { id: string } }) {
  const isAdmin = cookies().get("echo_admin_auth")?.value === "true";
  
  if (!isAdmin) {
    redirect("/admin/login");
  }

  const supabase = createServerClient();
  const { data: client } = await supabase
    .from("clients")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!client) {
    redirect("/admin/clientes");
  }

  return (
    <div className="min-h-screen bg-[#050505] p-6 text-white pt-24 font-sans">
      <div className="max-w-3xl mx-auto space-y-8">
        
        <header className="pb-6 border-b border-white/10">
          <Link href="/admin/clientes" className="inline-flex items-center text-muted-foreground hover:text-white transition-colors mb-4 text-sm font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Volver al Catálogo
          </Link>
          <h1 className="text-3xl font-heading font-bold text-white flex items-center gap-3">
             Editar Socio: <span className="text-blue-400">{client.name}</span>
          </h1>
        </header>

        <div className="bg-[#0b0b0b] border border-white/10 rounded-3xl p-8 shadow-xl">
          <ClientEditForm client={client} />
        </div>
      </div>
    </div>
  );
}
