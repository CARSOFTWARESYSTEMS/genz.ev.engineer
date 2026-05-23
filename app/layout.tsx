import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://genz.ev.engineer"),
  title: "Gen Z EV Battery Intelligence Security Platform | EV.ENGINEER",
  description:
    "Build the future of EV Battery Intelligence and Cybersecurity. Join the next generation of EV builders, creators, and future mobility defenders.",
  keywords: [
    "EV Battery Intelligence",
    "EV Battery Cybersecurity",
    "EV Battery Security",
    "EV Cybersecurity",
    "Battery Intelligence Platform",
    "EV Battery AI",
    "EV Battery Technology",
    "EV Battery Threat Detection",
    "Future EV Builders",
    "EV Battery Innovation",
    "Gen Z EV engineering",
    "Secure EV systems",
    "Battery telemetry security",
    "EV diagnostics",
    "Battery AI platform",
    "Future EV technology",
    "EV battery hackers",
    "EV cyber builders",
  ],
  alternates: {
    canonical: "https://genz.ev.engineer",
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
  openGraph: {
    title: "Gen Z EV Battery Intelligence Security Platform | EV.ENGINEER",
    description:
      "Build the future of EV Battery Intelligence and Cybersecurity. Join the next generation of EV builders, creators, and future mobility defenders.",
    url: "https://genz.ev.engineer",
    siteName: "EV.ENGINEER",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EV.ENGINEER — Gen Z EV Battery Intelligence Security Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gen Z EV Battery Intelligence Security Platform | EV.ENGINEER",
    description:
      "Build the future of EV Battery Intelligence and Cybersecurity. Join the next generation of EV builders, creators, and future mobility defenders.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className={`${spaceGrotesk.className} antialiased bg-[#050816]`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
