import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { data } from "@/app/data/resume";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: {
    template: `%s | ${data.title}`,
    default: `${data.firstName} ${data.lastName}`,
  },
  description: data.about,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://praneethravuri.com",
    title: `${data.firstName} ${data.lastName}`,
    description: data.about,
    siteName: `${data.firstName} ${data.lastName}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${data.firstName} ${data.lastName}`,
    description: data.about,
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
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground relative overflow-x-hidden min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
