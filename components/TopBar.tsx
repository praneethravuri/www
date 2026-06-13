import { MapPinIcon } from "@phosphor-icons/react/ssr";
import { data } from "@/app/data/resume";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function TopBar() {
  return (
    <header className="flex items-center justify-between gap-4 pt-[28px] text-[13px] tracking-[0.04em] text-muted-foreground">
      <span className="inline-flex items-center gap-[7px] whitespace-nowrap">
        <MapPinIcon size={13} className="opacity-70 flex-none" />
        {data.location}
      </span>
      <AnimatedThemeToggler
        aria-label="Toggle theme"
        className="-mr-1.5 inline-flex flex-none items-center justify-center p-1.5 text-muted-foreground transition-colors duration-200 hover:text-ink"
      />
    </header>
  );
}
