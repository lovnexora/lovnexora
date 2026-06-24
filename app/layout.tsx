import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "lovnexora",
  description: "Terminal Workspace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#000000]">
      <body className="antialiased bg-[#000000] text-neutral-400 font-mono select-none">
        {children}
      </body>
      <GoogleAnalytics gaId="G-G5FS89Z38W" />
    </html>
  );
}