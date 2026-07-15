import type { Metadata } from 'next';
// import { Toaster } from '@/components/ui/sonner';

import './globals.css';
import { PageShell } from '@/components/PageShell';
import { Outfit } from 'next/font/google';
import { cn } from '@/lib/utils';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'Digital Pillars | Websites, Software & Digital Systems',
    template: '%s | Digital Pillars',
  },
  description:
    'Digital Pillars builds websites, software and digital systems that help UK businesses get more enquiries, save time and grow.',
  metadataBase: new URL('https://digitalpillars.co.uk'),
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={cn('font-sans', outfit.variable)}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@700,800,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn(outfit.className, 'font-sans')}>
        <PageShell>{children}</PageShell>
        {/* <Toaster position="bottom-right" theme="dark" /> */}
      </body>
    </html>
  );
}
