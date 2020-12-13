import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '',
    redirect: { name: 'Question', params: { id: 1 } }
  },
  {
    path: '/question/:id',
    name: 'Question',
    component: () => import('../views/Question.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
