<template>
  <!-- แถบ Menu  -->
  <div class="NavBar">
    <nav class="NavMenu">
      <router-link
        :to="{ name: 'home_south' }"
        class="itemNav"
        >หน้าแรก</router-link
      >
      <router-link
        :to="{ name: 'page_product_south' }"
        class="itemNav"
        >สินค้าแนะนำ</router-link
      >
      <router-link
        :to="{ name: 'place_01_south' }"
        class="itemNav"
        >อุทยานธรรมเขานาในหลวง
      </router-link>
      <router-link
        :to="{ name: 'place_02_south' }"
        class="itemNav"
        >หมู่เกาะกำ</router-link
      >
      <router-link
        :to="{ name: 'place_03_south' }"
        class="itemNav"
        >รอยพระพุทธบาทในทะเล
      </router-link>
      <router-link
        :to="{ name: 'place_04_south' }"
        class="itemNav"
        >หินพับผ้า
      </router-link>
      <router-link
        :to="{ name: 'place_05_south' }"
        class="itemNav"
        >เกาะตะรุเตา
      </router-link>
    </nav>
  </div>
</template>
<style scoped>
.NavBar{
  background-color: #00BD9B;
  padding: 10px;
  padding-inline: 110px;
  margin-bottom: 15px;
}
.NavMenu{
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.itemNav{
  border: 2px solid white;
  border-radius: 16px;
  padding-block: 10px;
  padding-inline: 20px;
  color: white;
  text-decoration: none;
  background-color: #02746D;
}
.itemNav:hover{
  border: 2px solid rgba(65, 3, 3, 0.274);
  background-color: rgba(0, 0, 0, 0.144);
  border-radius: 16px;
  padding-block: 10px;
  padding-inline: 20px;
  color: white;
  text-decoration: none;
}
</style>
