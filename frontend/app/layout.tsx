import type { Metadata } from "next";
import { Funnel_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

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
      <Navigation />
      <html lang="en">
        <body
          className={`${funnelSans.className} antialiased`}
        >
          {children}
        </body>
      </html>
    </>
  );
}
