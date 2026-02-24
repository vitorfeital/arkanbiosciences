/**
 * Design Philosophy: Luminous Depth - Documentation Page
 * - Light background with molecular pattern
 * - Glassmorphic cards with subtle shadows
 * - Gradient accents (cyan → purple → magenta)
 * - Typography: Outfit for headings, Inter for body
 */

import { motion } from "framer-motion";
import { 
  FileText, 
  Download, 
  Upload, 
  Settings, 
  Palette, 
  Mail, 
  MapPin,
  Code,
  Image,
  Globe,
  Shield,
  CheckCircle,
  Copy,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Docs() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    toast.success("Code copied to clipboard!");
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const fileStructure = `arkan-biosciences-wordpress-complete/
├── html-embeds/           # Páginas HTML standalone
│   ├── home.html          # Página inicial
│   ├── about.html         # Sobre a empresa
│   ├── peptides.html      # World of Peptides
│   ├── contact.html       # Formulário de contato
│   ├── terms.html         # Termos de Serviço
│   └── privacy.html       # Política de Privacidade
├── assets/
│   └── images/            # Todas as imagens do site
│       ├── logo.png
│       ├── background.png
│       ├── laboratorio_1.png
│       ├── laboratorio_2.png
│       ├── feature-quality.png
│       ├── feature-innovation.png
│       ├── feature-trust.png
│       ├── hero-background.png
│       └── cta-background.png
└── README.md              # Este arquivo`;

  const iframeCode = `<iframe src="URL_DO_ARQUIVO.html" width="100%" height="2000px" frameborder="0" style="border:none;"></iframe>`;

  const pages = [
    { page: "Home", file: "home.html", description: "Página inicial com hero, features, stats e CTA" },
    { page: "About", file: "about.html", description: "Visão geral da empresa, qualidade, certificações" },
    { page: "World of Peptides", file: "peptides.html", description: "Informações educacionais sobre peptídeos" },
    { page: "Contact us", file: "contact.html", description: "Formulário de contato com Web3Forms" },
    { page: "Terms of Service", file: "terms.html", description: "Termos de serviço legais" },
    { page: "Privacy Policy", file: "privacy.html", description: "Política de privacidade" },
  ];

  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: "url('https://files.manuscdn.com/user_upload_by_module/session_file/310419663028460647/VvtbnjABXSbXHfiR.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-[#0A0A0A]/80 backdrop-blur-sm border border-[#D4AF37]/30 text-[#D4AF37] mb-6">
              Documentation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Outfit'] mb-6">
              <span className="text-white">ARKAN Biosciences</span>{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#C0C0C0] to-[#22C55E] bg-clip-text text-transparent">
                WordPress Guide
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Complete documentation for transferring the ARKAN Biosciences website to WordPress. 
              Follow the step-by-step instructions below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container max-w-5xl">
          
          {/* Package Contents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0A0A0A]/90 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-lg mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#C0C0C0]/20 flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h2 className="text-2xl font-bold text-white font-['Outfit']">📦 Package Contents</h2>
            </div>
            <p className="text-gray-400 mb-6">
              This package contains the complete ARKAN Biosciences website ready to be transferred to WordPress.
            </p>
            
            <h3 className="text-lg font-semibold text-white mb-4 font-['Outfit']">File Structure</h3>
            <div className="relative">
              <pre className="bg-gray-900 text-gray-100 rounded-xl p-6 overflow-x-auto text-sm font-mono">
                {fileStructure}
              </pre>
              <button
                onClick={() => copyToClipboard(fileStructure, "structure")}
                className="absolute top-4 right-4 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              >
                {copiedCode === "structure" ? (
                  <CheckCircle className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-300" />
                )}
              </button>
            </div>
          </motion.div>

          {/* How to Use */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#0A0A0A]/90 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-lg mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#C0C0C0]/20 flex items-center justify-center">
                <Globe className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h2 className="text-2xl font-bold text-white font-['Outfit']">🚀 How to Use in WordPress</h2>
            </div>

            {/* Option 1 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4 font-['Outfit'] flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-gradient-to-r from-[#B8860B] to-[#A1A1AA] text-white flex items-center justify-center text-sm font-bold">1</span>
                HTML Embed Pages (Recommended)
              </h3>
              
              <div className="space-y-4 ml-10">
                <div className="bg-[#111111] rounded-xl p-4">
                  <h4 className="font-semibold text-gray-200 mb-2 flex items-center gap-2">
                    <Upload className="w-4 h-4 text-[#D4AF37]" />
                    Upload Images
                  </h4>
                  <ul className="text-gray-400 space-y-1 text-sm">
                    <li>• Access WordPress Admin → Media → Add New</li>
                    <li>• Upload all images from the <code className="bg-gray-200 px-1 rounded">assets/images/</code> folder</li>
                    <li>• Note the URLs of each image</li>
                  </ul>
                </div>
                
                <div className="bg-[#111111] rounded-xl p-4">
                  <h4 className="font-semibold text-gray-200 mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#D4AF37]" />
                    Create Pages
                  </h4>
                  <ul className="text-gray-400 space-y-1 text-sm">
                    <li>• For each HTML file in <code className="bg-gray-200 px-1 rounded">html-embeds/</code>:</li>
                    <li className="ml-4">→ Go to Pages → Add New</li>
                    <li className="ml-4">→ Add a "Custom HTML" block</li>
                    <li className="ml-4">→ Paste the HTML content</li>
                    <li className="ml-4">→ Replace image paths with WordPress URLs</li>
                  </ul>
                </div>
                
                <div className="bg-[#111111] rounded-xl p-4">
                  <h4 className="font-semibold text-gray-200 mb-2 flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-[#D4AF37]" />
                    Update Navigation Links
                  </h4>
                  <ul className="text-gray-400 space-y-1 text-sm">
                    <li>• Replace <code className="bg-gray-200 px-1 rounded">.html</code> links with WordPress permalinks</li>
                    <li>• Example: <code className="bg-gray-200 px-1 rounded">home.html</code> → <code className="bg-gray-200 px-1 rounded">https://yoursite.com/</code></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Option 2 */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4 font-['Outfit'] flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-gradient-to-r from-[#B8860B] to-[#A1A1AA] text-white flex items-center justify-center text-sm font-bold">2</span>
                Direct Upload (Static Hosting)
              </h3>
              <div className="ml-10 bg-[#111111] rounded-xl p-4">
                <p className="text-gray-400 text-sm mb-2">If your WordPress allows static file hosting:</p>
                <ul className="text-gray-400 space-y-1 text-sm">
                  <li>• Upload the entire folder via FTP to <code className="bg-gray-200 px-1 rounded">/wp-content/uploads/arkan-biosciences/</code></li>
                  <li>• Access directly: <code className="bg-gray-200 px-1 rounded">https://yoursite.com/wp-content/uploads/arkan-biosciences/html-embeds/home.html</code></li>
                </ul>
              </div>
            </div>

            {/* Option 3 */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 font-['Outfit'] flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-gradient-to-r from-[#B8860B] to-[#A1A1AA] text-white flex items-center justify-center text-sm font-bold">3</span>
                iFrame Method
              </h3>
              <div className="ml-10">
                <p className="text-gray-400 text-sm mb-4">Upload HTML files to your server and use in each WordPress page:</p>
                <div className="relative">
                  <pre className="bg-gray-900 text-gray-100 rounded-xl p-4 overflow-x-auto text-sm font-mono">
                    {iframeCode}
                  </pre>
                  <button
                    onClick={() => copyToClipboard(iframeCode, "iframe")}
                    className="absolute top-3 right-3 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    {copiedCode === "iframe" ? (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-300" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Required Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0A0A0A]/90 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-lg mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#C0C0C0]/20 flex items-center justify-center">
                <Settings className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h2 className="text-2xl font-bold text-white font-['Outfit']">⚙️ Required Settings</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Web3Forms */}
              <div className="bg-gradient-to-br from-[#1A365D] to-[#1e3a5f] rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-4 font-['Outfit'] flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Form (Web3Forms)
                </h3>
                <p className="text-white/80 text-sm mb-4">The contact form uses Web3Forms to send emails. To activate:</p>
                <ol className="text-white/90 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#0A0A0A]/20 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
                    <span>Access <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="text-[#4FC3F7] hover:underline">web3forms.com</a></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#0A0A0A]/20 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
                    <span>Create a free account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#0A0A0A]/20 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</span>
                    <span>Generate an Access Key for <code className="bg-[#0A0A0A]/20 px-1 rounded">support@arkanbiosciences.com</code></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#0A0A0A]/20 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">4</span>
                    <span>In <code className="bg-[#0A0A0A]/20 px-1 rounded">contact.html</code>, replace <code className="bg-[#0A0A0A]/20 px-1 rounded">YOUR_ACCESS_KEY_HERE</code></span>
                  </li>
                </ol>
              </div>

              {/* reCAPTCHA */}
              <div className="bg-gradient-to-br from-[#1A365D] to-[#1e3a5f] rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-4 font-['Outfit'] flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  reCAPTCHA
                </h3>
                <p className="text-white/80 text-sm mb-4">The form uses test reCAPTCHA. For production:</p>
                <ol className="text-white/90 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#0A0A0A]/20 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
                    <span>Access <a href="https://www.google.com/recaptcha/admin" target="_blank" rel="noopener noreferrer" className="text-[#4FC3F7] hover:underline">Google reCAPTCHA</a></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#0A0A0A]/20 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
                    <span>Register your domain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#0A0A0A]/20 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</span>
                    <span>Replace the test key with your production key</span>
                  </li>
                </ol>
              </div>
            </div>
          </motion.div>

          {/* Pages Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#0A0A0A]/90 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-lg mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#C0C0C0]/20 flex items-center justify-center">
                <Code className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h2 className="text-2xl font-bold text-white font-['Outfit']">📱 Included Pages</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 font-semibold text-white font-['Outfit']">Page</th>
                    <th className="text-left py-3 px-4 font-semibold text-white font-['Outfit']">File</th>
                    <th className="text-left py-3 px-4 font-semibold text-white font-['Outfit']">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {pages.map((item, index) => (
                    <tr key={index} className="border-b border-white/5 hover:bg-[#111111] transition-colors">
                      <td className="py-3 px-4 font-medium text-gray-200">{item.page}</td>
                      <td className="py-3 px-4">
                        <code className="bg-[#1A1A1A] px-2 py-1 rounded text-sm text-[#D4AF37]">{item.file}</code>
                      </td>
                      <td className="py-3 px-4 text-gray-400 text-sm">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Visual Identity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#0A0A0A]/90 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-lg mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#C0C0C0]/20 flex items-center justify-center">
                <Palette className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h2 className="text-2xl font-bold text-white font-['Outfit']">🎨 Visual Identity</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-200 mb-3">Main Colors</h3>
                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-xl bg-[#4FC3F7] shadow-lg"></div>
                    <span className="text-xs text-gray-500 mt-2">Cyan</span>
                    <code className="text-xs text-gray-400">#4FC3F7</code>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-xl bg-[#7B2CBF] shadow-lg"></div>
                    <span className="text-xs text-gray-500 mt-2">Purple</span>
                    <code className="text-xs text-gray-400">#7B2CBF</code>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-xl bg-[#E91E8C] shadow-lg"></div>
                    <span className="text-xs text-gray-500 mt-2">Magenta</span>
                    <code className="text-xs text-gray-400">#E91E8C</code>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-xl bg-[#1A365D] shadow-lg"></div>
                    <span className="text-xs text-gray-500 mt-2">Text</span>
                    <code className="text-xs text-gray-400">#1A365D</code>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-200 mb-3">Typography & Style</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span><strong>Fonts:</strong> Sora (headings), Inter (body)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span><strong>Style:</strong> Glassmorphism, gradients</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span><strong>Cards:</strong> Soft shadows, rounded corners</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span><strong>Effects:</strong> Backdrop blur, hover animations</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-r from-[#1A365D] to-[#1e3a5f] rounded-2xl p-8 text-white text-center"
          >
            <h2 className="text-2xl font-bold mb-4 font-['Outfit']">📧 Need Help?</h2>
            <p className="text-white/80 mb-6">For questions about implementation, contact us:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:support@arkanbiosciences.com"
                className="flex items-center gap-2 bg-[#0A0A0A]/10 hover:bg-[#0A0A0A]/20 px-6 py-3 rounded-full transition-colors"
              >
                <Mail className="w-5 h-5" />
                support@arkanbiosciences.com
              </a>
              <span className="flex items-center gap-2 bg-[#0A0A0A]/10 px-6 py-3 rounded-full">
                <MapPin className="w-5 h-5" />
                Orlando, FL, USA
              </span>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
