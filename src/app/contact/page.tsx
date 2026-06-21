"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { submitContact } from "@/app/actions/contact";
import { Terminal } from "lucide-react";
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
  const [focusedField, setFocusedField] = useState<string | null>(null);

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
        alert("System Error: " + result.error);
      }
    } catch (error) {
      console.error(error);
      alert("Network Error: Could not connect to the database. Make sure Vercel Postgres is connected.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const Cursor = ({ fieldName }: { fieldName: string }) => {
    if (focusedField !== fieldName) return null;
    return (
      <span className="inline-block w-2 h-4 bg-[var(--color-brand-cyan)] animate-pulse ml-1 align-middle" />
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="bg-[var(--color-brand-deep)] pt-20 pb-12 px-6 border-b border-cyan-thin/30">
        <div className="max-w-4xl mx-auto">
          <span className="text-[var(--color-brand-cyan-muted)] text-sm mb-4 block font-mono">
            // sys.connect.module
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase">
            &gt; Initiate Contact
          </h1>
        </div>
      </div>

      <div className="flex-grow max-w-7xl mx-auto w-full px-6 py-20 relative z-10 flex flex-col md:flex-row gap-16">
        
        {/* Form Column */}
        <div className="md:w-2/3">
          <div className="bg-black border border-cyan-thin/30 p-1 mb-8">
            <div className="bg-[var(--color-brand-deep)] border border-cyan-thin/20 p-6 md:p-12 relative overflow-hidden">
              <div className="flex items-center gap-2 text-white/50 text-sm mb-8 font-mono border-b border-cyan-thin/20 pb-4">
                <Terminal className="w-4 h-4" />
                <span>guest@spark-media:~/contact$ ./send_inquiry.sh</span>
              </div>

              {isSuccess ? (
                <div className="text-[var(--color-brand-cyan)] font-mono text-lg flex flex-col gap-4">
                  <p>&gt; Message sent successfully.</p>
                  <p className="text-white/70">&gt; Status: 200 OK</p>
                  <p className="text-white/70">&gt; Estimated response time: &lt; 24 hours</p>
                  <p className="text-white/70">&gt; Connection closed.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 px-6 py-3 border border-cyan-thin text-sm hover:bg-[var(--color-brand-cyan)] hover:text-[var(--color-brand-deep)] transition-colors w-fit"
                  >
                    Send another packet
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 font-mono text-base md:text-lg">
                  {/* Name */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 group">
                    <label className="text-[var(--color-brand-cyan)] whitespace-nowrap min-w-[150px]">
                      name: <Cursor fieldName="name" />
                    </label>
                    <div className="flex-grow">
                      <input
                        {...register("name")}
                        type="text"
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        className={cn(
                          "w-full bg-transparent border-b outline-none transition-colors",
                          errors.name ? "border-red-500 text-red-400" : "border-cyan-thin/30 focus:border-[var(--color-brand-cyan)] text-white"
                        )}
                        placeholder="Enter your name"
                        disabled={isSubmitting}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 group">
                    <label className="text-[var(--color-brand-cyan)] whitespace-nowrap min-w-[150px]">
                      email: <Cursor fieldName="email" />
                    </label>
                    <div className="flex-grow">
                      <input
                        {...register("email")}
                        type="email"
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className={cn(
                          "w-full bg-transparent border-b outline-none transition-colors",
                          errors.email ? "border-red-500 text-red-400" : "border-cyan-thin/30 focus:border-[var(--color-brand-cyan)] text-white"
                        )}
                        placeholder="Enter your email"
                        disabled={isSubmitting}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 group">
                    <label className="text-[var(--color-brand-cyan)] whitespace-nowrap min-w-[150px]">
                      project_type: <Cursor fieldName="projectType" />
                    </label>
                    <div className="flex-grow relative">
                      <select
                        {...register("projectType")}
                        onFocus={() => setFocusedField("projectType")}
                        onBlur={() => setFocusedField(null)}
                        className={cn(
                          "w-full bg-[var(--color-brand-deep)] border-b outline-none transition-colors appearance-none cursor-pointer",
                          errors.projectType ? "border-red-500 text-red-400" : "border-cyan-thin/30 focus:border-[var(--color-brand-cyan)] text-white"
                        )}
                        disabled={isSubmitting}
                      >
                        <option value="">Select a category</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Branding">Branding</option>
                        <option value="Web Design">Web Design</option>
                        <option value="Full Package">Full Package</option>
                      </select>
                      <div className="absolute right-0 top-1 pointer-events-none text-[var(--color-brand-cyan-muted)]">▼</div>
                      {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType.message}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2 group mt-4">
                    <label className="text-[var(--color-brand-cyan)]">
                      message: <Cursor fieldName="message" />
                    </label>
                    <div className="flex-grow">
                      <textarea
                        {...register("message")}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        rows={4}
                        className={cn(
                          "w-full bg-transparent border outline-none transition-colors p-4 resize-none",
                          errors.message ? "border-red-500 text-red-400" : "border-cyan-thin/30 focus:border-[var(--color-brand-cyan)] text-white"
                        )}
                        placeholder="Describe your objectives..."
                        disabled={isSubmitting}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="mt-8 pt-6 border-t border-cyan-thin/30">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-4 bg-[var(--color-brand-cyan)] text-[var(--color-brand-deep)] font-bold uppercase tracking-wider hover:bg-white transition-colors duration-200 border border-[var(--color-brand-cyan)] flex items-center justify-center gap-2 group w-full sm:w-auto disabled:opacity-50"
                    >
                      {isSubmitting ? "[Executing...]" : "Execute Request"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Info Column */}
        <div className="md:w-1/3 flex flex-col gap-12 font-mono">
          <div>
            <h3 className="text-[var(--color-brand-cyan-muted)] text-sm uppercase tracking-widest mb-4 border-b border-cyan-thin/20 pb-2">
              // HQ_Coordinates
            </h3>
            <p className="text-lg text-white mb-2">SPARK MEDIA HQ</p>
            <p className="text-white/50 text-sm leading-relaxed">
              127.0.0.1 (Localhost)<br />
              Cyber Hub, Digital District<br />
              New Delhi, IN
            </p>
          </div>

          <div>
            <h3 className="text-[var(--color-brand-cyan-muted)] text-sm uppercase tracking-widest mb-4 border-b border-cyan-thin/20 pb-2">
              // Comms_Channels
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <span className="text-white/50 w-20 inline-block">Email:</span>
                <a href="mailto:hello@sparkmedia.com" className="text-white hover:text-[var(--color-brand-cyan)] transition-colors">hello@sparkmedia.com</a>
              </li>
              <li>
                <span className="text-white/50 w-20 inline-block">Phone:</span>
                <a href="tel:+919876543210" className="text-white hover:text-[var(--color-brand-cyan)] transition-colors">+91 98765 43210</a>
              </li>
            </ul>
          </div>

          <div className="bg-[var(--color-brand-dark)] p-6 border border-cyan-thin/30">
            <h4 className="text-[var(--color-brand-cyan)] font-bold mb-2">SYSTEM_NOTICE</h4>
            <p className="text-sm text-white/70">
              We respond to all qualified inquiries within 24 hours. Priority is given to full package deployments.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
