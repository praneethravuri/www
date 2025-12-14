import { data } from "@/app/data/resume";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="py-20 border-t border-white/5 mt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif italic mb-8 text-brand">
          Let&apos;s put AI to <br /> <span className="text-foreground">work.</span>
        </h2>

        <div className="flex justify-center gap-6 mb-12">
          {Object.entries(data.contact.social).map(([name, social]) => (
            <Link
              key={name}
              href={social.url}
              target="_blank"
              className="text-neutral-400 hover:text-white transition-colors uppercase text-sm tracking-widest font-medium"
            >
              {social.name}
            </Link>
          ))}
          <Link
            href={`mailto:${data.contact.email}`}
            className="text-neutral-400 hover:text-white transition-colors uppercase text-sm tracking-widest font-medium"
          >
            Email
          </Link>
        </div>

        <p className="text-neutral-600 text-sm">
          &copy; {new Date().getFullYear()} {data.firstName} {data.lastName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}