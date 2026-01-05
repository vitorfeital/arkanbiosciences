/**
 * Home Page - Luminous Depth Design Philosophy
 * Atmospheric dark background with glassmorphic elements
 * Glow effects using brand colors (cyan, purple, magenta)
 * Multiple depth layers with transparency and blur
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowRight, Award, Clock, Shield, Sparkles, Users, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[oklch(0.12_0.02_260)] via-[oklch(0.10_0.03_280)] to-[oklch(0.08_0.02_300)] animate-gradient"
          style={{
            backgroundImage: `url(/images/hero-background.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
          }}
        />
        
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[oklch(0.75_0.15_200)] rounded-full blur-[120px] opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[oklch(0.6_0.18_280)] rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Badges */}
            <div className={`flex flex-wrap justify-center gap-4 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="glass-card px-4 py-2 rounded-full text-sm font-medium border border-[oklch(0.75_0.15_200)]/30 glow-cyan">
                Certificado ISO 9001
              </span>
              <span className="glass-card px-4 py-2 rounded-full text-sm font-medium border border-[oklch(0.6_0.18_280)]/30 glow-purple">
                99%+ Satisfação
              </span>
              <span className="glass-card px-4 py-2 rounded-full text-sm font-medium border border-[oklch(0.65_0.22_340)]/30 glow-magenta">
                Distribuição Global
              </span>
            </div>

            {/* Main Heading */}
            <h1 className={`text-5xl md:text-7xl font-bold leading-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Soluções de Precisão para{" "}
              <span className="bg-gradient-to-r from-[oklch(0.75_0.15_200)] via-[oklch(0.6_0.18_280)] to-[oklch(0.65_0.22_340)] bg-clip-text text-transparent">
                Pesquisa Avançada
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Fonte confiável para produtos de qualidade farmacêutica. Testados por terceiros, pré-misturados e prontos para uso em laboratório.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-[oklch(0.75_0.15_200)] to-[oklch(0.6_0.18_280)] hover:shadow-[0_0_40px_rgba(79,195,247,0.5)] transition-all duration-500 group"
              >
                Explorar Catálogo
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 glass-card border-white/20 hover:border-[oklch(0.75_0.15_200)] hover:bg-[oklch(0.75_0.15_200)]/10 transition-all duration-500"
              >
                Ver Certificados
              </Button>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {[
                { value: "99%+", label: "Pureza Garantida" },
                { value: "24h", label: "Tempo de Envio" },
                { value: "10k+", label: "Clientes Atendidos" },
                { value: "4.9/5", label: "Avaliação Média" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[oklch(0.75_0.15_200)] to-[oklch(0.6_0.18_280)] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground/60 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[oklch(0.10_0.03_280)]/50 to-transparent" />
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Por que escolher a{" "}
              <span className="bg-gradient-to-r from-[oklch(0.75_0.15_200)] to-[oklch(0.65_0.22_340)] bg-clip-text text-transparent">
                Tru & Co
              </span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Excelência comprovada em cada aspecto do nosso trabalho
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Inovação Contínua",
                description: "Utilizamos as mais recentes tecnologias e metodologias para entregar soluções de ponta que superam expectativas.",
                image: "/images/feature-innovation.png",
                glowClass: "glow-cyan",
              },
              {
                icon: Award,
                title: "Qualidade Premium",
                description: "Cada produto passa por rigorosos testes de qualidade, garantindo os mais altos padrões da indústria.",
                image: "/images/feature-quality.png",
                glowClass: "glow-purple",
              },
              {
                icon: Shield,
                title: "Confiança Total",
                description: "Certificações internacionais e processos transparentes para sua total segurança e tranquilidade.",
                image: "/images/feature-trust.png",
                glowClass: "glow-magenta",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="glass-card p-8 hover:scale-[1.02] transition-all duration-500 group border-white/10 overflow-hidden relative"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{
                    backgroundImage: `url(${feature.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-[oklch(0.75_0.15_200)]/20 to-[oklch(0.6_0.18_280)]/20 flex items-center justify-center mb-6 ${feature.glowClass} group-hover:scale-110 transition-transform duration-500`}>
                    <feature.icon size={32} className="text-[oklch(0.75_0.15_200)]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos Serviços
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Soluções completas para todas as suas necessidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Entrega Rápida",
                description: "Processamento em 24h com rastreamento em tempo real",
              },
              {
                icon: Shield,
                title: "Segurança Total",
                description: "Protocolos rigorosos de segurança e conformidade",
              },
              {
                icon: Users,
                title: "Suporte Dedicado",
                description: "Equipe especializada disponível para auxiliar",
              },
              {
                icon: Award,
                title: "Certificações",
                description: "Padrões internacionais de qualidade garantidos",
              },
              {
                icon: Clock,
                title: "Disponibilidade",
                description: "Estoque sempre disponível para pronta entrega",
              },
              {
                icon: Sparkles,
                title: "Personalização",
                description: "Soluções customizadas para suas necessidades",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="glass-card p-6 hover:border-[oklch(0.75_0.15_200)]/50 transition-all duration-500 group border-white/10"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[oklch(0.75_0.15_200)]/20 to-[oklch(0.6_0.18_280)]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <service.icon size={24} className="text-[oklch(0.75_0.15_200)]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-foreground/70 text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(/images/cta-background.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.12_0.02_260)] via-[oklch(0.10_0.03_280)]/80 to-[oklch(0.12_0.02_260)]" />

        <div className="container relative z-10">
          <Card className="glass-card p-12 md:p-16 text-center max-w-4xl mx-auto border-white/10 glow-cyan">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para começar?
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco hoje e descubra como podemos transformar suas ideias em realidade com nossas soluções inovadoras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-[oklch(0.75_0.15_200)] to-[oklch(0.6_0.18_280)] hover:shadow-[0_0_40px_rgba(79,195,247,0.5)] transition-all duration-500"
              >
                Fale Conosco
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 glass-card border-white/20 hover:border-[oklch(0.75_0.15_200)] hover:bg-[oklch(0.75_0.15_200)]/10 transition-all duration-500"
              >
                Ver Demonstração
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
