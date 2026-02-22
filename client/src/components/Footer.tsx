/**
 * Footer Component - Luminous Depth Design
 * Multi-column footer with glassmorphic styling and translations
 */

import { Mail, MapPin, Calculator } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

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
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/peptides" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  {t("nav.peptides")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center gap-1.5">
                  <Calculator size={14} className="text-[oklch(0.75_0.15_200)]" />
                  {t("footer.prc")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t("footer.legal")}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  {t("footer.terms")}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <span className="text-gray-500 text-sm">
                  {t("footer.researchOnly")}
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t("footer.contactUs")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Mail size={18} className="mt-0.5 flex-shrink-0 text-[oklch(0.75_0.15_200)]" />
                <span style={{marginRight: '-51px'}}>support@tru-co.com</span>
              </li>

              <li className="flex items-start gap-3 text-sm text-gray-600">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-[oklch(0.75_0.15_200)]" />
                <span>Orlando, FL</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Tru & Co. {t("footer.rights")}</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-gray-900 transition-colors">
              {t("footer.termsShort")}
            </Link>
            <Link href="/privacy" className="hover:text-gray-900 transition-colors">
              {t("footer.privacyShort")}
            </Link>
          </div>
        </div>

        {/* FDA Disclaimer */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-gray-400 leading-relaxed text-center max-w-4xl mx-auto" style={{fontWeight: '700', fontSize: '14px'}}>
            <span className="font-medium text-gray-500">{t("footer.disclaimer")}</span> {t("footer.disclaimerText")}
            <br /><br />
            {t("footer.labResearch")}<br />
            {t("footer.notForHuman")}
          </p>
        </div>
      </div>
    </footer>
  );
}
