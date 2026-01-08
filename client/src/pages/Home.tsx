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

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const servicesRef = useRef(null);
  const featuresRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  
  const fullText = "Lab-Tested Peptides At An Affordable Price";

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
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-[120%] object-cover will-change-transform"
          style={parallaxStyle}
        >
          <source src="/images/hero-video-peptides.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay for better visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
        
        {/* Logo and Text in bottom left corner */}
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 flex items-center gap-4 md:gap-6">
          {/* Logo with subtle glow pulse effect */}
          <div className="relative">
            <img 
              src="/images/logo-symbol.png" 
              alt="Tru & Co" 
              className="w-16 md:w-20 lg:w-24 drop-shadow-2xl animate-[subtleGlow_3s_ease-in-out_infinite]"
            />
          </div>
          
          {/* Typewriter text effect */}
          <div className="overflow-hidden min-w-[200px] md:min-w-[400px] lg:min-w-[500px]">
            <p 
              className="text-white text-lg md:text-2xl lg:text-3xl font-bold font-['Sora'] tracking-wide"
              style={{
                textShadow: '0 0 15px rgba(79, 195, 247, 0.6), 0 0 30px rgba(156, 39, 176, 0.4), 2px 2px 4px rgba(0,0,0,0.5)',
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
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/40" />

        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Badges */}
            <div className={`flex flex-wrap justify-center gap-4 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="glass-card px-4 py-2 rounded-full text-sm font-medium border border-[oklch(0.55_0.18_200)]/30 text-[oklch(0.35_0.18_200)] glow-cyan">
                ISO 9001 Certified
              </span>
              <span className="glass-card px-4 py-2 rounded-full text-sm font-medium border border-[oklch(0.55_0.18_280)]/30 text-[oklch(0.35_0.18_280)] glow-purple">
                99%+ Satisfaction
              </span>
              <span className="glass-card px-4 py-2 rounded-full text-sm font-medium border border-[oklch(0.60_0.22_340)]/30 text-[oklch(0.40_0.22_340)] glow-magenta">
                Global Distribution
              </span>
            </div>

            {/* Main Heading */}
            <h1 className={`text-5xl md:text-7xl font-bold leading-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Global Health.{" "}
              <span className="bg-gradient-to-r from-[oklch(0.50_0.20_200)] via-[oklch(0.45_0.22_280)] to-[oklch(0.50_0.25_340)] bg-clip-text text-transparent">
                True Solutions.
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Trusted source for pharmaceutical-grade research products. Third-party tested, pre-mixed, and ready for laboratory use.
            </p>

            {/* CTA Button */}
            <div className={`flex justify-center items-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link href="/about#company-overview">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-gradient-to-r from-[oklch(0.55_0.18_200)] to-[oklch(0.50_0.20_280)] text-white hover:shadow-[0_8px_30px_rgba(79,195,247,0.4)] transition-all duration-500 group"
                >
                  What do we do?
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {[
                { value: "99%+", label: "Purity Guaranteed" },
                { value: "24h", label: "Dispatch Time" },
                { value: "10k+", label: "Orders Shipped" },
                { value: "4.9/5", label: "Average Rating" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[oklch(0.50_0.20_200)] to-[oklch(0.45_0.22_280)] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 mt-2 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Cascade Animation */}
      <section id="about" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/60" />
        
        <div className="container relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[oklch(0.50_0.20_200)] to-[oklch(0.50_0.25_340)] bg-clip-text text-transparent">
                Tru & Co
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Proven excellence in every aspect of our work
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
                title: "Continuous Innovation",
                description: "We leverage the latest technologies and methodologies to deliver cutting-edge solutions that exceed expectations.",
                image: "/images/feature-innovation.png",
                glowClass: "glow-cyan",
                color: "oklch(0.50_0.20_200)",
              },
              {
                icon: Award,
                title: "Premium Quality",
                description: "Every product undergoes rigorous quality testing, ensuring the highest industry standards are met.",
                image: "/images/feature-quality.png",
                glowClass: "glow-purple",
                color: "oklch(0.45_0.22_280)",
              },
              {
                icon: Shield,
                title: "Total Trust",
                description: "International certifications and transparent processes for your complete security and peace of mind.",
                image: "/images/feature-trust.png",
                glowClass: "glow-magenta",
                color: "oklch(0.50_0.25_340)",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={featureCardVariants}>
                <Card
                  className="glass-card p-8 hover:scale-[1.02] transition-all duration-500 group border-gray-200 overflow-hidden relative h-full"
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
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-700 leading-relaxed">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Services
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Complete solutions for all your needs
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
                title: "Fast Delivery",
                description: "24h processing with real-time tracking",
                color: "oklch(0.50_0.20_200)",
                bgColor: "from-cyan-500/10 to-blue-500/5",
                image: "/images/service-delivery.jpg",
              },
              {
                icon: Shield,
                title: "Total Security",
                description: "Rigorous security and compliance protocols",
                color: "oklch(0.45_0.22_280)",
                bgColor: "from-purple-500/10 to-indigo-500/5",
                image: "/images/service-security.jpg",
              },
              {
                icon: Users,
                title: "Dedicated Support",
                description: "Specialized team available to assist",
                color: "oklch(0.50_0.25_340)",
                bgColor: "from-pink-500/10 to-rose-500/5",
                image: "/images/service-support.jpg",
              },
              {
                icon: Award,
                title: "Certifications",
                description: "Guaranteed international quality standards",
                color: "oklch(0.50_0.20_200)",
                bgColor: "from-cyan-500/10 to-teal-500/5",
                image: "/images/service-certification.jpg",
              },
              {
                icon: Clock,
                title: "Availability",
                description: "Stock always available for immediate delivery",
                color: "oklch(0.45_0.22_280)",
                bgColor: "from-violet-500/10 to-purple-500/5",
                image: "/images/service-availability.jpg",
              },
              {
                icon: Sparkles,
                title: "Customization",
                description: "Customized solutions for your needs",
                color: "oklch(0.50_0.25_340)",
                bgColor: "from-fuchsia-500/10 to-pink-500/5",
                image: "/images/service-customization.jpg",
              },
            ].map((service, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card
                  className="relative overflow-hidden p-6 hover:shadow-xl transition-all duration-500 group border-gray-200/50 bg-white/80 backdrop-blur-sm h-full"
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
                    className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent"
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with Reflective Effect */}
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 relative"
                      style={{
                        background: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.9) 100%)`,
                        boxShadow: `0 4px 20px ${service.color.replace('oklch', 'oklch').replace(')', '/0.3)')}, inset 0 1px 0 rgba(255,255,255,0.8)`,
                        border: '1px solid rgba(255,255,255,0.5)',
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
                    
                    <h3 className="text-xl font-bold mb-2 text-gray-900 drop-shadow-sm">{service.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
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
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
          >
            <Card className="glass-card p-12 md:p-16 text-center max-w-4xl mx-auto border-gray-200 glow-cyan">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Ready to get started?
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Contact us today and discover how we can transform your ideas into reality with our innovative solutions.
              </p>
              <div className="flex justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 bg-gradient-to-r from-[oklch(0.55_0.18_200)] to-[oklch(0.50_0.20_280)] text-white hover:shadow-[0_8px_30px_rgba(79,195,247,0.4)] transition-all duration-500"
                  >
                    Contact Us
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
