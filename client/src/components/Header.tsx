/**
 * Header Component - Luminous Depth Design
 * Glassmorphic navigation bar with logo, menu items, and language switcher
 * Sticky positioning with backdrop blur effect
 */

import { Button } from "@/components/ui/button";
import { Menu, X, Calculator } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.peptides"), href: "/peptides" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  const handlePRCClick = () => {
    setLocation("/calculator");
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="Tru & Co"
              className="h-12 w-auto transition-all duration-500 hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(79,195,247,0.5)]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium hover:text-[oklch(0.75_0.15_200)] cursor-pointer hover:scale-110 inline-block"
              >
                {item.label}
              </a>
            ))}
            <Button
              className="group bg-gradient-to-r from-[oklch(0.75_0.15_200)] to-[oklch(0.6_0.18_280)] hover:shadow-[0_0_30px_rgba(79,195,247,0.4)] transition-all duration-500"
              size="lg"
              style={{ fontWeight: '600' }}
              onClick={handlePRCClick}
            >
              <Calculator className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
              {t("nav.prc")}
            </Button>
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <button
              className="p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-6 space-y-4 border-t border-gray-200">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-gray-700 hover:text-gray-900 transition-all duration-300 py-2 cursor-pointer hover:scale-105 origin-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              className="w-full bg-gradient-to-r from-[oklch(0.75_0.15_200)] to-[oklch(0.6_0.18_280)]"
              size="lg"
              style={{ fontWeight: '600' }}
              onClick={handlePRCClick}
            >
              <Calculator className="w-5 h-5 mr-2" />
              {t("nav.prc")}
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
