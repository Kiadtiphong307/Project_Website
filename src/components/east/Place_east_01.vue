<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-8.fna.fbcdn.net/v/t1.15752-9/387489938_1307855546765525_8048117540218306131_n.png?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFwqAj-p48vpEoexbm10aO4oZdSMM05rhWhl1IwzTmuFYSvdzEBxju84F04HAvZyQmfjTVdjQzXB0u3hYexBayL&_nc_ohc=bGMd1OEAy8UAX-kZkGl&_nc_ht=scontent.fbkk29-8.fna&oh=03_AdQ93S_OGJRVHU-Uv8TfjiUKFkXvOOCeaXIj1AuxyTKqvg&oe=65530382"
          class="d-block w-100"
          style="filter: brightness(75%)"
          maxheight="500px"
        />
      </div>
      <div class="carousel-caption d-none d-md-block" style="padding-bottom: 9rem">
        <h5 class="display-3">เกาะสีชัง</h5>
        <p class="h4">เกาะสีชัง อ.เกาะสีชัง จ.ชลบุรี</p>
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_east></Header_box_east>

  <!-- แถบ เนื้อหา -->

  <!-- box รูปซ้าย -->
  <div class="container_e1">
    <div class="LPage_e1">
      <img
        src="https://img.kapook.com/u/2019/sutasinee/03/k2.jpg"
        class="imgBow_e1"
        style="filter: brightness(85%)"
      />
      <div style="margin-block: 10px">
        <h5 class="card-title"><strong>เกาะสีชัง</strong></h5>
        <p class="textConten_e1">
          บุคคลที่มีหัวใจอนุรักษ์ เกาะสีชังถือเป็นจุดหมายที่น่าสนใจ
          ด้วยความอันซีนของจุดชมวิวที่มีให้เลือกสร้างซีนโรแมนติกได้ถึง 5 พื้นที่ เช่น
          ปลายแหลมถ้ำพัง, เสาธงอัษฎางค์, สะพานอัษฎางค์, ช่องอิสริยาภรณ์ และทะเลแหวกท้ายเกาะ
          ไม่ว่าจะอยากชมพระอาทิตย์ขึ้นหรือตกก็มีจุดชมวิวอยู่มากมาย
        </p>
      </div>
    </div>

    <!--box รูปขวา-->
    <div class="RPage_e1">
      <div>
        <p class="textConten_e1">
          นอกจากนี้ ตัวเกาะยังมีคอนเซปต์น่ารักในการจัดการกับสิ่งแวดล้อม ทั้งการนำขยะบนเกาะไปทำปุ๋ย
          การปลูกปะการังอ่อน การเปิดธนาคารปูและสัตว์น้ำหายาก เพื่อเป็นการอนุรักษ์ทรัพยากรทางทะเลรอบๆ
          เกาะให้มีความยั่งยืน ใครรู้ตัวว่าเป็นสาย ECO กดจองที่พักบนเกาะได้เลย
          โดยท่องเที่ยวได้ตลอดทั้งปี
        </p>
        <a class="btn_cart_e1" href="https://www.thairath.co.th/lifestyle/travel/thaitravel/2709207?gallery_id=1">อ่านเพิ่มเติม</a>
      </div>
      <img
        src="https://roijang.com/wp-content/uploads/2022/07/aerial-view-wood-waterfront-pavilion-koh-si-chang-island-thailand-asdang-bridge-1.jpg"
        class="imgBow_e1"
      />
    </div>

    <!-- สิ่งของแนะนำขาย -->
    <h1 style="text-align: center"><strong>สิ่งที่ควรเตรียมไป</strong></h1>
    <hr />

    <div class="recomen_e1">
      <div
        class="re_conten_e1"
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
@media (min-width: 1030px) {
  .container_e1 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: center;
  }
  .btn_cart_e1 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart_e1:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage_e1 {
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
  .RPage_e1 {
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
  .imgBow_e1 {
    max-width: 880px;
    margin: 10px;
  }
  .recomen_e1 {
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
  .re_conten_e1 {
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
  .container_e1 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }

  .btn_cart_e1 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart_e1:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage_e1 {
    display: grid;
    grid-template-columns: 300px auto;
    column-gap: 10px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .RPage_e1 {
    display: grid;
    grid-template-columns: auto 300px;
    column-gap: 1px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .imgBow_e1 {
    max-height: 200px;
    margin: 10px;
  }
  .textConten_e1 {
    padding: 20px;
    height: 100px;
    width: 400px;
    overflow: auto;
  }
  .recomen_e1 {
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
  .re_conten_e1 {
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
  .container_e1 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }
  .btn_cart_e1 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart_e1:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage_e1 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    border-bottom: 2px solid;
    margin-block: 5px;
    max-width: 300px;
  }
  .RPage_e1 {
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
  .imgBow_e1 {
    max-height: 150px;
    margin: 10px;
  }
  .textConten_e1 {
    padding: 20px;
    height: 150px;
    width: 300px;
    overflow: auto;
  }
  .recomen_e1 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    align-items: stretch;
    row-gap: 2px;
    column-gap: 2px;
    margin-block: 10px;
    max-width: 600px;
  }
  .re_conten_e1 {
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
import Header_box_east from '../east/Box_menu_east.vue'

import { ref } from 'vue'
import { item_advice_east_01Store } from '../east/index_east'

const item_advice_east_01 = item_advice_east_01Store()
const item_advice_east_01_all = ref(item_advice_east_01.item_advice_east_list_01)
</script>
