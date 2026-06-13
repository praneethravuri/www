import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});
import "./globals.css";
import { data } from "@/app/data/resume";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const fullName = `${data.firstName} ${data.lastName}`;
const pageTitle = `${fullName} | ${data.title}`;
const currentRole = data.work[0];
const lastUpdatedDateTime = `${data.lastUpdated}T00:00:00+00:00`;

// Utility function to convert date strings to ISO format
function convertToISO(date: string): string {
  const months = {
    Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
    Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'
  };
  const [month, year] = date.split(' ');
  return `${year}-${months[month as keyof typeof months]}`;
}


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(data.url),
  title: {
    template: `%s | ${fullName}`,
    default: pageTitle,
  },
  applicationName: fullName,
  description: data.summary,
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
    description: data.summary,
    siteName: fullName,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: data.summary,
    creator: "@praneeth2510",
    images: [{ url: "/twitter-image", width: 1200, height: 675, alt: pageTitle }],
  },
  category: 'technology',
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
    languages: {
      'en-US': data.url,
      'en': data.url,
      'x-default': data.url,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || "",
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION || "",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="motion-safe:scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} font-sans antialiased relative min-h-screen`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:border focus:rounded-md"
        >
          Skip to main content
        </a>
        {children}
        <Analytics />
        <SpeedInsights />

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
                    image: `${data.url}/images/profile/hero.webp`,
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
                    alumniOf: data.education.map(edu => ({
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
                    "@type": "WebPage",
                    "@id": `${data.url}#webpage`,
                    url: data.url,
                    name: pageTitle,
                    isPartOf: { "@id": `${data.url}#website` },
                    about: { "@id": `${data.url}#person` },
                    mainEntity: { "@id": `${data.url}#person` },
                    description: data.summary,
                    inLanguage: "en-US",
                    datePublished: "2024-01-01",
                    dateModified: lastUpdatedDateTime,
                  },
                  {
                    "@type": "ProfilePage",
                    "@id": `${data.url}#profilepage`,
                    dateCreated: "2024-01-01T00:00:00+00:00",
                    dateModified: lastUpdatedDateTime,
                    mainEntity: { "@id": `${data.url}#person` },
                  },
                  {
                    "@type": "BreadcrumbList",
                    "@id": `${data.url}#breadcrumb`,
                    itemListElement: [
                      {
                        "@type": "ListItem",
                        position: 1,
                        name: "Home",
                        item: data.url,
                      },
                    ],
                  },
                  ...data.work.map((job, idx) => ({
                    "@type": "OrganizationRole",
                    "@id": `${data.url}#work-${idx}`,
                    roleName: job.title,
                    startDate: convertToISO(job.startDate),
                    endDate: job.endDate === "Present" ? undefined : convertToISO(job.endDate),
                    organizationName: job.company,
                  })),
                  ...data.projects.map((project, idx) => ({
                    "@type": "SoftwareSourceCode",
                    "@id": `${data.url}#project-${idx}`,
                    name: project.name,
                    description: project.description,
                    codeRepository: project.url,
                    url: project.url,
                    author: { "@id": `${data.url}#person` },
                    programmingLanguage: project.techStack,
                  })),
                ],
              }),
            }}
          />
      </body>
    </html>
  );
}
