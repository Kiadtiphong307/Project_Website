<script setup>
import Header_box_north_east from '../north_east/Box_menu_north_east.vue'

import { ref } from 'vue'
import { item_advice_north_east_01Store } from '../north_east/index_north_east'

const item_advice_north_east_01 = item_advice_north_east_01Store()
const item_advice_north_east_01_all = ref(item_advice_north_east_01.item_advice_north_east_list_01)
</script>
<template>
  <!-- แถบ ภาพ  -->
<<<<<<< HEAD
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-6.fna.fbcdn.net/v/t1.15752-9/387478145_711237554187200_734508528323400992_n.png?_nc_cat=109&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFCLDFNcg7CbZdwCkgNcqQ4m7Ru2APVL3ibtG7YA9UveIC8zp320q6ubNgoQ77ZTlQGXSc1X31P_lyjvl43DJUx&_nc_ohc=Tf_ftVhs_wQAX_5uklv&_nc_ht=scontent.fbkk29-6.fna&oh=03_AdTN324gmPVDe4tbEJ1n6i5mwUqK7pwIz_21HevPR1Soaw&oe=65517DAD"
          class="d-block w-100"
          style="filter: brightness(95%)"
          :height="'450'"
        />
        <router-link :to="{ name: 'main' }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-house house-icon"
            viewBox="0 0 16 16"
          >
            <path
              d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"
            />
          </svg>
        </router-link>
      </div>
      <div class="carousel-caption d-none d-md-block" style="padding-bottom: 9rem">
        <h5 class="display-3">ผาพญากูปรี</h5>
        <p class="h4">ผาพญากูปรี อ.ภูสิงห์ จ.ศรีสะเกษ</p>
      </div>
=======
  <div class="imgTitle">
    <div class="textTitle">
      <h5>ผาพญากูปรี</h5>
      <p>ผาพญากูปรี อ.ภูสิงห์ จ.ศรีสะเกษ</p>
>>>>>>> 32499d83f8092f54d95143793e6d1c214b14840a
    </div>
  </div>
  <!-- แถบ menu -->
  <Header_box_north_east></Header_box_north_east>
  <!-- แถบ เนื้อหา -->
  <!-- box รูปซ้าย -->
  <div class="container">
    <div class="LPage_Place_north_east_03">
      <img
        src="https://img.wongnai.com/p/400x0/2023/01/02/e3524011ac7841cd83d115b0b2d91cf1.jpg"
        class="imgBow_Place_north_east_03"
      />
      <div class="container_text">
        <h2 class="display-5"><strong>ผาพญากูปรี</strong></h2>
        <p class="h5">
          จุดชมวิวที่มีทิวทัศน์สวยตระการตา แถมมีความเป็นมาที่น่าสนใจ
          ที่ตั้งอยู่ในบริเวณที่เคยมีการค้นพบ 'กูปรี' สัตว์ป่าที่สูญพันธุ์ไปแล้วจากสารบบประเทศไทย
          'ผาพญากูปรี' ถือเป็นจุดชมวิวที่มีอากาศเย็นบริสุทธิ์จากแนวเทือกเขาพนมดงรัก
        </p>
      </div>
    </div>
    <!--box รูปขวา-->
    <div class="RPage_Place_north_east_03">
      <div class="container_text">
        <p class="h5">
          ทั้งยังเป็นจุดชมธรรมชาติที่สวยงามของลำห้วยสำราญ แหล่งต้นน้ำสำคัญที่หล่อเลี้ยงชาวศรีสะเกษ
          และยังมีเส้นทางเดินลงไปชมภาพวาดพญากูปรี
          รวมถึงเที่ยวชมน้ำตกพญากูปรีในบริเวณเดียวกันได้อีกด้วย
        </p>
        <a href="https://travel.trueid.net/detail/kW22p6w5JexW" class="btn_cart_Place_north_east_03">อ่านเพิ่มเติม...</a>
      </div>
      <img
        src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.6435-9/110164723_659171278020502_571406635823272562_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGHKhK-Empx-Gx7ikdJfQPujee98g1tdfGN573yDW118eqGZhKsrixqYRsvf3IkEcAxg4J_STE2s-i99Rj8ZkZu&_nc_ohc=3NJB04xHnfgAX9OfwJB&_nc_ht=scontent.fbkk13-2.fna&oh=00_AfCT-CkTy90Grs0lmsT7WBfnOa7yhPGPj5DVKdg1dbeG8w&oe=6543BC42"
        class="imgBow_Place_north_east_03"
      />
    </div>
    <!-- สิ่งของแนะนำขาย -->
    <h1 class="textcenter_Place_north_east_03"><strong>อุปกรณ์ที่ควรเอาไป</strong></h1>
    <div class="recomen_Place_north_east_03">
      <div class="re_conten_Place_north_east_03" v-for="(i, index) in item_advice_north_east_01_all" :key="index">
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
.btn_cart_Place_north_east_03 {
  padding: 5px;
  color: white;
  text-decoration: none;
  background-color: black;
  border-radius: 5px;
}
.btn_cart_Place_north_east_03:hover {
  padding: 8px;
  color: white;
  text-decoration: none;
  background-color: rgb(4, 60, 203);
  border-radius: 5px;
}
.LPage_Place_north_east_03 {
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
.RPage_Place_north_east_03 {
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
.imgBow_Place_north_east_03 {
  max-width: 880px;
  margin: 10px;
}
.container {
  padding: 5px;
}
.recomen_Place_north_east_03 {
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
.re_conten_Place_north_east_03 {
  display: grid;
  grid-template-columns: 200px auto;
  column-gap: 10px;
  justify-items: stretch;
  align-items: center;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 5px;
}
.textcenter_Place_north_east_03 {
  text-align: center;
  margin-inline: 430px;
  border-bottom: 2px solid;
}
</style>
