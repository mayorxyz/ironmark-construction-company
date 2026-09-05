import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { Icon } from "../components/Icons";
import {
  ABOUT_IMAGES,
  CERTIFICATIONS,
  COMMUNITY,
  COMPANY,
  SAFETY_METRICS,
  TEAM,
  TIMELINE,
  VALUES,
} from "../data/company";
import { usePageTitle } from "../lib/utils";

const AWARDS = [
  { year: "2025", title: "Regional Excellence Award", org: "AGC Chapter — Tech Innovation Hub" },
  { year: "2023", title: "Landmark Preservation Commendation", org: "Chicago — Heritage Exchange" },
  { year: "2022", title: "OSHA VPP Star Site", org: "All active Ironmark sites" },
  { year: "2021", title: "Safety Excellence Award", org: "Midwest Builders Alliance — 5th consecutive" },
];

export default function About() {
  usePageTitle("About Us");

  return (
    <>
      <PageHeader
        code="ABT-01"
        label="Who we are"
        title="Built by people who show up"
        description="Twenty-eight years, two regional offices, 280 professionals — and a simple rule that hasn't changed since 1998: say what it costs, build it right, go home safe."
      />

      {/* --- story --- */}
      <section className="grid-lines relative bg-cloud py-20 sm:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="group relative overflow-hidden border border-line">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={ABOUT_IMAGES.team}
                  alt="Ironmark field leaders reviewing blueprints on an active site"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <span className="absolute bottom-0 left-0 bg-ink/85 px-4 py-2 font-mono text-[10px] tracking-[0.2em] text-white/80 uppercase">
                Field leadership — Columbus, 2025
              </span>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              code="ABT-02"
              label="The story"
              title="From a flatbed and two crews"
              description="Frank Delgado started Ironmark in 1998 with one concrete pump and a rule: never tell a client something in the field that the numbers haven't already said. That rule built the open-book reporting, the self-performed concrete, and the safety culture the company runs on today."
            />
            <Reveal delay={0.15}>
              <div className="mt-9 grid grid-cols-3 divide-x divide-line border border-line bg-white">
                {[
                  { v: "280", l: "Professionals" },
                  { v: "12", l: "Self-perform trades" },
                  { v: "2", l: "Regional offices" },
                ].map((s) => (
                  <div key={s.l} className="px-4 py-6 text-center">
                    <p className="font-display text-3xl font-extrabold tracking-tight text-concrete">{s.v}</p>
                    <p className="mt-1 font-mono text-[9px] font-medium tracking-[0.16em] text-muted uppercase sm:text-[10px]">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- timeline --- */}
      <section className="relative bg-white py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            code="ABT-03"
            label="History"
            title="Milestones"
            description="Every era of this company started with a project someone said couldn't be done on schedule."
          />
          <div className="relative mt-14 border-l-2 border-line pl-8 sm:pl-12">
            <div className="space-y-12">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.year} delay={Math.min(i * 0.06, 0.3)}>
                  <div className="relative">
                    <span className="absolute -left-[2.55rem] top-1 h-4 w-4 border-2 border-safety bg-white sm:-left-[3.55rem]" aria-hidden="true" />
                    <p className="font-mono text-sm font-bold tracking-[0.2em] text-safety-dark">{t.year}</p>
                    <h3 className="mt-2 font-display text-xl font-extrabold tracking-tight text-concrete uppercase">
                      {t.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-concrete/65">{t.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- leadership --- */}
      <section className="grid-lines relative border-y border-line bg-cloud py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            code="ABT-04"
            label="Leadership"
            title="The people accountable"
            description="Every project has a name attached to it. These are the ones who answer the phone when it matters."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <div className="group h-full border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(26,26,26,0.12)]">
                  <div className="noise relative flex aspect-[4/3] items-center justify-center bg-concrete-deep">
                    <div className="grid-lines-dark absolute inset-0" aria-hidden="true" />
                    <span className="relative font-display text-6xl font-extrabold tracking-tight text-white/25 transition-colors duration-300 group-hover:text-safety">
                      {m.initials}
                    </span>
                    <span className="absolute bottom-3 right-3 border border-white/20 px-2 py-0.5 font-mono text-[9px] tracking-[0.16em] text-white/55 uppercase">
                      {m.credential}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-extrabold tracking-tight text-concrete">{m.name}</h3>
                    <p className="mt-1 font-mono text-[10px] font-medium tracking-[0.18em] text-safety-dark uppercase">
                      {m.title}
                    </p>
                    <p className="mt-4 text-[13px] leading-relaxed text-concrete/65">{m.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- values --- */}
      <section className="noise relative bg-concrete-deep py-24">
        <div className="grid-lines-dark absolute inset-0" aria-hidden="true" />
        <div className="container-x relative">
          <SectionHeading dark code="ABT-05" label="Values" title="What we won't trade" />
          <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {VALUES.map((v, i) => (
              <Reveal key={v.name} delay={i * 0.07} className="bg-concrete-deep">
                <div className="group h-full bg-concrete-deep p-7 transition-colors duration-300 hover:bg-concrete">
                  <Icon name={v.icon} className="h-7 w-7 text-safety" />
                  <h3 className="mt-5 font-display text-lg font-extrabold tracking-tight text-white uppercase">
                    {v.name}
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/55">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- credentials + safety record --- */}
      <section className="relative bg-white py-20 sm:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              code="ABT-06"
              label="Credentials"
              title="Certifications & awards"
              description="Audited, renewed, and re-earned — credentials we hold current, not trophies on a shelf."
            />
            <div className="mt-10 space-y-3">
              {CERTIFICATIONS.map((c, i) => (
                <Reveal key={c.name} delay={i * 0.07}>
                  <div className="flex items-center gap-5 border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-safe/50 hover:shadow-[0_12px_28px_rgba(26,26,26,0.08)]">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-safe/35 bg-safe/10 text-safe">
                      <Icon name={c.icon} className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-[15px] font-extrabold tracking-tight text-concrete uppercase">
                        {c.name}
                      </h3>
                      <p className="mt-1 text-[13px] text-concrete/60">{c.detail}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
              {AWARDS.map((a, i) => (
                <Reveal key={a.title} delay={0.28 + i * 0.07}>
                  <div className="flex items-center gap-5 border border-line p-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-concrete-deep font-display text-[13px] font-extrabold text-safety">
                      {a.year}
                    </span>
                    <div>
                      <h3 className="font-display text-[15px] font-extrabold tracking-tight text-concrete uppercase">
                        {a.title}
                      </h3>
                      <p className="mt-1 text-[13px] text-concrete/60">{a.org}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading
              code="ABT-07"
              label="Safety record"
              title="The numbers that matter"
              description="We publish our safety record because clients deserve more than a slogan. These figures are updated quarterly and available in full on request."
            />
            <div className="mt-10 grid grid-cols-3 gap-3">
              {SAFETY_METRICS.map((m, i) => (
                <Reveal key={m.label} delay={i * 0.08}>
                  <div className="h-full border border-safe/30 bg-safe/5 p-5 text-center transition-colors duration-300 hover:bg-safe/10">
                    <p className="font-display text-3xl font-extrabold tracking-tight text-safe">{m.value}</p>
                    <p className="mt-2 font-mono text-[9px] font-medium tracking-[0.14em] text-concrete/60 uppercase sm:text-[10px]">
                      {m.label}
                    </p>
                    <p className="mt-1 hidden text-[11px] text-muted lg:block">{m.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.25}>
              <div className="mt-6 border border-line bg-cloud p-7">
                <p className="font-mono text-[11px] tracking-[0.22em] text-concrete/50 uppercase">
                  Active programs
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Site-specific safety plans reviewed weekly with every subcontractor",
                    "Mentored apprenticeship pairs on 100% of self-performed crews",
                    "Quarterly equipment audits with third-party crane certification",
                    "Near-miss reporting with a 48-hour corrective action clock",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm leading-relaxed text-concrete/70">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-safe" strokeWidth={2.2} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- community --- */}
      <section className="grid-lines relative border-t border-line bg-cloud py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            code="ABT-08"
            label="Community"
            title="Where we build, we invest"
            description="A contractor should leave a neighborhood stronger than it found it. Three programs, funded from overhead, not marketing."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {COMMUNITY.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="group h-full border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-safety/50 hover:shadow-[0_16px_36px_rgba(26,26,26,0.1)]">
                  <span className="flex h-12 w-12 items-center justify-center border border-safety/40 bg-safety/10 text-safety-dark transition-colors duration-300 group-hover:bg-safety group-hover:text-white">
                    <Icon name={c.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-extrabold tracking-tight text-concrete uppercase">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-concrete/65">{c.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="noise relative overflow-hidden bg-concrete-deep py-20">
        <img
          src={ABOUT_IMAGES.crane}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="container-x relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <Reveal>
            <p className="kicker">ABT-09 / Join us</p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-extrabold tracking-tight text-white uppercase sm:text-4xl">
              Building a career — or building a project?
            </h2>
            <p className="mt-4 max-w-xl text-[15px] text-white/60">
              We're hiring field leaders, estimators and craft professionals year-round. And if
              you're an owner, the conversation starts the same way: tell us what you're building.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Work with us
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
              <a href={COMPANY.emailHref} className="btn-outline-light">
                Careers inquiry
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
