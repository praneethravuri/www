import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});
import "blobatar/motion.css";
import "blobatar/gaze.css";
import "./globals.css";
import { data } from "@/app/data/resume";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const fullName = `${data.firstName} ${data.lastName}`;
const pageTitle = data.seo.title;
const currentRole = data.work[0];
const lastUpdatedDateTime = `${data.lastUpdated}T00:00:00+00:00`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#141413",
};

export const metadata: Metadata = {
  metadataBase: new URL(data.url),
  title: {
    template: `%s | ${fullName}`,
    default: pageTitle,
  },
  applicationName: fullName,
  description: data.seo.description,
  keywords: data.keywords,
  authors: [
    {
      name: fullName,
      url: data.url,
    },
  ],
  creator: fullName,
  publisher: fullName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: data.url,
    title: pageTitle,
    description: data.seo.description,
    siteName: fullName,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: data.seo.description,
    creator: "@praneeth2510",
    images: [{ url: "/twitter-image", width: 1200, height: 675, alt: pageTitle }],
  },
  category: "technology",
  classification: "Praneeth Ravuri's Portfolio Website",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: data.url,
    types: {
      "text/markdown": `${data.url}/index.md`,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION }
      : undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="describedby" href="/llms.txt" type="text/plain" />
      </head>
      <body className={`${inter.variable} font-sans antialiased relative min-h-screen`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:border focus:rounded-md"
        >
          Skip to main content
        </a>
        {children}
        {process.env.VERCEL_ENV === "production" && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": `${data.url}#person`,
                  name: fullName,
                  url: data.url,
                  jobTitle: data.title,
                  description: data.summary,
                  disambiguatingDescription: data.heroHeadline,
                  homeLocation: {
                    "@type": "Place",
                    name: data.location,
                  },
                  worksFor: {
                    "@type": "Organization",
                    name: currentRole.company,
                  },
                  alumniOf: data.education.map((edu) => ({
                    "@type": "EducationalOrganization",
                    name: edu.institution,
                  })),
                  knowsAbout: data.keywords,
                  sameAs: [
                    data.contact.social.GitHub.url,
                    data.contact.social.LinkedIn.url,
                    data.contact.social.X.url,
                  ],
                  email: data.contact.email,
                  address: {
                    "@type": "PostalAddress",
                    ...data.address,
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "professional inquiries",
                    email: data.contact.email,
                    availableLanguage: ["English"],
                  },
                  hasOccupation: {
                    "@type": "Occupation",
                    name: data.title,
                    occupationalCategory: "Software engineering",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": `${data.url}#website`,
                  url: data.url,
                  name: fullName,
                  description: data.summary,
                  publisher: { "@id": `${data.url}#person` },
                  inLanguage: "en-US",
                },
                {
                  "@type": "ProfilePage",
                  "@id": `${data.url}#webpage`,
                  url: data.url,
                  name: pageTitle,
                  isPartOf: { "@id": `${data.url}#website` },
                  about: { "@id": `${data.url}#person` },
                  mainEntity: { "@id": `${data.url}#person` },
                  description: data.summary,
                  inLanguage: "en-US",
                  dateModified: lastUpdatedDateTime,
                },
                ...data.projects.map((project, idx) => ({
                  "@type": "SoftwareSourceCode",
                  "@id": `${data.url}#project-${idx}`,
                  name: project.name,
                  description: project.description,
                  codeRepository: project.url,
                  url: project.url,
                  author: { "@id": `${data.url}#person` },
                  programmingLanguage: project.languages,
                  keywords: project.tags.join(", "),
                  runtimePlatform: project.techStack.join(", "),
                  isPartOf: { "@id": `${data.url}#webpage` },
                })),
              ],
            }).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
