<script setup>
import Header_box_north from '../north/Box_menu_north.vue'

import { ref } from 'vue'
import { item_advice_north_04Store } from '../north/index_north'

const item_advice_north_04 = item_advice_north_04Store()
const item_advice_north_04_all = ref(item_advice_north_04.item_advice_north_list_04)
</script>
<template>
  <!-- แถบ ภาพ  -->
  <div class="imgTitle">
    <div class="textTitle">
      <h5>วัดเด่นสะหลีศรีเมืองแกน</h5>
      <p>เป็นวัดที่มีความงดงามอลังการ เหมาะแก่การไหว้พระขอพร</p>
    </div>
  </div>
  <!-- แถบ menu -->
  <Header_box_north></Header_box_north>
  <!-- แถบ เนื้อหา -->
  <!-- box รูปซ้าย -->
  <div class="container">
    <div class="LPage">
      <img src="https://img.salehere.co.th/p/1200x0/2022/02/07/i5jteglqgc26.jpg" class="imgBow" />
      <div class="container_text">
        <h5 class="card-title">วัดเด่นสะหลีศรีเมืองแกน</h5>
        <p class="textConten">
          วัดเด่นสะหลีศรีเมืองแกน หรือ วัดบ้านเด่น เป็นวัดที่มีความงดงามอลังการ วิหารต่างๆ
          ของวัดแห่งนี้ส่วนใหญ่เป็นไม้สัก ออกแบบทรงล้านนา
          ตามราวบันไดของวิหารจะมีรูปปั้นสัตว์ในวรรณคดีให้ได้ชมมากมายเลย เช่น นกยุง นาค ช้าง เป็นต้น
          นอกจากนี้บริเวณรอบๆ วัดยังมีปีนักษัตรประจำปีเกิด
          และพระธาตุจำลองที่สร้างอยู่ภายในตัววัดให้นักท่องเที่ยวได้มาทำบุญกัน
        </p>
        <a href="https://travel.trueid.net/detail/kW22p6w5JexW" class="btn_cart">อ้างอิงมาจาก</a>
      </div>
    </div>
    <!--box รูปขวา-->
    <div class="RPage">
      <div class="container_text">
        <p class="textConten">
          วัดเด่นสะหรีศรีเมืองแกน เป็นชื่อที่มีความคล้องจองและชวนให้สงสัยทุกครั้งที่ได้ยิน หลาย ๆ
          คนอาจจะสงสัยว่าชื่อนี้มีความหมายว่าอะไรกันใช่ไหมล่ะคะ ต้องบอกก่อนว่า
          เมื่อนานมาแล้วครูบาเทืองได้มาที่วัดแห่งนี้ซึ่งตั้งอยู่ในเมืองแกน และได้มีต้นโพธิ์เกิดขึ้น
          ชาวบ้านเรียกต้นโพธิ์ต้นนั้นกันว่า เก๊าสะหลี และวัดแห่งนี้ได้ตั้งอยู่บนเนิน
          ทำให้พื้นที่วัดนั้นเด่นกว่าที่อื่น ๆ
        </p>
      </div>
      <img src="https://img.salehere.co.th/p/1200x0/2022/02/07/2eiijjktipv6.jpg" class="imgBow" />
    </div>
    <!-- สิ่งของแนะนำขาย -->
    <h1 style="text-align: center">สิ่งที่ควรเตรียมไป</h1>
    <div class="recomen">
      <div class="re_conten" v-for="(i, index) in item_advice_north_04_all" :key="index">
        <div>
          <div class="card">
            <img :src="i.img" />
          </div>
        </div>
        <div class="cre_text">
          <h4>{{ i.name }}</h4>
          <p>{{ i.category }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  margin-block: 20px;
}
.imgTitle {
  max-width: 100%;
  background-position: left bottom;
  background-size: cover;
  padding-top: 200px;
  padding-bottom: 100px;
  background-image: url(https://img.salehere.co.th/p/1200x0/2022/02/07/q36ylfuquu2v.jpg);
}
.btn_cart {
  padding: 5px;
  color: white;
  text-decoration: none;
  background-color: black;
  border-radius: 5px;
}
.btn_cart:hover {
  padding: 8px;
  color: white;
  text-decoration: none;
  background-color: rgb(4, 60, 203);
  border-radius: 5px;
  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.2);
}

.LPage {
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
.RPage {
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
.recomen {
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
.re_conten {
  display: grid;
  grid-template-columns: 200px auto;
  column-gap: 10px;
  justify-items: stretch;
  align-items: center;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 5px;
  border-radius: 5px;
}
</style>
