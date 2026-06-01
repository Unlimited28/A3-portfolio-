import Link from "next/link";
import { NAV_LINKS, COMPANY_INFO, SITE_CONSTANTS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg pt-16 pb-8">
      <div className={`${SITE_CONSTANTS.containerWidth} mx-auto px-6`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1: Branding */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="bg-accent w-10 h-10 flex items-center justify-center rounded-none transition-transform group-hover:scale-105">
                <span className="font-display font-bold text-bg text-xl">A3</span>
              </div>
              <span className="font-sans font-bold text-text uppercase tracking-widest text-base">
                Synergy
              </span>
            </Link>
            <p className="font-sans text-text-warm max-w-xs leading-relaxed">
              {COMPANY_INFO.tagline}
            </p>
            <p className="font-sans text-text-muted text-xs uppercase tracking-widest">
              {COMPANY_INFO.legal}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-widest text-text font-bold mb-2">
              Navigation
            </h4>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-sans text-text-muted hover:text-accent transition-colors w-fit"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-widest text-text font-bold mb-2">
              Connect
            </h4>
            <div className="space-y-3">
              <div className="flex flex-col">
                <span className="font-sans text-xs text-text-muted uppercase tracking-widest">WhatsApp</span>
                <p className="font-sans text-text-warm">{COMPANY_INFO.whatsapp}</p>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-xs text-text-muted uppercase tracking-widest">Email</span>
                <p className="font-sans text-text-warm">{COMPANY_INFO.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-text-muted uppercase tracking-widest">
            {COMPANY_INFO.copyright}
          </p>
          <p className="font-sans text-xs text-text-muted uppercase tracking-widest">
            {COMPANY_INFO.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
