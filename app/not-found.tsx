import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <span className="font-sans text-xs tracking-[0.3em] text-accent uppercase mb-4">404 ERROR</span>
      <h1 className="font-display text-6xl md:text-8xl font-bold mb-6">Page Not Found</h1>
      <p className="font-sans text-text-warm text-lg mb-12 max-w-md mx-auto">
        The page you are looking for doesn&apos;t exist or has been moved to a new location.
      </p>
      <Link
        href="/"
        className="bg-accent text-bg px-10 py-4 font-sans text-xs tracking-widest uppercase hover:bg-accent-soft transition-colors"
      >
        Return Home
      </Link>

      {/* Decorative background element */}
      <div className="fixed inset-0 pointer-events-none -z-10 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}
