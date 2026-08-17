"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import headerNav from "@/data/langs/header-nav.json";

export default function StickyCta() {
  const [show, setShow] = useState(false);
  // ⚠️ 文言がスウェーデン語で固定されているため、追加言語のページでは出さない。
  //    各言語のページには本文中に自言語のCTAがあるので、無くても導線は途切れない。
  const pathname = usePathname() || "/";
  const isLang = Object.prototype.hasOwnProperty.call(headerNav, pathname.split("/")[1]);

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

  if (isLang) return null;

  return (
    <div className={`cta-sticky-bar ${show ? "is-visible" : ""}`} aria-hidden={!show}>
      <div className="cta-sticky-inner">
        <span className="cta-sticky-text">
          <span className="cta-sticky-title">Ska du resa till Storbritannien?</span>
          <span className="cta-sticky-sub">
            Ansök minst 3 arbetsdagar före avresa
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
