import React from "react";
import ScrollTrack from "../components/ScrollTrack.jsx";
import SectionMark from "../components/SectionMark.jsx";

const products = [
  {
    name: "Fleet",
    status: "In progress",
    isLive: false,
    overview:
      "Fleet takes the process your team has settled on and builds it into how agents run. Each agent works on a company machine under one owner, who can hand it to a teammate. The rules you require load into every run, whether or not anyone is checking.",
    whyUseIt:
      "You've worked out the process with one team. Fleet is how the next ten follow it without a meeting. We're building it now.",
  },
  {
    name: "Daxeon",
    status: "Live in Discord",
    isLive: true,
    overview:
      "Daxeon started out catching scams in Discord communities, checking the links people post against a database of known scam and phishing domains. We're opening that database to agents through an MCP server, so they can check a link before they trust it.",
    whyUseIt:
      "Agents open links faster than anyone can review them. Soon they'll be able to check each one against Daxeon first.",
  },
];

function ProductSlide({ product }) {
  return (
    <li className="shrink-0 basis-[92%] snap-start last:snap-end">
      <article className="panel grid h-full gap-8 rounded-card p-6 sm:gap-10 sm:p-10 lg:grid-cols-2 lg:gap-0">
        <div className="lg:pr-12">
          <p className="mono-label flex items-center gap-2.5 text-fg-muted">
            {product.isLive ? <span className="status-dot" aria-hidden="true" /> : null}
            {product.status}
          </p>
          <h3 className="mt-5 font-display text-4xl font-semibold leading-none tracking-tight text-fg">
            {product.name}
          </h3>
          <p className="mt-5 max-w-[46ch] leading-7 text-fg-secondary sm:mt-6 sm:text-lg sm:leading-8">{product.overview}</p>
        </div>
        <div className="border-t border-stroke-subtle pt-8 sm:pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          <p className="mono-label text-fg-muted">Why you&rsquo;d use it</p>
          <p className="mt-4 max-w-[46ch] leading-7 text-fg-secondary sm:mt-5 sm:leading-8">{product.whyUseIt}</p>
        </div>
      </article>
    </li>
  );
}

export default function ProductsSection() {
  return (
    <section id="products" className="border-t border-stroke-subtle px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto w-full max-w-content">
        <SectionMark index="03" label="Our tools" />
        <ScrollTrack
          label="Our tools"
          itemName="tool"
          heading={
            <>
              <h2 className="mt-7 max-w-[24ch] text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-5xl">
                Once it works, <span className="marker">make it stick</span>.
              </h2>
              <p className="mt-6 max-w-[62ch] text-lg leading-8 text-fg-secondary">
                After we leave, a new hire will set up an agent on a deadline. We build tools so they still do it
                your way.
              </p>
            </>
          }
        >
          {products.map((product) => (
            <ProductSlide key={product.name} product={product} />
          ))}
        </ScrollTrack>

        <p className="mt-12 max-w-[62ch] text-lg leading-8 text-fg-secondary">
          Start with one team and one real task.{" "}
          <a className="link-accent" href="#contact">
            Send a brief
          </a>
          .
        </p>
      </div>
    </section>
  );
}
