import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { contact } from '@/content/contact';
import { buildPageMetadata, faqJsonLd } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  ...contact.seo,
  path: '/contact',
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={faqJsonLd(contact.faqs.items)} />
      {children}
    </>
  );
}
