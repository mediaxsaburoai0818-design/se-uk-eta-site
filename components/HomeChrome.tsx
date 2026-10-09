"use client";
import { useEffect } from "react";

// TOP（新デザイン）のハンバーガーメニュー。HTML は dangerouslySetInnerHTML で入っているので、表示後に結び付ける。
export default function HomeChrome() {
  useEffect(() => {
    const b = document.querySelector<HTMLButtonElement>(".etahome .burger");
    const n = document.querySelector<HTMLElement>(".etahome .nav");
    if (!b || !n) return;
    n.id = "nav";
    const onClick = () => {
      const open = b.getAttribute("aria-expanded") === "true";
      b.setAttribute("aria-expanded", String(!open));
      if (open) { n.removeAttribute("style"); return; }
      Object.assign(n.style, { display: "flex", position: "absolute", top: "100%", left: "0", right: "0",
        flexDirection: "column", background: "#fff", padding: "14px 20px", borderBottom: "1px solid #E3EAF0", gap: "12px", zIndex: "20" });
    };
    b.addEventListener("click", onClick);
    return () => b.removeEventListener("click", onClick);
  }, []);
  return null;
}
