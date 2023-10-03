<template>
  <!-- แถบ Menu  -->
  <div class="text-bg-success">
    <nav class="nav justify-content-between">
      <router-link
        :to="{ name: 'home_north_east' }"
        class="btn btn-primary nav-item nav-link link-body-emphasis active"
        >หน้าแรก</router-link
      >
      <router-link
        :to="{ name: 'page_product_north_east' }"
        class="btn btn-primary nav-item nav-link link-body-emphasis active"
        >สินค้าแนะนำ</router-link
      >
      <router-link
        :to="{ name: 'place_01_north_east' }"
        class="btn btn-primary nav-item nav-link link-body-emphasis active"
        >มอหินขาว </router-link
      >
      <router-link
        :to="{ name: 'place_02_north_east' }"
        class="btn btn-primary nav-item nav-link link-body-emphasis active"
        >วนอุทยานภูบ่อบิด </router-link
      >
      <router-link
        :to="{ name: 'place_03_north_east' }"
        class="btn btn-primary nav-item nav-link link-body-emphasis active"
        >ผาพญากูปรี </router-link
      >
      <router-link
        :to="{ name: 'place_04_north_east' }"
        class="btn btn-primary nav-item nav-link link-body-emphasis active"
        >ชุมชนบ้านปรางค์นคร </router-link
      >
      <router-link
        :to="{ name: 'place_05_north_east' }"
        class="btn btn-primary nav-item nav-link link-body-emphasis active"
        >วัดพุทธวนาราม </router-link
      >
    </nav>
  </div>
</template>
