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

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function Privacy() {
  const sections = [
    {
      id: "introduction",
      icon: Shield,
      title: "1. Introduction",
      content: [
        "TRU & CO (\"we,\" \"us,\" or \"our\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.",
        "Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access our website or use our services."
      ]
    },
    {
      id: "collection",
      icon: Database,
      title: "2. Information We Collect",
      content: [
        "We collect information that you provide directly to us, including:",
        "• Personal Information: Name, email address, phone number, shipping address, billing address",
        "• Account Information: Username, password, account preferences",
        "• Payment Information: Credit card numbers, bank account details (processed securely through third-party payment processors)",
        "• Communication Data: Messages, inquiries, and correspondence with our support team",
        "• Research Affiliation: Institution name, department, research purpose (for verification purposes)",
        "We also automatically collect certain information when you visit our website:",
        "• Device Information: IP address, browser type, operating system, device identifiers",
        "• Usage Data: Pages visited, time spent on pages, click patterns, referring URLs",
        "• Cookies and Tracking Technologies: Information collected through cookies, web beacons, and similar technologies"
      ]
    },
    {
      id: "use",
      icon: Eye,
      title: "3. How We Use Your Information",
      content: [
        "We use the information we collect for various purposes, including:",
        "• Processing and fulfilling your orders",
        "• Verifying your eligibility to purchase research materials",
        "• Communicating with you about orders, products, and services",
        "• Providing customer support and responding to inquiries",
        "• Improving our website, products, and services",
        "• Detecting and preventing fraud, unauthorized access, and other illegal activities",
        "• Complying with legal obligations and regulatory requirements",
        "• Sending promotional communications (with your consent)",
        "• Analyzing usage patterns to enhance user experience"
      ]
    },
    {
      id: "protection",
      icon: Lock,
      title: "4. Data Security",
      content: [
        "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:",
        "• SSL/TLS encryption for data transmission",
        "• Secure data storage with access controls",
        "• Regular security assessments and updates",
        "• Employee training on data protection practices",
        "• Third-party security audits",
        "However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security."
      ]
    },
    {
      id: "sharing",
      icon: Share2,
      title: "5. Information Sharing and Disclosure",
      content: [
        "We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:",
        "• Service Providers: We share information with third-party vendors who perform services on our behalf, such as payment processing, shipping, and analytics",
        "• Legal Requirements: We may disclose information if required by law, court order, or government regulation",
        "• Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction",
        "• Protection of Rights: We may disclose information to protect our rights, privacy, safety, or property, and that of our users and the public",
        "• With Your Consent: We may share information for other purposes with your explicit consent"
      ]
    },
    {
      id: "cookies",
      icon: Globe,
      title: "6. Cookies and Tracking Technologies",
      content: [
        "We use cookies and similar tracking technologies to enhance your experience on our website. Types of cookies we use include:",
        "• Essential Cookies: Necessary for the website to function properly",
        "• Analytics Cookies: Help us understand how visitors interact with our website",
        "• Functional Cookies: Remember your preferences and settings",
        "• Marketing Cookies: Used to deliver relevant advertisements (if applicable)",
        "You can control cookie settings through your browser preferences. However, disabling certain cookies may affect the functionality of our website."
      ]
    },
    {
      id: "rights",
      icon: UserCheck,
      title: "7. Your Rights and Choices",
      content: [
        "Depending on your location, you may have certain rights regarding your personal information:",
        "• Access: Request a copy of the personal information we hold about you",
        "• Correction: Request correction of inaccurate or incomplete information",
        "• Deletion: Request deletion of your personal information (subject to legal requirements)",
        "• Opt-Out: Unsubscribe from marketing communications at any time",
        "• Data Portability: Request your data in a portable format",
        "• Restriction: Request restriction of processing in certain circumstances",
        "To exercise these rights, please contact us at support@tru-co.com. We will respond to your request within 30 days."
      ]
    },
    {
      id: "retention",
      icon: Settings,
      title: "8. Data Retention",
      content: [
        "We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.",
        "Factors we consider when determining retention periods include:",
        "• The nature and sensitivity of the information",
        "• Legal and regulatory requirements",
        "• Business and operational needs",
        "• Statute of limitations for potential legal claims",
        "When we no longer need your personal information, we will securely delete or anonymize it."
      ]
    },
    {
      id: "children",
      icon: Shield,
      title: "9. Children's Privacy",
      content: [
        "Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18.",
        "If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information promptly. If you believe we may have collected information from a child under 18, please contact us immediately."
      ]
    },
    {
      id: "updates",
      icon: Bell,
      title: "10. Updates to This Policy",
      content: [
        "We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.",
        "We will notify you of any material changes by posting the new Privacy Policy on this page and updating the \"Last Updated\" date. We encourage you to review this Privacy Policy periodically.",
        "Your continued use of our services after any changes to this Privacy Policy constitutes your acceptance of the updated policy."
      ]
    },
    {
      id: "contact",
      icon: Mail,
      title: "11. Contact Us",
      content: [
        "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:",
        "Email: support@tru-co.com",
        "Location: Orlando, FL, United States",
        "We are committed to resolving any complaints about our collection or use of your personal information. We will respond to inquiries within 48 business hours."
      ]
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
                Legal
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-4 font-['Sora']">
                Privacy{" "}
                <span className="bg-gradient-to-r from-[oklch(0.65_0.20_200)] via-[oklch(0.55_0.25_280)] to-[oklch(0.65_0.25_330)] bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              <p className="text-gray-600">
                Last updated: January 7, 2026
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
                At TRU & CO, we take your privacy seriously. This Privacy Policy describes how we collect, use, and protect your personal information when you use our website and services. We are committed to maintaining the confidentiality and security of your data in accordance with applicable privacy laws and regulations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Privacy Sections */}
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
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-[oklch(0.75_0.15_200)]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-['Sora']">Your Privacy Matters</h3>
              <p className="text-white/90 mb-4">
                We are committed to protecting your personal information and being transparent about our data practices.
              </p>
              <p className="text-white/70 text-sm">
                Questions? Contact us at{" "}
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
