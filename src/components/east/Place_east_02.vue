<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://s359.kapook.com//pagebuilder/1cd4cae7-b77f-4ac5-ac70-0ca529255287.jpg"
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
    <div class="card mb-3" style="max-width: 1500px">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="https://s359.kapook.com//pagebuilder/14ec6b35-3cd9-415e-9155-4ecdffd17422.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="h2"><strong>วัดมณีวงศ์</strong></h5>
            <p class="h5">
              วัดแห่งนี้เกิดขึ้นจากพญานาคที่มาเข้าฝัน ‘หลวงพี่ต่อ’ เจ้าอาวาสวัดมณีวงศ์
              และได้พาหลวงพี่ไปชมคลังมหาสมบัติที่เมืองบาดาล เพื่อให้เกิดภาพจำและนำกลับไปสร้างที่วัด
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
              จนเกิดเป็นความอลังการของงานประติมากรรมพญานาคกว่า 1,000 ตน
              ที่อาศัยเวียนวนอยู่ในถ้ำขนาดใหญ่ โดยจำลองบรรยากาศความยิ่งใหญ่มาจากเมืองบาดาล
              สู่ความงดงามที่ถูกถ่ายทอดผ่านงานปั้นชั้นครู
              รับรองว่าถูกใจลูกหลานพญานาคสายมูอย่างแน่นอน โดยเปิดให้เข้าชมทุกวัน ตั้งแต่เวลา
              07.00-17.00 น.
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <img
            src="https://s359.kapook.com/r/600/auto/pagebuilder/e112209a-ad9a-4e39-bfa7-9b9e2475f31e.jpg"
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
import Header_box_east from '../east/Box_menu_east.vue'

import { ref } from 'vue'
import { item_advice_east_01Store } from '../east/index_east'

const item_advice_east_01 = item_advice_east_01Store()
const item_advice_east_01_all = ref(item_advice_east_01.item_advice_east_list_01)
</script>
