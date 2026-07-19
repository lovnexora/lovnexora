import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lov Nexora | Portfolio",
  description: "Building the future I want to live in.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-mono select-none">
        {children}
      </body>
    </html>
  );
}