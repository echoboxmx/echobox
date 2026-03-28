import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";
import { loginAdmin } from "./actions";

export default function AdminLogin({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[400px] bg-primary/20 blur-[120px] rounded-full -z-10 pointer-events-none" />
      
      <Card className="w-full max-w-md bg-[#121212] border-white/10 shadow-2xl">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
            <ShieldCheck className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold font-heading text-white">Acceso Administrador</CardTitle>
          <CardDescription>
            Ingresa la clave maestra configurada en el servidor (Ej: echobox2026).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={loginAdmin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña Maestra</Label>
              <Input 
                id="password" 
                name="password" 
                type="password" 
                placeholder="••••••••" 
                className="bg-[#1a1a1a] border-white/10 text-white focus-visible:ring-primary"
                required
              />
              {searchParams.error && (
                <p className="text-sm text-red-500 font-medium mt-2">Contraseña incorrecta.</p>
              )}
            </div>
            <Button type="submit" className="w-full font-bold">
               Ingresar al Panel
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
