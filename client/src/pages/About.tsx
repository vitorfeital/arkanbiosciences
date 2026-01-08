/**
 * About Page - Tru & Co
 * 
 * Design Philosophy: Luminous Depth with Light Theme
 * - Clean white/light gray backgrounds with molecular pattern
 * - Glass cards with subtle shadows
 * - Gradient accents (cyan → purple → magenta)
 * - Professional typography: Sora for headings, DM Sans for body
 */

import { motion } from "framer-motion";
import { 
  Shield, 
  Award, 
  FlaskConical, 
  CheckCircle2, 
  Building2, 
  FileCheck, 
  Microscope,
  BadgeCheck,
  Clock,
  Phone,
  CreditCard,
  Users
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function About() {
  const operationalDistinctions = [
    {
      icon: Building2,
      text: "Collaboration with FDA-registered manufacturing partners and independent analytical laboratories"
    },
    {
      icon: FlaskConical,
      text: "Production conducted in facilities operating under GMP-aligned quality systems"
    },
    {
      icon: BadgeCheck,
      text: "Analytical verification of material purity, typically reported at ≥99%"
    },
    {
      icon: Microscope,
      text: "Evaluation for sterility and endotoxin presence based on established laboratory methods"
    },
    {
      icon: Clock,
      text: "Efficient order processing, including same-day fulfillment where applicable"
    },
    {
      icon: Users,
      text: "U.S.-based customer service for operational and order support"
    },
    {
      icon: CreditCard,
      text: "Multiple accepted payment methods, including electronic and bank-based options"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      {/* Background Pattern */}
      <div 
        className="fixed inset-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage: "url('/images/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      />

      <Header />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container max-w-6xl mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-white/80 backdrop-blur-sm border border-[oklch(0.75_0.15_200)]/30 text-[oklch(0.45_0.15_200)] mb-6 shadow-sm">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a365d] mb-6 font-['Sora']">
                About{" "}
                <span className="bg-gradient-to-r from-[oklch(0.65_0.20_200)] via-[oklch(0.55_0.25_280)] to-[oklch(0.65_0.25_330)] bg-clip-text text-transparent">
                  TRU & CO
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A licensed U.S. business entity focused on the supply of research-use materials with uncompromising quality standards.
              </p>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl mb-20"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="/images/laboratorio_1.png" 
                alt="TRU & CO Laboratory Facility" 
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-[#1a365d]">
                    WHO/GMP Aligned
                  </span>
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-[#1a365d]">
                    ISO 9001:2015 Certified
                  </span>
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-[#1a365d]">
                    FDA-Registered Partners
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Overview Section */}
        <section id="company-overview" className="py-20 bg-white/50 backdrop-blur-sm scroll-mt-24">
          <div className="container max-w-6xl mx-auto px-4">
            <motion.div 
              className="grid md:grid-cols-2 gap-12 items-center"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-6 font-['Sora']">
                  Company Overview
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    TRU & CO is a licensed U.S. business entity focused on the supply of research-use materials. The company works exclusively with manufacturers that operate under internationally recognized quality systems, including WHO/GMP alignment and ISO 9001:2015 certification.
                  </p>
                  <p>
                    All sourcing decisions prioritize documented manufacturing controls, consistency of processes, and adherence to established quality management frameworks. Direct engagement with qualified facilities allows TRU & CO to maintain oversight across the supply chain while offering commercially efficient distribution.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-[oklch(0.75_0.15_200)]/20 via-[oklch(0.65_0.20_280)]/20 to-[oklch(0.75_0.20_330)]/20 rounded-3xl blur-2xl" />
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[oklch(0.65_0.20_200)] to-[oklch(0.55_0.25_280)] flex items-center justify-center">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a365d] font-['Sora']">Quality-Driven Operations</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    TRU & CO provides a structured, secure, and discreet online platform for the distribution of high-purity research peptides. Operational standards emphasize documentation, traceability, and controlled handling at every stage of fulfillment.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Orders are processed promptly within the United States. Customer support is based domestically and available through standard communication channels, including phone and email, to assist with order-related inquiries and logistics.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Manufacturing & Quality Framework Section */}
        <section className="py-20">
          <div className="container max-w-6xl mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4 font-['Sora']">
                Manufacturing &{" "}
                <span className="bg-gradient-to-r from-[oklch(0.65_0.20_200)] via-[oklch(0.55_0.25_280)] to-[oklch(0.65_0.25_330)] bg-clip-text text-transparent">
                  Quality Framework
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Operational distinctions that set us apart
              </p>
            </motion.div>

            {/* Image with Overlay */}
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/images/laboratorio_2.png" 
                alt="Quality Control Laboratory" 
                className="w-full h-[350px] md:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/80 via-[#1a365d]/50 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="p-8 md:p-12 max-w-xl">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-['Sora']">
                    Operational Distinctions
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    Our commitment to excellence is reflected in every aspect of our operations, from manufacturing partnerships to quality verification processes.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Operational Distinctions Grid */}
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {operationalDistinctions.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[oklch(0.75_0.15_200)]/20 to-[oklch(0.65_0.20_280)]/20 flex items-center justify-center flex-shrink-0 group-hover:from-[oklch(0.65_0.20_200)] group-hover:to-[oklch(0.55_0.25_280)] transition-all duration-300">
                      <item.icon className="w-6 h-6 text-[oklch(0.55_0.18_200)] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Quality Control Section */}
        <section className="py-20 bg-gradient-to-br from-[#1a365d] via-[#1e3a5f] to-[#1a365d]">
          <div className="container max-w-6xl mx-auto px-4">
            <motion.div 
              className="grid md:grid-cols-2 gap-12 items-center"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 mb-6">
                  Quality Assurance
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Sora']">
                  Quality Control &{" "}
                  <span className="bg-gradient-to-r from-[oklch(0.75_0.15_200)] via-[oklch(0.70_0.20_280)] to-[oklch(0.75_0.20_330)] bg-clip-text text-transparent">
                    Verification Approach
                  </span>
                </h2>
                <div className="space-y-4 text-white/80 leading-relaxed">
                  <p>
                    TRU & CO applies a multi-layered quality verification model that extends beyond basic identity and content analysis. Batches are submitted to independent third-party laboratories for additional evaluation, which may include endotoxin screening and sterility assessments performed by laboratories operating under ISO/IEC 17025:2017 accreditation.
                  </p>
                  <p>
                    These procedures are intended to support research integrity and reduce the risk of material contamination.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[oklch(0.75_0.15_200)] to-[oklch(0.65_0.20_280)] flex items-center justify-center">
                      <FileCheck className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-['Sora']">Documentation Standards</h3>
                  </div>
                  <p className="text-white/80 leading-relaxed mb-6">
                    Each production lot is accompanied by analytical documentation detailing test parameters and results, including purity, identity, and sterility evaluation where applicable.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    These controls are integral to TRU & CO's quality governance model and reflect the company's emphasis on transparency and procedural rigor.
                  </p>
                  
                  {/* Quality Badges */}
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                      <CheckCircle2 className="w-5 h-5 text-[oklch(0.75_0.15_200)]" />
                      <span className="text-white/90 text-sm">≥99% Purity</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                      <CheckCircle2 className="w-5 h-5 text-[oklch(0.75_0.15_200)]" />
                      <span className="text-white/90 text-sm">ISO/IEC 17025</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                      <CheckCircle2 className="w-5 h-5 text-[oklch(0.75_0.15_200)]" />
                      <span className="text-white/90 text-sm">Sterility Tested</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                      <CheckCircle2 className="w-5 h-5 text-[oklch(0.75_0.15_200)]" />
                      <span className="text-white/90 text-sm">Endotoxin Screened</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Certifications Banner */}
        <section className="py-16 bg-white/70 backdrop-blur-sm">
          <div className="container max-w-6xl mx-auto px-4">
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 text-gray-600">
                <Award className="w-8 h-8 text-[oklch(0.55_0.18_200)]" />
                <span className="font-semibold">WHO/GMP Aligned</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Shield className="w-8 h-8 text-[oklch(0.55_0.20_280)]" />
                <span className="font-semibold">ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <FlaskConical className="w-8 h-8 text-[oklch(0.60_0.22_330)]" />
                <span className="font-semibold">ISO/IEC 17025:2017</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Building2 className="w-8 h-8 text-[oklch(0.55_0.18_200)]" />
                <span className="font-semibold">FDA-Registered</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
