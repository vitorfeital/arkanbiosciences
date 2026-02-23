/**
 * Terms of Service Page - Tru & Co
 * 
 * Design Philosophy: Luminous Depth with Light Theme
 * - Clean white/light gray backgrounds with molecular pattern
 * - Professional typography: Sora for headings, DM Sans for body
 * - Legal document formatting with clear sections
 */

import { motion } from "framer-motion";
import { FileText, Scale, AlertTriangle, Shield, CreditCard, Truck, RefreshCw, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTermsText } from "@/data/legalTranslations";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function Terms() {
  const { language } = useLanguage();
  const tt = (key: string) => getTermsText(key, language);

  const sections = [
    {
      id: "acceptance",
      icon: FileText,
      title: tt("s1.title"),
      content: [tt("s1.c1"), tt("s1.c2")]
    },
    {
      id: "eligibility",
      icon: Scale,
      title: tt("s2.title"),
      content: [tt("s2.c1"), tt("s2.c2"), tt("s2.c3"), tt("s2.c4"), tt("s2.c5"), tt("s2.c6")]
    },
    {
      id: "products",
      icon: AlertTriangle,
      title: tt("s3.title"),
      content: [tt("s3.c1"), tt("s3.c2"), tt("s3.c3")]
    },
    {
      id: "orders",
      icon: CreditCard,
      title: tt("s4.title"),
      content: [tt("s4.c1"), tt("s4.c2"), tt("s4.c3")]
    },
    {
      id: "shipping",
      icon: Truck,
      title: tt("s5.title"),
      content: [tt("s5.c1"), tt("s5.c2"), tt("s5.c3")]
    },
    {
      id: "returns",
      icon: RefreshCw,
      title: tt("s6.title"),
      content: [tt("s6.c1"), tt("s6.c2"), tt("s6.c3"), tt("s6.c4"), tt("s6.c5")]
    },
    {
      id: "liability",
      icon: Shield,
      title: tt("s7.title"),
      content: [tt("s7.c1"), tt("s7.c2"), tt("s7.c3")]
    },
    {
      id: "indemnification",
      icon: Scale,
      title: tt("s8.title"),
      content: [tt("s8.c1"), tt("s8.c2"), tt("s8.c3"), tt("s8.c4"), tt("s8.c5")]
    },
    {
      id: "governing",
      icon: FileText,
      title: tt("s9.title"),
      content: [tt("s9.c1"), tt("s9.c2"), tt("s9.c3")]
    },
    {
      id: "contact",
      icon: Mail,
      title: tt("s10.title"),
      content: [tt("s10.c1"), tt("s10.c2"), tt("s10.c3"), tt("s10.c4")]
    }
  ];

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
                {tt("badge")}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-4 font-['Sora']">
                {tt("title1")}{" "}
                <span className="bg-gradient-to-r from-[oklch(0.65_0.20_200)] via-[oklch(0.55_0.25_280)] to-[oklch(0.65_0.25_330)] bg-clip-text text-transparent">
                  {tt("title2")}
                </span>
              </h1>
              <p className="text-gray-600">
                {tt("lastUpdated")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="pb-8">
          <div className="container max-w-4xl mx-auto px-4">
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-gray-700 leading-relaxed">
                {tt("intro")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-8">
          <div className="container max-w-4xl mx-auto px-4 space-y-6">
            {sections.map((section, index) => (
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
                    <section.icon className="w-6 h-6 text-[oklch(0.55_0.18_200)]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#1a365d] font-['Sora']">
                    {section.title}
                  </h2>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed pl-16">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className={paragraph.startsWith("•") ? "pl-4" : ""}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
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
              <p className="text-white/90 mb-4">
                {tt("footerNote")}
              </p>
              <p className="text-white/70 text-sm">
                {tt("footerContact")}{" "}
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
