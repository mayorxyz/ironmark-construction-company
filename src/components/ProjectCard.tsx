import { Link } from "react-router-dom";
import { Icon } from "./Icons";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

/** Image-led project card: category tag, hover zoom + dark overlay with View Project. */
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-concrete/30 hover:shadow-[0_18px_40px_rgba(26,26,26,0.14)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-concrete">
        <img
          src={project.image}
          alt={`${project.name} — ${project.category} project in ${project.location}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          style={project.objectPosition ? { objectPosition: project.objectPosition } : undefined}
        />
        <span className="absolute left-4 top-4 bg-steel px-2.5 py-1 font-mono text-[10px] font-medium tracking-[0.18em] text-white uppercase">
          {project.category}
        </span>
        <span className="absolute bottom-0 left-0 h-1 w-0 bg-safety transition-all duration-300 group-hover:w-full" />
        <div className="absolute inset-0 flex items-center justify-center bg-ink/65 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex items-center gap-3 font-display text-[13px] font-bold tracking-[0.2em] text-white uppercase">
            View Project
            <Icon name="arrow-right" className="h-4 w-4 text-safety" />
          </span>
        </div>
      </div>

      <div className="p-5">
        <p className="font-mono text-[10px] tracking-[0.2em] text-muted">
          {project.code} · {project.year}
        </p>
        <h3 className="mt-2 font-display text-lg font-extrabold tracking-tight text-concrete uppercase transition-colors duration-200 group-hover:text-safety">
          {project.name}
        </h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-concrete/60">
          <Icon name="pin" className="h-3.5 w-3.5 text-safety" />
          {project.location}
          <span className="text-concrete/30">·</span>
          {project.sqft} {project.category === "Infrastructure" ? "" : "sq ft"}
        </p>
      </div>
    </Link>
  );
}
