<template>
  <!-- แถบ Menu  -->
  <div class="NavBar_e">
    <nav class="NavMenu_e">
      <router-link :to="{ name: 'home_east' }" class="itemNav_e">หน้าแรก</router-link>
      <router-link :to="{ name: 'page_product_east' }" class="itemNav_e">สินค้าแนะนำ</router-link>
      <router-link :to="{ name: 'place_01_east' }" class="itemNav_e">เกาะสีชัง</router-link>
      <router-link :to="{ name: 'place_02_east' }" class="itemNav_e">วัดมณีวงศ์ </router-link>
      <router-link :to="{ name: 'place_03_east' }" class="itemNav_e">วัดหงษ์ทอง </router-link>
      <router-link :to="{ name: 'place_04_east' }" class="itemNav_e">วัดถ้ำเขาประทุน</router-link>
      <router-link :to="{ name: 'place_05_east' }" class="itemNav_e">ถ้ำน้ำเขาศิวะ </router-link>
    </nav>
  </div>
</template>
<style scoped>
@media (min-width: 1040px) {
.NavBar_e {
  background-color: #176b87;
  padding-inline: 70px;
    margin-bottom: 15px;
    max-width: 100%;
}
.NavMenu_e {
  padding: 10px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
}
.itemNav_e{
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
  background-color: #004858;
}
.itemNav_e:hover {
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
  .NavBar_e {
    background-color: #176b87;
    padding: 10px;
    padding-inline: 20px;
    margin-bottom: 10px;
    max-width: 100%;
    overflow-x: auto;
  }
  .NavMenu_e {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .itemNav_e {
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
    background-color: #004858;
  }
  .itemNav_e:hover {
    border: 2px solid rgba(65, 3, 3, 0.274);
    background-color: rgba(0, 0, 0, 0.144);
    border-radius: 16px;
    color: white;
    text-decoration: none;
  }
}
@media (max-width: 767px) {
  .NavBar_e {
    background-color: #176b87;
    padding-block: 10px;
    margin-bottom: 15px;
    max-width: 100%;
    overflow-x: auto;
  }
  .NavMenu_e {
    display: flex;
    justify-content: flex-start;
    box-sizing: border-box;
  }
  .itemNav_e {
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
    background-color: #004858;
  }
  .itemNav_e:hover {
    border: 2px solid rgba(65, 3, 3, 0.274);
    background-color: rgba(0, 0, 0, 0.144);
    border-radius: 16px;
    color: white;
    text-decoration: none;
  }
}
</style>

