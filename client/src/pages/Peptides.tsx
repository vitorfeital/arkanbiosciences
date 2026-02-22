/**
 * World of Peptides Page - Luminous Depth Design
 * Educational content with visual peptide cards
 * Colors: Cyan (#4FC3F7), Purple (#7B2CBF), Magenta (#E91E8C)
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ExternalLink, FlaskConical, Dna, Microscope, Atom, Brain, Heart, Shield, Sparkles, Zap } from "lucide-react";

const peptides = [
  {
    name: "BPC-157",
    description: "Synthetic pentadecapeptide. Preclinical studies describe involvement in tissue repair signaling and angiogenesis pathways. Human clinical data remain limited.",
    reference: "Sikiric et al., J Physiol Pharmacol, 2018",
    link: "https://pubmed.ncbi.nlm.nih.gov/30352184/",
    icon: Heart,
    color: "from-[#4FC3F7] to-[#00ACC1]",
    category: "Tissue Repair"
  },
  {
    name: "Cagrilintide",
    description: "Long-acting amylin analogue under clinical investigation for metabolic research.",
    reference: "Lau et al., N Engl J Med, 2021",
    link: "https://www.nejm.org/doi/full/10.1056/NEJMoa2107519",
    icon: Zap,
    color: "from-[#7B2CBF] to-[#9C27B0]",
    category: "Metabolic"
  },
  {
    name: "Epithalon",
    description: "Synthetic tetrapeptide studied in aging biology models.",
    reference: "Khavinson et al., Front Genet, 2020",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7585677/",
    icon: Sparkles,
    color: "from-[#E91E8C] to-[#C2185B]",
    category: "Aging Research"
  },
  {
    name: "GHK-Cu",
    description: "Copper-binding tripeptide investigated in skin and extracellular matrix research.",
    reference: "Pickart et al., Biomed Res Int, 2015",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4566513/",
    icon: Atom,
    color: "from-[#4FC3F7] to-[#7B2CBF]",
    category: "Skin Research"
  },
  {
    name: "Ipamorelin",
    description: "Synthetic pentapeptide growth hormone secretagogue.",
    reference: "Raun et al., J Endocrinol, 1996",
    link: "https://pubmed.ncbi.nlm.nih.gov/8738381/",
    icon: FlaskConical,
    color: "from-[#7B2CBF] to-[#E91E8C]",
    category: "Growth Hormone"
  },
  {
    name: "MOTS-C",
    description: "Mitochondrial-derived peptide associated with metabolic signaling in preclinical models.",
    reference: "Lee et al., Cell Metab, 2015",
    link: "https://pubmed.ncbi.nlm.nih.gov/26073497/",
    icon: Dna,
    color: "from-[#00ACC1] to-[#4FC3F7]",
    category: "Mitochondrial"
  },
  {
    name: "SS-31 (Elamipretide)",
    description: "Mitochondria-targeting tetrapeptide investigated in clinical research.",
    reference: "Szeto & Birk, Annu Rev Pharmacol Toxicol, 2014",
    link: "https://pubmed.ncbi.nlm.nih.gov/24160793/",
    icon: Microscope,
    color: "from-[#E91E8C] to-[#7B2CBF]",
    category: "Mitochondrial"
  },
  {
    name: "Tesamorelin",
    description: "GHRH analogue evaluated in controlled clinical trials for specific medical indications.",
    reference: "Falutz et al., N Engl J Med, 2010",
    link: "https://www.nejm.org/doi/full/10.1056/NEJMoa0911259",
    icon: Brain,
    color: "from-[#4FC3F7] to-[#E91E8C]",
    category: "Growth Hormone"
  },
  {
    name: "Thymosin Alpha-1",
    description: "28-amino-acid peptide studied for immune modulation.",
    reference: "Romani et al., Expert Opin Biol Ther, 2011",
    link: "https://pubmed.ncbi.nlm.nih.gov/21235331/",
    icon: Shield,
    color: "from-[#7B2CBF] to-[#4FC3F7]",
    category: "Immune Modulation"
  },
];

export default function Peptides() {
  return (
    <div className="min-h-screen bg-[url('https://files.manuscdn.com/user_upload_by_module/session_file/310419663028460647/VvtbnjABXSbXHfiR.png')] bg-cover bg-fixed bg-center">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-white/80 backdrop-blur-sm border border-[oklch(0.75_0.15_200)]/30 text-[oklch(0.5_0.15_200)] mb-6">
                Educational Resource
              </span>
              
              <h1 className="text-4xl md:text-6xl font-bold text-[#1A365D] mb-6 font-['Sora']">
                World of{" "}
                <span className="bg-gradient-to-r from-[#4FC3F7] via-[#7B2CBF] to-[#E91E8C] bg-clip-text text-transparent">
                  Peptides
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                High-level, non-promotional, educational information regarding peptides and related bioactive compounds as discussed in peer-reviewed scientific literature.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="py-12">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-[#1A365D] to-[#1e3a5f] rounded-2xl p-8 md:p-10 text-white"
            >
              <h2 className="text-xl md:text-2xl font-bold mb-4 font-['Sora']" style={{color: '#83cec1'}}>Purpose and Scope</h2>
              <p className="text-white/90 leading-relaxed">
                This document provides high-level, non-promotional, educational information regarding peptides and related bioactive compounds as discussed in peer-reviewed scientific literature. <strong>No statements herein are intended to diagnose, treat, cure, mitigate, or prevent any disease.</strong> Regulatory status, permitted uses, and safety profiles vary by jurisdiction.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Definition Section */}
        <section className="py-12">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-gray-200 shadow-lg"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4FC3F7] to-[#7B2CBF] flex items-center justify-center flex-shrink-0">
                  <Dna className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1A365D] font-['Sora']">Definition of Peptides</h2>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Peptides are short chains of amino acids linked by peptide bonds. In biological systems, peptides may function as signaling molecules, hormones, or structural components.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The World Health Organization (WHO) classifies therapeutic peptides within the broader category of biotherapeutic products, emphasizing standardized nomenclature (INN), quality control, and regulatory evaluation rather than consumer health claims.
              </p>
              <a
                href="https://www.who.int/teams/health-product-policy-and-standards/standards-and-specifications"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[oklch(0.5_0.15_200)] hover:text-[oklch(0.4_0.18_280)] transition-colors font-medium"
              >
                <span>WHO – Biologicals and Biotherapeutic Products</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Peptides Grid */}
        <section className="py-16">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4 font-['Sora']">
                Selected Peptides &{" "}
                <span className="bg-gradient-to-r from-[#4FC3F7] via-[#7B2CBF] to-[#E91E8C] bg-clip-text text-transparent">
                  Research Context
                </span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore peer-reviewed research on various peptides and their applications in scientific studies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {peptides.map((peptide, index) => {
                const IconComponent = peptide.icon;
                return (
                  <motion.div
                    key={peptide.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="h-full bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      {/* Card Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${peptide.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                          {peptide.category}
                        </span>
                      </div>

                      {/* Card Content */}
                      <h3 className="text-xl font-bold text-[#1A365D] mb-3 font-['Sora'] group-hover:text-[oklch(0.5_0.15_200)] transition-colors">
                        {peptide.name}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {peptide.description}
                      </p>

                      {/* Reference */}
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-xs text-gray-500 mb-2">Reference:</p>
                        <a
                          href={peptide.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-[oklch(0.5_0.15_200)] hover:text-[oklch(0.4_0.18_280)] transition-colors font-medium"
                        >
                          <span className="line-clamp-1">{peptide.reference}</span>
                          <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1A365D] via-[#1e3a5f] to-[#1A365D] p-10 md:p-16"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#4FC3F7]/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#E91E8C]/20 to-transparent rounded-full blur-3xl" />
              
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Sora']">
                  Interested in Research Peptides?
                </h2>
                <p className="text-white/80 text-lg mb-8">
                  TRU & CO provides high-purity research peptides with comprehensive analytical documentation. All materials are intended for research use only.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#4FC3F7] to-[#7B2CBF] text-white font-semibold rounded-xl hover:shadow-[0_8px_30px_rgba(79,195,247,0.4)] transition-all duration-500"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
