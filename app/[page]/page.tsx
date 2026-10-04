import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { data, getSitePage, sitePages } from "@/app/data/resume";
import { Footer } from "@/components/Footer";

export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(sitePages).map((page) => ({ page }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page: slug } = await params;
  const page = getSitePage(slug);
  if (!page) notFound();
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: {
      canonical: `${data.url}/${slug}`,
      types: { "text/markdown": `${data.url}/${slug}/index.md` },
    },
    openGraph: { title: page.title, description: page.description, url: `${data.url}/${slug}` },
    twitter: { title: page.title, description: page.description },
  };
}

export default async function InformationPage({ params }: { params: Promise<{ page: string }> }) {
  const { page: slug } = await params;
  const page = getSitePage(slug);
  if (!page) notFound();
  return (
    <main
      id="main-content"
      className="mx-auto w-full max-w-[640px] px-6 pt-14 pb-24 max-[600px]:px-5"
    >
      <Link href="/" className="inline-block py-2 text-sm text-muted-foreground hover:text-ink">
        Back to portfolio
      </Link>
      <h1 className="mt-8 text-3xl font-semibold tracking-tight text-ink">{page.title}</h1>
      {page.sections.map((section) => (
        <section key={section.heading} className="mt-10">
          <h2 className="text-lg font-medium text-ink">{section.heading}</h2>
          <p className="mt-3">{section.text}</p>
          {section.links && (
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              {section.links.map((link) => (
                <li key={link.url}>
                  <a className="inline-block py-2 hover:text-ink" href={link.url}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": page.schemaType,
            "@id": `${data.url}/${slug}#webpage`,
            url: `${data.url}/${slug}`,
            name: page.title,
            description: page.description,
            isPartOf: { "@id": `${data.url}#website` },
            about: { "@id": `${data.url}#person` },
            dateModified: data.lastUpdated,
          }).replace(/</g, "\\u003c"),
        }}
      />
      <Footer />
    </main>
  );
}
