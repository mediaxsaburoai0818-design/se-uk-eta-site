"use client";

import { useEffect, useState } from "react";

export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nearBottom =
        window.innerHeight + y >= document.body.scrollHeight - 260;
      setShow(y > 520 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className={`cta-sticky-bar ${show ? "is-visible" : ""}`} aria-hidden={!show}>
      <div className="cta-sticky-inner">
        <span className="cta-sticky-text">
          <span className="cta-sticky-title">Ska du resa till Storbritannien?</span>
          <span className="cta-sticky-sub">
            Ansök senast 72 timmar före avresa
          </span>
        </span>
        <a
          href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-sticky-btn"
          tabIndex={show ? 0 : -1}
        >
          Påbörja din UK ETA-ansökan
        </a>
      </div>
    </div>
  );
}
