<template>
  <!-- แถบ Menu  -->
  <div class="text-bg-success">
      <nav class="nav justify-content-between">
          <router-link :to="{ name: 'main' }" class="btn btn-primary nav-item nav-link link-body-emphasis active">หน้าแรก</router-link>
          <router-link :to="{ name: 'page_product_north' }" class="btn btn-primary nav-item nav-link link-body-emphasis">สินค้าแนะนำ</router-link>
          <a class="btn btn-primary nav-item nav-link link-body-emphasis" href="#">1</a>
          <a class="btn btn-primary nav-item nav-link link-body-emphasis" href="#">2</a>
          <a class="btn btn-primary nav-item nav-link link-body-emphasis" href="#">3</a>
          <a class="btn btn-primary nav-item nav-link link-body-emphasis" href="#">4</a>
          <a class="btn btn-primary nav-item nav-link link-body-emphasis" href="#">5</a>
      </nav>
  </div>
</template>
