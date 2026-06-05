import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "For Teagan",
  description: "A little website made for Teagan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}