import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { services } from '@/content/services';
import { buildPageMetadata, faqJsonLd } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  ...services.seo,
  path: '/services',
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={faqJsonLd(services.faq.items)} />
      {children}
    </>
  );
}
