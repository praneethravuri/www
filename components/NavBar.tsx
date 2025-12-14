import Link from "next/link";
import { data } from "@/app/data/resume";

export function NavBar() {
  return (
    <nav className="flex justify-between items-center py-8 mb-8 tracking-tight">
      <div className="font-bold text-xl font-mono italic">
        pr.
      </div>
      <div className="flex gap-4 text-sm text-muted-foreground">
        <Link href="#work" className="hover:text-foreground transition-colors">work</Link>
        <Link href="#projects" className="hover:text-foreground transition-colors">projects</Link>
        <Link href={data.contact.social.GitHub.url} target="_blank" className="hover:text-foreground transition-colors">github</Link>
      </div>
    </nav>
  );
}