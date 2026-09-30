import type { Metadata } from "next";
import { JetBrains_Mono, Manrope, Space_Grotesk } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "East Wind Shipping",
    template: "%s | East Wind Shipping",
  },
  description:
    "Precision maritime logistics and shipping agency in Pakistan — vessel husbandry, feeder representation, and off-dock container depot services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Material Symbols icon font */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable} bg-surface font-body text-body-md text-on-surface antialiased selection:bg-secondary selection:text-on-secondary`}
      >
        <SiteHeader />
        <main className="w-full min-h-[calc(100vh-280px)] bg-surface pt-[calc(2rem+3.5rem)] sm:pt-[calc(2.25rem+4rem)] lg:pt-[116px]">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
