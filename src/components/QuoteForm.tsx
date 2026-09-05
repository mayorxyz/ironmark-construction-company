import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Icon } from "./Icons";
import { COMPANY } from "../data/company";

type Status = "idle" | "submitting" | "success";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  projectLocation: string;
  budget: string;
  timeline: string;
  description: string;
  source: string;
  fileName: string;
}

const INITIAL: FormData = {
  fullName: "",
  email: "",
  phone: "",
  projectType: "",
  projectLocation: "",
  budget: "",
  timeline: "",
  description: "",
  source: "",
  fileName: "",
};

const PROJECT_TYPES = ["Commercial", "Residential", "Industrial", "Renovation", "Infrastructure", "Other"];
const BUDGETS = ["Under $100k", "$100k – $500k", "$500k – $1M", "$1M – $5M", "$5M+"];
const TIMELINES = ["ASAP", "1 – 3 months", "3 – 6 months", "6+ months", "Planning stage"];
const SOURCES = ["Referral", "Google search", "Social media", "Saw a project / job site", "Advertisement", "Other"];

function validate(d: FormData): Partial<Record<keyof FormData, string>> {
  const errors: Partial<Record<keyof FormData, string>> = {};
  if (d.fullName.trim().length < 2) errors.fullName = "Please enter your full name.";
  if (!/^\S+@\S+\.\S+$/.test(d.email)) errors.email = "Please enter a valid email address.";
  if (d.phone.replace(/\D/g, "").length < 7) errors.phone = "Please enter a valid phone number.";
  if (!d.projectType) errors.projectType = "Select a project type.";
  if (!d.budget) errors.budget = "Select a budget range.";
  if (!d.timeline) errors.timeline = "Select a timeline.";
  if (d.description.trim().length < 20)
    errors.description = "Describe the project in at least 20 characters.";
  return errors;
}

interface QuoteFormProps {
  initialEmail?: string;
}

