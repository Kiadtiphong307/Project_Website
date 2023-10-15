<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-1.fna.fbcdn.net/v/t1.15752-9/387506915_1715636725567765_7369844422724517203_n.png?_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGsp7V0dAvO2Mg5E1-lKJJRq3MBPJj1SmyrcwE8mPVKbAXoWpGhYno9i_Ow4xJGyCI1E3VdYE4d1LjB4gq-ESDG&_nc_ohc=DtPett6dBsIAX9gsLKO&_nc_ht=scontent.fbkk29-1.fna&oh=03_AdSPMirtE-raOa3wfCjJIF8gLXpu2IV4TaIKMqR-isfIPQ&oe=6550820E"
          class="d-block w-100"
          style="filter: brightness(90%)"
          maxheight="500px"
        />
      </div>
      <div class="carousel-caption d-none d-md-block" style="padding-bottom: 9rem">
      <h5 class="display-3">ถ้ำโบ้-เขาอีบิด</h5>
      <p class="h4">ถ้ำโบ้ อ.เขาย้อย จ.เพชรบุรี</p>
    </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_central></Header_box_central>

  <!-- แถบ เนื้อหา -->

  <!-- box รูปซ้าย -->
  <div class="container_c2">
    <div class="LPage_c2">
          <img
            src="https://www.unseennewchapters.com/img/phetchaburi-03.2a5dfa85.jpg"
            class="imgBow_c2"
            alt="..."
          />

        <div style="margin-block: 10px;">
            <h5 class="card-title"><strong>ถ้ำโบ้</strong></h5>
            <p class="textConten_c2">
              “ถ้ำโบ้” แหล่งท่องเที่ยวที่น่าสนใจ ตั้งอยู่บนเขาอีบิด ทางเข้าถ้ำเป็นโพรงกว้าง
              ภายในเป็นถ้ำตื้น โถงถ้ำสูงโปร่ง มีหินงอกหินย้อยที่เกิดขึ้นตามธรรมชาติสวยงาม
              อากาศถ่ายเทเย็นสบาย จากในถ้ำเมื่อมองลอดโพรงออกไปด้านหน้า จะเห็นทิวทัศน์ของ อ.เขาย้อย
              จ.เพชรบุรี และ อ.ปากท่อ จ.ราชบุรี ในมุมกว้างอย่างสวยงาม ส่วนด้านหลังถ้ำมีลานกว้าง
              เป็นจุดชมวิวดูทิวต้นตาลที่เป็นสัญลักษณ์ของ จังหวัดเพชรบุรี
            </p>
          </div>
        </div>
    <!--box รูปขวา-->
    <div class="RPage_c2">
      <div>
        <p class="textConten_c2">
              ยังเป็นจุดชมดวงอาทิตย์ขึ้น และตกที่งดงาม เหมาะกับคนที่อยากได้รูปมุมใหม่ๆ
              สำหรับนักท่องเที่ยวสายผจญภัยที่อยากพิชิตถ้ำใหม่ใกล้เมืองกรุงเทพนี้
              ช่วงเวลาที่เหมาะสมในการเดินชมถ้ำ คือ 05.00 - 17.00 น.
              (ไม่แนะนำให้เดินทางท่องเที่ยวในช่วงฤดูฝน เนื่องจากทางเดินขึ้นถ้ำมีความลาดชัน
              และทางเดินภายในถ้ำลื่น อาจเกิดอันตรายหรืออุบัติเหตุได้)
            </p>
            <a class="btn_cart_c2" href="https://www.thairath.co.th/lifestyle/travel/thaitravel/2705387?gallery_id=1"
        >อ่านเพิ่มเติม</a>
          </div>
          <img
            src="https://f.ptcdn.info/130/073/000/qreblxjeaqierC93qtt-o.jpg"
            class="imgBow_c2"
            alt="..."
          />
        </div>

    <!-- สิ่งของแนะนำขาย -->
    <h1 style="text-align: center"><strong>สิ่งที่ควรเตรียมไป</strong></h1>
    <hr />

    <div class="recomen_c2">
      <div class="re_conten_c2"
        style="max-width: 1500px"
        v-for="(i, index) in item_advice_central_02_all"
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
@media (min-width: 1030px) {
  .container_c2 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: center;
  }
  .btn_cart_c2 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart_c2:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage_c2 {
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
  .RPage_c2 {
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
  .imgBow_c2 {
    max-width: 880px;
    margin: 10px;
  }
  .recomen_c2 {
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
  .re_conten_c2 {
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
  .container_c2 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }

  .btn_cart_c2 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart_c2:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage_c2 {
    display: grid;
    grid-template-columns: 300px auto;
    column-gap: 10px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .RPage_c2 {
    display: grid;
    grid-template-columns: auto 300px;
    column-gap: 1px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .imgBow_c2 {
   max-height: 200px;
    margin: 10px;
  }
  .textConten_c2 {
    padding: 20px;
    height: 100px;
    width: 400px;
    overflow: auto;
  }
  .recomen_c2 {
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
  .re_conten_c2 {
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
  .container_c2 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }
  .btn_cart_c2 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart_c2:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage_c2 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    border-bottom: 2px solid;
    margin-block: 5px;
    max-width: 300px;
  }
  .RPage_c2 {
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
  .imgBow_c2 {
  max-height: 180px;
    margin: 10px;
  }
  .textConten_c2 {
    padding: 20px;
    height: 150px;
    width: 300px;
    overflow: auto;
  }
  .recomen_c2 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    align-items: stretch;
    row-gap: 2px;
    column-gap: 2px;
    margin-block: 10px;
    max-width: 600px;
  }
  .re_conten_c2 {
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
<script setup>
import Header_box_central from '../central/Box_menu_central.vue'

import { ref } from 'vue'
import { item_advice_central_02Store } from '../central/index_central'

const item_advice_central_02 = item_advice_central_02Store()
const item_advice_central_02_all = ref(item_advice_central_02.item_advice_central_list_02)
</script>
