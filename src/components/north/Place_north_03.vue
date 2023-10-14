<script setup>
import Header_box_north from '../north/Box_menu_north.vue'

import { ref } from 'vue'
import { item_advice_north_03Store } from '../north/index_north'

const item_advice_north_03 = item_advice_north_03Store()
const item_advice_north_03_all = ref(item_advice_north_03.item_advice_north_list_03)
</script>
<template>
  <!-- แถบ ภาพ  -->
  <div class="imgTitle">
    <div class="textTitle">
      <h2>ห้วยกุ๊บกั๊บ</h2>
      <p>แหล่งธรรมชาติที่สวยงามคุ้มค่ากับการมาท่องเที่ยว</p>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_north></Header_box_north>
  <!-- แถบ เนื้อหา -->
  <!-- box รูปซ้าย -->
  <div class="container">
    <div class="LPage">
      <img
        src="https://i.pinimg.com/564x/8d/ca/7a/8dca7a634615d45bf8e0be367da2bb3e.jpg"
        class="imgBow"
      />
      <div class="container_text">
        <h2 class="card-title">ห้วยกุ๊บกั๊บ</h2>
        <p class="textConten">
          ห้วยกุ๊บกั๊บ แหล่งท่องเที่ยวธรรมชาติที่ตั้งอยู่ในอำเภอแม่แตง หมู่บ้านเล็กๆ
          แห่งนี้จะพาคุณเข้าถึงการใช้ชีวิตที่เรียบง่าย เข้าถึงธรรมชาติ
          และแน่นอนว่าจุดถ่ายภาพของที่นี่ สวยทุกมุมเขาเลย
          ยิ่งถ้าโชคดีเราอาจได้พบกับทะเลหมอกในตอนเช้า
        </p>
        <a href="https://travel.trueid.net/detail/kW22p6w5JexW" class="btn_cart">อ้างอิงมาจาก</a>
      </div>
    </div>
    <!--box รูปขวา-->
    <div class="RPage">
      <div class="container_text">
        <p class="textConten">
          ที่มาของชื่อ ห้วยกุ๊บกั๊บ มาจากสมัยก่อนหมู่บ้านนี้ตั้งอยู่ที่ลำธารท้ายหมู่บ้าน
          ซึ่งเส้นทางเข้าหมู่บ้านนั้นลำบากและกันดารมาก รถเข้าไม่ถึง ต้องเดินทางด้วยการขี่ม้าเข้าไป
          และเสียงฝีเท้าของม้าที่ดัง "กุ๊บกั๊บ" ก็กลายมาเป็นชื่อเรียกของหมู่บ้านนี้ไปโดยปริยาย
        </p>
      </div>
      <img
        src="https://i.pinimg.com/736x/48/29/5b/48295b6fd371b8a0f821283c9183cbd2.jpg"
        class="imgBow"
      />
    </div>
    <!-- สิ่งของแนะนำขาย -->
    <h1 style="text-align: center">สิ่งที่ควรเตรียมไป</h1>
    <div class="recomen">
      <div class="re_conten" v-for="(i, index) in item_advice_north_03_all" :key="index">
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
.container {
  margin-block: 20px;
}
.imgTitle {
  max-width: 100%;
  background-position: left bottom;
  background-size: cover;
  padding-top: 200px;
  padding-bottom: 100px;
  background-image: url(https://i.pinimg.com/564x/8d/ca/7a/8dca7a634615d45bf8e0be367da2bb3e.jpg);
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
