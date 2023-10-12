<template>
  <!-- แถบ Menu  -->
  <div class="NavBar">
    <nav class="NavMenu">
      <router-link
        :to="{ name: 'home_central' }"
        class="itemNav"
        >หน้าแรก</router-link
      >
      <router-link
        :to="{ name: 'page_product_central' }"
        class="itemNav"
        >สินค้าแนะนำ</router-link
      >
      <router-link
        :to="{ name: 'place_01_central' }"
        class="itemNav"
        >หอมนสิการ
      </router-link>
      <router-link
        :to="{ name: 'place_02_central' }"
        class="itemNav"
        >ถ้ำโบ้
      </router-link>
      <router-link
        :to="{ name: 'place_03_central' }"
        class="itemNav"
        >ภูผาแรด
      </router-link>
      <router-link
        :to="{ name: 'place_04_central' }"
        class="itemNav"
        >อุโมงค์สามมิติ</router-link
      >
      <router-link
        :to="{ name: 'place_05_central' }"
        class="itemNav"
        >วัดทางสาย
      </router-link>
    </nav>
  </div>
</template>
<style scoped>
.NavBar{
  background-color: #B5673B;
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
  background-color: #873A0E;
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