import { Metadata } from "next";
import { PAGE_METADATA } from "@/lib/metadata";
import { SERVICES } from "@/lib/services";
import { SITE_CONSTANTS } from "@/lib/constants";
import ServiceCard from "@/components/services/ServiceCard";

export const metadata: Metadata = PAGE_METADATA.services;

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className={`${SITE_CONSTANTS.containerWidth} mx-auto px-6 mb-20`}>
        <div className="max-w-3xl">
          <span className="font-sans text-xs tracking-[0.3em] text-accent uppercase mb-4 block">
            SERVICES
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Digital Services Built For African Businesses.
          </h1>
          <p className="font-sans text-lg md:text-xl text-text-warm leading-relaxed">
            Professional websites, online systems, and ongoing support designed to help businesses establish credibility and grow online.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className={`${SITE_CONSTANTS.containerWidth} mx-auto px-6`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* Decorative Gold Line */}
      <div className="w-full h-[1px] bg-accent/30 mt-32" />
    </div>
  );
}
