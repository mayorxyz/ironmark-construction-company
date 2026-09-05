import { Link } from "react-router-dom";
import { Icon, Logo } from "./Icons";
import { COMPANY } from "../data/company";
import { SERVICES } from "../data/services";

const QUICK_LINKS = [
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact & Quotes" },
];

const SOCIALS = [
  { icon: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com" },
  { icon: "instagram", label: "Instagram", href: "https://www.instagram.com" },
  { icon: "facebook", label: "Facebook", href: "https://www.facebook.com" },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink text-white/70">
      <div className="hazard h-1.5" aria-hidden="true" />
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:gap-8">
        <div>
          <Link to="/" className="flex items-center gap-3" aria-label="Ironmark — home">
            <Logo className="h-10 w-10" />
            <span className="leading-none">
              <span className="block font-display text-[17px] font-extrabold tracking-wide text-white">
                IRONMARK
              </span>
              <span className="mt-1 block font-mono text-[9px] tracking-[0.3em] text-white/45 uppercase">
                Construction Group
              </span>
            </span>
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-relaxed">
            {COMPANY.tagline} Commercial, residential, industrial and
            infrastructure construction across the Midwest since 1998.
          </p>
          <p className="mt-5 font-mono text-[11px] tracking-wider text-white/40">
            {COMPANY.license}
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.icon}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-safety hover:text-safety"
              >
                <Icon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer quick links">
          <h3 className="font-mono text-[11px] font-medium tracking-[0.25em] text-safety uppercase">
            Company
          </h3>
          <ul className="mt-5 space-y-3">
            {QUICK_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="group inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
                >
                  <span className="h-px w-3 bg-white/25 transition-all duration-200 group-hover:w-5 group-hover:bg-safety" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer services">
          <h3 className="font-mono text-[11px] font-medium tracking-[0.25em] text-safety uppercase">
            Services
          </h3>
          <ul className="mt-5 space-y-3">
            {SERVICES.slice(0, 5).map((s) => (
              <li key={s.id}>
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
                >
                  <span className="h-px w-3 bg-white/25 transition-all duration-200 group-hover:w-5 group-hover:bg-safety" />
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-mono text-[11px] font-medium tracking-[0.25em] text-safety uppercase">
            Contact
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-safety" />
              <div>
                <a href={COMPANY.phoneHref} className="block font-semibold text-white transition-colors hover:text-safety">
                  {COMPANY.phone}
                </a>
                <span className="text-white/45">Main office</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-safety" />
              <a href={COMPANY.emailHref} className="break-all text-white/70 transition-colors hover:text-white">
                {COMPANY.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-safety" />
              <span className="text-white/70">
                {COMPANY.address[0]}
                <br />
                {COMPANY.address[1]}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-safety" />
              <span className="text-white/70">
                {COMPANY.hours[0]}
                <br />
                {COMPANY.hours[1]}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:flex-row sm:pb-6">
          <p className="font-mono text-[11px] tracking-wider text-white/40">
            © {new Date().getFullYear()} Ironmark Construction Group. All rights reserved.
          </p>
          <div className="flex gap-6 font-mono text-[11px] tracking-wider text-white/40">
            <Link to="/contact" className="transition-colors hover:text-white">
              Request a Quote
            </Link>
            <a href="#/about" className="transition-colors hover:text-white">
              Safety Record
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
