import type { Metadata, Viewport } from "next";
import { DM_Mono, Manrope } from "next/font/google";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

const title = `${site.name} — ${site.role}`;
const description =
  "Portfolio of Dinith Rukantha, a Full Stack Engineer focused on React.js, Spring Boot, AWS, multi-tenant systems and AI-powered products.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    "Dinith Rukantha",
    "Full Stack Engineer",
    "Senior Software Engineer",
    "React.js",
    "Spring Boot",
    "AWS",
    "Kubernetes",
    "multi-tenant systems",
    "portfolio",
    "Sri Lanka",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: `${site.name} — Portfolio`,
    title,
    description,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: { email: false, telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8f6" },
    { media: "(prefers-color-scheme: dark)", color: "#101a1d" },
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: site.role,
  description,
  knowsLanguage: ["en", "si"],
  knowsAbout: [
    "React.js",
    "Next.js",
    "Spring Boot",
    "NestJS",
    "Node.js",
    "AWS",
    "Kubernetes",
    "Docker",
    "MySQL",
    "MongoDB",
    "Tailwind CSS",
    "Ant Design",
    "Material UI",
    "Elstar",
    "Redux",
    "REST APIs",
    "OpenAI",
    "Anthropic",
    "Claude Code",
    "OpenCode",
    "AI agents",
    "multi-tenant systems",
    "TypeScript",
  ],
  sameAs: [site.linkedin, site.github],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = JSON.stringify(personSchema).replace(/</g, "\\u003c");

  return (
    <html lang="en" className={`${manrope.variable} ${dmMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
        {children}
      </body>
    </html>
  );
}
