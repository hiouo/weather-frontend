import { createSSRApp } from 'vue'
import Future from './Future.vue'

export function createApp() {
  const app = createSSRApp(Future)
  return { app }
}