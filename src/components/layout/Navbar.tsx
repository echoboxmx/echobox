"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/mision-vision-valores", label: "Misión y Visión" },
  { href: "/clientes", label: "Nuestros Clientes" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0b0b0b]/90 backdrop-blur-md">
      <div className="container mx-auto flex h-24 md:h-28 items-center justify-between px-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <img 
            src="/ecobooox.jpg" 
            alt="EchoBox Logo" 
            className="h-16 md:h-20 w-auto object-contain mix-blend-lighten hover:scale-105 transition-transform" 
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative",
                pathname === link.href ? "text-primary font-semibold" : "text-muted-foreground"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contacto">
            <Button size="sm" className="rounded-full font-bold px-6 bg-primary hover:bg-primary/90 text-white">Solicitar Demo</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0b0b0b] p-4 absolute top-20 left-0 right-0 shadow-xl flex flex-col gap-4 z-40">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "px-4 py-3 rounded-md text-base font-medium transition-colors",
                pathname === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-white/5 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 px-4 pb-2">
            <Link href="/contacto" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Solicitar Demo</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
