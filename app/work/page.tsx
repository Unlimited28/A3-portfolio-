import { SITE_CONSTANTS } from "@/lib/constants";

export default function WorkPage() {
  return (
    <section className={`${SITE_CONSTANTS.largeSectionSpacing} pt-32`}>
      <div className={`${SITE_CONSTANTS.containerWidth} mx-auto px-6`}>
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-8">Work</h1>
        <p className="font-sans text-text-warm max-w-2xl leading-relaxed">
          Case studies and project details will be added in Slice 2.
        </p>
      </div>
    </section>
  );
}
