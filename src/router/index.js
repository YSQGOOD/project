import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'

const Hemi = () => import('../views/hemi/index.vue')
const Ai = () => import('../views/ai/index.vue')
const Arcium = () => import('../views/arcium/index.vue')
const Astraprotocol = () => import('../views/astraprotocol/index.vue')
const Grafilab = () => import('../views/grafilab/index.vue')
const Kerneldao = () => import('../views/kerneldao/index.vue')
const Kinza = () => import('../views/kinza/index.vue')
const Ateru = () => import('../views/ateru/index.vue')
const AteruDetail = () => import('../views/ateru/ateruDetail.vue')
const routes = [
  // { path: '/', name: 'Hemi', component: Hemi },
  // { path: '/ai', name: 'Ai', component: Ai },
  // { path: '/arcium', name: 'Arcium', component: Arcium },
  // { path: '/astraprotocol', name: 'Astraprotocol', component: Astraprotocol },
  // { path: '/grafilab', name: 'Grafilab', component: Grafilab },
  // { path: '/kerneldao', name: 'Kerneldao', component: Kerneldao },
  // { path: '/kinza', name: 'Kinza', component: Kinza },
  //{ path: '/ateru', name: 'Ateru', component: Ateru },

  // { path: '/', name: 'Hemi', component: Hemi },
  // { path: '/', name: 'Ai', component: Ai },
  // { path: '/', name: 'Arcium', component: Arcium },
  // { path: '/', name: 'Astraprotocol', component: Astraprotocol },
  // { path: '/', name: 'Grafilab', component: Grafilab },
  // { path: '/', name: 'Kerneldao', component: Kerneldao },
  // { path: '/', name: 'Kinza', component: Kinza },
  { path: '/', name: 'Ateru', component: Ateru },
  { path: '/ateruDetail', name: 'AteruDetail', component: AteruDetail },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router