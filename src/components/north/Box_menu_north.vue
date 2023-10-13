<template>
  <!-- แถบ Menu  -->
  <div class="NavBar">
    <nav class="NavMenu">
      <router-link :to="{ name: 'home_north' }" class="itemNav-n">หน้าแรก</router-link>
      <router-link :to="{ name: 'page_product_north' }" class="itemNav-n">สินค้าแนะนำ</router-link>
      <router-link :to="{ name: 'place_01_north' }" class="itemNav-n">ประตูท่าแพ </router-link>
      <router-link :to="{ name: 'place_02_north' }" class="itemNav-n">สวนสนแม่แตง</router-link>
      <router-link :to="{ name: 'place_03_north' }" class="itemNav-n">ห้วยกุ๊บกั๊บ</router-link>
      <router-link :to="{ name: 'place_04_north' }" class="itemNav-n"
        >วัดเด่นสะหลีศรีเมืองแกน</router-link
      >
      <router-link :to="{ name: 'place_05_north' }" class="itemNav-n"
        >เขื่อนแม่งัด อุทยานแห่งชาติศรีลานนา</router-link
      >
    </nav>
  </div>
</template>

<style scoped>
@media (min-width: 1040px) {
  .NavBar {
    background-color: rgb(5, 129, 88);
    padding-inline: 70px;
    margin-bottom: 15px;
    max-width: 100%;
  }
  .NavMenu {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .itemNav-n {
    max-width: 500px; 
    min-height: 40px;
    white-space: nowrap;
    cursor: pointer;
    border: 2px solid white;
    border-radius: 16px;
    padding-block: 10px;
    padding-inline: 20px;
    margin-inline: 5px;
    color: white;
    display: inline-block;
    box-sizing: border-box;
    text-decoration: none;
  }
  .itemNav-n:hover {
    border: 2px solid rgba(65, 3, 3, 0.274);
    background-color: rgba(0, 0, 0, 0.144);
    border-radius: 16px;
    padding-block: 10px;
    padding-inline: 20px;
    color: white;
    display: inline-block;
    box-sizing: border-box;
    text-decoration: none;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .NavBar {
    background-color: rgb(5, 129, 88);
    padding: 10px;
    padding-inline: 20px;
    margin-bottom: 10px;
    max-width: 100%;
    overflow-x: auto;
  }
  .NavMenu {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .itemNav-n {
    max-width: 500px; 
    min-height: 40px;
    white-space: nowrap;
    cursor: pointer;
    border: 2px solid white;
    border-radius: 16px;
    text-align: center;
    font-size: medium;
    padding: 5px;
    margin-inline: 5px;
    color: white;
    text-decoration: none;
  }
  .itemNav-n:hover {
    border: 2px solid rgba(65, 3, 3, 0.274);
    background-color: rgba(0, 0, 0, 0.144);
    border-radius: 16px;
    color: white;
    text-decoration: none;
  }
}
@media (max-width: 767px) {
  .NavBar {
    background-color: rgb(5, 129, 88);
    padding-block: 10px;
    margin-bottom: 15px;
    max-width: 100%;
    overflow-x: auto;
  }
  .NavMenu {
    display: flex;
    justify-content: flex-start;
    box-sizing: border-box;
  }
  .itemNav-n {
    width: 500px; 
    height: 40px;
    white-space: nowrap;
    cursor: pointer;
    border: 2px solid rgb(255, 255, 255);
    border-radius: 16px;
    padding: 5px;
    padding-inline: 10px;
    margin-inline: 5px;
    text-align: center;
    font-size: medium;
    color: white;
    text-decoration: none;
  }
  .itemNav-n:hover {
    border: 2px solid rgba(65, 3, 3, 0.274);
    background-color: rgba(0, 0, 0, 0.144);
    border-radius: 16px;
    color: white;
    text-decoration: none;
  }
}
</style>
