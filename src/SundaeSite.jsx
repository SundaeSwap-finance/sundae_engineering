import React, { useEffect, useRef, useState } from "react";

const CONTACT_EMAIL = "hello@sundae.engineering";

const fitSignals = [
  "Re-architecting a system that has outgrown its first design",
  "Hardening a product ahead of an enterprise security review",
  "Adding observability after silent failures in production",
  "Shipping faster without lowering the quality bar",
];

const deliveryPrinciples = [
  {
    term: "Resilience by design",
    detail:
      "Redundancy, observability, and graceful degradation are scoped on day one — not retrofitted after the first outage.",
  },
  {
    term: "Security in the build, not the review",
    detail:
      "Access boundaries, audit trails, and threat modeling are part of implementation — not a compliance pass bolted on before launch.",
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
      "You keep the instrumentation, runbooks, and tests to watch the system and catch the next regression yourselves — not a standing dependency on us.",
  },
];

function Mark({ className = "" }) {
  return <img src="/sundae-mark.svg" alt="" aria-hidden="true" className={className} />;
}

function SectionMark({ index, label }) {
  return (
    <div className="flex items-center gap-3">
      <span className="mono-label text-accent">{index}</span>
      <span className="mono-label text-fg-muted">{label}</span>
    </div>
  );
}

