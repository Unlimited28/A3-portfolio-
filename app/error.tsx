"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <span className="font-sans text-xs tracking-[0.3em] text-accent uppercase mb-4">SYSTEM ERROR</span>
      <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">Something went wrong</h1>
      <p className="font-sans text-text-warm text-lg mb-12 max-w-md mx-auto">
        We encountered an unexpected error. Please try refreshing the page or return to the homepage.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => reset()}
          className="bg-accent text-bg px-10 py-4 font-sans text-xs tracking-widest uppercase hover:bg-accent-soft transition-colors"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="border border-border text-text px-10 py-4 font-sans text-xs tracking-widest uppercase hover:bg-surface transition-colors"
        >
          Return Home
        </Link>
      </div>

      {/* Decorative background element */}
      <div className="fixed inset-0 pointer-events-none -z-10 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}
