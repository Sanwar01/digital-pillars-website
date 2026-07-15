import type { Metadata } from 'next';
// import { Toaster } from '@/components/ui/sonner';

import './globals.css';
import { PageShell } from '@/components/PageShell';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: 'Digital Pillars | Websites, Software & Digital Systems',
    template: '%s | Digital Pillars',
  },
  description:
    'Digital Pillars builds websites, software and digital systems that help UK businesses get more enquiries, save time and grow.',
  metadataBase: new URL('https://digitalpillars.co.uk'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={cn("font-sans", geist.variable)}>
      <PageShell>
        <body>{children}</body>
      </PageShell>
      {/* <Toaster position="bottom-right" theme="dark" /> */}
    </html>
  );
}
