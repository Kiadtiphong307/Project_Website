import { createRouter, createWebHistory } from 'vue-router'
import homemain from '../views/Home_page.vue'
import home_north from '../components/north/Home_north.vue'
import home_north_east from '../components/north_east/Home_north_east.vue'
import home_central from '../components/central/Home_central.vue'
import home_east from '../components/east/Home_east.vue'
import home_south from '../components/south/Home_south.vue'



import page_product_north from '../components/north/Page_product_n.vue'

// link home_pag แต่ละทิศ
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: homemain
    },
    {
      path: '/home_north',
      name: 'home_north',
      component: home_north
    },
    {
      path: '/home_north_east',
      name: 'home_north_east',
      component: home_north_east
    },
    {
      path: '/home_central',
      name: 'home_central',
      component: home_central
    },
    {
      path: '/home_east',
      name: 'home_east',
      component: home_east
    },
    {
      path: '/home_south',
      name: 'home_south',
      component: home_south
    },
    {
      path: '/page_product_north',
      name: 'page_product_north',
      component: page_product_north
    }
  ]
})

export default router
