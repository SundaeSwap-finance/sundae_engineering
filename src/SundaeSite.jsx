import React, { useEffect, useRef, useState } from "react";

const CONTACT_EMAIL = "hello@sundae.engineering";

const fitSignals = [
  "Re-architecting a system that has outgrown its first design",
  "Hardening a product ahead of an enterprise security review",
  "Adding observability after silent failures in production",
  "Shipping faster while holding the quality bar",
];

const deliveryPrinciples = [
  {
    term: "Resilience by design",
    detail:
      "Redundancy, observability, and graceful degradation are scoped on day one and built into the first release.",
  },
  {
    term: "Security built into delivery",
    detail:
      "Access boundaries, audit trails, and threat modeling are part of implementation, so security ships with every feature.",
  },
  {
    term: "AI with a human accountable",
    detail:
      "We use AI to move faster, under the same review, test, and sign-off standards as everything else we ship. A person owns every line.",
  },
];

const workSteps = [
  {
    term: "Find the failure modes",
    detail:
      "Before we change anything, we map where the system breaks: single points of failure, silent errors, and the load it has never been tested against.",
  },
  {
    term: "Change it under load",
    detail:
      "We work in small, reversible steps behind redundancy and observability, so the system keeps serving traffic the entire time it is being rebuilt.",
  },
  {
    term: "Leave it measurable",
    detail:
      "You keep the instrumentation, runbooks, and tests to watch the system and catch the next regression yourselves. The system stays yours to run.",
  },
];

function Mark({ className = "" }) {
  return <img src="/sundae-mark.svg" alt="" aria-hidden="true" className={className} />;
}

function SectionMark({ index, label }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-display text-2xl font-semibold leading-none text-accent-ink">{index}</span>
      <span className="mono-label text-fg-muted">{label}</span>
    </div>
  );
}

function encodeForm(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

function ContactForm() {
  const [status, setStatus] = useState("idle");
  const successRef = useRef(null);

  useEffect(() => {
    if (status === "sent") successRef.current?.focus();
  }, [status]);

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "submitting") return;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (data["bot-field"]) return;

    setStatus("submitting");
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm({ "form-name": "contact", ...data }),
      });
      const text = await response.text();
      if (!response.ok || text.includes('<div id="root">')) {
        throw new Error("Form backend not active");
      }
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div ref={successRef} tabIndex={-1} className="panel rounded-card p-8" role="status" aria-live="polite">
        <span className="status-dot" aria-hidden="true" />
        <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-fg">Brief received.</h3>
        <p className="mt-3 max-w-[46ch] leading-7 text-fg-secondary">
          We&rsquo;ve got it. You&rsquo;ll hear back from a real person at{" "}
          <a className="link-accent" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          . You can reach us there directly any time.
        </p>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="panel grid gap-5 rounded-card p-8"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden" aria-hidden="true">
        <label>
          Leave this field empty: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <label className="grid gap-2" htmlFor="name">
        <span className="mono-label text-fg-muted">
          Name <span className="font-normal normal-case tracking-normal">(required)</span>
        </span>
        <input id="name" name="name" autoComplete="name" required aria-required="true" className="field-input" />
      </label>

      <label className="grid gap-2" htmlFor="email">
        <span className="mono-label text-fg-muted">
          Work email <span className="font-normal normal-case tracking-normal">(required)</span>
        </span>
        <input
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          required
          aria-required="true"
          className="field-input"
        />
      </label>

      <label className="grid gap-2" htmlFor="company">
        <span className="mono-label text-fg-muted">Company</span>
        <input id="company" name="company" autoComplete="organization" className="field-input" />
      </label>

      <label className="grid gap-2" htmlFor="message">
        <span className="mono-label text-fg-muted">
          Project brief <span className="font-normal normal-case tracking-normal">(required)</span>
        </span>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-required="true"
          aria-describedby="message-hint"
          className="field-input resize-y"
        />
        <span id="message-hint" className="text-sm leading-6 text-fg-muted">
          What the system does, where the risk is, and the timeline you are working against.
        </span>
      </label>

      {status === "error" ? (
        <p role="alert" className="text-sm leading-6 text-fg-secondary">
          Something went wrong submitting the form. Please email us directly at{" "}
          <a className="link-accent" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      ) : null}

      <button
        type="submit"
        aria-disabled={submitting}
        aria-busy={submitting}
        className={`btn btn-primary mt-2 ${submitting ? "opacity-60" : ""}`}
      >
        {submitting ? "Sending…" : "Send brief"}
      </button>

      <p className="sr-only" role="status" aria-live="polite">
        {submitting ? "Sending your brief…" : ""}
      </p>
    </form>
  );
}

