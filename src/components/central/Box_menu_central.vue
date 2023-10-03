<template>
  <!-- แถบ Menu  -->
  <div class="text-bg-success">
    <nav class="nav justify-content-between">
      <router-link
        :to="{ name: 'home_central' }"
        class="btn btn-primary nav-item nav-link link-body-emphasis active"
        >หน้าแรก</router-link
      >
      <router-link
        :to="{ name: 'page_product_central' }"
        class="btn btn-primary nav-item nav-link link-body-emphasis active"
        >สินค้าแนะนำ</router-link
      >
      <router-link
        :to="{ name: 'place_01_central' }"
        class="btn btn-primary nav-item nav-link link-body-emphasis active"
        >หอมนสิการ </router-link
      >
      <router-link
        :to="{ name: 'place_02_central' }"
        class="btn btn-primary nav-item nav-link link-body-emphasis active"
        >ถ้ำโบ้ </router-link
      >
      <router-link
        :to="{ name: 'place_03_central' }"
        class="btn btn-primary nav-item nav-link link-body-emphasis active"
        >ภูผาแรด  </router-link
      >
      <router-link
        :to="{ name: 'place_04_central' }"
        class="btn btn-primary nav-item nav-link link-body-emphasis active"
        >อุโมงค์สามมิติ</router-link
      >
      <router-link
        :to="{ name: 'place_05_central' }"
        class="btn btn-primary nav-item nav-link link-body-emphasis active"
        >วัดทางสาย </router-link
      >
    </nav>
  </div>
</template>
