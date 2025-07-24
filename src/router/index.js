import { createRouter, createWebHistory } from 'vue-router'
import Hemi from '../views/hemi/index.vue'
import Ai from '../views/ai/index.vue'
import Arcium from '../views/arcium/index.vue'
import Astraprotocol from '../views/astraprotocol/index.vue'
import Grafilab from '../views/grafilab/index.vue'
import Kerneldao from '../views/kerneldao/index.vue'
import Kinza from '../views/kinza/index.vue'
import Ateru from '../views/ateru/index.vue'
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
  history: createWebHistory(),
  routes
})

export default router