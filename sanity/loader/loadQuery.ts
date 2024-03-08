import 'server-only'

import * as queryStore from '@sanity/react-loader'
import { draftMode } from 'next/headers'

import { client } from '@/sanity/lib/client'
import {
  homePageQuery,
  housesQuery,
  housesBySlugQuery,
  optionsQuery,
  pagesBySlugQuery,
  projectBySlugQuery,
  settingsQuery,
  farmsQuery,
  farmsBySlugQuery
} from '@/sanity/lib/queries'
import { token } from '@/sanity/lib/token'
import {
  HomePagePayload,
  PagePayload,
  ProjectPayload,
  SettingsPayload,
} from '@/types'

const serverClient = client.withConfig({
  token,
  // Enable stega if it's a Vercel preview deployment, as the Vercel Toolbar has controls that shows overlays
  stega: process.env.VERCEL_ENV === 'preview',
})

/**
 * Sets the server client for the query store, doing it here ensures that all data fetching in production
 * happens on the server and not on the client.
 * Live mode in `sanity/presentation` still works, as it uses the `useLiveMode` hook to update `useQuery` instances with
 * live draft content using `postMessage`.
 */
queryStore.setServerClient(serverClient)

const usingCdn = serverClient.config().useCdn
// Automatically handle draft mode
export const loadQuery = ((query, params = {}, options = {}) => {
  const {
    perspective = draftMode().isEnabled ? 'previewDrafts' : 'published',
  } = options
  // Don't cache by default
  let revalidate: NextFetchRequestConfig['revalidate'] = 0
  // If `next.tags` is set, and we're not using the CDN, then it's safe to cache
  if (!usingCdn && Array.isArray(options.next?.tags)) {
    revalidate = false
  } else if (usingCdn) {
    revalidate = 60
  }
  return queryStore.loadQuery(query, params, {
    ...options,
    next: {
      revalidate,
      ...(options.next || {}),
    },
    perspective,
    // Enable stega if in Draft Mode, to enable overlays when outside Sanity Studio
    stega: draftMode().isEnabled,
  })
}) satisfies typeof queryStore.loadQuery

/**
 * Loaders that are used in more than one place are declared here, otherwise they're colocated with the component
 */

export function loadSettings() {
  return loadQuery<SettingsPayload>(
    settingsQuery,
    {},
    { next: { tags: ['settings', 'home', 'page', 'project'] } },
  )
}
export function loadOptions() {
  return loadQuery<any>(
    optionsQuery,
    {},
    { next: { tags: ['options', 'houses'] } },
  )
}
export function loadHouses() {
  return loadQuery<any>(
    housesQuery,
    {},
    { next: { tags: ['options', 'houses'] } },
  )
}

export function loadHomePage() {
  return loadQuery<HomePagePayload | null>(
    homePageQuery,
    {},
    { next: { tags: ['home', 'project'] } },
  )
}

export function loadProject(slug: string) {
  return loadQuery<ProjectPayload | null>(
    projectBySlugQuery,
    { slug },
    { next: { tags: [`project:${slug}`] } },
  )
}
export function loadHousesBySlug(slug: string) {
  return loadQuery<any | null>(
    housesBySlugQuery,
    { slug },
    { next: { tags: [`houses:${slug}`] } },
  )
}
export function loadFarmsBySlug(slug: string) {
  return loadQuery<any | null>(
    farmsBySlugQuery,
    { slug },
    { next: { tags: [`farms:${slug}`] } },
  )
}

export function loadPage(slug: string) {
  return loadQuery<PagePayload | null>(
    pagesBySlugQuery,
    { slug },
    { next: { tags: [`page:${slug}`] } },
  )
}

export function loadFarms() {
  return loadQuery<any>(
    farmsQuery,
    {},
    { next: { tags: ['options', 'houses','farms'] } },
  )
}