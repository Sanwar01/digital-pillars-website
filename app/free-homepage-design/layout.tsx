import type { Metadata } from 'next';
import { design } from '@/content/design';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  ...design.seo,
  path: '/free-homepage-design',
});

export default function FreeHomepageDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
