/**
 * Header Component — Obsidian Forge Design
 * Dark metallic navigation bar with ARKAN Biosciences branding
 * Silver/gold accents on deep black background
 */

import { Button } from "@/components/ui/button";
import { Menu, X, Calculator } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028460647/NZyKMTJiTMAloPmP.png";

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <img
              src={LOGO_URL}
              alt="ARKAN Biosciences"
              className="h-14 w-auto transition-all duration-500 hover:scale-105"
              style={{ filter: 'drop-shadow(0 0 12px rgba(192,192,192,0.3))' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-400 hover:text-white transition-all duration-300 font-medium cursor-pointer hover:scale-110 inline-block relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
            <Button
              className="group relative overflow-hidden bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500 prc-shine-btn text-black font-semibold"
              size="lg"
              onClick={handlePRCClick}
            >
              <span className="absolute inset-0 prc-shine-effect" />
              <Calculator className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 relative z-10" />
              <span className="relative z-10">{t("nav.prc")}</span>
            </Button>
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <button
              className="p-2 text-gray-400 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-6 space-y-4 border-t border-white/10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-gray-400 hover:text-white transition-all duration-300 py-2 cursor-pointer hover:scale-105 origin-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              className="w-full relative overflow-hidden bg-gradient-to-r from-[#D4AF37] to-[#B8860B] prc-shine-btn text-black font-semibold"
              size="lg"
              onClick={handlePRCClick}
            >
              <span className="absolute inset-0 prc-shine-effect" />
              <Calculator className="w-5 h-5 mr-2 relative z-10" />
              <span className="relative z-10">{t("nav.prc")}</span>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
