import { createRouter, createWebHistory } from 'vue-router'
import homemain from '../views/Home_page.vue'
import home_north from '../components/north/Home_north.vue'
import home_north_east from '../components/north_east/Home_north_east.vue'
import home_central from '../components/central/Home_central.vue'
import home_east from '../components/east/Home_east.vue'
import home_south from '../components/south/Home_south.vue'


//north
// product
import page_product_north from '../components/north/Page_product_n.vue'
//place
import place_01 from '../components/north/Place_n_01.vue'
import place_02 from '../components/north/Place_n_02.vue'
import place_03 from '../components/north/Place_n_03.vue'
import place_04 from '../components/north/Place_n_04.vue'
import place_05 from '../components/north/Place_n_05.vue'



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
    },
    {
      path: '/place_01',
      name: 'place_01',
      component: place_01
    },
    {
      path: '/place_02',
      name: 'place_02',
      component: place_02
    },
    {
      path: '/place_03',
      name: 'place_03',
      component: place_03
    },
    {
      path: '/place_04',
      name: 'place_04',
      component: place_04
    },
    {
      path: '/place_05',
      name: 'place_05',
      component: place_05
    }

  ]
})

export default router
