import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Installers Test",
  description: "Installers Test Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
