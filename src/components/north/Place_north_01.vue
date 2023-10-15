<script setup>
import Header_box_north from '../north/Box_menu_north.vue'

import { ref } from 'vue'
import { item_advice_north_01Store } from '../north/index_north'

const item_advice_north_01 = item_advice_north_01Store()
const item_advice_north_01_all = ref(item_advice_north_01.item_advice_north_list_01)
</script>
<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://i.pinimg.com/564x/a4/11/bf/a411bfbf71e49fc1a525fccf0bbc0d40.jpg"
          class="d-block w-100"
          style="filter: brightness(75%);max-height: 500px;"
        />
      </div>
      <div class="carousel-caption d-none d-md-block" style="padding-bottom: 9rem">
        <h5 class="display-3">ประตูท่าแพ</h5>
        <p>จุดถ่ายรูปที่ไม่ควรพลาด</p>
      </div>
    </div>
  </div>
  <!-- แถบ menu -->
  <Header_box_north></Header_box_north>
  <!-- แถบ เนื้อหา -->
  <!-- box รูปซ้าย -->
  <div class="container-n1">
    <div class="LPage-n1">
      <img
        src="https://i.pinimg.com/564x/46/7e/85/467e85d04949954473e824aae11cc891.jpg"
        class="imgBow"
      />
      <div style="margin-block: 10px">
        <h2 class="card-title">ประตูท่าแพ</h2>
        <p class="textConten-n1">
          ประตูท่าแพ ถือเป็นอีกหนึ่งจุดถ่ายภาพเช็คอินที่ห้ามพลาดของจังหวัดเชียงใหม่
          เพราะเป็นสถานที่ยอดนิยมของนักท่องเที่ยวที่รู้จักกันดีเมื่อมาที่นี่
          นับว่าเป็นจุดไฮไลท์ที่จะต้องมาเก็บภาพ ไม่ว่าจะเป็นภาพนิ่ง หรือภาพเคลื่อนไหวกับนกพิราบ
        </p>
      </div>
    </div>
    <!--box รูปขวา-->
    <div class="RPage-n1">
      <div>
        <p class="textConten-n1">
          ประตูท่าแพซึ่งตั้งอยู่ในปัจจุบันนี้
          เทศบาลนครเชียงใหม่และกรมศิลปากรได้ร่วมกันสร้างขึ้นมาใหม่ เมื่อปี พ.ศ. 2528
          โดยอาศัยหลักฐานทางประวัติศาสตร์และโบราณคดี ประตูท่าแพ เดิมเป็นประตู 2 ชั้น
          วางตำแหน่งเยื้องกันและมีป้อมยื่นออกมาข้างประตูเมือง
          เพื่อใช้เป็นปราการป้องกันเมืองยามศึกสงครามในอดีต
        </p>
        <a href="https://travel.trueid.net/detail/kW22p6w5JexW" class="btn_cart-n1"
          >อ่านเพิ่มเติม</a
        >
      </div>
      <div class="Rimg">
        <img
          src="https://i.pinimg.com/564x/9f/84/9b/9f849babe21739644bcca118cf0bbe29.jpg"
          class="imgBow"
        />
      </div>
    </div>
    <!-- สิ่งของแนะนำขาย -->
    <h1 style="text-align: center">สิ่งที่ควรเตรียมไป</h1>
    <div class="recomen-n1">
      <div class="re_conten-n1" v-for="(i, index) in item_advice_north_01_all" :key="index">
        <div class="card">
          <img :src="i.img" />
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
  .container-n1 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: center;
  }
  .btn_cart-n1 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart-n1:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage-n1 {
    display: grid;
    grid-template-columns: 400px auto;
    column-gap: 10px;
    justify-items: stretch;
    align-items: center;
    margin-inline: 170px;
    margin-block: 5px;

    border-bottom: 2px solid;
  }
  .RPage-n1 {
    display: grid;
    grid-template-columns: auto 400px;
    column-gap: 1px;
    justify-items: stretch;
    align-items: center;
    margin-inline: 170px;
    margin-block: 5px;

    border-bottom: 2px solid;
  }
  .imgBow {
    max-width: 100%;
    margin: 10px;
  }
  .container_text {
    padding: 5px;
  }
  .textConten {
    padding: 20px;
    width: 500px;
  }
  .recomen-n1 {
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
  .re_conten-n1 {
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
  .container-n1 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }
  .btn_cart-n1 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart-n1:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage-n1 {
    display: grid;
    grid-template-columns: 300px auto;
    column-gap: 10px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .RPage-n1 {
    display: grid;
    grid-template-columns: auto 300px;
    column-gap: 1px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .imgBow {
    max-width: 100%;
    margin: 10px;
  }
  .textConten-n1 {
    padding: 20px;
    height: 100px;
    width: 400px;
    overflow: auto;
  }
  .recomen-n1 {
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
  .re_conten-n1 {
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
  .container-n1 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }
  .imgTitle {
    max-width: 100%;
    background-position: left bottom;
    background-size: cover;
    padding-top: 200px;
    padding-bottom: 100px;
    background-image: url(https://i.pinimg.com/564x/a4/11/bf/a411bfbf71e49fc1a525fccf0bbc0d40.jpg);
  }
  .btn_cart-n1 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart-n1:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage-n1 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    border-bottom: 2px solid;
    margin-block: 5px;
    max-width: 300px;
  }
  .RPage-n1 {
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
  .textConten-n1 {
    padding: 20px;
    height: 150px;
    width: 300px;
    overflow: auto;
  }
  .recomen-n1 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    align-items: stretch;
    row-gap: 2px;
    column-gap: 2px;
    margin-block: 10px;
    max-width: 600px;
  }
  .re_conten-n1 {
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
