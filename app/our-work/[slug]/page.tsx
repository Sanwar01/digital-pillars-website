import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CaseStudyView } from '@/components/CaseStudyView';
import { JsonLd } from '@/components/JsonLd';
import {
  getCaseStudyProjects,
  getProjectBySlug,
  type CaseStudy,
  type Project,
} from '@/content/our-work';
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  caseStudyJsonLd,
} from '@/lib/seo';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getCaseStudyProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project?.caseStudy) {
    return {};
  }

  return buildPageMetadata({
    title: project.caseStudy.seo.title,
    description: project.caseStudy.seo.description,
    path: `/our-work/${slug}`,
    image: project.caseStudy.heroImage,
    type: 'article',
  });
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project?.caseStudy) {
    notFound();
  }

  const typed = project as Project & { caseStudy: CaseStudy };
  const path = `/our-work/${slug}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Our work', path: '/our-work' },
            { name: typed.title, path },
          ]),
          caseStudyJsonLd({
            name: typed.title,
            description: typed.caseStudy.seo.description,
            path,
            image: typed.caseStudy.heroImage,
            datePublished: typed.year,
          }),
        ]}
      />
      <CaseStudyView project={typed} />
    </>
  );
}
