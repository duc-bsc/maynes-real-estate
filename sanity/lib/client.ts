import { createClient } from '@sanity/client/stega'
import imageUrlBuilder from '@sanity/image-url'
import {
  apiVersion,
  dataset,
  projectId,
  revalidateSecret,
  studioUrl,
} from '@/sanity/lib/api'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // If webhook revalidation is setup we want the freshest content, if not then it's best to use the speedy CDN
  useCdn: revalidateSecret ? false : true,
  perspective: 'published',
  stega: {
    studioUrl,
    logger: console,
    filter: (props) => {
      if (props.sourcePath.at(-1) === 'title') {
        return true
      }

      return props.filterDefault(props)
    },
  },
})

const builder = imageUrlBuilder({
  // baseUrl: 'https://cdn.sanity.io',
  projectId: projectId,
  dataset: dataset,
})
export const getUrlImage =(url:string)=>{
  return builder.image(url).url()

}