/** Quote request form with inline validation, loading state and confirmation. */
export default function QuoteForm({ initialEmail = "" }: QuoteFormProps) {
  const [data, setData] = useState<FormData>({ ...INITIAL, email: initialEmail });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [reference, setReference] = useState("");
  const reduce = useReducedMotion();

  const set = (key: keyof FormData, value: string) => {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setStatus("submitting");
    // Simulated submission — wire to a form endpoint / CRM in production.
    setTimeout(() => {
      setReference(`IRN-${String(Date.now()).slice(-6)}`);
      setStatus("success");
    }, 1400);
  };

  if (status === "success") {
    return (
      <div className="border border-safe/40 bg-white p-8 sm:p-10" role="status" aria-live="polite">
        <span className="flex h-14 w-14 items-center justify-center border border-safe bg-safe/10">
          <Icon name="check" className="h-6 w-6 text-safe" strokeWidth={2} />
        </span>
        <h3 className="mt-6 font-display text-2xl font-extrabold tracking-tight text-concrete uppercase">
          Request received
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-concrete/70">
          Your reference number is{" "}
          <span className="bg-cloud px-2 py-0.5 font-mono text-[13px] font-bold text-safety-dark">
            {reference}
          </span>
          . A confirmation email is on its way to <strong>{data.email}</strong>, and a member of our
          preconstruction team will reach out within one business day.
        </p>
        <p className="mt-4 flex items-center gap-2 font-mono text-[12px] tracking-wider text-concrete/50 uppercase">
          <Icon name="phone" className="h-4 w-4 text-safety" />
          Urgent? Call {COMPANY.phone}
        </p>
        <button
          type="button"
          onClick={() => {
            setData(INITIAL);
            setErrors({});
            setStatus("idle");
          }}
          className="btn-outline-dark mt-8"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const err = (key: keyof FormData) =>
    errors[key] ? (
      <p id={`${key}-error`} className="field-error">
        <Icon name="alert" className="h-3.5 w-3.5" strokeWidth={2} />
        {errors[key]}
      </p>
    ) : null;

  const invalid = (key: keyof FormData) => ({
    "aria-invalid": Boolean(errors[key]),
    "aria-describedby": errors[key] ? `${key}-error` : undefined,
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="border border-line bg-white p-6 sm:p-10">
      <div className="flex items-center gap-4">
        <span className="h-2 w-2 bg-safety" aria-hidden="true" />
        <h2 className="font-display text-xl font-extrabold tracking-tight text-concrete uppercase">
          Request a quote
        </h2>
      </div>
      <p className="mt-2 text-sm text-concrete/60">
        Fields marked <span className="text-safety-dark">*</span> are required. We respond within one
        business day.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="field-label">
            Full name <span className="text-safety-dark">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            className="field"
            placeholder="Jordan Alvarez"
            value={data.fullName}
            onChange={(e) => set("fullName", e.target.value)}
            {...invalid("fullName")}
          />
          {err("fullName")}
        </div>
        <div>
          <label htmlFor="email" className="field-label">
            Email <span className="text-safety-dark">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className="field"
            placeholder="jordan@company.com"
            value={data.email}
            onChange={(e) => set("email", e.target.value)}
            {...invalid("email")}
          />
          {err("email")}
        </div>
        <div>
          <label htmlFor="phone" className="field-label">
            Phone <span className="text-safety-dark">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className="field"
            placeholder="(614) 555-0100"
            value={data.phone}
            onChange={(e) => set("phone", e.target.value)}
            {...invalid("phone")}
          />
          {err("phone")}
        </div>
        <div>
          <label htmlFor="projectType" className="field-label">
            Project type <span className="text-safety-dark">*</span>
          </label>
          <select
            id="projectType"
            className="field"
            value={data.projectType}
            onChange={(e) => set("projectType", e.target.value)}
            {...invalid("projectType")}
          >
            <option value="">Select type…</option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {err("projectType")}
        </div>
        <div>
          <label htmlFor="projectLocation" className="field-label">
            Project location
          </label>
          <input
            id="projectLocation"
            type="text"
            className="field"
            placeholder="City, State"
            value={data.projectLocation}
            onChange={(e) => set("projectLocation", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="budget" className="field-label">
            Estimated budget <span className="text-safety-dark">*</span>
          </label>
          <select
            id="budget"
            className="field"
            value={data.budget}
            onChange={(e) => set("budget", e.target.value)}
            {...invalid("budget")}
          >
            <option value="">Select range…</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          {err("budget")}
        </div>
        <div>
          <label htmlFor="timeline" className="field-label">
            Timeline <span className="text-safety-dark">*</span>
          </label>
          <select
            id="timeline"
            className="field"
            value={data.timeline}
            onChange={(e) => set("timeline", e.target.value)}
            {...invalid("timeline")}
          >
            <option value="">Select timeline…</option>
            {TIMELINES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {err("timeline")}
        </div>
        <div>
          <label htmlFor="source" className="field-label">
            How did you hear about us?
          </label>
          <select
            id="source"
            className="field"
            value={data.source}
            onChange={(e) => set("source", e.target.value)}
          >
            <option value="">Select…</option>
            {SOURCES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="description" className="field-label">
          Project description <span className="text-safety-dark">*</span>
        </label>
        <textarea
          id="description"
          rows={6}
          className="field resize-y"
          placeholder="Tell us about the scope, site, goals and any schedule constraints…"
          value={data.description}
          onChange={(e) => set("description", e.target.value)}
          {...invalid("description")}
        />
        {err("description")}
      </div>

      <div className="mt-5">
        <span className="field-label">Plans or drawings (optional)</span>
        <label
          htmlFor="file"
          className="flex min-h-[48px] cursor-pointer items-center justify-between gap-4 border border-dashed border-concrete/30 bg-cloud px-4 py-3 transition-colors hover:border-safety"
        >
          <span className="flex items-center gap-3 text-sm text-concrete/70">
            <Icon name="upload" className="h-5 w-5 text-safety" />
            {data.fileName || "Upload PDF, JPG or PNG — max 25 MB"}
          </span>
          <span className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">Browse</span>
        </label>
        <input
          id="file"
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          className="sr-only"
          onChange={(e) => set("fileName", e.target.files?.[0]?.name ?? "")}
        />
      </div>

      <AnimatePresence>
        <motion.button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary mt-8 w-full disabled:cursor-wait disabled:opacity-80"
          whileHover={reduce ? undefined : { scale: 1.01 }}
          whileTap={reduce ? undefined : { scale: 0.99 }}
        >
          {status === "submitting" ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" />
                <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
              Sending request…
            </>
          ) : (
            <>
              Request my quote
              <Icon name="arrow-right" className="h-4 w-4" />
            </>
          )}
        </motion.button>
      </AnimatePresence>

      <p className="mt-4 text-center font-mono text-[11px] tracking-wider text-muted">
        Free consultation · No obligation · Your plans stay confidential
      </p>
    </form>
  );
}
