import { notFound } from 'next/navigation';
import { CaseStudyView } from '@/components/CaseStudyView';
import {
  getCaseStudyProjects,
  getProjectBySlug,
  type CaseStudy,
  type Project,
} from '@/content/our-work';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getCaseStudyProjects().map((p) => ({ slug: p.slug }));
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project?.caseStudy) {
    notFound();
  }

  return (
    <CaseStudyView
      project={project as Project & { caseStudy: CaseStudy }}
    />
  );
}
