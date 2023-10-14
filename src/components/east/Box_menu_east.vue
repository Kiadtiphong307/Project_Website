<template>
  <!-- แถบ Menu  -->
  <div class="NavBar_Box_menu_east">
    <nav class="NavMenu_Box_menu_east">
      <router-link :to="{ name: 'home_east' }" class="itemNav_Box_menu_east">หน้าแรก</router-link>
      <router-link :to="{ name: 'page_product_east' }" class="itemNav_Box_menu_east">สินค้าแนะนำ</router-link>
      <router-link :to="{ name: 'place_01_east' }" class="itemNav_Box_menu_east">เกาะสีชัง</router-link>
      <router-link :to="{ name: 'place_02_east' }" class="itemNav_Box_menu_east">วัดมณีวงศ์ </router-link>
      <router-link :to="{ name: 'place_03_east' }" class="itemNav_Box_menu_east">วัดหงษ์ทอง </router-link>
      <router-link :to="{ name: 'place_04_east' }" class="itemNav_Box_menu_east">วัดถ้ำเขาประทุน</router-link>
      <router-link :to="{ name: 'place_05_east' }" class="itemNav_Box_menu_east">ถ้ำน้ำเขาศิวะ </router-link>
    </nav>
  </div>
</template>
<style scoped>
.NavBar_Box_menu_east {
  background-color: #176b87;
  padding: 10px;
  padding-inline: 110px;
  margin-bottom: 15px;
}
.NavMenu_Box_menu_east {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.itemNav_Box_menu_east {
  border: 2px solid white;
  border-radius: 16px;
  padding-block: 10px;
  padding-inline: 20px;
  color: white;
  text-decoration: none;
  background-color: #004858;
}
.itemNav_Box_menu_east:hover {
  border: 2px solid rgba(65, 3, 3, 0.274);
  background-color: rgba(0, 0, 0, 0.144);
  border-radius: 16px;
  padding-block: 10px;
  padding-inline: 20px;
  color: white;
  text-decoration: none;
}
</style>
