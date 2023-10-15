<template>
  <!-- แถบ Menu  -->
  <div class="NavBar_c">
    <nav class="NavMenu_c">
      <router-link :to="{ name: 'home_central' }" class="itemNav-c">หน้าแรก</router-link>
      <router-link :to="{ name: 'page_product_central' }" class="itemNav-c">สินค้าแนะนำ</router-link>
      <router-link :to="{ name: 'place_01_central' }" class="itemNav-c">หอมนสิการ </router-link>
      <router-link :to="{ name: 'place_02_central' }" class="itemNav-c">ถ้ำโบ้ </router-link>
      <router-link :to="{ name: 'place_03_central' }" class="itemNav-c">ภูผาแรด </router-link>
      <router-link :to="{ name: 'place_04_central' }" class="itemNav-c">อุโมงค์สามมิติ</router-link>
      <router-link :to="{ name: 'place_05_central' }" class="itemNav-c">วัดทางสาย </router-link>
    </nav>
  </div>
</template>
<style scoped>
@media (min-width: 1040px) {
  .NavBar_c {
    background-color:#b5673b;
    padding-inline: 70px;
    margin-bottom: 15px;
    max-width: 100%;
  }
  .NavMenu_c {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .itemNav-c {
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
    background-color: #873a0e;
  }
  .itemNav-c:hover {
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
  .NavBar_c {
    background-color: #b5673b;
    padding: 10px;
    padding-inline: 20px;
    margin-bottom: 10px;
    max-width: 100%;
    overflow-x: auto;
  }
  .NavMenu_c {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .itemNav-c {
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
    background-color: #873a0e;
  }
  .itemNav-c:hover {
    border: 2px solid rgba(65, 3, 3, 0.274);
    background-color: rgba(0, 0, 0, 0.144);
    border-radius: 16px;
    color: white;
    text-decoration: none;
  }
}
@media (max-width: 767px) {
  .NavBar_c {
    background-color: #b5673b;
    padding-block: 10px;
    margin-bottom: 15px;
    max-width: 100%;
    overflow-x: auto;
  }
  .NavMenu_c {
    display: flex;
    justify-content: flex-start;
    box-sizing: border-box;
  }
  .itemNav-c {
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
    background-color: #873a0e;
  }
  .itemNav-c:hover {
    border: 2px solid rgba(65, 3, 3, 0.274);
    background-color: rgba(0, 0, 0, 0.144);
    border-radius: 16px;
    color: white;
    text-decoration: none;
  }
}
</style>
