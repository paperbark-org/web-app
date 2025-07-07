import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

const GeistMono = localFont({
  src: "../GeistMono-VariableFont_wght.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Paperbark — Your Digital Solution",
  description:
    "A modern digital platform bringing innovative solutions to your fingertips. Join our waitlist for early access.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
      </head>
      <body className={`${GeistMono.variable} font-mono`}>
        <meta property="og:image" content="/opengraph-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="832" />
        <meta
          property="og:site_name"
          content="Paperbark — We know your customers better than you do"
        />
        <meta
          property="og:url"
          content="https://paperbark.app/"
        />
        <meta name="twitter:image" content="/twitter-image.png" />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="1280" />
        <meta name="twitter:image:height" content="832" />
        {children}
        <Toaster richColors position="top-center" />
        <Analytics />
      </body>
    </html>
  );
}
