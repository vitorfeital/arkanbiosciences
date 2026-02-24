/**
 * Contact Page - Luminous Depth Design
 * Contact form with Web3Forms integration and reCAPTCHA
 * Colors: Cyan (#4FC3F7), Purple (#7B2CBF), Magenta (#E91E8C)
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

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
      getResponse: (widgetId?: number) => string;
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

// Web3Forms Access Key - Get yours free at https://web3forms.com
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

export default function Contact() {
  const { t } = useLanguage();
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
    if (document.querySelector('script[src*="recaptcha"]')) {
      if (window.grecaptcha) {
        setRecaptchaLoaded(true);
      }
      return;
    }

    window.onRecaptchaLoad = () => {
      setRecaptchaLoaded(true);
    };

    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      window.onRecaptchaLoad = undefined as unknown as () => void;
    };
  }, []);

  const renderRecaptcha = useCallback(() => {
    if (recaptchaLoaded && window.grecaptcha && recaptchaWidgetId === null) {
      const container = document.getElementById("recaptcha-container");
      if (container && container.childElementCount === 0) {
        try {
          const widgetId = window.grecaptcha.render("recaptcha-container", {
            sitekey: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI", // Google test key - replace with your own
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
      const timer = setTimeout(renderRecaptcha, 100);
      return () => clearTimeout(timer);
    }
  }, [recaptchaLoaded, renderRecaptcha]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = t("contact.error.firstName");
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = t("contact.error.lastName");
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t("contact.error.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("contact.error.emailInvalid");
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t("contact.error.message");
    }
    
    if (!recaptchaToken) {
      newErrors.recaptcha = t("contact.error.recaptcha");
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error(t("contact.toast.fillRequired"));
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
          from_name: "ARKAN Biosciences Website",
          to: "support@arkanbiosciences.com",
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone || "Not provided",
          message: formData.message,
          "g-recaptcha-response": recaptchaToken,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        toast.success(t("contact.toast.success"));
        
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
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(t("contact.toast.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[url('https://files.manuscdn.com/user_upload_by_module/session_file/310419663028460647/CmifYsiIhLUCvNCJ.jpg')] bg-cover bg-fixed bg-center">
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
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-[#0A0A0A]/80 backdrop-blur-sm border border-[#D4AF37]/30 text-[#D4AF37] mb-6">
                {t("contact.title")}
              </span>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Outfit']">
                {t("contact.title").split(" ")[0]}{" "}
                <span className="bg-gradient-to-r from-[#4FC3F7] via-[#7B2CBF] to-[#E91E8C] bg-clip-text text-transparent">
                  {t("contact.title").split(" ").slice(1).join(" ") || "Touch!"}
                </span>
              </h1>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                {t("contact.subtitle")}
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
                <div className="bg-[#0A0A0A]/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4FC3F7] to-[#7B2CBF] flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-['Outfit']">{t("contact.emailLabel")}</h3>
                  <p className="text-gray-400 text-sm mb-3">{t("contact.responseValue")}</p>
                  <a href="mailto:support@arkanbiosciences.com" className="text-[#D4AF37] font-medium hover:text-[#C0C0C0] transition-colors">
                    support@arkanbiosciences.com
                  </a>
                </div>

                {/* Location Card */}
                <div className="bg-[#0A0A0A]/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7B2CBF] to-[#E91E8C] flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-['Outfit']">{t("contact.locationLabel")}</h3>
                  <p className="text-gray-400 text-sm mb-3">{t("contact.locationLabel")}</p>
                  <p className="text-gray-300 font-medium">Orlando, FL, USA</p>
                </div>

                {/* Business Hours Card */}
                <div className="bg-gradient-to-br from-[#1A365D] to-[#1e3a5f] rounded-2xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-4 font-['Outfit']" style={{color: '#06f9d0'}}>{t("contact.hoursLabel")}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/70">{t("contact.hours.monFri")}</span>
                      <span>9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">{t("contact.hours.sat")}</span>
                      <span>10:00 AM - 2:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">{t("contact.hours.sun")}</span>
                      <span>{t("contact.hours.closed")}</span>
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
                <div className="bg-[#0A0A0A]/90 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-white/10 shadow-xl">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#4FC3F7] to-[#7B2CBF] flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 font-['Outfit']">{t("contact.messageSent")}</h3>
                      <p className="text-gray-400">{t("contact.thankYou")}</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Fields */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                            {t("contact.firstName")} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border ${errors.firstName ? 'border-red-500' : 'border-white/15'} focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all bg-[#0A0A0A]/50`}
                            placeholder={t("contact.firstNamePlaceholder")}
                          />
                          {errors.firstName && (
                            <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                            {t("contact.lastName")} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border ${errors.lastName ? 'border-red-500' : 'border-white/15'} focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all bg-[#0A0A0A]/50`}
                            placeholder={t("contact.lastNamePlaceholder")}
                          />
                          {errors.lastName && (
                            <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                          )}
                        </div>
                      </div>

                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          {t("contact.emailAddress")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-white/15'} focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all bg-[#0A0A0A]/50`}
                          placeholder="john.doe@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>

                      {/* Phone Field */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                          {t("contact.phoneNumber")}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-white/15 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all bg-[#0A0A0A]/50"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      {/* Message Field */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                          {t("contact.yourMessage")} <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500' : 'border-white/15'} focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all bg-[#0A0A0A]/50 resize-none`}
                          placeholder={t("contact.messagePlaceholder")}
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
                        className="w-full py-4 text-lg bg-gradient-to-r from-[#B8860B] to-[#A1A1AA] text-white hover:shadow-[0_8px_30px_rgba(212,175,55,0.4)] transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            {t("contact.sending")}
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            {t("contact.send")}
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
