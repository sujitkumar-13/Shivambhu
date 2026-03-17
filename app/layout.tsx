import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Shivambhu | Pure RO Mineral Water Plant Saharanpur",
  description: "Shivambhu RO Water Plant provides premium, laboratory-tested mineral water in Saharanpur. High-quality purification, doorstep delivery, and AMC services.",
  keywords: ["RO Water", "Mineral Water", "Purified Water", "Saharanpur", "Water Delivery", "Shivambhu Water"],
  authors: [{ name: "Shivambhu Team" }],
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
