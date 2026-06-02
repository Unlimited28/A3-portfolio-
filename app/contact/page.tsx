import { Metadata } from "next";
import { PAGE_METADATA } from "@/lib/metadata";
import { SITE_CONSTANTS } from "@/lib/constants";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = PAGE_METADATA.contact;

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      <section className={`${SITE_CONSTANTS.containerWidth} mx-auto px-6`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Header & Info */}
          <div className="lg:col-span-5">
            <span className="font-sans text-xs tracking-[0.3em] text-accent uppercase mb-4 block">
              CONTACT
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Let&apos;s Build Something Great.
            </h1>
            <p className="font-sans text-lg text-text-warm leading-relaxed mb-12">
              Tell us about your project and we&apos;ll respond within 24 hours.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="font-sans text-[10px] tracking-widest uppercase text-text-muted mb-2">Email Us</h4>
                <p className="font-display text-xl">hello@a3synergy.com</p>
              </div>
              <div>
                <h4 className="font-sans text-[10px] tracking-widest uppercase text-text-muted mb-2">WhatsApp</h4>
                <p className="font-display text-xl">+234 801 234 5678</p>
              </div>
              <div>
                <h4 className="font-sans text-[10px] tracking-widest uppercase text-text-muted mb-2">Location</h4>
                <p className="font-display text-xl">Lagos, Nigeria (Remote First)</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-surface p-8 md:p-12 border border-border relative overflow-hidden">
            <ContactForm />

            {/* Decorative noise texture overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay bg-[url('/noise.svg')]" />
          </div>
        </div>
      </section>
    </div>
  );
}
