import type { Metadata } from 'next';
// import { Toaster } from '@/components/ui/sonner';

import './globals.css';
import { PageShell } from '@/components/PageShell';
import { cabinetGrotesk } from '@/lib/fonts';
import { cn } from '@/lib/utils';

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
    <html lang="en-GB" className={cabinetGrotesk.variable}>
      <body className={cn(cabinetGrotesk.className, 'font-sans antialiased')}>
        <PageShell>{children}</PageShell>
        {/* <Toaster position="bottom-right" theme="dark" /> */}
      </body>
    </html>
  );
}
