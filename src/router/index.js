import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
 /* {
    path: '',
    redirect: { name: 'Question', params: { id: 1 } }
  },*/
  {
    path: '',
    redirect: { name: 'Tutorial'}
  },
  {
    path: '/tutorial',
    name: 'Tutorial',
    component: () => import('../views/Tutorial.vue')
  },
  {
    path: '/question/:id',
    name: 'Question',
    component: () => import('../views/Question.vue')
  },
  {
    path: '/evaluation',
    name: 'Evaluation',
    component: () => import('../views/Evaluation.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
