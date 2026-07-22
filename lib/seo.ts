import type { Metadata } from 'next';
import { SITE } from '@/content/site';

export const SITE_URL = 'https://digitalpillars.co.uk';
export const DEFAULT_OG_IMAGE = '/opengraph-image';

export type PageSeo = {
  title: string;
  description: string;
};

type BuildPageMetadataOptions = PageSeo & {
  path: string;
  image?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
};

export function absoluteUrl(path: string) {
  if (!path || path === '/') return SITE_URL;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  noIndex = false,
}: BuildPageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: 'en_GB',
      type,
      images: [
        {
          url: imageUrl,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE.name,
    url: SITE_URL,
    email: SITE.email,
    image: absoluteUrl('/images/brand/logo.png'),
    logo: absoluteUrl('/images/brand/logo.png'),
    description: SITE.tagline,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Manchester',
      addressCountry: 'GB',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    sameAs: SITE.socials.map((s) => s.href),
    knowsAbout: [
      'Web design',
      'Web development',
      'Software development',
      'Digital strategy',
      'AI automation',
    ],
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE_URL,
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE_URL,
    },
  };
}

export function faqJsonLd(items: readonly { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function caseStudyJsonLd({
  name,
  description,
  path,
  image,
  datePublished,
}: {
  name: string;
  description: string;
  path: string;
  image: string;
  datePublished?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name,
    description,
    url: absoluteUrl(path),
    image: absoluteUrl(image),
    author: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE_URL,
    },
    ...(datePublished ? { datePublished } : {}),
  };
}
