import { CAT_IMAGE_PREFIX, ENDPOINTS } from '../config/endpoints'

export async function getCatImage(word) {
  const resp = await fetch(ENDPOINTS.CAT_IMAGE(word))
  const data = await resp.json()
  return CAT_IMAGE_PREFIX + data.url
}
