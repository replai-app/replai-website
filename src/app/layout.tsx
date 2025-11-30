import type { Metadata } from "next";
import "./globals.css";
import { neueMontrealBold, neueMontrealMedium, spaceMono, editorialNewItalic } from "@/lib/fonts";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "REPLAI",
  description: "REPLAI Archive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${neueMontrealBold.variable} ${neueMontrealMedium.variable} ${spaceMono.variable} ${editorialNewItalic.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
