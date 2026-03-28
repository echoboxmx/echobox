"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2, ImagePlus } from "lucide-react";
import { editClient } from "../actions";
import { useRouter } from "next/navigation";

export function ClientEditForm({ client }: { client: any }) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setStatus(null);
    try {
      const result = await editClient(client.id, formData);
      if (result.success) {
         setStatus({ type: 'success', text: result.message });
         setTimeout(() => {
           router.push('/admin/clientes');
         }, 1000);
      } else {
         setStatus({ type: 'error', text: result.message });
      }
    } catch (e: any) {
      setStatus({ type: 'error', text: "Ocurrió un error en el servidor." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form ref={formRef} action={handleSubmit} className="space-y-6">
      <div className="space-y-2">
         <Label htmlFor="name">Nombre de la Marca o Local *</Label>
         <Input id="name" name="name" defaultValue={client.name} required className="bg-[#121212] border-white/10" />
      </div>

      <div className="space-y-2">
         <Label htmlFor="logo">Actualizar Fotografía (Opcional)</Label>
         <div className="border border-white/10 border-dashed rounded-xl p-6 bg-[#121212] hover:bg-white/5 transition-colors text-center relative cursor-pointer group">
            <Input id="logo" name="logo" type="file" accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
            <ImagePlus className="w-8 h-8 text-blue-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <p className="text-sm text-muted-foreground">Sube un nuevo archivo solo si deseas reemplazar la imagen actual (JPG, WebP, etc).</p>
         </div>
         {client.logo_url && (
            <div className="mt-4 p-4 border border-white/5 rounded-xl bg-black flex items-center gap-4">
              <span className="text-sm text-muted-foreground w-32 shrink-0">Imagen Actual:</span>
              <img src={client.logo_url} alt="Actual" className="h-16 w-auto object-contain rounded-md" />
            </div>
         )}
      </div>

      <div className="space-y-2">
         <Label htmlFor="description">Descripción / Review Corta</Label>
         <Textarea id="description" name="description" defaultValue={client.description} className="bg-[#121212] border-white/10 min-h-[100px]" />
      </div>

      {status?.type === 'success' && (
        <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 text-green-500 rounded-lg text-sm">
           <CheckCircle2 className="w-4 h-4" /> {status.text} Redirigiendo...
        </div>
      )}
      {status?.type === 'error' && (
        <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg text-sm">
           ⚠️ {status.text}
        </div>
      )}

      <div className="flex gap-4 pt-4">
        <Button type="button" variant="outline" className="w-full bg-white/5 border-white/10 hover:bg-white/10 text-white" onClick={() => router.push('/admin/clientes')}>
          Cancelar
        </Button>
        <Button type="submit" className="w-full font-bold bg-blue-600 hover:bg-blue-700 text-white" disabled={loading}>
          {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
          {loading ? "Guardando..." : "Guardar Cambios"}
        </Button>
      </div>
    </form>
  );
}
