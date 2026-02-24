/**
 * LanguageSwitcher Component — Obsidian Forge Design
 * Dark dropdown with gold accents for language selection
 */

import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { useLanguage, languages } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage, currentLanguageInfo } = useLanguage();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105 hover:border-[#D4AF37]/50"
        aria-label="Select language"
        title="Select language"
      >
        <Globe size={16} className="text-gray-500" />
        <span className="text-lg leading-none">{currentLanguageInfo.flag}</span>
        <svg
          className={`w-3 h-3 text-gray-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-52 bg-[#1A1A1A] rounded-xl shadow-xl border border-white/10 overflow-hidden z-[100] animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-200 cursor-pointer ${
                  language === lang.code
                    ? "bg-[#D4AF37]/15 text-white font-semibold"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="text-xl leading-none">{lang.flag}</span>
                <span className="flex-1 text-left">{lang.nativeName}</span>
                {language === lang.code && (
                  <svg className="w-4 h-4 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
