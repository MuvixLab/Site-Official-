import lightLogo from "@/assets/logo-light.png";
import darkLogo from "@/assets/logo-dark.png";
import logo from "@/assets/muvixlab-logo.png.asset.json";
import { useTheme } from "@/hooks/use-theme";

export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <span className="inline-grid place-items-center rounded-xl">
      <img
        src={lightLogo}
        alt="MuvixLab"
        className={`${className} object-contain dark:hidden`}
      />

      <img
        src={darkLogo}
        alt="MuvixLab"
        className={`${className} object-contain hidden dark:block`}
      />
    </span>
  );
}
