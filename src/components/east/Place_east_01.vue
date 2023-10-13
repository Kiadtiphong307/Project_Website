<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://www.hellosummer.60เส้นทางความสุข.com/wp-content/uploads/2020/02/%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B8%AA%E0%B8%B5%E0%B8%8A%E0%B8%B1%E0%B8%87-Banner.jpg"
          class="d-block w-100"
          alt="..."
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
      <div class="carousel-caption d-none d-md-block">
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
    <div class="card mb-3" style="max-width: 1500px">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="https://img.kapook.com/u/2019/sutasinee/03/k2.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="h2"><strong>เกาะสีชัง</strong></h5>
            <p class="h5">
              บุคคลที่มีหัวใจอนุรักษ์ เกาะสีชังถือเป็นจุดหมายที่น่าสนใจ
              ด้วยความอันซีนของจุดชมวิวที่มีให้เลือกสร้างซีนโรแมนติกได้ถึง 5 พื้นที่ เช่น
              ปลายแหลมถ้ำพัง, เสาธงอัษฎางค์, สะพานอัษฎางค์, ช่องอิสริยาภรณ์ และทะเลแหวกท้ายเกาะ
              ไม่ว่าจะอยากชมพระอาทิตย์ขึ้นหรือตกก็มีจุดชมวิวอยู่มากมาย
            </p>
          </div>
        </div>
      </div>
    </div>

    <!--box รูปขวา-->
    <div class="card mb-3" style="max-width: 1500px">
      <div class="row g-0">
        <div class="col-md-8">
          <div class="card-body">
            <p class="h5">
              นอกจากนี้ ตัวเกาะยังมีคอนเซปต์น่ารักในการจัดการกับสิ่งแวดล้อม
              ทั้งการนำขยะบนเกาะไปทำปุ๋ย การปลูกปะการังอ่อน การเปิดธนาคารปูและสัตว์น้ำหายาก
              เพื่อเป็นการอนุรักษ์ทรัพยากรทางทะเลรอบๆ เกาะให้มีความยั่งยืน ใครรู้ตัวว่าเป็นสาย ECO
              กดจองที่พักบนเกาะได้เลย โดยท่องเที่ยวได้ตลอดทั้งปี
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <img
            src="https://roijang.com/wp-content/uploads/2022/07/aerial-view-wood-waterfront-pavilion-koh-si-chang-island-thailand-asdang-bridge-1.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
      </div>
    </div>

    <!-- สิ่งของแนะนำขาย -->
    <h1 class="textcenter"><strong>แนะนำสินค้า</strong></h1>
    <hr />

    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div
        class="card mb-3"
        style="max-width: 1500px"
        v-for="(i, index) in item_advice_east_01_all"
        :key="index"
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="i.img" class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ i.name }}</h5>
              <p class="card-text">{{ i.category }}</p>
              <button type="button" class="btn btn-dark">LINK สินค้า</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p class="card-text">
    <small class="text-body-secondary">
      <a class="btn btn-outline-secondary" href="https://travel.trueid.net/detail/kW22p6w5JexW"
        >อ้างอิงมาจาก</a
      ></small
    >
  </p>
</template>
<style scoped>
.textcenter {
  text-align: center;
  margin-inline: 500px;
  border-bottom: 2px solid;
}
</style>
<script setup>
import Header_box_east from '../east/Box_menu_east.vue'

import { ref } from 'vue'
import { item_advice_east_01Store } from '../east/index_east'

const item_advice_east_01 = item_advice_east_01Store()
const item_advice_east_01_all = ref(item_advice_east_01.item_advice_east_list_01)
</script>
