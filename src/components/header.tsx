import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong border-b border-border py-2" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2 group">
          <Logo className="h-10 w-10 transition-transform group-hover:scale-110" />
          <span className="hidden font-display text-lg font-bold sm:block">
            Muvix<span className="text-primary">Lab</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contato"
            className="hidden rounded-full bg-gradient-to-r from-primary to-primary-glow px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-8px_var(--primary)] transition-all hover:scale-105 hover:shadow-[0_12px_32px_-4px_var(--primary)] sm:inline-block"
          >
            Solicitar Orçamento
          </a>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="glass-strong mx-4 mt-2 rounded-2xl border border-border p-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-accent"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Solicitar Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
