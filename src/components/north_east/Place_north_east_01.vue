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
          src="https://i.pinimg.com/564x/a4/11/bf/a411bfbf71e49fc1a525fccf0bbc0d40.jpg"
          class="d-block w-100"
          style="filter: brightness(75%)"
          :height="'450'"
        />
      </div>
      <div class="carousel-caption d-none d-md-block" style="padding-bottom: 9rem">
        <h5 class="display-3">มอหินขาว</h5>
        <p>มอหินขาว อ.เมือง จ.ชัยภูมิ</p>
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_north_east></Header_box_north_east>
  <!-- แถบ เนื้อหา -->
  <!-- box รูปซ้าย -->
  <div class="container-ne1">
    <div class="LPage-ne1">
      <img src="https://img.kapook.com/u/2015/suppaporn/morhinkaow/chang02.jpg" class="imgBow" />
      <div style="margin-block: 10px">
        <h2 class="card-title">มอหินขาว</h2>
        <p class="textConten-ne1">
          แหล่งท่องเที่ยวสุดอันซีน ที่ตั้งอยู่ในเขตอุทยานแห่งชาติภูแลนคา มีจุดเด่นที่เสาหินยักษ์ 5
          ก้อน ที่หลายคนบอกว่า คล้ายกับ “สโตนเฮนจ์” ประเทศอังกฤษ
          และจะยิ่งสวยงามขึ้นแบบทวีคูณในช่วงฤดูฝน
          เพราะนอกจากนักเดินทางจะได้ชมประติมากรรมธรรมชาติของเสาหินแล้ว
          ยังจะได้ชื่นชมดอกไม้ที่กำลังบานสะพรั่งทั่วมอหินขาว
        </p>
        <a href="https://travel.trueid.net/detail/kW22p6w5JexW" class="btn_cart-ne1">อ้างอิงมาจาก</a>
      </div>
    </div>
    <!--box รูปขวา-->
    <div class="RPage-ne1">
      <div>
        <p class="textConten-ne1">
          นอกจากนี้ยังมีกลุ่มหินที่น่าสนใจอื่นๆ ได้แก่ หินเจดีย์โขลงช้าง ลานหินต้นไทร
          และจุดชมวิวผาหัวนาค ส่วนหากชอบการแคมปิ้งและดูดาว บริเวณมอหินขาวก็ถือว่า เป็นจุดชมดวงดาว
          และทางช้างเผือกที่ควรค่าแก่การมาเยี่ยมเยือน
        </p>
      </div>
      <img src="https://img.kapook.com/u/2015/suppaporn/morhinkaow/mor04.jpg" class="imgBow" />
    </div>
    <!-- สิ่งของแนะนำขาย -->
    <h1 style="text-align: center">สิ่งที่ควรเตรียมไป</h1>
    <div class="recomen-ne1">
      <div class="re_conten-ne1" v-for="(i, index) in item_advice_north_east_01_all" :key="index">
        <div>
          <div class="card">
            <img :src="i.img" />
          </div>
        </div>
        <div class="re_text">
          <h5>{{ i.name }}</h5>
          <p>{{ i.category }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@media (min-width: 1030px) {
  .container-ne1 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: center;
  }
  .btn_cart-ne1 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart-ne1:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage-ne1 {
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
  .RPage-ne1 {
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
  .recomen-ne1 {
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
  .re_conten-ne1 {
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
  .container-ne1 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }
  .btn_cart-ne1 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart-ne1:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage-ne1 {
    display: grid;
    grid-template-columns: 300px auto;
    column-gap: 10px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .RPage-ne1 {
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
  .textConten-ne1 {
    padding: 20px;
    height: 100px;
    width: 400px;
    overflow: auto;
  }
  .recomen-ne1 {
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
  .re_conten-ne1 {
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
  .container-ne1 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }
  .btn_cart-ne1 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart-ne1:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage-ne1 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    border-bottom: 2px solid;
    margin-block: 5px;
    max-width: 300px;
  }
  .RPage-ne1 {
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
  .textConten-ne1 {
    padding: 20px;
    height: 200px;
    width: 300px;
    overflow: auto;
  }
  .recomen-ne1 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    align-items: stretch;
    row-gap: 2px;
    column-gap: 2px;
    margin-block: 10px;
    max-width: 600px;
  }
  .re_conten-ne1 {
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
