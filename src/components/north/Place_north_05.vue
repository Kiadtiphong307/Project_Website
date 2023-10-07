<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://i.pinimg.com/736x/e8/95/9a/e8959a063b375c093b1b5f21e2797435.jpg"
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
        <h5>เขื่อนแม่งัด อุทยานแห่งชาติศรีลานนา</h5>
        <p>อุทยานแห่งชาติที่ควรมาเยือนซักครั้ง</p>
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
            src="https://i.pinimg.com/564x/e5/98/6e/e5986ead821600e86c01eac7079d1bf6.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">เขื่อนแม่งัด อุทยานแห่งชาติศรีลานนา</h5>
            <p class="card-text">
              เขื่อนแม่งัด ตั้งอยู่ในเขตอุทยานแห่งชาติศรีลานนา จังหวัดเชียงใหม่ และอยู่ไม่ไกลจาก
              วัดบ้านเด่น มากนัก ซึ่งวิวทิวทัศน์ของเขื่อนล้อมรอบไปด้วยภูเขาที่เขียวขจี
            </p>
          </div>
        </div>
      </div>
    </div>

    <!--box รูปขวา-->
    <div class="card mb-3" style="max-width: 1500px">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="https://www.chillpainai.com/src/wewakeup/scoop/img_scoop/scoop/kang/travel2/5meangud/mtf.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <p class="card-text">
              ความสำคัญของเขื่อนแม่งัด คือ
              การทำหน้าที่ส่งน้ำหล่อเลี้ยงพื้นที่เพาะปลูกในที่ราบเชิงเขาทั้งสองฝั่งของลำน้ำแม่งัด
              อีกทั้งยังช่วยบรรเทาอุทกภัยในเขตลุ่มน้ำปิง
              โดยเฉพาะบรรเทาน้ำหลากเข้าท่วมตัวเมืองเชียงใหม่ รวมทั้งยังเป็นแหล่งเพาะพันธุ์สัตว์น้ำ
              นอกจากเป็นเขื่อนที่ใช้เพื่อประโยชน์ในด้านการชลประทานแล้ว ด้วยวิวของเขื่อนที่งดงาม
              รายล้อมด้วยภูเขาเขียวขจี เขื่อนแม่งัดจึงกลายเป็นสถานที่ท่องเที่ยวพักผ่อนหย่อนใจยอดฮิต
              อีกแห่งหนึ่งที่เหมาะสำหรับคนรักธรรมชาติ และต้องการพักผ่อนแบบสงบ ท่ามกลางสายน้ำ
            </p>
          </div>
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
        v-for="(i, index) in item_advice_north_05_all"
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
import { item_advice_north_05Store } from '../north/index_north'

const item_advice_north_05 = item_advice_north_05Store()
const item_advice_north_05_all = ref(item_advice_north_05.item_advice_north_list_05)
</script>
