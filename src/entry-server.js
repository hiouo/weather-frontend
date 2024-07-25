import { createApp } from './main'
import { renderToString } from '@vue/server-renderer'

export async function render(url) {
  const { app } = createApp()

  const appHtml = await renderToString(app)

  return appHtml
}