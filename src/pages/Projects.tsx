import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";
import { Icon } from "../components/Icons";
import Reveal from "../components/Reveal";
import { CATEGORIES, PROJECTS, type ProjectCategory } from "../data/projects";
import { usePageTitle } from "../lib/utils";

const PAGE_SIZE = 6;

export default function Projects() {
  usePageTitle("Our Projects");
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const reduce = useReducedMotion();

  const filtered = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );

  const shown = filtered.slice(0, visible);

  const changeFilter = (c: ProjectCategory | "All") => {
    setFilter(c);
    setVisible(PAGE_SIZE);
  };

  return (
    <>
      <PageHeader
        code="PRT-01"
        label="Portfolio"
        title="Our projects"
        description="Towers, hospitals, timber campuses, interchanges and foundries — every project delivered on a published schedule and an open-book cost report."
      >
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter projects by category"
        >
          {CATEGORIES.map((c) => {
            const count = c === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === c).length;
            const active = filter === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => changeFilter(c)}
                aria-pressed={active}
                className={`flex min-h-[44px] cursor-pointer items-center gap-2 border px-4 py-2 font-display text-[12px] font-bold tracking-[0.14em] uppercase transition-all duration-200 ${
                  active
                    ? "border-safety bg-safety text-white"
                    : "border-white/20 text-white/70 hover:border-safety hover:text-white"
                }`}
              >
                {c}
                <span
                  className={`font-mono text-[10px] ${active ? "text-white/80" : "text-white/35"}`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </PageHeader>

      <section className="bg-cloud py-16 sm:py-20">
        <div className="container-x">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <p className="font-mono text-[11px] tracking-[0.22em] text-concrete/50 uppercase">
              Showing {shown.length} of {filtered.length} projects
              {filter !== "All" && (
                <span className="text-safety-dark"> · {filter}</span>
              )}
            </p>
            <p className="hidden font-mono text-[11px] tracking-[0.22em] text-muted uppercase sm:block">
              Grid reference — Midwest & beyond
            </p>
          </div>

          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduce ? 0 : 0.3 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {shown.map((p, i) => (
              <Reveal key={p.slug} delay={reduce ? 0 : (i % 3) * 0.07}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </motion.div>

          {visible < filtered.length && (
            <div className="mt-12 text-center">
              <button type="button" onClick={() => setVisible((v) => v + PAGE_SIZE)} className="btn-outline-dark">
                Load more projects
                <Icon name="chevron-down" className="h-4 w-4" />
              </button>
            </div>
          )}

          <div className="mt-20 border border-concrete/15 bg-white p-8 text-center sm:p-12">
            <p className="font-mono text-[11px] tracking-[0.26em] text-concrete/45 uppercase">
              Don't see your project type?
            </p>
            <h2 className="mx-auto mt-4 max-w-xl font-display text-2xl font-extrabold tracking-tight text-concrete uppercase sm:text-3xl">
              If it needs a foundation, we've probably built one.
            </h2>
            <a href="#/contact" className="btn-primary mt-8">
              Start your project
              <Icon name="arrow-right" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
