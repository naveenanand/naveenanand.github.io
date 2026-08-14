import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.naveenanand.com"),
  title: {
    default: "Naveen Anand Gunalan | Engineering Leader, Architect & Builder",
    template: "%s | Naveen Anand Gunalan",
  },
  description:
    "Engineering leader and software architect building AI platforms, developer SDKs, spatial-computing systems, and real-time intelligent products.",
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    siteName: "Naveen Anand Gunalan",
    title: "Naveen Anand Gunalan | Engineering Leader, Architect & Builder",
    description:
      "Engineering leader and software architect building AI platforms, developer SDKs, spatial-computing systems, and real-time intelligent products.",
    url: "https://www.naveenanand.com",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Naveen Anand Gunalan — Engineering Leader, Architect & Builder" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naveen Anand Gunalan | Engineering Leader, Architect & Builder",
    description:
      "Engineering leader and software architect building AI platforms, developer SDKs, spatial-computing systems, and real-time intelligent products.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-[#06121f]"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <CommandPalette />
      </body>
    </html>
  );
}
