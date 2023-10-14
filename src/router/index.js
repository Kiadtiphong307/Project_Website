import { createRouter, createWebHistory } from 'vue-router'

import homemain from '../views/Home_page.vue'
import home_north from '../components/north/Home_north.vue'
import home_north_east from '../components/north_east/Home_north_east.vue'
import home_central from '../components/central/Home_central.vue'
import home_east from '../components/east/Home_east.vue'
import home_south from '../components/south/Home_south.vue'

//Cart and oder
import CartList from '../components/shop/Cart_list.vue'
import Orderlist from '../components/shop/Order_list.vue'

//about
import about_page from '../views/About_page.vue'

//
import weather_today from '../views/Weather_today.vue'

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

// central
import page_product_central from '../components/central/Page_product_central.vue'
//place
import place_01_central from '../components/central/Place_central_01.vue'
import place_02_central from '../components/central/Place_central_02.vue'
import place_03_central from '../components/central/Place_central_03.vue'
import place_04_central from '../components/central/Place_central_04.vue'
import place_05_central from '../components/central/Place_central_05.vue'

// east
import page_product_east from '../components/east/Page_product_east.vue'
//place
import place_01_east from '../components/east/Place_east_01.vue'
import place_02_east from '../components/east/Place_east_02.vue'
import place_03_east from '../components/east/Place_east_03.vue'
import place_04_east from '../components/east/Place_east_04.vue'
import place_05_east from '../components/east/Place_east_05.vue'

// south
import page_product_south from '../components/south/Page_product_south.vue'

//place
import place_01_south from '../components/south/Place_south_01.vue'
import place_02_south from '../components/south/Place_south_02.vue'
import place_03_south from '../components/south/Place_south_03.vue'
import place_04_south from '../components/south/Place_south_04.vue'
import place_05_south from '../components/south/Place_south_05.vue'

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

    //about
    {
      path: '/about_page',
      name: 'about_page',
      component: about_page
    },

    {
      path: '/weather_today',
      name: 'weather_today',
      component: weather_today
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
    {
      path: '/page_product_central',
      name: 'page_product_central',
      component: page_product_central
    },
    {
      path: '/page_product_east',
      name: 'page_product_east',
      component: page_product_east
    },
    {
      path: '/page_product_south',
      name: 'page_product_south',
      component: page_product_south
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
    },

    //place_central
    {
      path: '/place_01_central',
      name: 'place_01_central',
      component: place_01_central
    },
    {
      path: '/place_02_central',
      name: 'place_02_central',
      component: place_02_central
    },
    {
      path: '/place_03_central',
      name: 'place_03_central',
      component: place_03_central
    },
    {
      path: '/place_04_central',
      name: 'place_04_central',
      component: place_04_central
    },
    {
      path: '/place_05_central',
      name: 'place_05_central',
      component: place_05_central
    },

    //place_east
    {
      path: '/place_01_east',
      name: 'place_01_east',
      component: place_01_east
    },
    {
      path: '/place_02_east',
      name: 'place_02_east',
      component: place_02_east
    },
    {
      path: '/place_03_east',
      name: 'place_03_east',
      component: place_03_east
    },
    {
      path: '/place_04_east',
      name: 'place_04_east',
      component: place_04_east
    },
    {
      path: '/place_05_east',
      name: 'place_05_east',
      component: place_05_east
    },

    //place_south
    {
      path: '/place_01_south',
      name: 'place_01_south',
      component: place_01_south
    },
    {
      path: '/place_02_south',
      name: 'place_02_south',
      component: place_02_south
    },
    {
      path: '/place_03_south',
      name: 'place_03_south',
      component: place_03_south
    },
    {
      path: '/place_04_south',
      name: 'place_04_south',
      component: place_04_south
    },
    {
      path: '/place_05_south',
      name: 'place_05_south',
      component: place_05_south
    },

    //Cart
    {
      path: '/cart',
      name: 'cart',
      component: CartList
    },
    {
      path: '/orderlist',
      name: 'orderList',
      component: Orderlist
    }
  ]
})

export default router
