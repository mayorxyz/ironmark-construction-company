import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import ProjectHero from "../components/ProjectHero";
import StatCounter from "../components/StatCounter";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { Icon } from "../components/Icons";
import { PROJECTS, PROJECT_IMAGES } from "../data/projects";
import { SERVICES } from "../data/services";
import { COMPANY, STATS, CLIENTS, TESTIMONIALS, CERTIFICATIONS, SAFETY_METRICS } from "../data/company";
import { daysSince, usePageTitle } from "../lib/utils";

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-safety" fill="currentColor" aria-hidden="true">
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01Z" />
    </svg>
  );
}

function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const t = TESTIMONIALS[index];

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(id);
  }, [paused, index]);

  return (
    <section
      className="noise relative overflow-hidden bg-concrete-deep py-16 sm:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="grid-lines-dark absolute inset-0" aria-hidden="true" />
      <div className="container-x relative">
        <SectionHeading
          dark
          code="SEC-06"
          label="Client Word"
          title="What our clients say"
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="relative min-h-[280px] sm:min-h-[220px]" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: reduce ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduce ? 0 : -14 }}
                transition={{ duration: reduce ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-3xl"
              >
                <span className="font-display text-6xl leading-none text-safety" aria-hidden="true">
                  “
                </span>
                <p className="-mt-6 text-xl leading-relaxed font-medium text-white sm:text-2xl">
                  {t.quote}
                </p>
                <footer className="mt-7 flex flex-wrap items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center bg-steel font-display text-sm font-extrabold text-white">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-display text-[15px] font-bold tracking-wide text-white uppercase">
                      {t.name}
                    </span>
                    <span className="mt-0.5 block font-mono text-[11px] tracking-[0.16em] text-white/45 uppercase">
                      {t.role} · {t.project}
                    </span>
                  </span>
                  <span className="ml-1 flex gap-1" aria-label="Rated 5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} />
                    ))}
                  </span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 cursor-pointer items-center justify-center border border-white/20 text-white/70 transition-colors hover:border-safety hover:text-safety"
            >
              <Icon name="chevron-left" className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === index}
                  className={`h-2 cursor-pointer transition-all duration-300 ${
                    i === index ? "w-8 bg-safety" : "w-2 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % TESTIMONIALS.length)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 cursor-pointer items-center justify-center border border-white/20 text-white/70 transition-colors hover:border-safety hover:text-safety"
            >
              <Icon name="chevron-right" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteCta() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/contact", { state: { email } });
  };

  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <img
        src={PROJECT_IMAGES.crane}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-transparent" />
      <div className="container-x relative">
        <Reveal className="max-w-3xl">
          <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] text-white/60 uppercase">
            <span className="h-2 w-2 bg-safety" aria-hidden="true" />
            SEC-07 / Start the conversation
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,6vw,4.2rem)] leading-[0.98] font-extrabold tracking-tight text-white uppercase">
            Ready to start
            <span className="block text-safety">your project?</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Get a free consultation and quote from our expert team. Tell us what you're building —
            we'll tell you honestly what it takes.
          </p>

          <form onSubmit={submit} className="mt-9 flex max-w-xl flex-col gap-3 sm:flex-row">
            <label htmlFor="cta-email" className="sr-only">
              Email address
            </label>
            <input
              id="cta-email"
              type="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-h-[48px] flex-1 border border-white/25 bg-white/10 px-5 py-3 text-base text-white outline-none backdrop-blur-sm transition-colors placeholder:text-white/40 focus:border-safety sm:text-[15px]"
            />
            <button type="submit" className="btn-primary shrink-0">
              Request Quote
              <Icon name="arrow-right" className="h-4 w-4" />
            </button>
          </form>
          <p className="mt-5 font-mono text-[11px] tracking-[0.2em] text-white/40 uppercase">
            Free consultation · Response within 24 hours · EMR 0.72
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  usePageTitle("Building Tomorrow — Commercial · Industrial · Residential");
  const incidentDays = daysSince(COMPANY.incidentFreeSince);
  const featured = PROJECTS.filter((p) => p.featured);
  const [ctaProject] = featured;

  return (
    <>
      <ProjectHero />

      {/* ---------- stats ---------- */}
      <section className="noise relative bg-concrete-deep" aria-label="Company statistics">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`${i % 2 === 1 ? "border-l border-white/10" : ""} ${
                i > 0 ? "lg:border-l lg:border-white/10" : ""
              } ${i > 1 ? "border-t border-white/10 lg:border-t-0" : ""}`}
            >
              <StatCounter
                icon={s.icon}
                value={s.value}
                prefix={"prefix" in s ? (s.prefix as string) : ""}
                suffix={s.suffix}
                label={s.label}
                delay={i * 100}
              />
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 py-5" aria-label="Clients we build for">
          <div className="overflow-hidden">
            <div className="marquee-track flex w-max">
              {[0, 1].map((dup) => (
                <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
                  {CLIENTS.map((c) => (
                    <span
                      key={`${dup}-${c}`}
                      className="flex items-center gap-6 pl-6 font-mono text-[11px] tracking-[0.28em] whitespace-nowrap text-white/35 uppercase"
                    >
                      {c}
                      <span className="h-1.5 w-1.5 rotate-45 bg-safety/60" aria-hidden="true" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- services ---------- */}
      <section className="grid-lines relative bg-cloud py-16 sm:py-24" id="services">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              code="SEC-02"
              label="Capabilities"
              title="Our services"
              description="Six disciplines, one standard. We self-perform the structure and concrete that drive schedule, and bring prequalified partners for everything else."
            />
            <Reveal delay={0.15}>
              <Link to="/services" className="link-arrow">
                All services
                <Icon name="arrow-up-right" className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 0.1}>
                <Link
                  to="/services"
                  className="group relative block h-full border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-concrete/25 hover:shadow-[0_18px_44px_rgba(26,26,26,0.12)] sm:p-8"
                >
                  <span
                    className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-safety transition-transform duration-300 group-hover:scale-y-100"
                    aria-hidden="true"
                  />
                  <span className="flex items-center justify-between">
                    <span className="flex h-13 w-13 items-center justify-center border border-concrete/15 text-concrete transition-colors duration-300 group-hover:border-safety group-hover:bg-safety group-hover:text-white">
                      <Icon name={s.icon} className="h-6 w-6" />
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-muted">{s.code}</span>
                  </span>
                  <h3 className="mt-6 font-display text-lg font-extrabold tracking-tight text-concrete uppercase">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-concrete/65">{s.short}</p>
                  <span className="link-arrow mt-6">
                    Learn more
                    <Icon
                      name="arrow-right"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- featured projects ---------- */}
      <section className="relative bg-white py-16 sm:py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              code="SEC-03"
              label="Portfolio"
              title="Featured projects"
              description="A cross-section of recent work — towers, hospitals, timber campuses and winter-proof industrial builds."
            />
            <Reveal delay={0.15}>
              <Link to="/projects" className="link-arrow">
                View all projects
                <Icon name="arrow-up-right" className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {ctaProject && (
              <Reveal className="md:col-span-2">
                <Link
                  to={`/projects/${ctaProject.slug}`}
                  className="group relative block overflow-hidden border border-line bg-concrete"
                >
                  <div className="aspect-[16/9] overflow-hidden sm:aspect-[21/9]">
                    <img
                      src={ctaProject.image}
                      alt={`${ctaProject.name} — ${ctaProject.category} in ${ctaProject.location}`}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                  <span className="absolute left-5 top-5 bg-steel px-2.5 py-1 font-mono text-[10px] font-medium tracking-[0.18em] text-white uppercase">
                    {ctaProject.category}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-6 sm:p-8">
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.2em] text-white/50">
                        {ctaProject.code} · {ctaProject.year}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-white uppercase sm:text-4xl">
                        {ctaProject.name}
                      </h3>
                      <p className="mt-2 flex items-center gap-2 text-sm text-white/65">
                        <Icon name="pin" className="h-4 w-4 text-safety" />
                        {ctaProject.location}
                        <span className="text-white/30">·</span>
                        {ctaProject.value} delivered
                      </p>
                    </div>
                    <span className="flex items-center gap-3 border border-white/30 px-5 py-3 font-display text-[12px] font-bold tracking-[0.18em] text-white uppercase opacity-90 transition-all duration-300 group-hover:border-safety group-hover:bg-safety">
                      View project
                      <Icon name="arrow-right" className="h-4 w-4" />
                    </span>
                  </div>
                  <span className="absolute bottom-0 left-0 h-1 w-0 bg-safety transition-all duration-400 group-hover:w-full" />
                </Link>
              </Reveal>
            )}

            {featured.slice(1).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <ProjectCard project={p} />
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <Link
                to="/projects"
                className="group flex h-full min-h-[260px] flex-col justify-between border border-dashed border-concrete/30 bg-cloud p-8 transition-all duration-300 hover:-translate-y-1 hover:border-safety hover:bg-safety"
              >
                <span className="font-mono text-[11px] tracking-[0.24em] text-concrete/50 uppercase transition-colors group-hover:text-white/80">
                  500+ delivered since 1998
                </span>
                <span>
                  <span className="block font-display text-2xl font-extrabold tracking-tight text-concrete uppercase transition-colors group-hover:text-white">
                    Your project
                    <span className="block">goes here.</span>
                  </span>
                  <span className="mt-5 inline-flex items-center gap-3 font-display text-[13px] font-bold tracking-[0.16em] text-safety-dark uppercase transition-colors group-hover:text-white">
                    Browse the portfolio
                    <Icon name="arrow-right" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- safety ---------- */}
      <section className="grid-lines relative border-y border-line bg-cloud py-16 sm:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              code="SEC-04"
              label="Our commitment"
              title="Safety first, always"
              description="Safety outranks schedule on every Ironmark site. Every crew member holds stop-work authority, every supervisor is OSHA 30, and every number below is audited — because trust is built in public."
            />
            <Reveal delay={0.15} className="mt-10">
              <div className="border-l-4 border-safe bg-white p-7 shadow-[0_10px_30px_rgba(26,26,26,0.07)]">
                <p className="font-display text-6xl font-extrabold tracking-tight text-safe tabular-nums sm:text-7xl">
                  {incidentDays.toLocaleString("en-US")}
                </p>
                <p className="mt-2 font-mono text-[11px] font-medium tracking-[0.2em] text-concrete/55 uppercase">
                  Days without a lost-time incident — and counting
                </p>
              </div>
            </Reveal>
            <ul className="mt-9 space-y-4">
              {[
                "Certified safety officer on every active site",
                "40+ hours of annual training per craft professional",
                "OSHA 30 required for every supervisor",
                "Stop-work authority for every crew member — no questions asked",
              ].map((item, i) => (
                <Reveal key={item} delay={0.2 + i * 0.08}>
                  <li className="flex items-start gap-3.5 text-[15px] leading-relaxed text-concrete/75">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-safe/40 bg-safe/10">
                      <Icon name="check" className="h-3.5 w-3.5 text-safe" strokeWidth={2.2} />
                    </span>
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center">
            <Reveal delay={0.1}>
              <p className="font-mono text-[11px] tracking-[0.28em] text-concrete/45 uppercase">
                Certifications & recognition
              </p>
            </Reveal>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {CERTIFICATIONS.map((c, i) => (
                <Reveal key={c.name} delay={0.15 + i * 0.08}>
                  <div className="group h-full border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-safe/50 hover:shadow-[0_14px_34px_rgba(26,26,26,0.1)]">
                    <span className="flex h-12 w-12 items-center justify-center border border-safe/35 bg-safe/10 text-safe">
                      <Icon name={c.icon} className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-[15px] font-extrabold tracking-tight text-concrete uppercase">
                      {c.name}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-concrete/60">{c.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-3 divide-x divide-line border border-line bg-white">
              {SAFETY_METRICS.map((m, i) => (
                <Reveal key={m.label} delay={0.3 + i * 0.08}>
                  <div className="px-3 py-6 text-center sm:px-5">
                    <p className="font-display text-2xl font-extrabold tracking-tight text-safe sm:text-3xl">
                      {m.value}
                    </p>
                    <p className="mt-1.5 font-mono text-[9px] font-medium tracking-[0.16em] text-concrete/55 uppercase sm:text-[10px]">
                      {m.label}
                    </p>
                    <p className="mt-1 hidden text-[11px] text-muted sm:block">{m.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <QuoteCta />
    </>
  );
}
