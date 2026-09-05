import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { Icon } from "../components/Icons";
import { FAQS, PROCESS_STEPS, SERVICES } from "../data/services";
import { getProject } from "../data/projects";
import { usePageTitle } from "../lib/utils";

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <div className="border border-line bg-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`faq-${index}`}
        className="flex w-full cursor-pointer items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-cloud"
      >
        <span className="flex items-baseline gap-4">
          <span className="font-mono text-[11px] font-bold text-safety-dark">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-[15px] font-bold tracking-tight text-concrete sm:text-base">
            {q}
          </span>
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center border transition-all duration-300 ${
            open ? "rotate-45 border-safety bg-safety text-white" : "border-concrete/20 text-concrete/50"
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="border-t border-line px-6 py-5 pl-[4.4rem] text-[15px] leading-relaxed text-concrete/70">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Services() {
  usePageTitle("Our Services");

  return (
    <>
      <PageHeader
        code="SVC-00"
        label="What we do"
        title="Our services"
        description="Six disciplines under one roof — each led by superintendents who self-perform the work that drives schedule. Here's exactly what we build, and how."
      />

      {/* --- service categories --- */}
      <section className="relative bg-white">
        {SERVICES.map((s, idx) => (
          <div
            key={s.id}
            className={`border-b border-line py-20 sm:py-24 ${idx % 2 === 1 ? "grid-lines bg-cloud" : "bg-white"}`}
          >
            <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="group relative overflow-hidden border border-line">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={s.image}
                      alt={`${s.title} — Ironmark project work`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <span className="absolute left-0 top-0 bg-safety px-3 py-1.5 font-mono text-[10px] font-bold tracking-[0.2em] text-white">
                    {s.code}
                  </span>
                  <span className="absolute bottom-0 left-0 h-1 w-0 bg-safety transition-all duration-500 group-hover:w-full" />
                </div>
              </Reveal>

              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <Reveal>
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center border border-safety/40 bg-safety/10 text-safety-dark">
                      <Icon name={s.icon} className="h-6 w-6" />
                    </span>
                    <h2 className="font-display text-3xl font-extrabold tracking-tight text-concrete uppercase sm:text-4xl">
                      {s.title}
                    </h2>
                  </div>
                </Reveal>
                {s.long.map((p) => (
                  <Reveal key={p.slice(0, 24)} delay={0.1}>
                    <p className="mt-5 text-[15px] leading-relaxed text-concrete/70">{p}</p>
                  </Reveal>
                ))}
                <Reveal delay={0.15}>
                  <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-concrete/75">
                        <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-safety" strokeWidth={2.2} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={0.2}>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    {s.projectSlugs.map((slug) => {
                      const p = getProject(slug);
                      return p ? (
                        <Link
                          key={slug}
                          to={`/projects/${slug}`}
                          className="group/chip flex items-center gap-2 border border-steel/40 bg-steel/10 px-3.5 py-2 font-mono text-[11px] tracking-[0.14em] text-steel uppercase transition-all duration-200 hover:border-steel hover:bg-steel hover:text-white"
                        >
                          {p.name}
                          <Icon name="arrow-up-right" className="h-3.5 w-3.5" />
                        </Link>
                      ) : null;
                    })}
                    <Link to="/contact" className="link-arrow ml-auto">
                      Get a quote
                      <Icon name="arrow-right" className="h-4 w-4" />
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* --- process --- */}
      <section className="noise relative bg-concrete-deep py-24">
        <div className="grid-lines-dark absolute inset-0" aria-hidden="true" />
        <div className="container-x relative">
          <SectionHeading
            dark
            code="PRC-01"
            label="Method"
            title="How we work"
            description="Five phases, zero mystery. You'll know where the project stands at the end of every single one."
          />
          <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.08} className="bg-concrete-deep">
                <div className="group h-full bg-concrete-deep p-7 transition-colors duration-300 hover:bg-concrete">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-extrabold text-white/15 transition-colors duration-300 group-hover:text-safety">
                      {step.num}
                    </span>
                    <Icon name={step.icon} className="h-6 w-6 text-safety" />
                  </div>
                  <h3 className="mt-6 font-display text-[15px] font-extrabold tracking-wide text-white uppercase">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/55">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="grid-lines relative bg-cloud py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <SectionHeading
              code="FAQ-01"
              label="Straight answers"
              title="Common questions"
              description="The questions every owner asks before signing — answered the way we'd want them answered."
            />
            <Reveal delay={0.2} className="mt-10">
              <div className="border border-line bg-white p-7">
                <p className="font-mono text-[11px] tracking-[0.22em] text-concrete/45 uppercase">
                  Still deciding?
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-concrete/70">
                  Send us the napkin sketch. We'll give you an honest read on feasibility before you
                  spend anything on design.
                </p>
                <Link to="/contact" className="btn-primary mt-6">
                  Schedule consultation
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <FaqItem q={f.q} a={f.a} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- final CTA --- */}
      <section className="noise relative overflow-hidden bg-safety py-20">
        <div className="container-x relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <Reveal>
            <p className="font-mono text-[11px] font-bold tracking-[0.28em] text-ink/70 uppercase">
              Ready when you are
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink uppercase sm:text-5xl">
              Let's price your project.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] font-medium text-ink/75">
              Free consultation, open-book numbers, and an honest schedule — usually within one
              business day.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              to="/contact"
              className="inline-flex min-h-[52px] items-center gap-3 bg-ink px-8 py-4 font-display text-[13px] font-bold tracking-[0.16em] text-white uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-concrete-deep"
            >
              Get a free quote
              <Icon name="arrow-right" className="h-4 w-4 text-safety" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
