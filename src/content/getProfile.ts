import { profile } from './profile'
import type { Profile } from './types'

export async function getProfile(): Promise<Profile> {
  // Abstraction point: later swap this to fetch JSON or call an API/CMS.
  return profile
}

