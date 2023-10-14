<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-8.fna.fbcdn.net/v/t1.15752-9/387489938_1307855546765525_8048117540218306131_n.png?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFwqAj-p48vpEoexbm10aO4oZdSMM05rhWhl1IwzTmuFYSvdzEBxju84F04HAvZyQmfjTVdjQzXB0u3hYexBayL&_nc_ohc=bGMd1OEAy8UAX9c_oxz&_nc_ht=scontent.fbkk29-8.fna&oh=03_AdRVvVANVOt4vCycrShxR9pOm2zU_0x8_zTpMwn77fhlhw&oe=65510942"
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
        <h5 class="display-3">เกาะสีชัง</h5>
        <p class="h4">เกาะสีชัง อ.เกาะสีชัง จ.ชลบุรี</p>
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_east></Header_box_east>

  <!-- แถบ เนื้อหา -->

  <!-- box รูปซ้าย -->
  <div class="container">
    <div class="LPage_Place_east_01">
      <img src="https://img.kapook.com/u/2019/sutasinee/03/k2.jpg" class="imgBow_Place_east_01" />
      <div class="container_text_Place_east_01">
        <h5 class="display-5"><strong>เกาะสีชัง</strong></h5>
        <p class="h5">
          บุคคลที่มีหัวใจอนุรักษ์ เกาะสีชังถือเป็นจุดหมายที่น่าสนใจ
          ด้วยความอันซีนของจุดชมวิวที่มีให้เลือกสร้างซีนโรแมนติกได้ถึง 5 พื้นที่ เช่น
          ปลายแหลมถ้ำพัง, เสาธงอัษฎางค์, สะพานอัษฎางค์, ช่องอิสริยาภรณ์ และทะเลแหวกท้ายเกาะ
          ไม่ว่าจะอยากชมพระอาทิตย์ขึ้นหรือตกก็มีจุดชมวิวอยู่มากมาย
        </p>
      </div>
    </div>

    <!--box รูปขวา-->
    <div class="RPage_Place_east_01">
      <div class="container_text_Place_east_01">
        <p class="h5">
          นอกจากนี้ ตัวเกาะยังมีคอนเซปต์น่ารักในการจัดการกับสิ่งแวดล้อม ทั้งการนำขยะบนเกาะไปทำปุ๋ย
          การปลูกปะการังอ่อน การเปิดธนาคารปูและสัตว์น้ำหายาก เพื่อเป็นการอนุรักษ์ทรัพยากรทางทะเลรอบๆ
          เกาะให้มีความยั่งยืน ใครรู้ตัวว่าเป็นสาย ECO กดจองที่พักบนเกาะได้เลย
          โดยท่องเที่ยวได้ตลอดทั้งปี
        </p>
        <a class="btn_cart_Place_east_01" href="https://travel.trueid.net/detail/kW22p6w5JexW"
        >อ่านเพิ่มเติม...</a>
      </div>
      <img
        src="https://roijang.com/wp-content/uploads/2022/07/aerial-view-wood-waterfront-pavilion-koh-si-chang-island-thailand-asdang-bridge-1.jpg"
        class="imgBow_Place_east_01"
      />
    </div>

    <!-- สิ่งของแนะนำขาย -->
    <h1 class="textcenter_Place_east_01"><strong>อุปกรณ์ที่ควรเอาไป</strong></h1>
    <hr />

    <div class="recomen_Place_east_01">
      <div
        class="re_conten_Place_east_01"
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
.textcenter_Place_east_01 {
  text-align: center;
  margin-inline: 430px;
  border-bottom: 2px solid;
}
.btn_cart_Place_east_01 {
  padding: 5px;
  color: white;
  text-decoration: none;
  background-color: black;
  border-radius: 5px;
}
.btn_cart_Place_east_01:hover {
  padding: 8px;
  color: white;
  text-decoration: none;
  background-color: rgb(4, 60, 203);
  border-radius: 5px;
}
.LPage_Place_east_01 {
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
.RPage_Place_east_01 {
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
.imgBow_Place_east_01 {
  max-width: 880px;
  margin: 10px;
}
.container_text_Place_east_01 {
  padding: 5px;
}
.textConten {
  padding: 20px;
  width: 500px;
}
.recomen_Place_east_01 {
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
.re_conten_Place_east_01 {
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
