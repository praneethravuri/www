import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { data } from "@/app/data/resume";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

// Utility function to convert date strings to ISO format
function convertToISO(date: string): string {
  const months = {
    Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
    Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'
  };
  const [month, year] = date.split(' ');
  return `${year}-${months[month as keyof typeof months]}`;
}

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(data.url),
  title: {
    template: `%s | ${data.title}`,
    default: `${data.firstName} ${data.lastName}`,
  },
  description: data.summary,
  keywords: data.keywords,
  authors: [
    {
      name: `${data.firstName} ${data.lastName}`,
      url: data.url,
    },
  ],
  creator: `${data.firstName} ${data.lastName}`,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: data.url,
    title: `${data.firstName} ${data.lastName}`,
    description: data.summary,
    siteName: `${data.firstName} ${data.lastName}`,
    images: [
      {
        url: "/hero.webp",
        width: 1200,
        height: 630,
        alt: `${data.firstName} ${data.lastName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${data.firstName} ${data.lastName}`,
    description: data.summary,
    creator: "@praneeth2510",
    images: [`${data.url}/hero.webp`],
  },
  category: 'technology',
  classification: 'Personal Portfolio',
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
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "google-site-verification=...",
    yandex: "yandex-verification=...",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${spaceGrotesk.variable} ${sourceCodePro.variable} font-sans antialiased text-foreground relative overflow-x-hidden min-h-screen max-w-3xl mx-auto px-4 sm:px-8`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
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
                    name: `${data.firstName} ${data.lastName}`,
                    url: data.url,
                    image: `${data.url}/hero.webp`,
                    jobTitle: data.title,
                    worksFor: {
                      "@type": "Organization",
                      name: data.taglines.heroTagline.company,
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
                  },
                  {
                    "@type": "WebSite",
                    "@id": `${data.url}#website`,
                    url: data.url,
                    name: `${data.firstName} ${data.lastName}`,
                    description: data.summary,
                    publisher: { "@id": `${data.url}#person` },
                    inLanguage: "en-US",
                  },
                  {
                    "@type": "WebPage",
                    "@id": `${data.url}#webpage`,
                    url: data.url,
                    name: `${data.firstName} ${data.lastName} - ${data.title}`,
                    isPartOf: { "@id": `${data.url}#website` },
                    about: { "@id": `${data.url}#person` },
                    description: data.summary,
                    inLanguage: "en-US",
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
                    "@type": "CreativeWork",
                    "@id": `${data.url}#project-${idx}`,
                    name: project.name,
                    description: project.description,
                    url: project.url,
                    author: { "@id": `${data.url}#person` },
                    keywords: project.techStack,
                  })),
                ],
              }),
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
