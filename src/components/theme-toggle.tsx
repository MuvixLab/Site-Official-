import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
      className="relative grid h-10 w-10 place-items-center rounded-full border border-border bg-card/60 backdrop-blur transition-all hover:scale-110 hover:border-primary hover:shadow-[0_0_24px_-4px_var(--primary)]"
    >
      <Sun className={`absolute h-5 w-5 text-gold transition-all duration-500 ${theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`} />
      <Moon className={`absolute h-5 w-5 text-primary transition-all duration-500 ${theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`} />
    </button>
  );
}
