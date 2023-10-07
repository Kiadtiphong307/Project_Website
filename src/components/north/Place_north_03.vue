<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://i.pinimg.com/736x/36/2d/6f/362d6f8db0c5e4e493d40a95d5ac1784.jpg"
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
        <h5>.ห้วยกุ๊บกั๊บ</h5>
        <p>แหล่งธรรมชาติที่สวยงามคุ้มค่ากับการมาท่องเที่ยว</p>
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_north></Header_box_north>

  <!-- แถบ เนื้อหา -->

  <!-- box รูปซ้าย -->
  <div class="container">
    <div class="card mb-3" style="max-width: 1500px">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="https://i.pinimg.com/564x/8d/ca/7a/8dca7a634615d45bf8e0be367da2bb3e.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">.ห้วยกุ๊บกั๊บ</h5>
            <p class="card-text">
              ห้วยกุ๊บกั๊บ แหล่งท่องเที่ยวธรรมชาติที่ตั้งอยู่ในอำเภอแม่แตง หมู่บ้านเล็กๆ
              แห่งนี้จะพาคุณเข้าถึงการใช้ชีวิตที่เรียบง่าย เข้าถึงธรรมชาติ
              และแน่นอนว่าจุดถ่ายภาพของที่นี่ สวยทุกมุมเขาเลย
              ยิ่งถ้าโชคดีเราอาจได้พบกับทะเลหมอกในตอนเช้า
            </p>
            <p class="card-text"><small class="text-body-secondary">แสดงข้อมูลเพิ่มเติม</small></p>
            <button type="button" class="btn btn-primary">Primary</button>
          </div>
        </div>
      </div>
    </div>

    <!--box รูปขวา-->
    <div class="card mb-3" style="max-width: 1500px">
      <div class="row g-0">
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              ที่มาของชื่อ ห้วยกุ๊บกั๊บ มาจากสมัยก่อนหมู่บ้านนี้ตั้งอยู่ที่ลำธารท้ายหมู่บ้าน
              ซึ่งเส้นทางเข้าหมู่บ้านนั้นลำบากและกันดารมาก รถเข้าไม่ถึง
              ต้องเดินทางด้วยการขี่ม้าเข้าไป และเสียงฝีเท้าของม้าที่ดัง "กุ๊บกั๊บ"
              ก็กลายมาเป็นชื่อเรียกของหมู่บ้านนี้ไปโดยปริยาย
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <img
            src="https://i.pinimg.com/736x/48/29/5b/48295b6fd371b8a0f821283c9183cbd2.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
      </div>
    </div>
    <!-- สิ่งของแนะนำขาย -->
    <h1>สิ่งที่ควรเตรียมไป</h1>
    <hr />

    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div
        class="card mb-3"
        style="max-width: 800px"
        v-for="(i, index) in item_advice_north_03_all"
        :key="index"
      >
        <div class="row g-0">
          <div class="col-md-4">
            <div class="card">
              <img :src="i.img" class="img-fluid rounded-start" alt="..." />
            </div>
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
import Header_box_north from '../north/Box_menu_north.vue'

import { ref } from 'vue'
import { item_advice_north_03Store } from '../north/index_north'

const item_advice_north_03 = item_advice_north_03Store()
const item_advice_north_03_all = ref(item_advice_north_03.item_advice_north_list_03)
</script>
