/**
 * Home Page - Light Theme with Molecular Background
 * Clean, professional design with dark text on light background
 * Vibrant accent colors from brand (cyan, purple, magenta)
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowRight, Award, Clock, Shield, Sparkles, Users, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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

            {/* CTA Button - Only one button now */}
            <div className={`flex justify-center items-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link href="/about#company-overview">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-gradient-to-r from-[oklch(0.55_0.18_200)] to-[oklch(0.50_0.20_280)] text-white hover:shadow-[0_8px_30px_rgba(79,195,247,0.4)] transition-all duration-500 group"
                >
                  What does we do?
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

      {/* Features Section */}
      <section id="about" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/60" />
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[oklch(0.50_0.20_200)] to-[oklch(0.50_0.25_340)] bg-clip-text text-transparent">
                Tru & Co
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Proven excellence in every aspect of our work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <Card
                key={index}
                className="glass-card p-8 hover:scale-[1.02] transition-all duration-500 group border-gray-200 overflow-hidden relative"
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
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Services
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Complete solutions for all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Fast Delivery",
                description: "24h processing with real-time tracking",
                color: "oklch(0.50_0.20_200)",
              },
              {
                icon: Shield,
                title: "Total Security",
                description: "Rigorous security and compliance protocols",
                color: "oklch(0.45_0.22_280)",
              },
              {
                icon: Users,
                title: "Dedicated Support",
                description: "Specialized team available to assist",
                color: "oklch(0.50_0.25_340)",
              },
              {
                icon: Award,
                title: "Certifications",
                description: "Guaranteed international quality standards",
                color: "oklch(0.50_0.20_200)",
              },
              {
                icon: Clock,
                title: "Availability",
                description: "Stock always available for immediate delivery",
                color: "oklch(0.45_0.22_280)",
              },
              {
                icon: Sparkles,
                title: "Customization",
                description: "Customized solutions for your needs",
                color: "oklch(0.50_0.25_340)",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="glass-card p-6 hover:border-[oklch(0.55_0.18_200)]/50 transition-all duration-500 group border-gray-200"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-[${service.color}]/20 to-[${service.color}]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon size={24} style={{ color: service.color }} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-700 text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="relative py-32 overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80" />

        <div className="container relative z-10">
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
