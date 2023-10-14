<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-6.fna.fbcdn.net/v/t1.15752-9/387342054_289226447306924_1554262047155648050_n.png?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEm56rGAVBVr1dUfhKwr3OHSnlP-7ZFs_hKeU_7tkWz-CRP2NTw8UFndrJgZpLaTQltYE9_-4qGn0LlG0Rb35te&_nc_ohc=iHpXBf3gYB8AX8szcpX&_nc_ht=scontent.fbkk29-6.fna&oh=03_AdQKWQiV_DowcAXWXa6jYM4ti8HPfLuUuXRap6jLK8osFQ&oe=6550DFF9"
          class="d-block w-100"
          style="filter: brightness(95%)"
          :height="'450'"
        />
      </div>
      <div class="carousel-caption d-none d-md-block" style="padding-bottom: 9rem">
        <h5 class="display-3">วัดมณีวงศ์</h5>
        <p class="h4">วัดมณีวงศ์ อ.เมือง จ.นครนายก</p>
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_east></Header_box_east>

  <!-- แถบ เนื้อหา -->

  <!-- box รูปซ้าย -->
  <div class="container">
    <div class="LPage_Place_east_02">
          <img
            src="https://s359.kapook.com//pagebuilder/14ec6b35-3cd9-415e-9155-4ecdffd17422.jpg"
            class="imgBow_Place_east_02"/>
        <div class="container_text_Place_east_02">
            <h5 class="display-5"><strong>วัดมณีวงศ์</strong></h5>
            <p class="h5">
              วัดแห่งนี้เกิดขึ้นจากพญานาคที่มาเข้าฝัน ‘หลวงพี่ต่อ’ เจ้าอาวาสวัดมณีวงศ์
              และได้พาหลวงพี่ไปชมคลังมหาสมบัติที่เมืองบาดาล เพื่อให้เกิดภาพจำและนำกลับไปสร้างที่วัด
            </p>
          </div>
        </div>

    <!--box รูปขวา-->
    <div class="RPage_Place_east_02">
      <div class="container_text_Place_east_02">
            <p class="h5">
              จนเกิดเป็นความอลังการของงานประติมากรรมพญานาคกว่า 1,000 ตน
              ที่อาศัยเวียนวนอยู่ในถ้ำขนาดใหญ่ โดยจำลองบรรยากาศความยิ่งใหญ่มาจากเมืองบาดาล
              สู่ความงดงามที่ถูกถ่ายทอดผ่านงานปั้นชั้นครู
              รับรองว่าถูกใจลูกหลานพญานาคสายมูอย่างแน่นอน โดยเปิดให้เข้าชมทุกวัน ตั้งแต่เวลา
              07.00-17.00 น.
            </p>
            <a class="btn_cart_Place_east_02" href="https://travel.trueid.net/detail/kW22p6w5JexW"
        >อ่านเพิ่มเติม...</a>
          </div>
          <img
            src="https://s359.kapook.com/r/600/auto/pagebuilder/e112209a-ad9a-4e39-bfa7-9b9e2475f31e.jpg"
            class="imgBow_Place_east_02"
          />
        </div>

    <!-- สิ่งของแนะนำขาย -->
    <h1 class="textcenter_Place_east_02"><strong>อุปกรณ์ที่ควรเอาไป</strong></h1>
    <hr />

    <div class="recomen_Place_east_02">
      <div
        class="re_conten_Place_east_02"
        style="max-width: 1500px"
        v-for="(i, index) in item_advice_east_01_all"
        :key="index"
      >
      <div class="card">
            <img :src="i.img" class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="re_text">
              <h5 class="card-title">{{ i.name }}</h5>
              <p class="card-text">{{ i.category }}</p>
            </div>
          </div>
        </div>
      </div>
</template>
<style scoped>
.textcenter_Place_east_02 {
  text-align: center;
  margin-inline: 430px;
  border-bottom: 2px solid;
}
.btn_cart_Place_east_02 {
  padding: 5px;
  color: white;
  text-decoration: none;
  background-color: black;
  border-radius: 5px;
}
.btn_cart_Place_east_02:hover {
  padding: 8px;
  color: white;
  text-decoration: none;
  background-color: rgb(4, 60, 203);
  border-radius: 5px;
}
.LPage_Place_east_02 {
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
.RPage_Place_east_02 {
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
.imgBow_Place_east_02 {
  max-width: 880px;
  margin: 10px;
}
.container_text_Place_east_02 {
  padding: 5px;
}
.textConten {
  padding: 20px;
  width: 500px;
}
.recomen_Place_east_02 {
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
.re_conten_Place_east_02 {
  display: grid;
  grid-template-columns: 200px auto;
  column-gap: 10px;
  justify-items: stretch;
  align-items: center;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 5px;
}
</style>
<script setup>
import Header_box_east from '../east/Box_menu_east.vue'

import { ref } from 'vue'
import { item_advice_east_01Store } from '../east/index_east'

const item_advice_east_01 = item_advice_east_01Store()
const item_advice_east_01_all = ref(item_advice_east_01.item_advice_east_list_01)
</script>
