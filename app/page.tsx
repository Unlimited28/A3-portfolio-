import { SITE_CONSTANTS } from "@/lib/constants";

export default function Home() {
  return (
    <section className={`${SITE_CONSTANTS.largeSectionSpacing} flex items-center justify-center min-h-[60vh]`}>
      <div className="text-center px-6">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
          A3 Synergy <br /> Website Foundation
        </h1>
        <p className="font-sans text-text-muted uppercase tracking-widest text-sm max-w-lg mx-auto">
          Slice 1: Production-ready architecture and design system complete.
        </p>
      </div>
    </section>
  );
}
