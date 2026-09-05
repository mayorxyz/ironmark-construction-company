import { Link } from "react-router-dom";
import { Icon } from "../components/Icons";
import { usePageTitle } from "../lib/utils";

export default function NotFound() {
  usePageTitle("404 — Not Found");

  return (
    <section className="noise relative flex min-h-[100svh] flex-col items-start justify-center overflow-hidden bg-concrete-deep pt-24 pb-16">
      <div className="grid-lines-dark absolute inset-0" aria-hidden="true" />
      <div className="container-x relative">
        <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] text-white/55 uppercase">
          <span className="h-2 w-2 bg-safety" aria-hidden="true" />
          Error — 404
        </p>
        <h1 className="mt-6 font-display text-[clamp(3.4rem,11vw,8rem)] leading-[0.95] font-extrabold tracking-tight text-white uppercase">
          Structure
          <span className="block text-safety">not found.</span>
        </h1>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/60">
          The page you're looking for isn't on our drawings. It may have moved, or the link was
          never built. Let's get you back to solid ground.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className="btn-primary">
            Back to home
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
          <Link to="/projects" className="btn-outline-light">
            Browse projects
          </Link>
        </div>
      </div>
      <div className="hazard absolute inset-x-0 bottom-0 h-1.5" aria-hidden="true" />
    </section>
  );
}
