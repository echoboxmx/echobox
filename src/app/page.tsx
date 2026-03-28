import { createServerClient } from "@/lib/supabase/server";
import { LandingClient } from "@/components/home/LandingClient";

export default async function Home() {
  const supabase = createServerClient();
  
  // Obtenemos un límite de 6 clientes para mostrar como "Preview" en el home estético B2B
  const { data: clients } = await supabase
    .from("clients")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(6);

  return <LandingClient clients={clients || []} />;
}
