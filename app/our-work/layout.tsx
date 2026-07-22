import type { Metadata } from 'next';
import { ourWork } from '@/content/our-work';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  ...ourWork.seo,
  path: '/our-work',
});

export default function OurWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
