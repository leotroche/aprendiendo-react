// @ts-check
import { test, expect } from '@playwright/test'

const LOCAL_HOST_URL = ' http://localhost:5173/'
const CAT_IMAGE_PREFIX = 'https://cataas.com'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL)

  const text = page.getByRole('paragraph')
  const image = page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  expect(textContent?.length).toBeGreaterThan(0)
  expect(imageSrc?.startsWith(CAT_IMAGE_PREFIX)).toBeTruthy()
})
