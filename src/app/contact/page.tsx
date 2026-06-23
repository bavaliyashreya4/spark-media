"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { submitContact } from "@/app/actions/contact";
import { Sparkles, MapPin, Mail, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  projectType: z.string().min(2, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const result = await submitContact(data);
      if (result.success) {
        setIsSuccess(true);
        reset();
      } else {
        alert("Error: " + result.error);
      }
    } catch (error) {
      console.error(error);
      alert("Network Error: Could not connect to the database.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-20 relative">
      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 flex flex-col lg:flex-row gap-16">
        
        {/* Left Column - Copy & Info */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border border-white/10 w-fit"
          >
            <Sparkles className="w-4 h-4 text-[var(--color-brand-pink)]" />
            <span className="text-sm font-semibold text-white/90">Let's talk</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6 leading-tight text-white"
          >
            START A <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-pink)] to-[var(--color-brand-violet)]">
              PROJECT.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/70 mb-12 max-w-md"
          >
            Ready to elevate your brand? Drop us a message and our team will get back to you within 24 hours to discuss how we can create magic together.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-8 text-white"
          >
            <div className="flex items-start gap-4 group">
              <div className="bg-white/10 p-3 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-[var(--color-brand-pink)]" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Global HQ</h3>
                <p className="text-white/60">Cyber Hub, Digital District<br/>New Delhi, IN</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 group">
              <div className="bg-white/10 p-3 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-[var(--color-brand-cyan)]" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Email Us</h3>
                <a href="mailto:hello@sparkmedia.com" className="text-white/60 hover:text-white transition-colors">hello@sparkmedia.com</a>
              </div>
            </div>
            
            <div className="flex items-start gap-4 group">
              <div className="bg-white/10 p-3 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-[var(--color-brand-violet)]" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Call Us</h3>
                <a href="tel:+919876543210" className="text-white/60 hover:text-white transition-colors">+91 98765 43210</a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-1/2"
        >
          <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden shadow-md">
            {/* Form Glow Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-pink)] blur-[100px] opacity-20 pointer-events-none" />
            
            {isSuccess ? (
              <div className="text-center py-16 flex flex-col items-center relative z-10">
                <div className="w-20 h-20 bg-gradient-to-tr from-[var(--color-brand-pink)] to-[var(--color-brand-cyan)] rounded-full flex items-center justify-center mb-6">
                  <Send className="w-10 h-10 text-white ml-2" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
                <p className="text-white/70 mb-8 max-w-xs">We've received your inquiry and will be in touch shortly to start our journey.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold transition-all border border-white/10"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 relative z-10">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-white/90 ml-1">Full Name</label>
                  <input
                    {...register("name")}
                    type="text"
                    className={cn(
                      "w-full bg-white/5 border rounded-2xl outline-none transition-all p-4 text-white placeholder-white/40",
                      errors.name ? "border-red-500/50 bg-red-50 focus:border-red-500" : "border-white/10 focus:border-white focus:bg-white/10"
                    )}
                    placeholder="Jane Doe"
                    disabled={isSubmitting}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1 ml-1">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-white/90 ml-1">Email Address</label>
                  <input
                    {...register("email")}
                    type="email"
                    className={cn(
                      "w-full bg-white/5 border rounded-2xl outline-none transition-all p-4 text-white placeholder-white/40",
                      errors.email ? "border-red-500/50 bg-red-50 focus:border-red-500" : "border-white/10 focus:border-white focus:bg-white/10"
                    )}
                    placeholder="jane@company.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1 ml-1">{errors.email.message}</p>}
                </div>

                {/* Project Type */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-white/90 ml-1">Project Type</label>
                  <div className="relative">
                    <select
                      {...register("projectType")}
                      className={cn(
                        "w-full bg-white/5 border rounded-2xl outline-none transition-all p-4 appearance-none cursor-pointer text-white",
                        errors.projectType ? "border-red-500/50 bg-red-50 focus:border-red-500" : "border-white/10 focus:border-white focus:bg-white/10"
                      )}
                      disabled={isSubmitting}
                    >
                      <option value="" className="bg-[var(--color-brand-surface)] text-white/50">Select what you need help with</option>
                      <option value="Social Media" className="bg-[var(--color-brand-surface)] text-white">Social Media Growth</option>
                      <option value="Branding" className="bg-[var(--color-brand-surface)] text-white">Brand Identity</option>
                      <option value="Web Design" className="bg-[var(--color-brand-surface)] text-white">Web Design & Dev</option>
                      <option value="Full Package" className="bg-[var(--color-brand-surface)] text-white">Full Digital Package</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">▼</div>
                  </div>
                  {errors.projectType && <p className="text-red-400 text-xs mt-1 ml-1">{errors.projectType.message}</p>}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-white/90 ml-1">Project Details</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className={cn(
                      "w-full bg-white/5 border rounded-2xl outline-none transition-all p-4 resize-none text-white placeholder-white/40",
                      errors.message ? "border-red-500/50 bg-red-50 focus:border-red-500" : "border-white/10 focus:border-white focus:bg-white/10"
                    )}
                    placeholder="Tell us about your goals..."
                    disabled={isSubmitting}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1 ml-1">{errors.message.message}</p>}
                </div>

                {/* Submit */}
                <div className="mt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-transparent border border-white/30 text-white font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Sending..." : "Send Request"}
                    {!isSubmitting && <Send className="w-5 h-5" />}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
