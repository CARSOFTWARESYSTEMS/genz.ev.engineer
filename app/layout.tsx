import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Gen Z EV Battery Intelligence | EV.ENGINEER",
  description:
    "Build the future of EV Battery Intelligence. Join the next generation of EV builders, creators, and innovators.",
  keywords: [
    "EV battery",
    "electric vehicle",
    "Gen Z engineering",
    "EV builder",
    "battery management system",
    "BMS",
    "EV community",
  ],
  openGraph: {
    title: "Gen Z EV Battery Intelligence | EV.ENGINEER",
    description:
      "Build the future of EV Battery Intelligence. Join the next generation of EV builders, creators, and innovators.",
    url: "https://genz.ev.engineer",
    siteName: "EV.ENGINEER",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gen Z EV Battery Intelligence | EV.ENGINEER",
    description: "Build the future of EV Battery Intelligence.",
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
