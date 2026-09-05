import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Icon, Logo } from "./Icons";
import { COMPANY } from "../data/company";
import { useBodyLock } from "../lib/utils";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useBodyLock(open);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-concrete-deep/95 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm"
            : "bg-gradient-to-b from-ink/70 to-transparent"
        }`}
      >
        <nav className="container-x flex h-[72px] items-center justify-between gap-6" aria-label="Primary">
          <Link to="/" className="flex items-center gap-3" aria-label="Ironmark Construction Group — home">
            <Logo className="h-10 w-10" />
            <span className="leading-none">
              <span className="block font-display text-[17px] font-extrabold tracking-wide text-white">
                IRONMARK
              </span>
              <span className="mt-1 block font-mono text-[9px] tracking-[0.3em] text-white/55 uppercase">
                Construction Group
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `group relative py-2 font-display text-[13px] font-bold tracking-[0.14em] uppercase transition-colors duration-200 ${
                    isActive ? "text-safety" : "text-white/80 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-[2px] bg-safety transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
              Get a Quote
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 cursor-pointer items-center justify-center border border-white/25 text-white transition-colors duration-200 hover:border-safety hover:text-safety lg:hidden"
            >
              <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="noise fixed inset-0 z-40 flex flex-col bg-concrete-deep lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
          >
            <div className="grid-lines-dark relative flex flex-1 flex-col justify-center px-8 pt-20">
              <div className="flex flex-col gap-1">
                {LINKS.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={reduce ? false : { opacity: 0, x: -26 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: reduce ? 0 : 0.06 * i + 0.08, duration: 0.4 }}
                  >
                    <NavLink
                      to={l.to}
                      end={l.to === "/"}
                      className={({ isActive }) =>
                        `group flex items-baseline gap-4 border-b border-white/10 py-4 font-display text-3xl font-extrabold tracking-tight uppercase transition-colors ${
                          isActive ? "text-safety" : "text-white hover:text-safety"
                        }`
                      }
                    >
                      <span className="font-mono text-[11px] font-medium text-white/35">
                        0{i + 1}
                      </span>
                      {l.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-10 flex flex-col gap-4"
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduce ? 0 : 0.42, duration: 0.4 }}
              >
                <Link to="/contact" className="btn-primary w-full">
                  Get a Quote
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Link>
                <div className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-[12px] tracking-wider text-white/50">
                  <a href={COMPANY.phoneHref} className="transition-colors hover:text-safety">
                    {COMPANY.phone}
                  </a>
                  <a href={COMPANY.emailHref} className="transition-colors hover:text-safety">
                    {COMPANY.email}
                  </a>
                </div>
              </motion.div>
            </div>
            <div className="hazard h-2" aria-hidden="true" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
