"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UploadCloud, CheckCircle2, Loader2 } from "lucide-react";
import { addClient } from "./actions";

export function AdminClientForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setStatus(null);
    try {
      const result = await addClient(formData);
      if (result.success) {
         setStatus({ type: 'success', text: result.message });
         formRef.current?.reset();
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
         <Input id="name" name="name" required placeholder="Ej. Bar Las Margaritas" className="bg-[#121212] border-white/10" />
      </div>

      <div className="space-y-2">
         <Label htmlFor="logo">Imagen o Fotografía Principal (JPG, WebP, PNG) *</Label>
         <div className="border border-white/10 border-dashed rounded-xl p-6 bg-[#121212] hover:bg-white/5 transition-colors text-center relative cursor-pointer">
            <Input id="logo" name="logo" type="file" required accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
            <UploadCloud className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Click o Arrastra la mejor foto de tu establecimiento aquí.</p>
         </div>
      </div>

      <div className="space-y-2">
         <Label htmlFor="description">Descripción / Review Corta (Opcional)</Label>
         <Textarea id="description" name="description" placeholder="Instalados y logrando rentabilidad en el primer mes..." className="bg-[#121212] border-white/10" />
      </div>

      {status?.type === 'success' && (
        <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 text-green-500 rounded-lg text-sm">
           <CheckCircle2 className="w-4 h-4" /> {status.text}
        </div>
      )}
      {status?.type === 'error' && (
        <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg text-sm">
           ⚠️ {status.text}
        </div>
      )}

      <Button type="submit" className="w-full font-bold" disabled={loading}>
        {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
        {loading ? "Registrando Local..." : "Crear Socio Comercial"}
      </Button>
    </form>
  );
}
