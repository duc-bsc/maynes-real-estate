import { toPlainText } from '@portabletext/react'
import { Metadata, ResolvingMetadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'


import { urlForOpenGraphImage } from '@/sanity/lib/utils'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { loadFarmsBySlug } from '@/sanity/loader/loadQuery'
import FarmsDetailPreview from '@/components/pages/farmsDetail/FarmsDetailPreview'
import FarmsDetailPage from '@/components/pages/farmsDetail/FarmsDetailPage'

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { data: project } = await loadFarmsBySlug(params.slug)
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
  const initial = await loadFarmsBySlug(params.slug)

  if (draftMode().isEnabled) {
    return <FarmsDetailPreview params={params} initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <FarmsDetailPage data={initial.data} />
}
