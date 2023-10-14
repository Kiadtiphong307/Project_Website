<template>
  <!-- แถบ Menu  -->
  <div class="NavBar_Box_menu_north_east">
    <nav class="NavMenu_Box_menu_north_east">
      <router-link :to="{ name: 'home_north_east' }" class="itemNav_Box_menu_north_east">หน้าแรก</router-link>
      <router-link :to="{ name: 'page_product_north_east' }" class="itemNav_Box_menu_north_east"
        >สินค้าแนะนำ</router-link
      >
      <router-link :to="{ name: 'place_01_north_east' }" class="itemNav_Box_menu_north_east">มอหินขาว </router-link>
      <router-link :to="{ name: 'place_02_north_east' }" class="itemNav_Box_menu_north_east"
        >วนอุทยานภูบ่อบิด
      </router-link>
      <router-link :to="{ name: 'place_03_north_east' }" class="itemNav_Box_menu_north_east">ผาพญากูปรี </router-link>
      <router-link :to="{ name: 'place_04_north_east' }" class="itemNav_Box_menu_north_east"
        >ชุมชนบ้านปรางค์นคร
      </router-link>
      <router-link :to="{ name: 'place_05_north_east' }" class="itemNav_Box_menu_north_east"
        >วัดพุทธวนาราม
      </router-link>
    </nav>
  </div>
</template>
<style scoped>
.NavBar_Box_menu_north_east{
  background-color: #806b36;
  padding: 10px;
  padding-inline: 70px;
  margin-bottom: 15px;
}
.NavMenu_Box_menu_north_east {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.itemNav_Box_menu_north_east {
  border: 2px solid white;
  border-radius: 16px;
  padding-block: 10px;
  padding-inline: 20px;
  color: white;
  text-decoration: none;
  background-color: #594000;
}
.itemNav_Box_menu_north_east:hover {
  border: 2px solid rgba(65, 3, 3, 0.274);
  background-color: rgba(0, 0, 0, 0.144);
  border-radius: 16px;
  padding-block: 10px;
  padding-inline: 20px;
  color: white;
  text-decoration: none;
}
</style>
