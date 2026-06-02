"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Loader2, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const SERVICES_OPTIONS = [
  "Business Website Design",
  "Landing Page",
  "Website Redesign",
  "E-Commerce Store",
  "Booking System",
  "SEO Setup",
  "Monthly Maintenance",
  "Brand Identity",
];

const BUDGET_OPTIONS = [
  "Under ₦150,000",
  "₦150,000 – ₦300,000",
  "₦300,000 – ₦600,000",
  "₦600,000 – ₦1,500,000",
  "Above ₦1,500,000",
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Validation
    const newErrors: Record<string, string> = {};
    if (!data.fullName) newErrors.fullName = "Name is required";
    if (!data.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(data.email as string)) {
      newErrors.email = "Invalid email address";
    }
    if (!data.description) newErrors.description = "Project description is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-20 px-6 bg-surface border border-border"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
          <CheckCircle2 className="w-8 h-8 text-accent" />
        </div>
        <h2 className="font-display text-3xl font-bold mb-4 text-text">Message Sent Successfully</h2>
        <p className="font-sans text-text-warm mb-10 max-w-md mx-auto leading-relaxed">
          Thank you for contacting A3 Synergy. We have received your project details and will respond within 24 hours.
        </p>
        <Link
          href="/"
          className="inline-block bg-accent text-bg px-8 py-4 font-sans text-xs tracking-widest uppercase hover:bg-accent-soft transition-colors"
        >
          Return Home →
        </Link>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label htmlFor="fullName" className="block font-sans text-[10px] tracking-widest uppercase text-text-muted">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            className={`w-full bg-surface-alt border-none px-4 py-4 font-sans text-text focus:ring-1 focus:ring-accent outline-none transition-all ${
              errors.fullName ? "ring-1 ring-red-500/50" : ""
            }`}
            placeholder="John Doe"
          />
          {errors.fullName && <p className="text-[10px] text-red-500 uppercase tracking-wider">{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="block font-sans text-[10px] tracking-widest uppercase text-text-muted">
            Email Address <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={`w-full bg-surface-alt border-none px-4 py-4 font-sans text-text focus:ring-1 focus:ring-accent outline-none transition-all ${
              errors.email ? "ring-1 ring-red-500/50" : ""
            }`}
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-[10px] text-red-500 uppercase tracking-wider">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phone */}
        <div className="space-y-2">
          <label htmlFor="phone" className="block font-sans text-[10px] tracking-widest uppercase text-text-muted">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full bg-surface-alt border-none px-4 py-4 font-sans text-text focus:ring-1 focus:ring-accent outline-none transition-all"
            placeholder="+234..."
          />
        </div>

        {/* Business Name */}
        <div className="space-y-2">
          <label htmlFor="businessName" className="block font-sans text-[10px] tracking-widest uppercase text-text-muted">
            Business Name
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            className="w-full bg-surface-alt border-none px-4 py-4 font-sans text-text focus:ring-1 focus:ring-accent outline-none transition-all"
            placeholder="Your Business Ltd."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Service Interested In */}
        <div className="space-y-2">
          <label htmlFor="service" className="block font-sans text-[10px] tracking-widest uppercase text-text-muted">
            Service Interested In
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              className="w-full bg-surface-alt border-none px-4 py-4 font-sans text-text focus:ring-1 focus:ring-accent outline-none appearance-none transition-all"
            >
              <option value="">Select a service</option>
              {SERVICES_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
          </div>
        </div>

        {/* Project Budget */}
        <div className="space-y-2">
          <label htmlFor="budget" className="block font-sans text-[10px] tracking-widest uppercase text-text-muted">
            Project Budget
          </label>
          <div className="relative">
            <select
              id="budget"
              name="budget"
              className="w-full bg-surface-alt border-none px-4 py-4 font-sans text-text focus:ring-1 focus:ring-accent outline-none appearance-none transition-all"
            >
              <option value="">Select a budget range</option>
              {BUDGET_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Project Description */}
      <div className="space-y-2">
        <label htmlFor="description" className="block font-sans text-[10px] tracking-widest uppercase text-text-muted">
          Project Description <span className="text-accent">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          className={`w-full bg-surface-alt border-none px-4 py-4 font-sans text-text focus:ring-1 focus:ring-accent outline-none transition-all resize-none ${
            errors.description ? "ring-1 ring-red-500/50" : ""
          }`}
          placeholder="Tell us about your project, goals, and any specific requirements..."
        />
        {errors.description && <p className="text-[10px] text-red-500 uppercase tracking-wider">{errors.description}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent text-bg py-5 font-sans text-xs tracking-[0.2em] uppercase font-bold hover:bg-accent-soft transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
