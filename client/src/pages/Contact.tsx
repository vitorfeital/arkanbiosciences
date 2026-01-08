/**
 * Contact Page - Luminous Depth Design
 * Contact form with required fields and reCAPTCHA
 * Colors: Cyan (#4FC3F7), Purple (#7B2CBF), Magenta (#E91E8C)
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { toast } from "sonner";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      render: (container: string | HTMLElement, options: {
        sitekey: string;
        callback: (token: string) => void;
        'expired-callback': () => void;
      }) => number;
      reset: (widgetId?: number) => void;
    };
    onRecaptchaLoad: () => void;
  }
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
  recaptcha?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [recaptchaWidgetId, setRecaptchaWidgetId] = useState<number | null>(null);

  // Load reCAPTCHA script
  useEffect(() => {
    // Check if script already exists
    if (document.querySelector('script[src*="recaptcha"]')) {
      if (window.grecaptcha) {
        setRecaptchaLoaded(true);
      }
      return;
    }

    // Define callback before loading script
    window.onRecaptchaLoad = () => {
      setRecaptchaLoaded(true);
    };

    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup
      window.onRecaptchaLoad = undefined as unknown as () => void;
    };
  }, []);

  // Render reCAPTCHA widget when loaded
  const renderRecaptcha = useCallback(() => {
    if (recaptchaLoaded && window.grecaptcha && recaptchaWidgetId === null) {
      const container = document.getElementById("recaptcha-container");
      if (container && container.childElementCount === 0) {
        try {
          const widgetId = window.grecaptcha.render("recaptcha-container", {
            sitekey: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI", // Google test key for development
            callback: (token: string) => {
              setRecaptchaToken(token);
              setErrors(prev => ({ ...prev, recaptcha: undefined }));
            },
            "expired-callback": () => {
              setRecaptchaToken(null);
            },
          });
          setRecaptchaWidgetId(widgetId);
        } catch (e) {
          console.error("reCAPTCHA render error:", e);
        }
      }
    }
  }, [recaptchaLoaded, recaptchaWidgetId]);

  useEffect(() => {
    if (recaptchaLoaded) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(renderRecaptcha, 100);
      return () => clearTimeout(timer);
    }
  }, [recaptchaLoaded, renderRecaptcha]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    if (!recaptchaToken) {
      newErrors.recaptcha = "Please complete the reCAPTCHA verification";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Message sent successfully!");
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setRecaptchaToken(null);
      if (window.grecaptcha && recaptchaWidgetId !== null) {
        window.grecaptcha.reset(recaptchaWidgetId);
      }
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[url('/images/background.png')] bg-cover bg-fixed bg-center">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-white/80 backdrop-blur-sm border border-[oklch(0.75_0.15_200)]/30 text-[oklch(0.5_0.15_200)] mb-6">
                Contact us
              </span>
              
              <h1 className="text-4xl md:text-6xl font-bold text-[#1A365D] mb-6 font-['Sora']">
                Get in{" "}
                <span className="bg-gradient-to-r from-[#4FC3F7] via-[#7B2CBF] to-[#E91E8C] bg-clip-text text-transparent">
                  Touch!
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Have questions about our research peptides? We're here to help. Fill out the form below and our team will get back to you as soon as possible.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="pb-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Contact Info Cards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Email Card */}
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4FC3F7] to-[#7B2CBF] flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A365D] mb-2 font-['Sora']">Email Us</h3>
                  <p className="text-gray-600 text-sm mb-3">We'll respond within 24 hours</p>
                  <a href="mailto:support@tru-co.com" className="text-[oklch(0.5_0.15_200)] font-medium hover:text-[oklch(0.4_0.18_280)] transition-colors">
                    support@tru-co.com
                  </a>
                </div>

                {/* Location Card */}
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7B2CBF] to-[#E91E8C] flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A365D] mb-2 font-['Sora']">Location</h3>
                  <p className="text-gray-600 text-sm mb-3">Our headquarters</p>
                  <p className="text-gray-700 font-medium">Orlando, FL, USA</p>
                </div>

                {/* Business Hours Card */}
                <div className="bg-gradient-to-br from-[#1A365D] to-[#1e3a5f] rounded-2xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-4 font-['Sora']">Business Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/70">Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Saturday</span>
                      <span>10:00 AM - 2:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-gray-200 shadow-xl">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#4FC3F7] to-[#7B2CBF] flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#1A365D] mb-3 font-['Sora']">Message Sent!</h3>
                      <p className="text-gray-600">Thank you for reaching out. We'll get back to you soon.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Fields */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.15_200)] focus:border-transparent transition-all bg-white/50`}
                            placeholder="John"
                          />
                          {errors.firstName && (
                            <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.15_200)] focus:border-transparent transition-all bg-white/50`}
                            placeholder="Doe"
                          />
                          {errors.lastName && (
                            <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                          )}
                        </div>
                      </div>

                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.15_200)] focus:border-transparent transition-all bg-white/50`}
                          placeholder="john.doe@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>

                      {/* Phone Field */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.15_200)] focus:border-transparent transition-all bg-white/50"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      {/* Message Field */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Your Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[oklch(0.75_0.15_200)] focus:border-transparent transition-all bg-white/50 resize-none`}
                          placeholder="How can we help you?"
                        />
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                        )}
                      </div>

                      {/* reCAPTCHA */}
                      <div>
                        <div id="recaptcha-container" className="flex justify-start"></div>
                        {errors.recaptcha && (
                          <p className="mt-2 text-sm text-red-500">{errors.recaptcha}</p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 text-lg bg-gradient-to-r from-[oklch(0.55_0.18_200)] to-[oklch(0.50_0.20_280)] text-white hover:shadow-[0_8px_30px_rgba(79,195,247,0.4)] transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            Send Message
                            <Send className="w-5 h-5" />
                          </span>
                        )}
                      </Button>

                      <p className="text-xs text-gray-500 text-center">
                        By submitting this form, you agree to our Privacy Policy and Terms of Service.
                      </p>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
