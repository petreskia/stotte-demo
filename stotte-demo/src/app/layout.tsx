import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stotte Demo",
  description: "Redesigned Stotte demo app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">{children}</body>
    </html>
  );
}
