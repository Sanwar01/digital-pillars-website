import type { Metadata } from 'next';

import './globals.css';
import { PageShell } from '@/components/PageShell';
import { JsonLd } from '@/components/JsonLd';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { cabinetGrotesk } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import {
  SITE_URL,
  DEFAULT_OG_IMAGE,
  absoluteUrl,
  organizationJsonLd,
  websiteJsonLd,
} from '@/lib/seo';
import { home } from '@/content/home';
import { SITE } from '@/content/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: home.seo.title,
    template: `%s | ${SITE.name}`,
  },
  description: home.seo.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE_URL }],
  creator: SITE.name,
  publisher: SITE.name,
  category: 'technology',
  keywords: [
    'web design Manchester',
    'software agency Manchester',
    'web development UK',
    'digital strategy',
    'AI automation',
    'Digital Pillars',
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_URL,
    siteName: SITE.name,
    title: home.seo.title,
    description: home.seo.description,
    images: [
      {
        url: absoluteUrl(DEFAULT_OG_IMAGE),
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: home.seo.title,
    description: home.seo.description,
    images: [absoluteUrl(DEFAULT_OG_IMAGE)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={cabinetGrotesk.variable}>
      <body
        suppressHydrationWarning
        className={cn(cabinetGrotesk.className, 'font-sans antialiased')}
      >
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <GoogleAnalytics />
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
