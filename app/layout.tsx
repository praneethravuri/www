import type { Metadata } from "next";
import { Geist, Playfair_Display, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { data } from "@/app/data/resume";
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/sonner";

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });
const sourceCodePro = Source_Code_Pro({ subsets: ['latin'], variable: '--font-source-code-pro', display: 'swap' });

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
        url: "/og-image.png", // Assuming an OG image might exist or will be added. 
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
    creator: "@praneeth2510", // Extracted from X url in resume.tsx (manual extraction or I can verify the handle)
  },
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
        className={`${geist.variable} ${playfair.variable} ${sourceCodePro.variable} font-sans antialiased text-foreground relative overflow-x-hidden min-h-screen max-w-2xl mx-auto px-4 sm:px-8`}
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
          <Toaster />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: `${data.firstName} ${data.lastName}`,
                url: data.url,
                jobTitle: data.title,
                sameAs: [
                  data.contact.social.GitHub.url,
                  data.contact.social.LinkedIn.url,
                  data.contact.social.X.url,
                ],
              }),
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
