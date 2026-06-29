import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Digital Pillars | Websites, Software & Digital Systems",
    template: "%s | Digital Pillars",
  },
  description:
    "Digital Pillars builds websites, software and digital systems that help UK businesses get more enquiries, save time and grow.",
  metadataBase: new URL("https://digitalpillars.co.uk"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
