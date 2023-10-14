<template>
  <!-- แถบ Menu  -->
  <div class="NavBar">
    <nav class="NavMenu">
      <router-link :to="{ name: 'home_north' }" class="itemNav">หน้าแรก</router-link>
      <router-link :to="{ name: 'page_product_north' }" class="itemNav">สินค้าแนะนำ</router-link>
      <router-link :to="{ name: 'place_01_north' }" class="itemNav">ประตูท่าแพ </router-link>
      <router-link :to="{ name: 'place_02_north' }" class="itemNav">สวนสนแม่แตง</router-link>
      <router-link :to="{ name: 'place_03_north' }" class="itemNav">ห้วยกุ๊บกั๊บ</router-link>
      <router-link :to="{ name: 'place_04_north' }" class="itemNav"
        >วัดเด่นสะหลีศรีเมืองแกน</router-link
      >
      <router-link :to="{ name: 'place_05_north' }" class="itemNav"
        >เขื่อนแม่งัด อุทยานแห่งชาติศรีลานนา</router-link
      >
    </nav>
  </div>
</template>

<style scoped>
.NavBar {
  background-color: rgb(5, 129, 88);
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
  background-color: #01533B;
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
