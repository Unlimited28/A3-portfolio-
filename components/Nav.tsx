"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS, SITE_CONSTANTS } from "@/lib/constants";
import { overlayVariants } from "@/lib/animations";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface/80 backdrop-blur-lg border-b border-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className={`${SITE_CONSTANTS.containerWidth} mx-auto px-6 flex items-center justify-between`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-accent w-10 h-10 flex items-center justify-center rounded-none transition-transform group-hover:scale-105">
            <span className="font-display font-bold text-bg text-xl">A3</span>
          </div>
          <span className="font-sans font-bold text-text uppercase tracking-widest text-sm md:text-base">
            Synergy
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-sans text-xs uppercase tracking-widest text-text-muted hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="group flex items-center gap-2 border border-accent text-accent px-6 py-2.5 font-sans font-medium text-sm transition-all hover:bg-accent hover:text-bg"
          >
            Start a Project
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        {!isMobileMenuOpen && (
          <button
            className="md:hidden text-text hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-bg z-[60] flex flex-col items-center justify-center p-6"
          >
            <button
              className="absolute top-6 right-6 text-text hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-display text-4xl font-semibold text-text hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-4 flex items-center gap-2 border border-accent text-accent px-8 py-3 font-sans font-bold text-lg transition-all hover:bg-accent hover:text-bg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start a Project
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
