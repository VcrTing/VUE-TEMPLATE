import { 
  // RouteLocationNormalized,
  createRouter, 
  createWebHashHistory,
} from 'vue-router'

import routes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
      // ...routes,
      ...setupLayouts(routes)
  ]
})

export default router