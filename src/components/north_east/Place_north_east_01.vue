<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://img.kapook.com/u/2015/suppaporn/morhinkaow/mor01.jpg"
          class="d-block w-100"
          alt="..."
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
        <h5>มอหินขาว</h5>
        <p>มอหินขาว อ.เมือง จ.ชัยภูมิ</p>
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_north_east></Header_box_north_east>

  <!-- แถบ เนื้อหา -->

  <!-- box รูปซ้าย -->
  <div class="container">
    <div class="card mb-3" style="max-width: 1500px">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="https://img.kapook.com/u/2015/suppaporn/morhinkaow/chang02.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              แหล่งท่องเที่ยวสุดอันซีน ที่ตั้งอยู่ในเขตอุทยานแห่งชาติภูแลนคา มีจุดเด่นที่เสาหินยักษ์
              5 ก้อน ที่หลายคนบอกว่า คล้ายกับ “สโตนเฮนจ์” ประเทศอังกฤษ
              และจะยิ่งสวยงามขึ้นแบบทวีคูณในช่วงฤดูฝน
              เพราะนอกจากนักเดินทางจะได้ชมประติมากรรมธรรมชาติของเสาหินแล้ว
              ยังจะได้ชื่นชมดอกไม้ที่กำลังบานสะพรั่งทั่วมอหินขาว
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
            <p class="card-text">
              นอกจากนี้ยังมีกลุ่มหินที่น่าสนใจอื่นๆ ได้แก่ หินเจดีย์โขลงช้าง ลานหินต้นไทร
              และจุดชมวิวผาหัวนาค ส่วนหากชอบการแคมปิ้งและดูดาว บริเวณมอหินขาวก็ถือว่า
              เป็นจุดชมดวงดาว และทางช้างเผือกที่ควรค่าแก่การมาเยี่ยมเยือน
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <img
            src="https://img.kapook.com/u/2015/suppaporn/morhinkaow/mor04.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
      </div>
    </div>

    <!-- สิ่งของแนะนำขาย -->
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div
        class="card mb-3"
        style="max-width: 1500px"
        v-for="(i, index) in item_advice_north_east_01_all"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p class="card-text">
    <small class="text-body-secondary">
      <a href="https://travel.trueid.net/detail/kW22p6w5JexW">อ้างอิงมาจาก</a></small
    >
  </p>
</template>

<script setup>
import Header_box_north_east from '../north_east/Box_menu_north_east.vue'

import { ref } from 'vue'
import { item_advice_north_east_01Store } from '../north_east/index_north_east'

const item_advice_north_east_01 = item_advice_north_east_01Store()
const item_advice_north_east_01_all = ref(item_advice_north_east_01.item_advice_north_east_list_01)
</script>
