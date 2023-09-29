import { createRouter, createWebHistory } from 'vue-router'

import homemain from '../views/Home_page.vue'
import home_north from '../components/north/Home_north.vue'
import home_north_east from '../components/north_east/Home_north_east.vue'
import home_central from '../components/central/Home_central.vue'
import home_east from '../components/east/Home_east.vue'
import home_south from '../components/south/Home_south.vue'


//north
import page_product_north from '../components/north/Page_product_north.vue'
//place
import place_01_north from '../components/north/Place_north_01.vue'
import place_02_north from '../components/north/Place_north_02.vue'
import place_03_north from '../components/north/Place_north_03.vue'
import place_04_north from '../components/north/Place_north_04.vue'
import place_05_north from '../components/north/Place_north_05.vue'




//north_east
import page_product_north_east from '../components/north_east/Page_product_north_east.vue'

//place
import place_01_north_east from '../components/north_east/Place_north_east_01.vue'
import place_02_north_east from '../components/north_east/Place_north_east_02.vue'
import place_03_north_east from '../components/north_east/Place_north_east_03.vue'
import place_04_north_east from '../components/north_east/Place_north_east_04.vue'
import place_05_north_east from '../components/north_east/Place_north_east_05.vue'




// link home_pag แต่ละทิศ
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // homemain
    {
      path: '/',
      name: 'main',
      component: homemain
    },
    // home แต่ละภาค
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

    // product แต่ละภาค
    {
      path: '/page_product_north',
      name: 'page_product_north',
      component: page_product_north
    },
    {
      path: '/page_product_north_east',
      name: 'page_product_north_east',
      component: page_product_north_east
    },

    //place_north
    {
      path: '/place_01_north',
      name: 'place_01_north',
      component: place_01_north
    },
    {
      path: '/place_02_north',
      name: 'place_02_north',
      component: place_02_north
    },
    {
      path: '/place_03_north',
      name: 'place_03_north',
      component: place_03_north
    },
    {
      path: '/place_04_north',
      name: 'place_04_north',
      component: place_04_north
    },
    {
      path: '/place_05_north',
      name: 'place_05_north',
      component: place_05_north
    },

    // place_north_east
    {
      path: '/place_01_north_east',
      name: 'place_01_north_east',
      component: place_01_north_east
    },
    {
      path: '/place_02_north_east',
      name: 'place_02_north_east',
      component: place_02_north_east
    },
    {
      path: '/place_03_north_east',
      name: 'place_03_north_east',
      component: place_03_north_east
    },
    {
      path: '/place_04_north_east',
      name: 'place_04_north_east',
      component: place_04_north_east
    },
    {
      path: '/place_05_north_east',
      name: 'place_05_north_east',
      component: place_05_north_east
    }
  ]
})

export default router
