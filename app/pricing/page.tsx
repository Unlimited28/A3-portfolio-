import { Metadata } from "next";
import { PAGE_METADATA } from "@/lib/metadata";
import { PRICING_PACKAGES } from "@/lib/pricing";
import { SITE_CONSTANTS } from "@/lib/constants";
import PricingCard from "@/components/pricing/PricingCard";

export const metadata: Metadata = PAGE_METADATA.pricing;

export default function PricingPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className={`${SITE_CONSTANTS.containerWidth} mx-auto px-6 mb-20 text-center`}>
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            Simple Pricing.<br />
            Professional Results.
          </h1>
          <p className="font-sans text-lg text-text-warm">
            Transparent pricing with no hidden fees.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className={`${SITE_CONSTANTS.containerWidth} mx-auto px-6`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_PACKAGES.map((pkg, index) => (
            <PricingCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>
      </section>

      {/* FAQs or Additional Info can be added here in the future */}
      <section className={`${SITE_CONSTANTS.containerWidth} mx-auto px-6 mt-32 text-center`}>
        <div className="max-w-2xl mx-auto p-10 border border-border bg-surface/50">
          <h3 className="font-display text-2xl font-bold mb-4">Need a custom solution?</h3>
          <p className="font-sans text-text-warm mb-8">
            If your project doesn&apos;t fit these packages, contact us for a custom quote tailored to your specific requirements.
          </p>
          <a href="/contact" className="text-accent border-b border-accent hover:text-accent-soft hover:border-accent-soft transition-colors font-sans text-sm tracking-widest uppercase">
            Request Custom Quote
          </a>
        </div>
      </section>
    </div>
  );
}
