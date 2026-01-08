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

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function Terms() {
  const sections = [
    {
      id: "acceptance",
      icon: FileText,
      title: "1. Acceptance of Terms",
      content: [
        "By accessing and using the TRU & CO website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
        "TRU & CO reserves the right to modify these terms at any time. Continued use of our services after any modifications constitutes acceptance of the updated terms. We encourage you to review these terms periodically."
      ]
    },
    {
      id: "eligibility",
      icon: Scale,
      title: "2. Eligibility and Use Restrictions",
      content: [
        "Our products are intended solely for research purposes and are not for human consumption, therapeutic use, or any other unauthorized purpose. By placing an order, you confirm that:",
        "• You are at least 18 years of age or the age of majority in your jurisdiction",
        "• You are affiliated with a legitimate research institution, laboratory, or educational facility",
        "• You will use the products exclusively for lawful research purposes",
        "• You will comply with all applicable local, state, federal, and international laws and regulations",
        "TRU & CO reserves the right to refuse service to anyone and to cancel orders at our discretion if we believe products may be misused."
      ]
    },
    {
      id: "products",
      icon: AlertTriangle,
      title: "3. Product Information and Disclaimers",
      content: [
        "All products sold by TRU & CO are research chemicals intended for laboratory use only. Product descriptions, specifications, and documentation are provided for informational purposes.",
        "DISCLAIMER: Products are NOT intended for human or veterinary use, food additives, drugs, cosmetics, household chemicals, or any other inappropriate applications. TRU & CO makes no claims regarding the safety or efficacy of products for any purpose other than research.",
        "While we strive to maintain accurate product information, we do not warrant that product descriptions or other content are accurate, complete, reliable, current, or error-free."
      ]
    },
    {
      id: "orders",
      icon: CreditCard,
      title: "4. Orders and Payment",
      content: [
        "All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in pricing or product information, or suspected fraudulent activity.",
        "Payment must be received in full before orders are processed. We accept various payment methods as indicated on our website. All prices are listed in USD and are subject to change without notice.",
        "You agree to provide accurate and complete payment information. Any fraudulent, abusive, or illegal activity may result in termination of your account and referral to appropriate authorities."
      ]
    },
    {
      id: "shipping",
      icon: Truck,
      title: "5. Shipping and Delivery",
      content: [
        "TRU & CO ships within the United States. Shipping times and methods vary based on product type and destination. While we strive to process orders promptly, delivery times are estimates and not guaranteed.",
        "Risk of loss and title for products pass to you upon delivery to the carrier. TRU & CO is not responsible for delays caused by carriers, customs, weather, or other factors beyond our control.",
        "It is your responsibility to ensure that someone is available to receive the shipment and that the delivery address provided is accurate and complete."
      ]
    },
    {
      id: "returns",
      icon: RefreshCw,
      title: "6. Returns and Refunds",
      content: [
        "Due to the nature of our products and strict quality control requirements, all sales are final. We do not accept returns or provide refunds except in cases of:",
        "• Damaged products received (must be reported within 48 hours of delivery with photographic evidence)",
        "• Incorrect products shipped (must be reported within 48 hours of delivery)",
        "• Products that do not meet stated specifications (subject to verification)",
        "Any approved refunds will be processed using the original payment method within 10-14 business days. Shipping costs are non-refundable."
      ]
    },
    {
      id: "liability",
      icon: Shield,
      title: "7. Limitation of Liability",
      content: [
        "TO THE MAXIMUM EXTENT PERMITTED BY LAW, TRU & CO SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR OTHER INTANGIBLE LOSSES.",
        "Our total liability for any claim arising from or related to these terms or our services shall not exceed the amount paid by you for the specific product giving rise to the claim.",
        "Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of the above limitations may not apply to you."
      ]
    },
    {
      id: "indemnification",
      icon: Scale,
      title: "8. Indemnification",
      content: [
        "You agree to indemnify, defend, and hold harmless TRU & CO, its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses arising from:",
        "• Your use of our products or services",
        "• Your violation of these Terms of Service",
        "• Your violation of any third-party rights",
        "• Any misuse of products purchased from TRU & CO"
      ]
    },
    {
      id: "governing",
      icon: FileText,
      title: "9. Governing Law and Dispute Resolution",
      content: [
        "These Terms of Service shall be governed by and construed in accordance with the laws of the State of Florida, United States, without regard to its conflict of law provisions.",
        "Any disputes arising from these terms or your use of our services shall be resolved through binding arbitration in Orlando, Florida, in accordance with the rules of the American Arbitration Association.",
        "You agree to waive any right to participate in class action lawsuits or class-wide arbitration against TRU & CO."
      ]
    },
    {
      id: "contact",
      icon: Mail,
      title: "10. Contact Information",
      content: [
        "If you have any questions about these Terms of Service, please contact us at:",
        "Email: support@tru-co.com",
        "Location: Orlando, FL, United States",
        "We will respond to inquiries within 48 business hours."
      ]
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
                Terms of{" "}
                <span className="bg-gradient-to-r from-[oklch(0.65_0.20_200)] via-[oklch(0.55_0.25_280)] to-[oklch(0.65_0.25_330)] bg-clip-text text-transparent">
                  Service
                </span>
              </h1>
              <p className="text-gray-600">
                Last updated: January 7, 2026
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
                Welcome to TRU & CO. These Terms of Service ("Terms") govern your access to and use of our website, products, and services. Please read these terms carefully before using our services. By accessing or using TRU & CO's services, you agree to be bound by these Terms and our Privacy Policy.
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
                By using TRU & CO's services, you acknowledge that you have read, understood, and agree to these Terms of Service.
              </p>
              <p className="text-white/70 text-sm">
                For questions or concerns, please contact us at{" "}
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
