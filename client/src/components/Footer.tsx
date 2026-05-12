/**
 * Footer Component — Obsidian Forge Design
 * Dark metallic footer with ARKAN Biosciences branding
 */

import { Mail, MapPin, Calculator } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028460647/NZyKMTJiTMAloPmP.png";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-white/10 bg-[#0A0A0A]">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <img
              src={LOGO_URL}
              alt="ARKAN Biosciences"
              className="h-12 w-auto"
              style={{ filter: 'drop-shadow(0 0 8px rgba(192,192,192,0.2))' }}
            />
            <p className="text-gray-500 text-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-500 hover:text-[#D4AF37] transition-colors text-sm">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-500 hover:text-[#D4AF37] transition-colors text-sm">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/peptides" className="text-gray-500 hover:text-[#D4AF37] transition-colors text-sm">
                  {t("nav.peptides")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-[#D4AF37] transition-colors text-sm">
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-gray-500 hover:text-[#D4AF37] transition-colors text-sm flex items-center gap-1.5">
                  <Calculator size={14} className="text-[#D4AF37]" />
                  {t("footer.prc")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t("footer.legal")}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" className="text-gray-500 hover:text-[#D4AF37] transition-colors text-sm">
                  {t("footer.terms")}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-500 hover:text-[#D4AF37] transition-colors text-sm">
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <span className="text-gray-600 text-sm">
                  {t("footer.researchOnly")}
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t("footer.contactUs")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-500">
                <Mail size={18} className="mt-0.5 flex-shrink-0 text-[#D4AF37]" />
                <span>support@arkanbiosciences.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-500">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-[#D4AF37]" />
                <span>Orlando, FL</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-line mt-12" />
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} ARKAN Biosciences. {t("footer.rights")}</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-[#D4AF37] transition-colors">
              {t("footer.termsShort")}
            </Link>
            <Link href="/privacy" className="hover:text-[#D4AF37] transition-colors">
              {t("footer.privacyShort")}
            </Link>
          </div>
        </div>

        {/* FDA Disclaimer */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <p className="text-gray-600 leading-relaxed text-center max-w-4xl mx-auto" style={{fontWeight: '700', fontSize: '14px'}}>
            <span className="font-medium text-gray-500">{t("footer.disclaimer")}</span> {t("footer.disclaimerText")}
            <br /><br />
            {t("footer.labResearch")}<br />
            {t("footer.notForHuman")}
          </p>
        </div>

        {/* TRU & CO Corporate Structure */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col items-center gap-3">
          <img
            src="/images/tru-co-logo.webp"
            alt="TRU & CO."
            className="h-8 w-auto opacity-70"
          />
          <p className="text-gray-500 text-xs text-center">
            ARKAN Biosciences is a subsidiary entity operating under the corporate structure of TRU &amp; CO.
          </p>
        </div>
      </div>
    </footer>
  );
}
