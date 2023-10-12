<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://www.unseennewchapters.com/img/kanchanaburi-01.c0e8b9a9.jpg"
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
        <h5 class="display-3">อุโมงค์สามมิติ</h5>
        <p class="h4">อุโมงค์สามมิติ อ.ทองผาภูมิ จ.กาญจนบุรี</p>
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
            src="https://files.thailandtourismdirectory.go.th/assets/upload/2021/8/17//d87cffda-db4c-46a0-93a6-bde26f866c38.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="h2"><strong>อุโมงค์สามมิติ</strong></h5>
            <p class="h5">
              อุโมงค์แห่งนี้ เป็นเหมืองแร่เก่า มีความยาว 2,300 เมตร เป็นพื้นที่ท่องเที่ยวโดยชุมชน
              แหล่งเรียนรู้ทางธรณีวิทยา และระบบนิเวศ บริเวณรอบๆ เหมืองปกคลุมด้วยผืนป่าสีเขียว
              พบเห็นพืชสมุนไพรเทียนตาตั๊กแตนเป็นหย่อมๆ
              ส่วนภายในอุโมงค์เริ่มมีหินงอกหินย้อยเปล่งประกายระยิบระยับ ธารน้ำน้อยๆ ไหลสู่น้ำตกผาแดง
              ยังคงมีหลักฐานจากอดีตเป็นเครื่องจักร
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
              ท่อลมขนาดใหญ่ให้พบเห็น
              ส่วนไฮไลต์อยู่ที่ประสบการณ์ลอดอุโมงค์ภายใต้ความมืดแต่กลับมีอากาศเย็นสบาย
              เมื่อมีแสงไฟสาดส่องไปยังไอหมอกที่ปกคลุมบริเวณปากอุโมงค์
              จะดูคล้ายกับประตูกาลเวลาราวกับฉากในภาพยนตร์ และเมื่อได้ผ่านทะลุออกไป
              จะให้ความรู้สึกราวกับว่าได้ทะลุผ่านจากมิติหนึ่งไปสู่อีกมิติ จึงเป็นที่มาของชื่อ
              “อุโมงค์สามมิติ” ที่ผู้คนต่างเรียกขาน
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <img
            src="https://www.unseennewchapters.com/img/kanchanaburi-02.71da4740.jpg"
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
        v-for="(i, index) in item_advice_central_03_all"
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
      <a class="btn btn-outline-secondary" href="https://travel.trueid.net/detail/kW22p6w5JexW">อ้างอิงมาจาก</a></small
    >
  </p>
</template>
<style scoped>
.textcenter{
  text-align: center;
  margin-inline: 500px;
  border-bottom: 2px solid;
}
</style>
<script setup>
import Header_box_central from '../central/Box_menu_central.vue'

import { ref } from 'vue'
import { item_advice_central_03Store } from '../central/index_central'

const item_advice_central_03 = item_advice_central_03Store()
const item_advice_central_03_all = ref(item_advice_central_03.item_advice_central_list_03)
</script>
