import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";
import { SITE_CONSTANTS } from "@/lib/constants";
import CaseStudyHero from "@/components/work/CaseStudyHero";
import ProjectCard from "@/components/ProjectCard";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | A3 Synergy Case Study`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.image }],
    },
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <div className="bg-bg">
      <CaseStudyHero project={project} />

      <section className={`${SITE_CONSTANTS.largeSectionSpacing}`}>
        <div className={`${SITE_CONSTANTS.containerWidth} mx-auto px-6`}>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Main Content */}
            <div className="lg:w-8/12 space-y-24">
              {/* Overview */}
              <div className="space-y-8">
                <h2 className="font-display text-4xl font-bold border-b border-border pb-6">Project Overview</h2>
                <div className="space-y-6 text-text-warm text-lg leading-relaxed">
                  <p>{project.overview}</p>
                  <div>
                    <h3 className="font-sans text-xs uppercase tracking-widest text-accent mb-4">Design Approach</h3>
                    <p className="text-base">{project.designApproach}</p>
                  </div>
                </div>
              </div>

              {/* Features / What We Built */}
              <div className="space-y-8">
                <h2 className="font-display text-4xl font-bold border-b border-border pb-6">What We Built</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {project.deliverables.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 py-2 border-b border-border/50">
                      <span className="text-accent text-lg">✓</span>
                      <span className="font-sans text-text-warm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Build */}
              <div className="space-y-8">
                <h2 className="font-display text-4xl font-bold border-b border-border pb-6">Technical Build</h2>
                <div className="space-y-8">
                  <p className="text-text-warm leading-relaxed">{project.technicalBuild}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 border border-border bg-surface text-text-warm font-sans text-xs uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Result Highlight Box */}
              <div className="bg-accent-dim border border-accent p-8 md:p-12 space-y-4">
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-accent block">Project Result</span>
                <p className="font-display text-2xl md:text-3xl font-bold text-text leading-tight">
                  {project.result}
                </p>
              </div>

              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="space-y-8">
                  <h2 className="font-display text-4xl font-bold border-b border-border pb-6">Project Gallery</h2>
                  <div className="grid grid-cols-1 gap-8">
                    {project.gallery.map((img, idx) => (
                      <div key={idx} className="relative aspect-[16/9] w-full overflow-hidden border border-border">
                        <Image
                          src={img}
                          alt={`${project.title} Preview ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:w-4/12">
              <div className="lg:sticky lg:top-32 space-y-12">
                <div className="space-y-8 p-8 border border-border bg-surface/50">
                  <div className="space-y-6">
                    <div>
                      <span className="font-sans text-[10px] uppercase tracking-widest text-text-muted block mb-1">Client</span>
                      <p className="font-sans text-text font-medium">{project.clientName || project.title}</p>
                    </div>
                    <div>
                      <span className="font-sans text-[10px] uppercase tracking-widest text-text-muted block mb-1">Industry</span>
                      <p className="font-sans text-text font-medium">{project.industry}</p>
                    </div>
                    <div>
                      <span className="font-sans text-[10px] uppercase tracking-widest text-text-muted block mb-1">Service Package</span>
                      <p className="font-sans text-text font-medium">{project.package} Solution</p>
                    </div>
                    <div>
                      <span className="font-sans text-[10px] uppercase tracking-widest text-text-muted block mb-1">Main Stack</span>
                      <p className="font-sans text-text font-medium">{project.stack.join(", ")}</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border space-y-4">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-4 bg-accent text-bg text-center font-bold uppercase tracking-widest text-xs hover:bg-accent-soft transition-colors"
                    >
                      View Live Site
                    </Link>
                    <Link
                      href="/contact"
                      className="block w-full py-4 border border-accent text-accent text-center font-bold uppercase tracking-widest text-xs hover:bg-accent-dim transition-colors group"
                    >
                      Start a Similar Project
                      <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className={`${SITE_CONSTANTS.largeSectionSpacing} border-t border-border bg-surface/30`}>
        <div className={`${SITE_CONSTANTS.containerWidth} mx-auto px-6`}>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-4">
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-accent block">Explore More</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold">Related Projects</h2>
              </div>
              <Link href="/work" className="font-sans text-sm uppercase tracking-widest text-text hover:text-accent transition-colors border-b border-accent pb-1">
                View All Work
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`${SITE_CONSTANTS.largeSectionSpacing} bg-bg relative overflow-hidden`}>
        <div className={`${SITE_CONSTANTS.containerWidth} mx-auto px-6 relative z-10`}>
          <div className="max-w-3xl space-y-8">
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-tight">
              Ready to Build <br />
              <span className="text-accent italic">Something Similar?</span>
            </h2>
            <p className="font-sans text-text-warm text-lg md:text-xl leading-relaxed max-w-2xl">
              Whether you&apos;re launching a hotel, investment group, or growing business, A3 Synergy can help you create a website that builds credibility and drives results.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-block px-10 py-5 bg-accent text-bg font-bold uppercase tracking-[0.2em] text-sm hover:bg-accent-soft transition-all transform hover:-translate-y-1 group"
              >
                Start Your Project
                <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Subtle Background Accent */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      </section>
    </div>
  );
}
