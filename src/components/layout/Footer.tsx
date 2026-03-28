import Link from "next/link";
import { Music } from "lucide-react";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
)

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
)

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0b0b0b] py-12 px-4 sm:px-8 mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="flex items-center -ml-3">
            <img 
              src="/ecobooox.jpg" 
              alt="EchoBox Logo" 
              className="h-24 md:h-28 w-auto object-contain mix-blend-lighten hover:scale-105 transition-transform" 
            />
          </Link>
          <div className="flex gap-4 -mt-2 justify-center md:justify-start relative z-10">
            <a
              href="https://instagram.com/echobox.mx"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/5 text-white hover:bg-primary hover:text-white transition-colors"
            >
              <InstagramIcon className="h-7 w-7" />
            </a>
            <a
              href="https://www.facebook.com/share/1HfvrRMthG/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/5 text-white hover:bg-primary hover:text-white transition-colors"
            >
              <FacebookIcon className="h-7 w-7" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold text-white mb-4">Empresa</h4>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/quienes-somos" className="hover:text-primary transition-colors">
                Quiénes Somos
              </Link>
            </li>
            <li>
              <Link href="/mision-vision-valores" className="hover:text-primary transition-colors">
                Misión y Visión
              </Link>
            </li>
            <li>
              <Link href="/clientes" className="hover:text-primary transition-colors">
                Nuestros Clientes
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold text-white mb-4">Plataforma</h4>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/#como-funciona" className="hover:text-primary transition-colors">
                ¿Cómo Funciona?
              </Link>
            </li>
            <li>
              <Link href="/#beneficios" className="hover:text-primary transition-colors">
                Beneficios
              </Link>
            </li>
            <li>
              <Link href="/#tecnologia" className="hover:text-primary transition-colors">
                Tecnología
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold text-white mb-4">¿Listo para el cambio?</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Mejora la experiencia de tus clientes hoy mismo.
          </p>
          <Link
            href="/contacto"
            className="inline-flex h-10 items-center justify-center rounded-md bg-transparent border border-primary text-primary px-4 py-2 text-sm font-medium hover:bg-primary hover:text-white transition-colors"
          >
            Contáctanos
          </Link>
        </div>
      </div>
      
      <div className="container mx-auto mt-12 pt-8 border-t border-white/5 text-center text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} EchoBox. Todos los derechos reservados.</p>
        <p className="mt-2 md:mt-0 flex items-center gap-1">
          Hecho con <Music className="h-3 w-3 text-primary" /> en México
        </p>
      </div>
    </footer>
  );
}
