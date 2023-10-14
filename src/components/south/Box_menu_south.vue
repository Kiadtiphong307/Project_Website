<template>
  <!-- แถบ Menu  -->
  <div class="NavBar_Box_menu_south">
    <nav class="NavMenu_Box_menu_south">
      <router-link :to="{ name: 'home_south' }" class="itemNav_Box_menu_south">หน้าแรก</router-link>
      <router-link :to="{ name: 'page_product_south' }" class="itemNav_Box_menu_south">สินค้าแนะนำ</router-link>
      <router-link :to="{ name: 'place_01_south' }" class="itemNav_Box_menu_south"
        >อุทยานธรรมเขานาในหลวง
      </router-link>
      <router-link :to="{ name: 'place_02_south' }" class="itemNav_Box_menu_south">หมู่เกาะกำ</router-link>
      <router-link :to="{ name: 'place_03_south' }" class="itemNav_Box_menu_south"
        >รอยพระพุทธบาทในทะเล
      </router-link>
      <router-link :to="{ name: 'place_04_south' }" class="itemNav_Box_menu_south">หินพับผ้า </router-link>
      <router-link :to="{ name: 'place_05_south' }" class="itemNav_Box_menu_south">เกาะตะรุเตา </router-link>
    </nav>
  </div>
</template>
<style scoped>
.NavBar_Box_menu_south {
  background-color: #00bd9b;
  padding: 10px;
  padding-inline: 110px;
  margin-bottom: 15px;
}
.NavMenu_Box_menu_south {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.itemNav_Box_menu_south {
  border: 2px solid white;
  border-radius: 16px;
  padding-block: 10px;
  padding-inline: 20px;
  color: white;
  text-decoration: none;
  background-color: #02746d;
}
.itemNav_Box_menu_south:hover {
  border: 2px solid rgba(65, 3, 3, 0.274);
  background-color: rgba(0, 0, 0, 0.144);
  border-radius: 16px;
  padding-block: 10px;
  padding-inline: 20px;
  color: white;
  text-decoration: none;
}
</style>
