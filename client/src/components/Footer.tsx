/**
 * Footer Component - Luminous Depth Design
 * Multi-column footer with glassmorphic styling
 */

import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-200 bg-white/80 backdrop-blur-xl">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <img
              src="/images/logo.png"
              alt="Tru & Co"
              className="h-10 w-auto"
            />
            <p className="text-gray-600 text-sm leading-relaxed">
              Transforming ideas into reality through innovative and reliable solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-3">
              {["Consulting", "Development", "Support", "Training"].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Mail size={18} className="mt-0.5 flex-shrink-0 text-[oklch(0.75_0.15_200)]" />
                <span>contact@truandco.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Phone size={18} className="mt-0.5 flex-shrink-0 text-[oklch(0.75_0.15_200)]" />
                <span>+55 (11) 9999-9999</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-[oklch(0.75_0.15_200)]" />
                <span>São Paulo, Brazil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Tru & Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
