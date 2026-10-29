import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { site } from "@/lib/data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-grotesk", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["500"], variable: "--font-mono", display: "swap" });

const title = `${site.name} | Full Stack Developer — React, Node.js, FastAPI, ASP.NET`;
const shortDescription =
  "Scalable web apps, REST APIs and real-time systems with React, Node.js, FastAPI and ASP.NET. See my projects & get in touch.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  keywords: [
    "Faisal Zahoor", "Full Stack Developer", "MERN Developer", "React Developer", "Node.js Developer", "FastAPI",
    "ASP.NET Developer", "Next.js", "Socket.io", "LangGraph", "COMSATS", "Pakistan", "Portfolio",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: `${site.name} | Full Stack Developer`,
    description: shortDescription,
    images: [{ url: "/assets/profile.jpg", width: 480, height: 480, alt: `${site.name} — Full Stack Developer` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Full Stack Developer`,
    description: shortDescription,
    images: ["/assets/profile.jpg"],
  },
  icons: { icon: "/assets/favicon.svg?v=3", apple: "/assets/profile.jpg" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  image: `${site.url}/assets/profile.jpg`,
  jobTitle: "Full Stack Developer",
  email: `mailto:${site.email}`,
  telephone: site.phoneIntl,
  nationality: "Pakistan",
  alumniOf: { "@type": "CollegeOrUniversity", name: "COMSATS University Islamabad" },
  knowsAbout: ["React.js", "Next.js", "Node.js", "Express.js", "FastAPI", "ASP.NET", "Socket.io", "MongoDB", "PostgreSQL", "LangGraph", "REST APIs", "Microservices"],
  sameAs: [site.github, site.linkedin, site.instagram],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${grotesk.variable} ${mono.variable}`}>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        {/* Marks JS as available so reveal animations only hide content when they can run. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