function BriefingRow({ term, children }) {
  return (
    <div className="grid gap-1.5 py-6 md:grid-cols-[16rem_1fr] md:items-baseline md:gap-10">
      <dt className="font-display text-lg font-semibold tracking-tight text-fg">{term}</dt>
      <dd className="max-w-[64ch] leading-7 text-fg-secondary">{children}</dd>
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
      <div ref={successRef} tabIndex={-1} className="panel rounded-control p-8" role="status" aria-live="polite">
        <span className="status-dot" aria-hidden="true" />
        <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-fg">Brief received.</h3>
        <p className="mt-3 max-w-[46ch] leading-7 text-fg-secondary">
          We&rsquo;ve got it. You&rsquo;ll hear back from a person at{" "}
          <a className="font-medium text-accent hover:text-accent-soft" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          , not an autoresponder &mdash; and you can reach us there directly any time.
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
      className="panel grid gap-5 rounded-control p-8"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden" aria-hidden="true">
        <label>
          Leave this field empty: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <label className="grid gap-2 text-sm" htmlFor="name">
        <span className="text-fg-secondary">
          Name <span className="text-fg-muted">(required)</span>
        </span>
        <input id="name" name="name" autoComplete="name" required aria-required="true" className="field-input" />
      </label>

      <label className="grid gap-2 text-sm" htmlFor="email">
        <span className="text-fg-secondary">
          Work email <span className="text-fg-muted">(required)</span>
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

      <label className="grid gap-2 text-sm" htmlFor="company">
        <span className="text-fg-secondary">Company</span>
        <input id="company" name="company" autoComplete="organization" className="field-input" />
      </label>

      <label className="grid gap-2 text-sm" htmlFor="message">
        <span className="text-fg-secondary">
          Project brief <span className="text-fg-muted">(required)</span>
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
        <span id="message-hint" className="text-sm text-fg-muted">
          What the system does, where the risk is, and the timeline you are working against.
        </span>
      </label>

      {status === "error" ? (
        <p role="alert" className="text-sm leading-6 text-fg-secondary">
          Something went wrong submitting the form. Please email us directly at{" "}
          <a className="font-medium text-accent hover:text-accent-soft" href={`mailto:${CONTACT_EMAIL}`}>
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
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-control focus:bg-raised focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to main content
      </a>

      <div className="border-b border-stroke-subtle bg-deep px-5 py-2.5 sm:px-8">
        <div className="mx-auto flex w-full max-w-content items-center justify-between gap-4">
          <p className="mono-label flex items-center gap-2.5 text-fg-secondary">
            <span className="status-dot" aria-hidden="true" />
            Available for select engagements
          </p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="mono-label text-fg-muted transition-colors hover:text-accent">
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-stroke-subtle bg-deep px-5 py-4 sm:px-8">
        <div className="mx-auto flex w-full max-w-content items-center justify-between gap-5">
          <a href="/" className="flex items-center gap-3" aria-label="Sundae Engineering, home">
            <Mark className="h-9 w-9" />
            <span className="font-display text-xl font-semibold tracking-tight text-fg">Sundae Engineering</span>
          </a>
          <div className="flex items-center gap-3">
            <a href="#contact" className="btn btn-ghost hidden sm:inline-flex">
              Contact
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-primary">
              Hire us
            </a>
          </div>
        </div>
      </header>

      <main id="main" tabIndex={-1} className="focus:outline-none">
        <section className="px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto grid w-full max-w-content gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-8">
              <p className="mono-label text-fg-muted">For teams where downtime is a revenue event</p>
              <h1 className="max-w-[18ch] font-display text-[2.25rem] font-bold leading-[1.02] tracking-tight text-fg sm:text-6xl lg:text-7xl">
                We build systems that <span className="text-accent">stay up</span> under load, failure, and attack.
              </h1>
              <p className="max-w-[56ch] text-lg leading-8 text-fg-secondary">
                We design and build secure, high-availability software that holds when load spikes, a dependency fails,
                or someone goes looking for a way in.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-primary">
                  Hire us
                </a>
                <a href="#contact" className="btn btn-ghost">
                  Send a brief
                </a>
              </div>
            </div>

            <aside aria-labelledby="fit-title" className="panel rounded-control p-8">
              <p className="mono-label text-fg-muted">Where we fit</p>
              <h2 id="fit-title" className="mt-3 font-display text-xl font-semibold tracking-tight text-fg">
                We&rsquo;re a fit when you&rsquo;re
              </h2>
              <ul className="mt-6 divide-y divide-stroke-subtle border-t border-stroke-subtle">
                {fitSignals.map((signal) => (
                  <li key={signal} className="py-4 leading-7 text-fg-secondary">
                    {signal}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="border-y border-stroke-subtle bg-deep px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto w-full max-w-content">
            <SectionMark index="01" label="How we engineer" />
            <h2 className="mt-6 max-w-[22ch] font-display text-3xl font-bold tracking-tight text-fg sm:text-5xl">
              Reliability and security are architecture, not a final pass.
            </h2>
            <p className="mt-5 max-w-[64ch] text-lg leading-8 text-fg-secondary">
              The failures that take a system down in production are rarely new. They&rsquo;re the ones no one designed
              for. We design for them first.
            </p>
            <dl className="mt-12 divide-y divide-stroke-subtle border-y border-stroke-subtle">
              {deliveryPrinciples.map((item) => (
                <BriefingRow key={item.term} term={item.term}>
                  {item.detail}
                </BriefingRow>
              ))}
            </dl>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto w-full max-w-content">
            <SectionMark index="02" label="How we work" />
            <h2 className="mt-6 max-w-[20ch] font-display text-3xl font-bold tracking-tight text-fg sm:text-5xl">
              We change running systems without taking them down.
            </h2>
            <p className="mt-5 max-w-[64ch] text-lg leading-8 text-fg-secondary">
              Most of our work is the same shape: a system that has to keep serving traffic while we re-architect it
              underneath.
            </p>
            <dl className="mt-12 divide-y divide-stroke-subtle border-y border-stroke-subtle">
              {workSteps.map((item) => (
                <BriefingRow key={item.term} term={item.term}>
                  {item.detail}
                </BriefingRow>
              ))}
            </dl>
          </div>
        </section>

        <section id="contact" className="border-t border-stroke-subtle bg-deep px-5 py-20 sm:px-8 sm:py-32">
          <div className="mx-auto grid w-full max-w-content gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-6">
              <SectionMark index="03" label="Contact" />
              <h2 className="max-w-[16ch] font-display text-4xl font-bold leading-[1.0] tracking-tight text-fg sm:text-6xl">
                Tell us what can&rsquo;t go down.
              </h2>
              <p className="max-w-[44ch] text-lg leading-8 text-fg-secondary">
                We take on a small number of engagements at a time. Tell us what you&rsquo;re building, where the risk
                is, and the timeline you&rsquo;re working against &mdash; or email us directly at{" "}
                <a className="font-medium text-accent hover:text-accent-soft" href={`mailto:${CONTACT_EMAIL}`}>
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
          <a href={`mailto:${CONTACT_EMAIL}`} className="mono-label text-fg-muted transition-colors hover:text-accent">
            {CONTACT_EMAIL}
          </a>
        </div>
      </footer>
    </div>
  );
}
