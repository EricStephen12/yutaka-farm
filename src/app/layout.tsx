import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yutaka Farm - Premier Agricultural Products in Nigeria",
  description: "Nigeria's preferred Farm and Agro-Allied company, providing high-quality agricultural products and exceptional customer service across Nigeria and Africa.",
  keywords: ["farm", "agriculture", "Nigeria", "Yutaka Farm", "hydroponic", "livestock", "crop production", "wholesale"],
  openGraph: {
    title: "Yutaka Farm - Premier Agricultural Products",
    description: "Nigeria's preferred Farm and Agro-Allied company, providing high-quality agricultural products and exceptional customer service.",
    url: "https://yutakafarm.com.ng",
    siteName: "Yutaka Farm",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yutaka Farm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yutaka Farm - Premier Agricultural Products",
    description: "Nigeria's preferred Farm and Agro-Allied company, providing high-quality agricultural products and exceptional customer service.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
