import { ENDPOINTS } from '../config/endpoints'

export async function getRandomFact() {
  const resp = await fetch(ENDPOINTS.RANDOM_FACT)
  const data = await resp.json()
  return data.fact
}
