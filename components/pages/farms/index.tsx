import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import FarmsLayout from './FarmsLayout'
const FarmsPreview = dynamic(() => import('./FarmsPreview'))
import { loadFarms } from '@/sanity/loader/loadQuery'
const PageFarm = async() => {
    const initial = await loadFarms()
    if (draftMode().isEnabled) {
      return <FarmsPreview initial={initial} />
    }
  
    return <FarmsLayout data={initial.data} />
};

export default PageFarm;