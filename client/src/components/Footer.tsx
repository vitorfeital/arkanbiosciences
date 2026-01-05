/**
 * Footer Component - Luminous Depth Design
 * Multi-column footer with glassmorphic styling
 */

import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-background/50 backdrop-blur-xl">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <img
              src="/images/logo.png"
              alt="Tru & Co"
              className="h-10 w-auto"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transformando ideias em realidade através de soluções inovadoras e confiáveis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              {["Início", "Sobre", "Serviços", "Contato"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Serviços</h3>
            <ul className="space-y-3">
              {["Consultoria", "Desenvolvimento", "Suporte", "Treinamento"].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail size={18} className="mt-0.5 flex-shrink-0 text-[oklch(0.75_0.15_200)]" />
                <span>contato@truandco.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone size={18} className="mt-0.5 flex-shrink-0 text-[oklch(0.75_0.15_200)]" />
                <span>+55 (11) 9999-9999</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-[oklch(0.75_0.15_200)]" />
                <span>São Paulo, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Tru & Co. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
