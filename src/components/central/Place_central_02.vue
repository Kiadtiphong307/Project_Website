<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://www.unseennewchapters.com/img/phetchaburi-01.838b543e.jpg"
          class="d-block w-100"
          alt="..."
          :height="'450'"
        />
      </div>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="display-3">ถ้ำโบ้</h5>
        <p class="h4">ถ้ำโบ้ อ.เขาย้อย จ.เพชรบุรี</p>
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_central></Header_box_central>

  <!-- แถบ เนื้อหา -->

  <!-- box รูปซ้าย -->
  <div class="container">
    <div class="card mb-3" style="max-width: 1500px">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="https://www.unseennewchapters.com/img/phetchaburi-03.2a5dfa85.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="h2"><strong>ถ้ำโบ้</strong></h5>
            <p class="h5">
              “ถ้ำโบ้” แหล่งท่องเที่ยวที่น่าสนใจ ตั้งอยู่บนเขาอีบิด ทางเข้าถ้ำเป็นโพรงกว้าง
              ภายในเป็นถ้ำตื้น โถงถ้ำสูงโปร่ง มีหินงอกหินย้อยที่เกิดขึ้นตามธรรมชาติสวยงาม
              อากาศถ่ายเทเย็นสบาย จากในถ้ำเมื่อมองลอดโพรงออกไปด้านหน้า จะเห็นทิวทัศน์ของ อ.เขาย้อย
              จ.เพชรบุรี และ อ.ปากท่อ จ.ราชบุรี ในมุมกว้างอย่างสวยงาม ส่วนด้านหลังถ้ำมีลานกว้าง
              เป็นจุดชมวิวดูทิวต้นตาลที่เป็นสัญลักษณ์ของ จังหวัดเพชรบุรี
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
              ยังเป็นจุดชมดวงอาทิตย์ขึ้น และตกที่งดงาม เหมาะกับคนที่อยากได้รูปมุมใหม่ๆ
              สำหรับนักท่องเที่ยวสายผจญภัยที่อยากพิชิตถ้ำใหม่ใกล้เมืองกรุงเทพนี้
              ช่วงเวลาที่เหมาะสมในการเดินชมถ้ำ คือ 05.00 - 17.00 น.
              (ไม่แนะนำให้เดินทางท่องเที่ยวในช่วงฤดูฝน เนื่องจากทางเดินขึ้นถ้ำมีความลาดชัน
              และทางเดินภายในถ้ำลื่น อาจเกิดอันตรายหรืออุบัติเหตุได้)
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <img
            src="https://f.ptcdn.info/130/073/000/qreblxjeaqierC93qtt-o.jpg"
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
        v-for="(i, index) in item_advice_central_02_all"
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
import Header_box_central from '../central/Box_menu_central.vue'

import { ref } from 'vue'
import { item_advice_central_02Store } from '../central/index_central'

const item_advice_central_02 = item_advice_central_02Store()
const item_advice_central_02_all = ref(item_advice_central_02.item_advice_central_list_02)
</script>
