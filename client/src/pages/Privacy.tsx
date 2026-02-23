/**
 * Privacy Policy Page - Tru & Co
 * 
 * Design Philosophy: Luminous Depth with Light Theme
 * - Clean white/light gray backgrounds with molecular pattern
 * - Professional typography: Sora for headings, DM Sans for body
 * - Legal document formatting with clear sections
 */

import { motion } from "framer-motion";
import { Shield, Database, Eye, Lock, Share2, Globe, UserCheck, Bell, Mail, Settings } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { getPrivacyText } from "@/data/legalTranslations";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

// Privacy section translations by language
const privacySections: Record<string, { id: string; icon: any; titleKey: string; contentKeys: string[] }[]> = {};

// We'll build the sections dynamically based on language
function getPrivacySections(lang: string) {
  const sectionData = [
    {
      id: "introduction",
      icon: Shield,
      titleKey: "s1.title",
      contentKeys: ["s1.c1", "s1.c2"]
    },
    {
      id: "collection",
      icon: Database,
      titleKey: "s2.title",
      contentKeys: ["s2.c1", "s2.c2", "s2.c3", "s2.c4", "s2.c5", "s2.c6", "s2.c7", "s2.c8", "s2.c9", "s2.c10"]
    },
    {
      id: "use",
      icon: Eye,
      titleKey: "s3.title",
      contentKeys: ["s3.c1", "s3.c2", "s3.c3", "s3.c4", "s3.c5", "s3.c6", "s3.c7", "s3.c8", "s3.c9", "s3.c10"]
    },
    {
      id: "protection",
      icon: Lock,
      titleKey: "s4.title",
      contentKeys: ["s4.c1", "s4.c2", "s4.c3", "s4.c4", "s4.c5", "s4.c6", "s4.c7"]
    },
    {
      id: "sharing",
      icon: Share2,
      titleKey: "s5.title",
      contentKeys: ["s5.c1", "s5.c2", "s5.c3", "s5.c4", "s5.c5", "s5.c6"]
    },
    {
      id: "cookies",
      icon: Globe,
      titleKey: "s6.title",
      contentKeys: ["s6.c1", "s6.c2", "s6.c3", "s6.c4", "s6.c5", "s6.c6"]
    },
    {
      id: "rights",
      icon: UserCheck,
      titleKey: "s7.title",
      contentKeys: ["s7.c1", "s7.c2", "s7.c3", "s7.c4", "s7.c5", "s7.c6", "s7.c7", "s7.c8"]
    },
    {
      id: "retention",
      icon: Settings,
      titleKey: "s8.title",
      contentKeys: ["s8.c1", "s8.c2", "s8.c3", "s8.c4", "s8.c5", "s8.c6"]
    },
    {
      id: "children",
      icon: Shield,
      titleKey: "s9.title",
      contentKeys: ["s9.c1", "s9.c2"]
    },
    {
      id: "updates",
      icon: Bell,
      titleKey: "s10.title",
      contentKeys: ["s10.c1", "s10.c2", "s10.c3"]
    },
    {
      id: "contact",
      icon: Mail,
      titleKey: "s11.title",
      contentKeys: ["s11.c1", "s11.c2", "s11.c3", "s11.c4"]
    }
  ];
  return sectionData;
}

export default function Privacy() {
  const { language } = useLanguage();
  const pt = (key: string) => getPrivacyText(key, language);

  const sectionDefs = getPrivacySections(language);

  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      {/* Background Pattern */}
      <div 
        className="fixed inset-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage: "url('https://files.manuscdn.com/user_upload_by_module/session_file/310419663028460647/VvtbnjABXSbXHfiR.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      />

      <Header />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-12">
          <div className="container max-w-4xl mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-white/80 backdrop-blur-sm border border-[oklch(0.75_0.15_200)]/30 text-[oklch(0.45_0.15_200)] mb-6 shadow-sm">
                {pt("badge")}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-4 font-['Sora']">
                {pt("title1")}{" "}
                <span className="bg-gradient-to-r from-[oklch(0.65_0.20_200)] via-[oklch(0.55_0.25_280)] to-[oklch(0.65_0.25_330)] bg-clip-text text-transparent">
                  {pt("title2")}
                </span>
              </h1>
              <p className="text-gray-600">
                {pt("lastUpdated")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction Card */}
        <section className="pb-8">
          <div className="container max-w-4xl mx-auto px-4">
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-gray-700 leading-relaxed">
                {pt("intro")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Privacy Sections */}
        <section className="py-8">
          <div className="container max-w-4xl mx-auto px-4 space-y-6">
            {sectionDefs.map((section, index) => {
              const SectionIcon = section.icon;
              const content = section.contentKeys
                .map(ck => pt(ck))
                .filter(v => v !== "");
              return (
                <motion.div
                  key={section.id}
                  id={section.id}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[oklch(0.75_0.15_200)]/20 to-[oklch(0.65_0.20_280)]/20 flex items-center justify-center flex-shrink-0">
                      <SectionIcon className="w-6 h-6 text-[oklch(0.55_0.18_200)]" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#1a365d] font-['Sora']">
                      {pt(section.titleKey)}
                    </h2>
                  </div>
                  <div className="space-y-4 text-gray-700 leading-relaxed pl-16">
                    {section.contentKeys.map((key, pIndex) => {
                      const text = pt(key);
                      return text && text !== key ? (
                        <p key={pIndex} className={text.startsWith("•") ? "pl-4" : ""}>
                          {text}
                        </p>
                      ) : null;
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Footer Note */}
        <section className="py-12">
          <div className="container max-w-4xl mx-auto px-4">
            <motion.div 
              className="bg-gradient-to-r from-[#1A365D] to-[#1e3a5f] rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-[oklch(0.75_0.15_200)]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-['Sora']">{pt("footerTitle")}</h3>
              <p className="text-white/90 mb-4">
                {pt("footerDesc")}
              </p>
              <p className="text-white/70 text-sm">
                {pt("footerContact")}{" "}
                <a href="mailto:support@tru-co.com" className="text-[oklch(0.75_0.15_200)] hover:underline">
                  support@tru-co.com
                </a>
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
