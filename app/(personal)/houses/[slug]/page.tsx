import { toPlainText } from '@portabletext/react'
import { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { ProjectPage } from '@/components/pages/project/ProjectPage'
import { urlForOpenGraphImage } from '@/sanity/lib/utils'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { loadHousesBySlug } from '@/sanity/loader/loadQuery'
import HousesDetailPreview from '@/components/pages/housesDetail/HousesDetailPreview'
import HousesDetailPage from '@/components/pages/housesDetail/HousesDetailPage'
const ProjectPreview = dynamic(
  () => import('@/components/pages/project/ProjectPreview'),
)

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { data: project } = await loadHousesBySlug(params.slug)
  const ogImage = urlForOpenGraphImage(project?.coverImage)

  return {
    title: project?.title,
    description: project?.overview
      ? toPlainText(project.overview)
      : (await parent).description,
    openGraph: ogImage
      ? {
          images: [ogImage, ...((await parent).openGraph?.images || [])],
        }
      : {},
  }
}

export function generateStaticParams() {
  return generateStaticSlugs('project')
}

export default async function ProjectSlugRoute({ params }: Props) {
  const initial = await loadHousesBySlug(params.slug)

  if (draftMode().isEnabled) {
    return <HousesDetailPreview params={params} initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <HousesDetailPage data={initial.data} />
}
