import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { site, contact, profiles } from "@/data/site";
import "./globals.css";

/* Update this to your production domain so Open Graph / canonical URLs resolve. */
const SITE_URL = "https://abhishek-prajapat.vercel.app";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const description =
  "Abhishek Prajapat — Flutter Developer in Mumbai with ~3 years building scalable, real-time, production cross-platform apps across EdTech, HealthTech, SportsTech and E-commerce. Clean Architecture, BLoC/Riverpod, CI/CD and store release ownership.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description,
  keywords: [
    "Flutter Developer",
    "Flutter Developer India",
    "Flutter Developer Mumbai",
    "Flutter Engineer",
    "Mobile Application Developer",
    "Dart Developer",
    "Cross-platform Developer",
    "Abhishek Prajapat",
    "BLoC",
    "Riverpod",
    "Clean Architecture",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: `${site.name} — ${site.role}`,
    title: `${site.name} — ${site.role}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#08090d" },
    { media: "(prefers-color-scheme: light)", color: "#fbfcfd" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: `mailto:${contact.email}`,
  telephone: contact.phone,
  address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressCountry: "IN" },
  url: SITE_URL,
  sameAs: [profiles.linkedin, profiles.github].filter(Boolean),
  knowsAbout: [
    "Flutter",
    "Dart",
    "Mobile Application Development",
    "Clean Architecture",
    "BLoC",
    "Riverpod",
    "Firebase",
    "REST APIs",
    "WebSockets",
    "CI/CD",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
