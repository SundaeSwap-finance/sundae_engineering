import React from "react";

const deliveryPrinciples = [
  {
    label: "Resilience-first architecture",
    value: "Designed for uptime under pressure",
    detail: "Redundancy, observability, and graceful degradation are scoped from day one.",
  },
  {
    label: "Security built into delivery",
    value: "No bolt-on compliance theater",
    detail: "Access boundaries, audit trails, and threat modeling are integrated into implementation.",
  },
  {
    label: "AI acceleration with guardrails",
    value: "Higher velocity without quality drift",
    detail: "AI is used intentionally with review standards, test rigor, and human accountability.",
  },
];

const engagementScope = [
  ["Challenge", "Eliminate single points of failure while maintaining performance."],
  ["Approach", "Redesigned system architecture with redundancy, observability, and failure isolation."],
  ["Outcome", "Improved system resilience and sustained uptime under peak load conditions."],
];

function handleContactSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const name = (formData.get("name") || "").toString().trim();
  const email = (formData.get("email") || "").toString().trim();
  const company = (formData.get("company") || "").toString().trim();
  const message = (formData.get("message") || "").toString().trim();

  const subject = encodeURIComponent(`Sundae Engineering inquiry${company ? ` - ${company}` : ""}`);
  const body = encodeURIComponent(
    [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      "",
      "Project details:",
      message,
    ]
      .filter(Boolean)
      .join("\n")
  );

  window.location.href = `mailto:hello@sundae.engineering?subject=${subject}&body=${body}`;
}

