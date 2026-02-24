/**
 * Home Page - Light Theme with Molecular Background
 * Clean, professional design with dark text on light background
 * Vibrant accent colors from brand (cyan, purple, magenta)
 * Cascade animations on service cards
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowRight, Award, Clock, Shield, Sparkles, Users, Zap } from "lucide-react";
import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  // Hero image ref removed (was video)
  const servicesRef = useRef(null);
  const featuresRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  
  const fullText = t("home.typewriter");

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax transform
  const parallaxStyle = useMemo(() => ({
    transform: `translateY(${scrollY * 0.4}px) scale(1.1)`,
    transition: 'transform 0.1s ease-out',
  }), [scrollY]);

  // Typewriter effect
  useEffect(() => {
    const typeSpeed = 80;
    const deleteSpeed = 40;
    const pauseBeforeDelete = 3000;
    const pauseBeforeType = 1000;

    const handleTyping = () => {
      if (!isDeleting) {
        if (typewriterText.length < fullText.length) {
          setTimeout(() => {
            setTypewriterText(fullText.slice(0, typewriterText.length + 1));
          }, typeSpeed);
        } else {
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseBeforeDelete);
        }
      } else {
        if (typewriterText.length > 0) {
          setTimeout(() => {
            setTypewriterText(fullText.slice(0, typewriterText.length - 1));
          }, deleteSpeed);
        } else {
          setTimeout(() => {
            setIsDeleting(false);
          }, pauseBeforeType);
        }
      }
    };

    handleTyping();
  }, [typewriterText, isDeleting]);

  useEffect(() => {
    setIsVisible(true);
    
    // Handle hash navigation for CTA section
    if (window.location.hash === "#cta-section") {
      setTimeout(() => {
        const ctaSection = document.getElementById("cta-section");
        if (ctaSection) {
          ctaSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  // Animation variants for cascade effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const featureCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      rotateX: -15,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Video Banner Section with Parallax */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Video Background with Parallax Effect */}
        <img
          src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028460647/RdkuUZqVfdBgecKw.jpg"
          alt="ARKAN Biosciences Laboratory"
          className="absolute inset-0 w-full h-[120%] object-cover will-change-transform"
          style={parallaxStyle}
        />
        {/* Dark Overlay for better visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
        
        {/* Certification Badges in top right corner */}
        <div className="absolute top-20 right-4 md:top-24 md:right-8 flex flex-col gap-3">
          {/* GMP Certified Badge */}
          <div className="flex items-center gap-2 bg-[#0A0A0A]/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-white/50 hover:scale-105 transition-transform">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-xs md:text-sm font-bold text-gray-200">GMP</p>
              <p className="text-[10px] md:text-xs text-gray-400">{t("home.badge.certified")}</p>
            </div>
          </div>
          
          {/* ISO 9001 Badge */}
          <div className="flex items-center gap-2 bg-[#0A0A0A]/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-white/50 hover:scale-105 transition-transform">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-xs md:text-sm font-bold text-gray-200">ISO 9001</p>
              <p className="text-[10px] md:text-xs text-gray-400">{t("home.badge.certified")}</p>
            </div>
          </div>
          
          {/* Third Party Tested Badge */}
          <div className="flex items-center gap-2 bg-[#0A0A0A]/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-white/50 hover:scale-105 transition-transform">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-xs md:text-sm font-bold text-gray-200">{t("home.badge.3rdParty")}</p>
              <p className="text-[10px] md:text-xs text-gray-400">{t("home.badge.tested")}</p>
            </div>
          </div>
        </div>
        
        {/* Logo and Text in bottom left corner */}
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 flex items-center gap-4 md:gap-6">
          {/* Logo with subtle glow pulse effect */}
          <div className="relative">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028460647/NZyKMTJiTMAloPmP.png" 
              alt="ARKAN Biosciences" 
              className="w-16 md:w-20 lg:w-24 drop-shadow-2xl animate-[subtleGlow_3s_ease-in-out_infinite]"
            />
          </div>
          
          {/* Typewriter text effect */}
          <div className="overflow-hidden min-w-[200px] md:min-w-[400px] lg:min-w-[500px]">
            <p 
              className="text-white text-lg md:text-2xl lg:text-3xl font-bold font-['Outfit'] tracking-wide"
              style={{
                textShadow: '0 0 15px rgba(212, 175, 55, 0.6), 0 0 30px rgba(192, 192, 192, 0.4), 2px 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              {typewriterText}
              <span className="animate-[blink_1s_step-end_infinite] ml-1">|</span>
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-12 pb-8">
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/60" />

        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Badges */}
            <div className={`flex flex-wrap justify-center gap-4 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="glass-card px-4 py-2 rounded-full text-sm font-medium border border-[#B8860B]/30 text-[#D4AF37] glow-gold">
                {t("home.badge1")}
              </span>
              <span className="glass-card px-4 py-2 rounded-full text-sm font-medium border border-[#71717A]/30 text-[#C0C0C0] glow-silver">
                {t("home.badge2")}
              </span>
              <span className="glass-card px-4 py-2 rounded-full text-sm font-medium border border-[#22C55E]/30 text-[#22C55E] glow-emerald">
                {t("home.badge3")}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className={`text-5xl md:text-7xl font-bold leading-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {t("home.headline")}{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#C0C0C0] to-[#22C55E] bg-clip-text text-transparent">
                {t("home.headline2")} {t("home.headline3")}
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {t("home.subheadline")}
            </p>

            {/* CTA Button */}
            <div className={`flex justify-center items-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link href="/about#company-overview">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-gradient-to-r from-[#B8860B] to-[#A1A1AA] text-white hover:shadow-[0_8px_30px_rgba(212,175,55,0.4)] transition-all duration-500 group"
                >
                  {t("home.exploreBtn")}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {[
                { value: t("home.stat1.value"), label: t("home.stat1.label") },
                { value: "24h", label: t("home.stat2.label") },
                { value: "10k+", label: t("home.stat3.label") },
                { value: "4.9/5", label: t("home.stat4.label") },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#C0C0C0] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-2 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Cascade Animation */}
      <section id="about" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent" />
        
        <div className="container relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t("home.whyTitle").split("ARKAN Biosciences")[0]}
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#22C55E] bg-clip-text text-transparent">
                ARKAN Biosciences
              </span>
              {t("home.whyTitle").split("ARKAN Biosciences")[1]}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t("home.whySubtitle")}
            </p>
          </motion.div>

          <motion.div 
            ref={featuresRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
          >
            {[
              {
                icon: Sparkles,
                title: t("home.why1.title"),
                description: t("home.why1.desc"),
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028460647/hYXFOPBsEnfTBBEI.png",
                glowClass: "glow-gold",
                color: "#D4AF37",
              },
              {
                icon: Award,
                title: t("home.why2.title"),
                description: t("home.why2.desc"),
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028460647/IHFaVerJwQDphrYC.png",
                glowClass: "glow-silver",
                color: "#C0C0C0",
              },
              {
                icon: Shield,
                title: t("home.why3.title"),
                description: t("home.why3.desc"),
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028460647/HgxcDQSfEnpzKiMH.png",
                glowClass: "glow-emerald",
                color: "#22C55E",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={featureCardVariants}>
                <Card
                  className="glass-card p-8 hover:scale-[1.02] transition-all duration-500 group border-white/10 overflow-hidden relative h-full"
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity duration-500"
                    style={{
                      backgroundImage: `url(${feature.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-[${feature.color}]/20 to-[${feature.color}]/10 flex items-center justify-center mb-6 ${feature.glowClass} group-hover:scale-110 transition-transform duration-500`}>
                      <feature.icon size={32} style={{ color: feature.color }} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section with Cascade Animation */}
      <section id="services" className="relative py-32">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t("home.servicesTitle")}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t("home.servicesSubtitle")}
            </p>
          </motion.div>

          <motion.div 
            ref={servicesRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {[
              {
                icon: Zap,
                title: t("home.service1.title"),
                description: t("home.service1.desc"),
                color: "#D4AF37",
                bgColor: "from-[#D4AF37]/10 to-[#B8860B]/5",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028460647/aVCCvXuUdCJENstM.jpg",
              },
              {
                icon: Shield,
                title: t("home.service2.title"),
                description: t("home.service2.desc"),
                color: "#C0C0C0",
                bgColor: "from-[#C0C0C0]/10 to-[#A1A1AA]/5",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028460647/OjCQczDODTSLLAik.jpg",
              },
              {
                icon: Users,
                title: t("home.service3.title"),
                description: t("home.service3.desc"),
                color: "#22C55E",
                bgColor: "from-[#22C55E]/10 to-[#16A34A]/5",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028460647/cbqvewsbauaMngwS.jpg",
              },
              {
                icon: Award,
                title: t("home.service4.title"),
                description: t("home.service4.desc"),
                color: "#D4AF37",
                bgColor: "from-[#111111]0/10 to-teal-500/5",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028460647/tXMtdrQpTvFbuHwR.jpg",
              },
              {
                icon: Clock,
                title: t("home.service5.title"),
                description: t("home.service5.desc"),
                color: "#C0C0C0",
                bgColor: "from-[#C0C0C0]/10 to-[#71717A]/5",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028460647/KDgpbDDIcunfqroT.jpg",
              },
              {
                icon: Sparkles,
                title: t("home.service6.title"),
                description: t("home.service6.desc"),
                color: "#22C55E",
                bgColor: "from-[#22C55E]/10 to-[#D4AF37]/5",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028460647/lCuYsUrbvzNexDVw.jpg",
              },
            ].map((service, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card
                  className="relative overflow-hidden p-6 hover:shadow-xl transition-all duration-500 group border-white/10 bg-[#0A0A0A]/80 backdrop-blur-sm h-full"
                  style={{
                    minHeight: '200px',
                  }}
                >
                  {/* Background Image with Fade Effect */}
                  <div 
                    className="absolute inset-0 transition-all duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      opacity: 0.08,
                    }}
                  />
                  
                  {/* Gradient Overlay for fade effect */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-60 group-hover:opacity-80 transition-opacity duration-500`}
                  />
                  
                  {/* Radial fade from center */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/50 to-transparent"
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with Reflective Effect */}
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 relative"
                      style={{
                        background: `linear-gradient(135deg, rgba(20,20,20,0.9) 0%, rgba(30,30,30,0.6) 50%, rgba(20,20,20,0.9) 100%)`,
                        boxShadow: `0 4px 20px ${service.color}33, inset 0 1px 0 rgba(212,175,55,0.2)`,
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    >
                      {/* Reflective shine effect */}
                      <div 
                        className="absolute inset-0 rounded-xl overflow-hidden"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, transparent 50%, rgba(255,255,255,0.2) 100%)',
                        }}
                      />
                      {/* Icon reflection/glow */}
                      <div 
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-4 rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity"
                        style={{
                          background: service.color,
                        }}
                      />
                      <service.icon 
                        size={26} 
                        style={{ 
                          color: service.color,
                          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                        }} 
                        className="relative z-10"
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-white drop-shadow-lg shadow-black/20">{service.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                  </div>
                  
                  {/* Hover border glow effect */}
                  <div 
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: `inset 0 0 0 1px ${service.color.replace(')', '/0.3)')}`,
                    }}
                  />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="relative py-32 overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/60" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
          >
            <Card className="glass-card p-12 md:p-16 text-center max-w-4xl mx-auto border-white/10 glow-gold">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {t("home.ctaTitle")}
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                {t("home.ctaSubtitle")}
              </p>
              <div className="flex justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 bg-gradient-to-r from-[#B8860B] to-[#A1A1AA] text-white hover:shadow-[0_8px_30px_rgba(212,175,55,0.4)] transition-all duration-500"
                  >
                    {t("home.ctaContact")}
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
