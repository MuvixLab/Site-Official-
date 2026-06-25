import { useEffect, useRef } from "react";

// Animated tech mockup: code window + orbiting glow + grid
export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(1200px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
    };
    const reset = () => {
      el.style.transform = `perspective(1200px) rotateY(0deg) rotateX(0deg)`;
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 rounded-full bg-primary/30 blur-3xl animate-pulse-glow" />
      <div className="absolute inset-10 -z-10 rounded-full bg-primary-glow/20 blur-2xl" />

      {/* Orbiting rings */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="absolute h-[88%] w-[88%] rounded-full border border-primary/30 animate-spin-slow" />
        <div className="absolute h-[70%] w-[70%] rounded-full border border-primary/20" style={{ animation: "spin 30s linear infinite reverse" }} />
        <div className="absolute h-[55%] w-[55%] rounded-full border border-gold/30" />
      </div>

      {/* Floating dots */}
      {[
        { x: "10%", y: "20%", d: 0 },
        { x: "85%", y: "30%", d: 1.2 },
        { x: "75%", y: "78%", d: 2.4 },
        { x: "15%", y: "75%", d: 0.8 },
        { x: "50%", y: "8%", d: 1.6 },
      ].map((p, i) => (
        <span
          key={i}
          className="absolute h-3 w-3 rounded-full bg-primary shadow-[0_0_20px_var(--primary)]"
          style={{ left: p.x, top: p.y, animation: `float ${4 + p.d}s ease-in-out ${p.d}s infinite` }}
        />
      ))}

      {/* Code card */}
      <div
        ref={ref}
        className="absolute left-1/2 top-1/2 w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-2xl glass-strong p-4 shadow-[0_30px_80px_-20px_var(--primary)] transition-transform duration-200"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="mb-3 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-gold" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          <span className="ml-2 font-mono text-xs text-muted-foreground">muvixlab.ts</span>
        </div>
        <pre className="overflow-hidden font-mono text-[11px] leading-relaxed sm:text-xs">
          <code>
            <span className="text-[#c586c0]">const</span>{" "}
            <span className="text-[#4fc1ff]">muvix</span>{" "}
            <span className="text-[#d4d4d4]">=</span>{" "}
            <span className="text-[#dcdcaa]">createPlatform</span>
            <span className="text-[#ffd700]">{"({"}</span>
            {"\n  "}
            <span className="text-[#9cdcfe]">vision</span>
            <span className="text-[#d4d4d4]">:</span>{" "}
            <span className="text-[#ce9178]">"transformar ideias"</span>
            <span className="text-[#d4d4d4]">,</span>
            {"\n  "}
            <span className="text-[#9cdcfe]">stack</span>
            <span className="text-[#d4d4d4]">:</span>{" "}
            <span className="text-[#ffd700]">[</span>
            <span className="text-[#ce9178]">"react"</span>
            <span className="text-[#d4d4d4]">, </span>
            <span className="text-[#ce9178]">"node"</span>
            <span className="text-[#d4d4d4]">, </span>
            <span className="text-[#ce9178]">"cloud"</span>
            <span className="text-[#ffd700]">]</span>
            <span className="text-[#d4d4d4]">,</span>
            {"\n  "}
            <span className="text-[#9cdcfe]">focus</span>
            <span className="text-[#d4d4d4]">:</span>{" "}
            <span className="text-[#ffd700]">[</span>
            <span className="text-[#ce9178]">"web"</span>
            <span className="text-[#d4d4d4]">, </span>
            <span className="text-[#ce9178]">"mobile"</span>
            <span className="text-[#d4d4d4]">, </span>
            <span className="text-[#ce9178]">"api"</span>
            <span className="text-[#ffd700]">]</span>
            <span className="text-[#d4d4d4]">,</span>
            {"\n"}
            <span className="text-[#ffd700]">{"})"}</span>
            <span className="text-[#d4d4d4]">;</span>
            {"\n\n"}
            <span className="text-[#c586c0]">await</span>{" "}
            <span className="text-[#4fc1ff]">muvix</span>
            <span className="text-[#d4d4d4]">.</span>
            <span className="text-[#dcdcaa]">deploy</span>
            <span className="text-[#ffd700]">{"({"}</span>
            {"\n  "}
            <span className="text-[#9cdcfe]">scale</span>
            <span className="text-[#d4d4d4]">:</span>{" "}
            <span className="text-[#ce9178]">"infinite"</span>
            <span className="text-[#d4d4d4]">,</span>
            {"\n  "}
            <span className="text-[#9cdcfe]">uptime</span>
            <span className="text-[#d4d4d4]">:</span>{" "}
            <span className="text-[#b5cea8]">99.99</span>
            <span className="text-[#d4d4d4]">,</span>
            {"\n"}
            <span className="text-[#ffd700]">{"})"}</span>
            <span className="text-[#d4d4d4]">;</span>
            {"\n\n"}
            <span className="text-[#6a9955]">{"// → online em segundos ⚡"}</span>
          </code>
        </pre>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {["API", "DB", "Web"].map((t) => (
            <div key={t} className="rounded-lg border border-border bg-card/40 px-2 py-2 text-center text-[10px] font-semibold text-muted-foreground">
              {t}
              <div className="mx-auto mt-1 h-1 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow" style={{ width: `${60 + Math.random() * 40}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