export default function SundaeSite() {
  return (
    <div className="site-shell min-h-screen text-[var(--text-primary)]">
      <a
        href="#contact"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-[var(--surface-raised)] focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to contact form
      </a>

      <div className="border-b border-[var(--stroke-subtle)] bg-[var(--surface-deep)] px-5 py-2 text-[11px] uppercase tracking-[0.18em] text-[var(--text-secondary)] sm:px-8">
        <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between gap-4">
          <p>Status: Available for Select Engagements</p>
          <p className="hidden text-[10px] tracking-[0.16em] text-[var(--accent)] md:block">SECURITY_BY_DESIGN • HIGH_AVAILABILITY • AI_ACCELERATED • PRODUCTION_READY</p>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-[var(--stroke-subtle)] bg-[color:oklch(0.19_0.014_247_/_0.9)] px-5 py-4 backdrop-blur sm:px-8">
        <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <img src="/sundae-logo.svg" alt="Sundae Engineering" className="h-9 w-9" />
            <div>
              <p className="font-['Barlow_Condensed'] text-base font-semibold uppercase tracking-[0.16em] text-[var(--text-primary)]">
                Sundae Engineering
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">security • reliability • delivery</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="mailto:hello@sundae.engineering"
              className="rounded-sm border border-[var(--accent)] bg-[var(--accent)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ink)] transition-colors hover:bg-[var(--accent-soft)]"
            >
              Hire Us
            </a>
            <a
              href="#contact"
              className="hidden rounded-sm border border-[var(--stroke-strong)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] sm:inline-block"
            >
              Contact Form
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="px-5 pb-24 pt-20 sm:px-8 sm:pb-28 sm:pt-28">
          <div className="mx-auto grid w-full max-w-[1120px] gap-14 lg:min-h-[68vh] lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-8">
              <p className="font-['Barlow_Condensed'] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Built for CTOs and VP Engineering</p>
              <h1 className="max-w-[18ch] font-['Barlow_Condensed'] text-5xl font-semibold uppercase leading-[0.95] text-[var(--text-primary)] sm:text-6xl">
                We Build Systems That Cannot Fail.
              </h1>
              <p className="max-w-[58ch] text-base leading-7 text-[var(--text-secondary)]">
                We design and build secure, high-availability software for teams operating under serious
                constraints.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:hello@sundae.engineering"
                  className="rounded-sm border border-[var(--accent)] bg-[var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--ink)] transition-colors hover:bg-[var(--accent-soft)]"
                >
                  Hire Sundae Engineering
                </a>
                <a
                  href="#contact"
                  className="rounded-sm border border-[var(--stroke-strong)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  Send a brief
                </a>
              </div>
            </div>

            <aside className="border border-[var(--stroke-strong)] bg-[var(--surface-raised)] p-8">
              <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">Where We Add the Most Value</p>
              <dl className="space-y-4 text-sm">
                <div className="grid grid-cols-[8.5rem_1fr] gap-3 border-b border-[var(--stroke-subtle)] pb-3">
                  <dt className="uppercase tracking-[0.08em] text-[var(--text-muted)]">Context</dt>
                  <dd className="text-[var(--text-primary)]">Revenue-critical products</dd>
                </div>
                <div className="grid grid-cols-[8.5rem_1fr] gap-3 border-b border-[var(--stroke-subtle)] pb-3">
                  <dt className="uppercase tracking-[0.08em] text-[var(--text-muted)]">Need</dt>
                  <dd className="text-[var(--text-primary)]">Reliability and security at scale</dd>
                </div>
                <div className="grid grid-cols-[8.5rem_1fr] gap-3 border-b border-[var(--stroke-subtle)] pb-3">
                  <dt className="uppercase tracking-[0.08em] text-[var(--text-muted)]">Constraint</dt>
                  <dd className="text-[var(--text-primary)]">High cost of downtime or defects</dd>
                </div>
                <div className="grid grid-cols-[8.5rem_1fr] gap-3">
                  <dt className="uppercase tracking-[0.08em] text-[var(--text-muted)]">Approach</dt>
                  <dd>
                    <span className="font-semibold text-[var(--accent)]">AI-accelerated engineering with guardrails</span>
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="border-y border-[var(--stroke-subtle)] bg-[var(--surface-deep)] px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto w-full max-w-[1120px]">
            <h2 className="mb-10 font-['Barlow_Condensed'] text-3xl font-semibold uppercase tracking-[0.03em] text-[var(--text-primary)]">
              Delivery System
            </h2>
            <p className="mb-10 max-w-[64ch] text-sm leading-7 text-[var(--text-secondary)]">
              We own AI usage directly. It speeds delivery, but never replaces engineering judgment.
            </p>
            <div className="grid gap-10 lg:grid-cols-3">
              {deliveryPrinciples.map((item) => (
                <article key={item.label} className="space-y-3 border border-[var(--stroke-strong)] bg-[var(--surface-raised)] p-6">
                  <p className="text-[10px] uppercase tracking-[0.13em] text-[var(--text-muted)]">{item.label}</p>
                  <p className="text-lg font-semibold leading-7 text-[var(--text-primary)]">{item.value}</p>
                  <p className="text-sm leading-6 text-[var(--text-secondary)]">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-24 sm:px-8 sm:py-28">
          <div className="mx-auto w-full max-w-[1120px]">
            <h2 className="mb-10 font-['Barlow_Condensed'] text-3xl font-semibold uppercase tracking-[0.03em] text-[var(--text-primary)]">
              Case Study: Real-Time Financial System Under Load
            </h2>
            <p className="mb-10 max-w-[66ch] text-sm leading-7 text-[var(--text-secondary)]">
              A production system required continuous uptime while processing high-frequency transactions under
              unpredictable load conditions. Downtime or inconsistency would result in immediate financial impact.
            </p>
            <div className="divide-y divide-[var(--stroke-subtle)] border-y border-[var(--stroke-subtle)]">
              {engagementScope.map(([title, detail]) => (
                <div key={title} className="grid gap-2 py-5 md:grid-cols-[16rem_1fr] md:items-start md:gap-4">
                  <p className="font-semibold uppercase tracking-[0.08em] text-[var(--text-primary)]">{title}</p>
                  <p className="text-sm leading-6 text-[var(--text-secondary)]">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-[var(--stroke-subtle)] bg-[var(--surface-deep)] px-5 py-24 sm:px-8 sm:py-28">
          <div className="mx-auto grid w-full max-w-[1120px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-5">
              <p className="font-['Barlow_Condensed'] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Primary call to action</p>
              <h2 className="max-w-[20ch] font-['Barlow_Condensed'] text-4xl font-semibold uppercase leading-[0.95] text-[var(--text-primary)] sm:text-5xl">
                Build It Right the First Time.
              </h2>
              <p className="max-w-[46ch] text-sm leading-7 text-[var(--text-secondary)]">
                We are selective about what we take on, but when there is a fit, we deliver systems that hold up. Reach
                us directly at
                <a href="mailto:hello@sundae.engineering" className="ml-1 font-semibold text-[var(--accent)] hover:text-[var(--accent-soft)]">
                  hello@sundae.engineering
                </a>
                .
              </p>
            </div>

            <form className="grid gap-5 border border-[var(--stroke-strong)] bg-[var(--surface-raised)] p-8" onSubmit={handleContactSubmit}>
              <label className="grid gap-2 text-sm" htmlFor="name">
                <span className="uppercase tracking-[0.08em] text-[var(--text-muted)]">Name</span>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  className="field-input"
                />
              </label>

              <label className="grid gap-2 text-sm" htmlFor="email">
                <span className="uppercase tracking-[0.08em] text-[var(--text-muted)]">Work email</span>
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="field-input"
                />
              </label>

              <label className="grid gap-2 text-sm" htmlFor="company">
                <span className="uppercase tracking-[0.08em] text-[var(--text-muted)]">Company</span>
                <input
                  id="company"
                  name="company"
                  autoComplete="organization"
                  className="field-input"
                />
              </label>

              <label className="grid gap-2 text-sm" htmlFor="message">
                <span className="uppercase tracking-[0.08em] text-[var(--text-muted)]">Project brief</span>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="field-input resize-y"
                  placeholder="System context, risk constraints, target timeline"
                />
              </label>

              <button
                type="submit"
                className="mt-2 rounded-sm border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--ink)] transition-colors hover:bg-[var(--accent-soft)]"
              >
                Hire Sundae Engineering
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--stroke-subtle)] px-5 py-10 text-xs text-[var(--text-muted)] sm:px-8">
        <div className="mx-auto flex w-full max-w-[1120px] flex-wrap items-center justify-between gap-3">
          <p>Systems designed to perform when it matters most.</p>
          <p className="uppercase tracking-[0.12em] text-[var(--text-secondary)]">SUNDAE_ENGINEERING / STATUS: READY</p>
        </div>
      </footer>
    </div>
  );
}
