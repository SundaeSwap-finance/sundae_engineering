import React from "react";

export default function SectionMark({ index, label }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-display text-2xl font-semibold leading-none text-accent-ink">{index}</span>
      <span className="mono-label text-fg-muted">{label}</span>
    </div>
  );
}
