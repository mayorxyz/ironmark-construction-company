import { useLocation } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import QuoteForm from "../components/QuoteForm";
import Reveal from "../components/Reveal";
import { Icon } from "../components/Icons";
import { COMPANY } from "../data/company";
import { usePageTitle } from "../lib/utils";

/** Stylized service-area diagram — abstract Midwest grid with city nodes. */
function ServiceAreaMap() {
  const cities = [
    { name: "Minneapolis", x: 42, y: 14 },
    { name: "Milwaukee", x: 66, y: 30 },
    { name: "Chicago", x: 72, y: 42, office: true },
    { name: "Detroit", x: 86, y: 36 },
    { name: "Columbus", x: 78, y: 58, hq: true },
    { name: "Indianapolis", x: 62, y: 62 },
    { name: "St. Louis", x: 42, y: 72 },
    { name: "Cincinnati", x: 70, y: 74 },
  ];
  return (
    <div className="relative overflow-hidden border border-line bg-white">
      <svg viewBox="0 0 100 90" className="w-full" role="img" aria-label="Map of Ironmark service area across the Midwest">
        <defs>
          <pattern id="mapgrid" width="5" height="5" patternUnits="userSpaceOnUse">
            <path d="M5 0H0V5" fill="none" stroke="#2d2d2d" strokeOpacity="0.07" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100" height="90" fill="url(#mapgrid)" />
        {/* range ring around HQ */}
        <circle cx="78" cy="58" r="26" fill="none" stroke="#FF6B35" strokeOpacity="0.25" strokeWidth="0.5" strokeDasharray="2 1.5" />
        <circle cx="78" cy="58" r="14" fill="none" stroke="#FF6B35" strokeOpacity="0.4" strokeWidth="0.5" strokeDasharray="2 1.5" />
        {cities.map((c) => (
          <g key={c.name}>
            <rect
              x={c.x - 1.1}
              y={c.y - 1.1}
              width="2.2"
              height="2.2"
              fill={c.hq ? "#FF6B35" : c.office ? "#4A6FA5" : "#2d2d2d"}
              transform={`rotate(45 ${c.x} ${c.y})`}
              opacity={c.hq || c.office ? 1 : 0.55}
            />
            <text
              x={c.x + 2.4}
              y={c.y + 1}
              fontSize="2.6"
              fontFamily="JetBrains Mono, monospace"
              fill="#2d2d2d"
              opacity={c.hq || c.office ? 0.9 : 0.5}
            >
              {c.name}
            </text>
          </g>
        ))}
      </svg>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line px-5 py-3.5 font-mono text-[10px] tracking-[0.16em] text-concrete/55 uppercase">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rotate-45 bg-safety" /> HQ — Columbus
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rotate-45 bg-steel" /> Regional office
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rotate-45 bg-concrete/55" /> Active markets
        </span>
      </div>
    </div>
  );
}

export default function Contact() {
  usePageTitle("Contact & Quotes");
  const location = useLocation();
  const prefillEmail = (location.state as { email?: string } | null)?.email ?? "";

  return (
    <>
      <PageHeader
        code="CNT-01"
        label="Contact & quotes"
        title="Get in touch"
        description="Tell us what you're building and we'll tell you what it takes — honestly. Quotes are free, consultations are free, and we respond within one business day."
      />

      {/* emergency strip */}
      <div className="border-b border-safety/30 bg-safety/10">
        <div className="container-x flex flex-wrap items-center justify-between gap-3 py-4">
          <p className="flex items-center gap-3 text-[15px] font-semibold text-concrete">
            <Icon name="alert" className="h-5 w-5 text-safety-dark" strokeWidth={2} />
            Urgent site matter? Our emergency line is staffed 24/7.
          </p>
          <a
            href={COMPANY.emergencyHref}
            className="inline-flex items-center gap-2 font-display text-[13px] font-bold tracking-[0.14em] text-safety-dark uppercase transition-colors hover:text-concrete"
          >
            <Icon name="phone" className="h-4 w-4" />
            {COMPANY.emergencyPhone}
          </a>
        </div>
      </div>

      <section className="grid-lines relative bg-cloud py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
          {/* --- left: info --- */}
          <div className="space-y-5">
            <Reveal>
              <div className="border border-line bg-white p-6 sm:p-7">
                <h2 className="font-display text-xl font-extrabold tracking-tight text-concrete uppercase">
                  Direct lines
                </h2>
                <ul className="mt-6 space-y-5 text-sm">
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-safety/40 bg-safety/10 text-safety-dark">
                      <Icon name="phone" className="h-5 w-5" />
                    </span>
                    <div>
                      <a href={COMPANY.phoneHref} className="block font-display text-base font-bold text-concrete transition-colors hover:text-safety-dark">
                        {COMPANY.phone}
                      </a>
                      <span className="text-concrete/55">Main office — quotes & general</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-safety/40 bg-safety/10 text-safety-dark">
                      <Icon name="mail" className="h-5 w-5" />
                    </span>
                    <div>
                      <a href={COMPANY.emailHref} className="block break-all font-display text-base font-bold text-concrete transition-colors hover:text-safety-dark">
                        {COMPANY.email}
                      </a>
                      <span className="text-concrete/55">Plans, RFPs and preconstruction</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-concrete/15 text-concrete/60">
                      <Icon name="pin" className="h-5 w-5" />
                    </span>
                    <div className="text-concrete/70">
                      {COMPANY.address[0]}
                      <br />
                      {COMPANY.address[1]}
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-concrete/15 text-concrete/60">
                      <Icon name="clock" className="h-5 w-5" />
                    </span>
                    <div className="text-concrete/70">
                      {COMPANY.hours[0]}
                      <br />
                      {COMPANY.hours[1]}
                    </div>
                  </li>
                </ul>
                <div className="hazard mt-7 h-1" aria-hidden="true" />
                <p className="mt-5 flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] text-safe uppercase">
                  <Icon name="check" className="h-4 w-4" strokeWidth={2.2} />
                  We respond within one business day
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="border border-line bg-white p-6 sm:p-7">
                <h3 className="font-mono text-[11px] font-medium tracking-[0.24em] text-concrete/50 uppercase">
                  Service area
                </h3>
                <div className="mt-4">
                  <ServiceAreaMap />
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {COMPANY.serviceAreas.map((c) => (
                    <span
                      key={c}
                      className="border border-line bg-cloud px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] text-concrete/60 uppercase"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* --- right: form --- */}
          <Reveal delay={0.12}>
            <QuoteForm initialEmail={prefillEmail} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
