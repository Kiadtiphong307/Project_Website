<template>
  <!-- แถบ Menu  -->
  <div class="text-bg-success">
    <nav class="nav justify-content-between">
      <router-link
        :to="{ name: 'home_east' }"
        class="btn btn-primary nav-item nav-link link-body-emphasis active"
        >หน้าแรก</router-link
      >
      <router-link
        :to="{ name: 'page_product_east' }"
        class="btn btn-primary nav-item nav-link link-body-emphasis active"
        >สินค้าแนะนำ</router-link
      >
      <router-link
        :to="{ name: 'place_01_east' }"
        class="btn btn-primary nav-item nav-link link-body-emphasis active"
        >เกาะสีชัง</router-link
      >
      <router-link
        :to="{ name: 'place_02_east' }"
        class="btn btn-primary nav-item nav-link link-body-emphasis active"
        >วัดมณีวงศ์
      </router-link>
      <router-link
        :to="{ name: 'place_03_east' }"
        class="btn btn-primary nav-item nav-link link-body-emphasis active"
        >วัดหงษ์ทอง
      </router-link>
      <router-link
        :to="{ name: 'place_04_east' }"
        class="btn btn-primary nav-item nav-link link-body-emphasis active"
        >วัดถ้ำเขาประทุน</router-link
      >
      <router-link
        :to="{ name: 'place_05_east' }"
        class="btn btn-primary nav-item nav-link link-body-emphasis active"
        >ถ้ำน้ำเขาศิวะ
      </router-link>
    </nav>
  </div>
</template>
