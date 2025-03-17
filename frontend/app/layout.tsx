import type { Metadata } from "next";
import { Funnel_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const funnelSans = Funnel_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bloggr",
  description: "Bloggr is the app where ideas run free!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={`${funnelSans.className} antialiased`}>
          <Navigation />
          {children}
        </body>
      </html>
    </>
  );
}
