import React, { useEffect, useRef, useState } from "react";

function ArrowIcon({ direction }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={direction === "previous" ? "rotate-180" : ""}
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

function TrackButton({ direction, label, disabled, onClick }) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-disabled={disabled}
      onClick={disabled ? undefined : onClick}
      className="btn btn-ghost h-11 w-11 p-0 aria-disabled:cursor-default aria-disabled:opacity-40"
    >
      <ArrowIcon direction={direction} />
    </button>
  );
}

/**
 * A horizontally scrolling list with previous and next controls beside `heading`.
 * `itemName` names one entry for the control labels, and each child should be an
 * `<li>` that sets its own width.
 */
export default function ScrollTrack({ label, itemName, heading, children }) {
  const scrollerRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const scroller = scrollerRef.current;

    function updateEdges() {
      const maxScroll = scroller.scrollWidth - scroller.clientWidth;
      setAtStart(scroller.scrollLeft <= 1);
      setAtEnd(scroller.scrollLeft >= maxScroll - 1);
    }

    updateEdges();
    scroller.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      scroller.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, []);

  function scrollByItem(direction) {
    const scroller = scrollerRef.current;
    const list = scroller.firstElementChild;
    const item = list.firstElementChild;
    if (!item) return;

    const gap = parseFloat(getComputedStyle(list).columnGap) || 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    scroller.scrollBy({
      left: direction * (item.offsetWidth + gap),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  return (
    <div>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
        <div className="min-w-0 flex-1">{heading}</div>
        <div className="flex shrink-0 gap-2">
          <TrackButton
            direction="previous"
            label={`Previous ${itemName}`}
            disabled={atStart}
            onClick={() => scrollByItem(-1)}
          />
          <TrackButton
            direction="next"
            label={`Next ${itemName}`}
            disabled={atEnd}
            onClick={() => scrollByItem(1)}
          />
        </div>
      </div>

      <div
        ref={scrollerRef}
        role="region"
        aria-label={label}
        tabIndex={0}
        className="scroll-track mt-10 snap-x snap-mandatory overflow-x-auto"
      >
        <ol role="list" className="flex gap-5">{children}</ol>
      </div>
    </div>
  );
}
