import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import { HomePage } from '@/components/pages/home/HomePage'
import { studioUrl } from '@/sanity/lib/api'
import { loadHomePage } from '@/sanity/loader/loadQuery'
import PageHouse from '@/components/pages/houses'
const HomePagePreview = dynamic(
  () => import('@/components/pages/home/HomePagePreview'),
)

// export default async function IndexRoute() {
//   // const initial = await loadHomePage()

//   // if (draftMode().isEnabled) {
//   //   return <HomePagePreview initial={initial} />
//   // }

//   // if (!initial.data) {
//   //   return (
//   //     <div className="text-center">
//   //       You don&rsquo;t have a homepage yet,{' '}
//   //       <Link href={`${studioUrl}/desk/home`} className="underline">
//   //         create one now
//   //       </Link>
//   //       !
//   //     </div>
//   //   )
//   // }

//   return <PageHouse />
// }

const IndexRoute = () => {
  return (
    <div>
      <Link href={'/houses'} className='text-xl uppercase font-bold underline block' > link house</Link>
      <Link href={'/farms'} className='text-xl uppercase font-bold underline block' > link farms</Link>
    </div>
  );
};

export default IndexRoute;