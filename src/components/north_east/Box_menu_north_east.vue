<template>
  <!-- แถบ Menu  -->
  <div class="NavBar">
    <nav class="NavMenu">
      <router-link :to="{ name: 'home_north_east' }" class="itemNav">หน้าแรก</router-link>
      <router-link :to="{ name: 'page_product_north_east' }" class="itemNav"
        >สินค้าแนะนำ</router-link
      >
      <router-link :to="{ name: 'place_01_north_east' }" class="itemNav">มอหินขาว </router-link>
      <router-link :to="{ name: 'place_02_north_east' }" class="itemNav"
        >วนอุทยานภูบ่อบิด
      </router-link>
      <router-link :to="{ name: 'place_03_north_east' }" class="itemNav">ผาพญากูปรี </router-link>
      <router-link :to="{ name: 'place_04_north_east' }" class="itemNav"
        >ชุมชนบ้านปรางค์นคร
      </router-link>
      <router-link :to="{ name: 'place_05_north_east' }" class="itemNav"
        >วัดพุทธวนาราม
      </router-link>
    </nav>
  </div>
</template>
<style scoped>
.NavBar {
  background-color: #806b36;
  padding: 10px;
  padding-inline: 70px;
  margin-bottom: 15px;
}
.NavMenu {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.itemNav {
  border: 2px solid white;
  border-radius: 16px;
  padding-block: 10px;
  padding-inline: 20px;
  color: white;
  text-decoration: none;
}
.itemNav:hover {
  border: 2px solid rgba(65, 3, 3, 0.274);
  background-color: rgba(0, 0, 0, 0.144);
  border-radius: 16px;
  padding-block: 10px;
  padding-inline: 20px;
  color: white;
  text-decoration: none;
}
</style>
