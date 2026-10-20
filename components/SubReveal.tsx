"use client";

import { useEffect } from "react";

/** 新デザインの下層ページ（.xsub）用。.rv をスクロールで表示する。
 *  layout の Reveal は初回表示のときしか動かないため、ページ側でマウントのたびに監視する。 */
export default function SubReveal() {
  useEffect(() => {
    const root = document.querySelector(".xsub");
    if (!root) return;
    const nodes = root.querySelectorAll<HTMLElement>(".rv");
    if (!("IntersectionObserver" in window)) return;
    root.classList.add("js");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    nodes.forEach((n, i) => {
      n.style.transitionDelay = `${(i % 4) * 60}ms`;
      io.observe(n);
    });
    return () => io.disconnect();
  }, []);
  return null;
}
