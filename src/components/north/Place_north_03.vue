<script setup>
import Header_box_north from '../north/Box_menu_north.vue'

import { ref } from 'vue'
import { item_advice_north_03Store } from '../north/index_north'

const item_advice_north_03 = item_advice_north_03Store()
const item_advice_north_03_all = ref(item_advice_north_03.item_advice_north_list_03)
</script>
<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-8.fna.fbcdn.net/v/t1.15752-9/370234447_887428248879573_1573601828990633777_n.png?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHNk6ulqzi1Ce9bgQ6lC1B5z6CdhNqNuWTPoJ2E2o25ZI55z_TqswtNf9nYNApM6hI53G-lY-KXefzUDSxEQFQK&_nc_ohc=R-AChgdvS4oAX8iEhhe&_nc_ht=scontent.fbkk29-8.fna&oh=03_AdSEO1RgrtBLWwX_9NiQ82edqAQPzfIgapTWIyLuxoNyyQ&oe=65515D8C"
          class="d-block w-100"
          style="filter: brightness(85%)"
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
        <h2 class="display-3">ห้วยกุ๊บกั๊บ</h2>
        <p class="h4">แหล่งธรรมชาติที่สวยงามคุ้มค่ากับการมาท่องเที่ยว</p>
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_north></Header_box_north>
  <!-- แถบ เนื้อหา -->
  <!-- box รูปซ้าย -->
  <div class="container">
    <div class="LPage_Place_north_03">
      <img
        src="https://i.pinimg.com/564x/8d/ca/7a/8dca7a634615d45bf8e0be367da2bb3e.jpg"
        class="imgBow_Place_north_03"
      />
      <div class="container_text_Place_north_03">
        <h2 class="display-5"><strong>ห้วยกุ๊บกั๊บ</strong></h2>
        <p class="h5">
          ห้วยกุ๊บกั๊บ แหล่งท่องเที่ยวธรรมชาติที่ตั้งอยู่ในอำเภอแม่แตง หมู่บ้านเล็กๆ
          แห่งนี้จะพาคุณเข้าถึงการใช้ชีวิตที่เรียบง่าย เข้าถึงธรรมชาติ
          และแน่นอนว่าจุดถ่ายภาพของที่นี่ สวยทุกมุมเขาเลย
          ยิ่งถ้าโชคดีเราอาจได้พบกับทะเลหมอกในตอนเช้า
        </p>
      </div>
    </div>
    <!--box รูปขวา-->
    <div class="RPage_Place_north_03">
      <div class="container_text_Place_north_03">
        <p class="h5">
          ที่มาของชื่อ ห้วยกุ๊บกั๊บ มาจากสมัยก่อนหมู่บ้านนี้ตั้งอยู่ที่ลำธารท้ายหมู่บ้าน
          ซึ่งเส้นทางเข้าหมู่บ้านนั้นลำบากและกันดารมาก รถเข้าไม่ถึง ต้องเดินทางด้วยการขี่ม้าเข้าไป
          และเสียงฝีเท้าของม้าที่ดัง "กุ๊บกั๊บ" ก็กลายมาเป็นชื่อเรียกของหมู่บ้านนี้ไปโดยปริยาย
        </p>
        <a href="https://travel.trueid.net/detail/kW22p6w5JexW" class="btn_cart_Place_north_03">อ่านเพิ่มเติม...</a>
      </div>
      <img
        src="https://i.pinimg.com/736x/48/29/5b/48295b6fd371b8a0f821283c9183cbd2.jpg"
        class="imgBow_Place_north_03"
      />
    </div>
    <!-- สิ่งของแนะนำขาย -->
    <h1 class="textcenter_Place_north_03"><strong>อุปกรณ์ที่ควรเอาไป</strong></h1>
    <div class="recomen_Place_north_03">
      <div class="re_conten_Place_north_03" v-for="(i, index) in item_advice_north_03_all" :key="index">
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
.textcenter_Place_north_03 {
  text-align: center;
  margin-inline: 430px;
  border-bottom: 2px solid;
}
.btn_cart_Place_north_03 {
  padding: 5px;
  color: white;
  text-decoration: none;
  background-color: black;
  border-radius: 5px;
}
.btn_cart_Place_north_03:hover {
  padding: 8px;
  color: white;
  text-decoration: none;
  background-color: rgb(4, 60, 203);
  border-radius: 5px;
}
.LPage_Place_north_03 {
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
.RPage_Place_north_03 {
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
.imgBow_Place_north_03 {
  max-width: 880px;
  margin: 10px;
}
.container_text_Place_north_03 {
  padding: 5px;
}
.textConten_Place_north_03 {
  padding: 20px;
  width: 500px;
}
.recomen_Place_north_03 {
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
.re_conten_Place_north_03 {
  display: grid;
  grid-template-columns: 200px auto;
  column-gap: 10px;
  justify-items: stretch;
  align-items: center;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 5px;
}
</style>
