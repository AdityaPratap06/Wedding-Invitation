
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ananya & Aarav | Wedding Invitation",
  description:
    "Join Ananya and Aarav as they celebrate their wedding in Jaipur. Explore the wedding ceremonies, venue and RSVP details.",
  viewport: "width=device-width, initial-scale=1",
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
