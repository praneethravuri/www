import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="mx-auto w-full max-w-[640px] px-6 py-20">
      <h1 className="text-3xl font-semibold text-ink">Page not found</h1>
      <p className="mt-4">
        This path does not exist. Start with the portfolio or its published link index.
      </p>
      <ul className="mt-6 space-y-3 text-muted-foreground">
        <li>
          <Link href="/">Portfolio</Link>
        </li>
        <li>
          <a href="/llms.txt">Agent link index</a>
        </li>
        <li>
          <a href="/sitemap.xml">Sitemap</a>
        </li>
        <li>
          <Link href="/projects">Project resources</Link>
        </li>
      </ul>
    </main>
  );
}
