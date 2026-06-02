import { Metadata } from "next";
import { PAGE_METADATA } from "@/lib/metadata";
import { SITE_CONSTANTS } from "@/lib/constants";
import { PROJECTS } from "@/lib/projects";
import WorkFilter from "@/components/work/WorkFilter";

export const metadata: Metadata = PAGE_METADATA.work;

export default function WorkPage() {
  return (
    <section className={`${SITE_CONSTANTS.largeSectionSpacing} pt-32 min-h-screen`}>
      <div className={`${SITE_CONSTANTS.containerWidth} mx-auto px-6`}>
        <WorkFilter projects={PROJECTS} />
      </div>
    </section>
  );
}
