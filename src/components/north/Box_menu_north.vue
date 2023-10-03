<template>
  <!-- แถบ Menu  -->
  <div class="text-bg-success">
    <nav class="nav justify-content-between">
      <router-link
        :to="{ name: 'home_north' }"
        class="btn btn-primary nav-item nav-link link-body-emphasis active"
        >หน้าแรก</router-link
      >
      <router-link
        :to="{ name: 'page_product_north' }"
        class="btn btn-primary nav-item nav-link link-body-emphasis active"
        >สินค้าแนะนำ</router-link
      >
      <router-link
        :to="{ name: 'place_01_north' }"
        class="btn btn-primary nav-item nav-link link-body-emphasis active"
        >ประตูท่าแพ
        </router-link
      >
      <router-link
        :to="{ name: 'place_02_north' }"
        class="btn btn-primary nav-item nav-link link-body-emphasis active"
        >สวนสนแม่แตง</router-link
      >
      <router-link
        :to="{ name: 'place_03_north' }"
        class="btn btn-primary nav-item nav-link link-body-emphasis active"
        >ห้วยกุ๊บกั๊บ</router-link
      >
      <router-link
        :to="{ name: 'place_04_north' }"
        class="btn btn-primary nav-item nav-link link-body-emphasis active"
        >วัดเด่นสะหลีศรีเมืองแกน</router-link
      >
      <router-link
        :to="{ name: 'place_05_north' }"
        class="btn btn-primary nav-item nav-link link-body-emphasis active"
        >เขื่อนแม่งัด อุทยานแห่งชาติศรีลานนา</router-link
      >
    </nav>
  </div>
</template>
