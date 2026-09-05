import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Lightbox from "../components/Lightbox";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { Icon } from "../components/Icons";
import { getProject, relatedProjects } from "../data/projects";
import { usePageTitle } from "../lib/utils";
import NotFound from "./NotFound";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;
  const [lightbox, setLightbox] = useState<number | null>(null);

  usePageTitle(project ? project.name : "Project not found");

  if (!project) return <NotFound />;

  const specs = [
    { label: "Client", value: project.client },
    { label: "Location", value: project.location },
    { label: "Completed", value: project.completion },
    { label: "Size", value: project.sqft + (project.category === "Infrastructure" ? "" : " sq ft") },
    { label: "Value", value: project.value },
    { label: "Type", value: project.type },
  ];

  const narrative = [
    { code: "01", title: "The challenge", body: project.challenge },
    { code: "02", title: "Our solution", body: project.solution },
    { code: "03", title: "The outcome", body: project.outcome },
  ];

  return (
    <>
      {/* --- hero --- */}
      <section className="relative flex min-h-[56vh] flex-col justify-end overflow-hidden bg-ink pt-28 sm:pt-32">
        <img
          src={project.image}
          alt={`${project.name} — ${project.category} project in ${project.location}`}
          className="absolute inset-0 h-full w-full object-cover"
          style={project.objectPosition ? { objectPosition: project.objectPosition } : undefined}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/30" />
        <div className="container-x relative z-10 pb-14">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-steel px-2.5 py-1 font-mono text-[10px] font-medium tracking-[0.18em] text-white uppercase">
                {project.category}
              </span>
              <span className="font-mono text-[11px] tracking-[0.22em] text-white/55 uppercase">
                {project.code}
              </span>
            </div>
            <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.4rem,6vw,4.4rem)] leading-[0.98] font-extrabold tracking-tight text-white uppercase">
              {project.name}
            </h1>
            <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[12px] tracking-[0.18em] text-white/60 uppercase">
              <Icon name="pin" className="h-4 w-4 text-safety" />
              {project.location}
              <span className="text-white/30">·</span>
              Delivered {project.year}
              <span className="text-white/30">·</span>
              {project.value}
            </p>
          </Reveal>
        </div>
        <div className="hazard relative h-1.5" aria-hidden="true" />
      </section>

      {/* --- specs bar --- */}
      <section className="noise relative bg-concrete-deep" aria-label="Project specifications">
        <div className="container-x grid grid-cols-2 gap-px border-y border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-6">
          {specs.map((s) => (
            <div key={s.label} className="bg-concrete-deep px-4 py-6 sm:px-5">
              <p className="font-mono text-[9px] font-medium tracking-[0.22em] text-white/40 uppercase">
                {s.label}
              </p>
              <p className="mt-2 font-display text-[14px] leading-snug font-bold text-white">{s.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- narrative + summary --- */}
      <section className="grid-lines relative bg-cloud py-20 sm:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <SectionHeading code="PRJ-02" label="The build" title="How it came together" />
            <div className="mt-12 space-y-10">
              {narrative.map((n, i) => (
                <Reveal key={n.code} delay={i * 0.1}>
                  <div className="border-l-2 border-safety/40 pl-6 sm:pl-8">
                    <p className="font-mono text-[11px] font-medium tracking-[0.24em] text-safety-dark uppercase">
                      {n.code} — {n.title}
                    </p>
                    <p className="mt-3 text-[15px] leading-relaxed text-concrete/75 sm:text-base">
                      {n.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal delay={0.15}>
              <aside className="border border-line bg-white p-6 sm:p-7">
                <p className="font-mono text-[11px] tracking-[0.24em] text-concrete/45 uppercase">
                  Project brief
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-concrete/75">{project.summary}</p>
                <div className="hazard mt-6 h-1" aria-hidden="true" />
                <p className="mt-6 font-mono text-[11px] tracking-[0.2em] text-concrete/50 uppercase">
                  Delivery model
                </p>
                <p className="mt-2 font-display text-lg font-bold text-concrete">{project.type}</p>
                <Link to="/contact" className="btn-primary mt-7 w-full">
                  Start your project
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Link>
                <Link
                  to="/projects"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 py-2 font-display text-[12px] font-bold tracking-[0.16em] text-steel uppercase transition-colors hover:text-safety"
                >
                  <Icon name="chevron-left" className="h-4 w-4" />
                  Back to all projects
                </Link>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- gallery --- */}
      <section className="relative bg-white py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            code="PRJ-03"
            label="Gallery"
            title="From the field"
            description="Click any frame to open the full-size viewer."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {project.gallery.map((img, i) => (
              <Reveal key={img + i} delay={i * 0.08}>
                <button
                  type="button"
                  onClick={() => setLightbox(i)}
                  className="group relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden border border-line bg-concrete"
                  aria-label={`Open image ${i + 1}: ${project.galleryAlts[i] ?? "project photo"}`}
                >
                  <img
                    src={img}
                    alt={project.galleryAlts[i] ?? `${project.name} photograph`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/45">
                    <span className="flex h-12 w-12 items-center justify-center border border-white/60 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Icon name="layers" className="h-5 w-5" />
                    </span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- features --- */}
      <section className="grid-lines relative border-y border-line bg-cloud py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading code="PRJ-04" label="Highlights" title="Key features" />
          <ul className="mt-12 grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {project.features.map((f, i) => (
              <Reveal key={f} delay={(i % 2) * 0.08}>
                <li className="flex items-start gap-4 border-b border-line pb-5">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-safety/40 bg-safety/10 font-mono text-[10px] font-bold text-safety-dark">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] leading-relaxed text-concrete/80">{f}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* --- testimonial band --- */}
      {project.testimonial && (
        <section className="noise relative bg-concrete-deep py-20">
          <div className="grid-lines-dark absolute inset-0" aria-hidden="true" />
          <div className="container-x relative">
            <Reveal>
              <figure className="mx-auto max-w-3xl text-center">
                <span className="font-display text-6xl leading-none text-safety" aria-hidden="true">
                  “
                </span>
                <blockquote className="-mt-5 text-xl leading-relaxed font-medium text-white sm:text-2xl">
                  {project.testimonial.quote}
                </blockquote>
                <figcaption className="mt-7">
                  <p className="font-display text-[15px] font-bold tracking-wide text-white uppercase">
                    {project.testimonial.name}
                  </p>
                  <p className="mt-1 font-mono text-[11px] tracking-[0.18em] text-white/45 uppercase">
                    {project.testimonial.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>
      )}

      {/* --- related --- */}
      <section className="relative bg-white py-20 sm:py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading code="PRJ-05" label="Keep exploring" title="Related projects" />
            <Reveal delay={0.15}>
              <Link to="/projects" className="link-arrow">
                All projects
                <Icon name="arrow-up-right" className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProjects(project).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox
            images={project.gallery}
            alts={project.galleryAlts}
            index={lightbox}
            onClose={() => setLightbox(null)}
            onNavigate={setLightbox}
          />
        )}
      </AnimatePresence>
    </>
  );
}
