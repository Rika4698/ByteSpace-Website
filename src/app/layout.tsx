import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ByteSpace-Website",
  description: "Learn, build and grow with ByteSpace-Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}