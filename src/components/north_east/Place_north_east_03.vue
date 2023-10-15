<script setup>
import Header_box_north_east from '../north_east/Box_menu_north_east.vue'

import { ref } from 'vue'
import { item_advice_north_east_01Store } from '../north_east/index_north_east'

const item_advice_north_east_01 = item_advice_north_east_01Store()
const item_advice_north_east_01_all = ref(item_advice_north_east_01.item_advice_north_east_list_01)
</script>
<template>
  <!-- แถบ ภาพ  -->

  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk4-4.fna.fbcdn.net/v/t1.15752-9/387478145_711237554187200_734508528323400992_n.png?_nc_cat=109&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHSd8nF5zRDXMSQAAFvpMhjm7Ru2APVL3ibtG7YA9UveDyGF2LfuQx8pi3ths0NPmEc4MRi5aaB0MVg09j29oNf&_nc_ohc=YFxwDA7i1poAX_2zbDu&_nc_ht=scontent.fbkk4-4.fna&_nc_e2o=f&oh=03_AdS4GH8KMzaMSsNts3KRj-UKa_RyJYjN4wMlU0YFqNLOYg&oe=65533FAD"
          class="d-block w-100"
          style="filter: brightness(75%);max-height: 500px;"
        />
      </div>
      <div class="carousel-caption d-none d-md-block" >
      <h5 class="display-3">ผาพญากูปรี</h5>
      <p>ผาพญากูปรี อ.ภูสิงห์ จ.ศรีสะเกษ</p>
      </div>
    </div>
  </div>
  
  <!-- แถบ menu -->
  <Header_box_north_east></Header_box_north_east>
  <!-- แถบ เนื้อหา -->
  <!-- box รูปซ้าย -->
  <div class="container-ne3">
    <div class="LPage-ne3">
      <img
        src="https://img.wongnai.com/p/400x0/2023/01/02/e3524011ac7841cd83d115b0b2d91cf1.jpg"
        class="imgBow"
      />
      <div style="margin-block-end: 10px;">
        <h2 class="card-title">ผาพญากูปรี</h2>
        <p class="textConten-ne3">
          จุดชมวิวที่มีทิวทัศน์สวยตระการตา แถมมีความเป็นมาที่น่าสนใจ
          ที่ตั้งอยู่ในบริเวณที่เคยมีการค้นพบ 'กูปรี' สัตว์ป่าที่สูญพันธุ์ไปแล้วจากสารบบประเทศไทย
          'ผาพญากูปรี' ถือเป็นจุดชมวิวที่มีอากาศเย็นบริสุทธิ์จากแนวเทือกเขาพนมดงรัก
        </p>
      </div>
    </div>
    <!--box รูปขวา-->
    <div class="RPage-ne3">
      <div>
        <p class="textConten-ne3">
          ทั้งยังเป็นจุดชมธรรมชาติที่สวยงามของลำห้วยสำราญ แหล่งต้นน้ำสำคัญที่หล่อเลี้ยงชาวศรีสะเกษ
          และยังมีเส้นทางเดินลงไปชมภาพวาดพญากูปรี
          รวมถึงเที่ยวชมน้ำตกพญากูปรีในบริเวณเดียวกันได้อีกด้วย
        </p>
        <a href="https://www.thairath.co.th/lifestyle/travel/thaitravel/2707158?fbclid=IwAR3356QAvipXvkzqSUgrqKeF6hIL5rJUPkup_WlOEcK-n3myanYsqNhyAAA" class="btn_cart-ne4">อ่านเพิ่มเติม</a>
      </div>
      <img
        src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.6435-9/110164723_659171278020502_571406635823272562_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGHKhK-Empx-Gx7ikdJfQPujee98g1tdfGN573yDW118eqGZhKsrixqYRsvf3IkEcAxg4J_STE2s-i99Rj8ZkZu&_nc_ohc=3NJB04xHnfgAX9OfwJB&_nc_ht=scontent.fbkk13-2.fna&oh=00_AfCT-CkTy90Grs0lmsT7WBfnOa7yhPGPj5DVKdg1dbeG8w&oe=6543BC42"
        class="imgBow"
      />
    </div>
    <!-- สิ่งของแนะนำขาย -->
    <h1 style="text-align: center">สิ่งที่ควรเตรียมไป</h1>
    <div class="recomen-ne3">
      <div class="re_conten-ne3" v-for="(i, index) in item_advice_north_east_01_all" :key="index">
        <div>
          <div class="card">
            <img :src="i.img" />
          </div>
        </div>
        <div class="re_text">
          <h4>{{ i.name }}</h4>
          <p>{{ i.category }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@media (min-width: 1030px) {
  .container-ne3 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: center;
  }
  .btn_cart-ne3 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart-ne3:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage-ne3 {
    display: grid;
    grid-template-columns: 400px auto;
    column-gap: 10px;
    justify-items: stretch;
    align-items: center;
    margin-inline: 170px;
    margin-block: 5px;
    width: 1000px;
    border-bottom: 2px solid;
  }
  .RPage-ne3 {
    display: grid;
    grid-template-columns: auto 400px;
    column-gap: 1px;
    justify-items: stretch;
    align-items: center;
    margin-inline: 170px;
    margin-block: 5px;
    width: 1000px;
    border-bottom: 2px solid;
  }
  .imgBow {
    max-width: 880px;
    margin: 10px;
  }
  .container_text {
    padding: 5px;
  }
  .textConten {
    padding: 20px;
    width: 500px;
  }
  .recomen-ne3 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: stretch;
    align-items: stretch;
    row-gap: 2px;
    column-gap: 2px;
    max-width: 1000px;
    margin-inline: 200px;
    margin-block: 10px;
  }
  .re_conten-ne3 {
    display: grid;
    grid-template-columns: 200px auto;
    column-gap: 10px;
    justify-items: stretch;
    align-items: center;
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
    padding: 5px;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .container-ne3 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }
  .btn_cart-ne3 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart-ne3:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage-ne3 {
    display: grid;
    grid-template-columns: 300px auto;
    column-gap: 10px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .RPage-ne3 {
    display: grid;
    grid-template-columns: auto 300px;
    column-gap: 1px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .imgBow {
    max-width: 880px;
    margin: 10px;
  }
  .textConten-ne3 {
    padding: 20px;
    height: 100px;
    width: 400px;
    overflow: auto;
  }
  .recomen-ne3 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: stretch;
    align-items: stretch;
    row-gap: 2px;
    column-gap: 2px;
    margin-block: 10px;
    max-width: 900px;
    max-height: 300px;
  }
  .re_conten-ne3 {
    display: grid;
    grid-template-columns: 100px auto;
    column-gap: 10px;
    justify-items: stretch;
    align-items: center;
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
    padding: 5px;
    box-sizing: content-box;
  }
}
@media (max-width: 767px) {
  .container-ne3 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }
  .btn_cart-ne3{
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart-ne3:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage-ne3 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    border-bottom: 2px solid;
    margin-block: 5px;
    max-width: 300px;
  }
  .RPage-ne3 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    justify-content: center;
    align-items: stretch;
    justify-items: stretch;
    max-width: 300px;
    margin-block: 5px;
    border-bottom: 2px solid;
  }
  .imgBow {
    max-width: 100%;
    margin: 10px;
  }
  .textConten-ne3 {
    padding: 20px;
    height: 200px;
    width: 300px;
    overflow: auto;
  }
  .recomen-ne3 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    align-items: stretch;
    row-gap: 2px;
    column-gap: 2px;
    margin-block: 10px;
    max-width: 600px;
  }
  .re_conten-ne3 {
    display: grid;
    grid-template-columns: 100px auto;
    column-gap: 10px;
    justify-items: stretch;
    align-items: center;
    box-sizing: content-box;
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
    padding: 5px;
  }
}
</style>
