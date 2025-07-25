import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'

const Hemi = () => import('../views/hemi/index.vue')
const Ai = () => import('../views/ai/index.vue')
const Arcium = () => import('../views/arcium/index.vue')
const Astraprotocol = () => import('../views/astraprotocol/index.vue')
const Grafilab = () => import('../views/grafilab/index.vue')
const Kerneldao = () => import('../views/kerneldao/index.vue')
const Kinza = () => import('../views/kinza/index.vue')
const Ateru = () => import('../views/ateru/index.vue')
const routes = [
  { path: '/', name: 'Hemi', component: Hemi },
  { path: '/ai', name: 'Ai', component: Ai },
  { path: '/arcium', name: 'Arcium', component: Arcium },
  { path: '/astraprotocol', name: 'Astraprotocol', component: Astraprotocol },
  { path: '/grafilab', name: 'Grafilab', component: Grafilab },
  { path: '/kerneldao', name: 'Kerneldao', component: Kerneldao },
  { path: '/kinza', name: 'Kinza', component: Kinza },
  { path: '/ateru', name: 'Ateru', component: Ateru },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router