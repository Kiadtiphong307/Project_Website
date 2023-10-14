<template>
  <!-- แถบ Menu  -->
  <div class="NavBar_Box_menu_central">
    <nav class="NavMenu_Box_menu_central">
      <router-link :to="{ name: 'home_central' }" class="itemNav_Box_menu_central">หน้าแรก</router-link>
      <router-link :to="{ name: 'page_product_central' }" class="itemNav_Box_menu_central">สินค้าแนะนำ</router-link>
      <router-link :to="{ name: 'place_01_central' }" class="itemNav_Box_menu_central">หอมนสิการ </router-link>
      <router-link :to="{ name: 'place_02_central' }" class="itemNav_Box_menu_central">ถ้ำโบ้-เขาอีบิด</router-link>
      <router-link :to="{ name: 'place_03_central' }" class="itemNav_Box_menu_central">ภูผาแรด </router-link>
      <router-link :to="{ name: 'place_04_central' }" class="itemNav_Box_menu_central">อุโมงค์สามมิติ</router-link>
      <router-link :to="{ name: 'place_05_central' }" class="itemNav_Box_menu_central">วัดทางสาย </router-link>
    </nav>
  </div>
</template>
<style scoped>
@media(min-width: 1440px) {
.NavBar_Box_menu_central {
  background-color: #b5673b;
  padding: 10px;
  padding-inline: 110px;
  margin-bottom: 15px;
}
.NavMenu_Box_menu_central {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.itemNav_Box_menu_central {
  border: 2px solid white;
  border-radius: 16px;
  padding-block: 10px;
  padding-inline: 20px;
  color: white;
  text-decoration: none;
  background-color: #873a0e;
}
.itemNav_Box_menu_central:hover {
  border: 2px solid rgba(65, 3, 3, 0.274);
  background-color: rgba(0, 0, 0, 0.144);
  border-radius: 16px;
  padding-block: 10px;
  padding-inline: 20px;
  color: white;
  text-decoration: none;
}
}
/* @media(min-width: 768px) and (min-width: 1024px) */
</style>
