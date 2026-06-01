import { SITE_CONSTANTS } from "@/lib/constants";

export default function PricingPage() {
  return (
    <section className={`${SITE_CONSTANTS.largeSectionSpacing} pt-32`}>
      <div className={`${SITE_CONSTANTS.containerWidth} mx-auto px-6`}>
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-8">Pricing</h1>
        <p className="font-sans text-text-warm max-w-2xl leading-relaxed">
          Package details and transparent pricing will be added in future slices.
        </p>
      </div>
    </section>
  );
}
