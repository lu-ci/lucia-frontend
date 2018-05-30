import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/components/pages/lucia/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '*', name: 'lc-not-found', meta: {title: 'Lucia\'s Cipher: Page Not Found'}, component: NotFound}
  ]
})
