/**
 * About Page - ARKAN Biosciences
 * 
 * Restructured with corporate content about TRU & CO INC relationship
 */

import { motion } from "framer-motion";
import { 
  Shield, 
  Award, 
  FlaskConical, 
  Building2, 
  Target,
  Globe,
  Handshake,
  Lightbulb,
  Lock,
  TrendingUp
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
  const coreValues = [
    {
      icon: Lock,
      title: "Professionalism & Confidentiality",
      text: "Maintaining the highest standards of professional conduct and data protection in all operations."
    },
    {
      icon: Target,
      title: "Technical Precision",
      text: "Delivering scientifically rigorous solutions with meticulous attention to quality and accuracy."
    },
    {
      icon: Handshake,
      title: "Strategic Partnerships",
      text: "Building long-term relationships with researchers, institutions, and business partners worldwide."
    },
    {
      icon: Lightbulb,
      title: "Continuous Innovation",
      text: "Advancing modern biosciences through ongoing research and development aligned with industry demands."
    },
    {
      icon: Globe,
      title: "Global Collaboration",
      text: "Leveraging international operational experience and a growing network across healthcare and life sciences."
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      text: "Operating within an integrated ecosystem designed to support sustainable expansion and scientific development."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      {/* Background Pattern */}
      <div 
        className="fixed inset-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage: "url('https://files.manuscdn.com/user_upload_by_module/session_file/310419663028460647/lhzlmCpYSPZoNsHv.jpg')",
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
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-[#0A0A0A]/80 backdrop-blur-sm border border-[#D4AF37]/30 text-[#D4AF37] mb-6 shadow-lg shadow-black/20">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-['Outfit']">
                About{" "}
                <span className="bg-gradient-to-r from-[#D4AF37] via-[#C0C0C0] to-[#22C55E] bg-clip-text text-transparent">
                  ARKAN Biosciences
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                A subsidiary entity operating under the corporate structure of TRU & CO INC, advancing modern biosciences through high-quality scientific solutions.
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
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028460647/fbIOaIKCxFNkZjVM.png" 
                alt="ARKAN Biosciences Laboratory Facility" 
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-[#0A0A0A]/90 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-[#D4AF37]/30">
                    Life Sciences
                  </span>
                  <span className="px-4 py-2 bg-[#0A0A0A]/90 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-[#D4AF37]/30">
                    Biotechnology
                  </span>
                  <span className="px-4 py-2 bg-[#0A0A0A]/90 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-[#D4AF37]/30">
                    Research Materials
                  </span>
                  <span className="px-4 py-2 bg-[#0A0A0A]/90 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-[#D4AF37]/30">
                    Healthcare Operations
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Corporate Structure Section */}
        <section className="py-20 bg-[#0A0A0A]/50 backdrop-blur-sm">
          <div className="container max-w-6xl mx-auto px-4">
            <motion.div 
              className="grid md:grid-cols-2 gap-12 items-center"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Outfit']">
                  Corporate{" "}
                  <span className="bg-gradient-to-r from-[#D4AF37] to-[#C0C0C0] bg-clip-text text-transparent">
                    Structure
                  </span>
                </h2>
                <div className="space-y-5 text-gray-400 leading-relaxed">
                  <p>
                    ARKAN Biosciences is a subsidiary entity operating under the corporate structure of TRU & CO INC, a U.S.-based company focused on life sciences, biotechnology, research materials, and international healthcare operations.
                  </p>
                  <p>
                    Built with a strong commitment to scientific integrity, operational excellence, and global business development, ARKAN Biosciences was established to support advanced initiatives in biosciences, laboratory research solutions, biotechnology innovation, and specialized scientific products.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 via-[#C0C0C0]/20 to-[#22C55E]/20 rounded-3xl blur-2xl" />
                <div className="relative bg-[#0A0A0A]/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/5">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] flex items-center justify-center">
                      <Building2 className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-['Outfit']">TRU & CO INC</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Operating within the broader infrastructure of TRU & CO INC allows ARKAN Biosciences to leverage international operational experience, strategic sourcing capabilities, regulatory-focused business practices, and a growing global network across the healthcare and life sciences sectors.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    As part of the TRU & CO corporate structure, ARKAN Biosciences benefits from an integrated ecosystem designed to support scalable growth, scientific development, and international collaboration within the biotechnology and life sciences industries.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container max-w-6xl mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Outfit']">
                Our{" "}
                <span className="bg-gradient-to-r from-[#D4AF37] via-[#C0C0C0] to-[#22C55E] bg-clip-text text-transparent">
                  Mission
                </span>
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Our mission is to contribute to the advancement of modern biosciences through high-quality scientific solutions, responsible operational standards, and continuous innovation aligned with evolving industry demands.
              </p>
            </motion.div>

            {/* Mission Image */}
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028460647/foBxCtOcjZZRrPWn.png" 
                alt="Research & Innovation" 
                className="w-full h-[350px] md:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-[#0A0A0A]/50 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="p-8 md:p-12 max-w-xl">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-['Outfit']">
                    Operational Excellence
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    ARKAN Biosciences maintains a strong focus on professionalism, technical precision, confidentiality, and long-term strategic partnerships, serving researchers, institutions, and business partners with a commitment to reliability and operational integrity.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Core Values Grid */}
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {coreValues.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group bg-[#0A0A0A]/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-[#C0C0C0]/20 flex items-center justify-center flex-shrink-0 group-hover:from-[#D4AF37] group-hover:to-[#C0C0C0] transition-all duration-300">
                      <item.icon className="w-6 h-6 text-[#B8860B] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2 font-['Outfit']">{item.title}</h4>
                      <p className="text-gray-400 leading-relaxed text-sm">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Certifications Banner */}
        <section className="py-16 bg-[#111111]/70 backdrop-blur-sm">
          <div className="container max-w-6xl mx-auto px-4">
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 text-gray-400">
                <Award className="w-8 h-8 text-[#B8860B]" />
                <span className="font-semibold">WHO GMP</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Shield className="w-8 h-8 text-[#A1A1AA]" />
                <span className="font-semibold">ISO 9001</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FlaskConical className="w-8 h-8 text-[#22C55E]" />
                <span className="font-semibold">ISO 17025</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Building2 className="w-8 h-8 text-[#B8860B]" />
                <span className="font-semibold">FDA Registered</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
