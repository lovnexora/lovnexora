import type { Metadata } from "next";
import "./globals.css";

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
    </html>
  );
}