export default function SundaeSite() {
  return (
    <div className="min-h-screen bg-base text-fg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-btn focus:bg-raised focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to main content
      </a>

      <div className="bg-ink px-5 py-2.5 sm:px-8">
        <div className="mx-auto flex w-full max-w-content items-center justify-between gap-4">
          <p className="mono-label flex items-center gap-2.5 text-[var(--ink-contrast-muted)]">
            <span className="status-dot" aria-hidden="true" />
            Available for select engagements
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mono-label text-[var(--ink-contrast-muted)] transition-colors hover:text-accent"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-stroke-subtle bg-[var(--surface-base-trans)] px-5 py-4 backdrop-blur sm:px-8">
        <div className="mx-auto flex w-full max-w-content items-center justify-between gap-5">
          <a href="/" className="flex items-center gap-2.5" aria-label="Sundae Engineering, home">
            <Mark className="h-8 w-8" />
            <span className="font-display text-xl font-semibold tracking-tight text-fg">Sundae Engineering</span>
          </a>
          <nav
            className="nav-pill hidden items-center gap-1 border border-stroke-subtle px-1.5 py-1 md:flex"
            aria-label="Primary"
          >
            <a
              href="#engineer"
              className="nav-pill px-3.5 py-1.5 text-sm text-fg-secondary transition-colors hover:bg-deep hover:text-fg"
            >
              Approach
            </a>
            <a
              href="#work"
              className="nav-pill px-3.5 py-1.5 text-sm text-fg-secondary transition-colors hover:bg-deep hover:text-fg"
            >
              Process
            </a>
            <a
              href="#contact"
              className="nav-pill px-3.5 py-1.5 text-sm text-fg-secondary transition-colors hover:bg-deep hover:text-fg"
            >
              Contact
            </a>
          </nav>
          <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-primary">
            Hire us
          </a>
        </div>
      </header>

      <main id="main" tabIndex={-1} className="focus:outline-none">
        <section className="px-5 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-20">
          <div className="mx-auto w-full max-w-content">
            <p className="mono-label text-fg-muted">For teams where uptime is revenue</p>
            <h1 className="mt-9 max-w-[19ch] text-balance font-display text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[1.04] tracking-tight text-fg">
              We build systems that <span className="marker">stay up</span> under load, failure, and attack.
            </h1>
            <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_0.78fr] lg:items-start">
              <div>
                <p className="max-w-[50ch] text-lg leading-8 text-fg-secondary">
                  We design and build secure, high-availability software that holds when load spikes, a dependency
                  fails, or someone goes looking for a way in.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-primary">
                    Hire us
                  </a>
                  <a href="#contact" className="btn btn-ghost">
                    Send a brief
                  </a>
                </div>
              </div>

              <aside aria-labelledby="fit-title" className="panel rounded-card p-7">
                <p className="mono-label text-fg-muted">Where we fit</p>
                <h2 id="fit-title" className="mt-3 font-display text-2xl font-semibold tracking-tight text-fg">
                  We&rsquo;re a fit when you&rsquo;re
                </h2>
                <ul className="mt-5 divide-y divide-stroke-subtle border-t border-stroke-subtle">
                  {fitSignals.map((signal) => (
                    <li key={signal} className="py-3.5 text-[0.95rem] leading-7 text-fg-secondary">
                      {signal}
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section aria-label="What we are built for" className="px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto w-full max-w-content">
            <p className="mx-auto max-w-[26ch] text-center font-display text-2xl font-semibold leading-snug tracking-tight text-fg sm:text-3xl">
              We build for the day it all has to hold.
            </p>
          </div>
        </section>

        <section id="engineer" className="border-y border-stroke-subtle bg-deep px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto w-full max-w-content">
            <SectionMark index="01" label="How we engineer" />
            <h2 className="mt-7 max-w-[20ch] font-display text-4xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-5xl">
              Reliability and security are <span className="marker">architecture</span>, set on day one.
            </h2>
            <p className="mt-6 max-w-[60ch] text-lg leading-8 text-fg-secondary">
              We design for the conditions a system meets in production: peak traffic, a strained dependency, an
              untested path. Yours holds when they arrive.
            </p>
            <dl className="mt-12 divide-y divide-stroke-subtle border-y border-stroke-subtle">
              {deliveryPrinciples.map((item) => (
                <div
                  key={item.term}
                  className="grid gap-2 py-7 md:grid-cols-[18rem_1fr] md:items-baseline md:gap-12"
                >
                  <dt className="font-display text-xl font-semibold tracking-tight text-fg">{item.term}</dt>
                  <dd className="max-w-[60ch] leading-8 text-fg-secondary">{item.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="work" className="px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto w-full max-w-content">
            <SectionMark index="02" label="How we work" />
            <h2 className="mt-7 max-w-[22ch] font-display text-4xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-5xl">
              We rebuild running systems <span className="marker">while they stay live</span>.
            </h2>
            <p className="mt-6 max-w-[62ch] text-lg leading-8 text-fg-secondary">
              Most of our work is the same shape: a system that has to keep serving traffic while we re-architect it
              underneath.
            </p>
            <ol className="mt-12 border-b border-stroke-subtle">
              {workSteps.map((item, index) => (
                <li
                  key={item.term}
                  className="grid gap-3 border-t border-stroke-subtle py-7 md:grid-cols-[4rem_15rem_1fr] md:items-baseline md:gap-10"
                >
                  <span className="font-display text-3xl font-semibold leading-none text-fg-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-fg">{item.term}</h3>
                  <p className="max-w-[58ch] leading-8 text-fg-secondary">{item.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="border-t border-stroke-subtle bg-deep px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid w-full max-w-content gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <SectionMark index="03" label="Contact" />
              <h2 className="mt-7 max-w-[14ch] font-display text-4xl font-semibold leading-[1.02] tracking-tight text-fg sm:text-6xl">
                Tell us <span className="marker">what has to stay up</span>.
              </h2>
              <p className="mt-6 max-w-[44ch] text-lg leading-8 text-fg-secondary">
                We take on a small number of engagements at a time. Tell us what you&rsquo;re building, where the risk
                is, and the timeline you&rsquo;re working against. Or email us directly at{" "}
                <a className="link-accent" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-stroke-subtle px-5 py-12 sm:px-8">
        <div className="mx-auto flex w-full max-w-content flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Mark className="h-7 w-7" />
            <span className="font-display text-base font-semibold tracking-tight text-fg">Sundae Engineering</span>
          </div>
          <p className="max-w-[40ch] text-sm leading-6 text-fg-muted">
            Senior engineering for the systems a business runs on.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mono-label text-fg-muted transition-colors hover:text-accent-ink"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </footer>
    </div>
  );
}
