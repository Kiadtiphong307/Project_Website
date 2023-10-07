<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://apis.sawasdee.ai/microsite/images/post/ckeditor/image-20230201113511-1.png"
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
        <h5>วัดหงษ์ทอง</h5>
        <p>วัดหงษ์ทอง อ.บางปะกง จ.ฉะเชิงเทรา</p>
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
            src="https://tatapi.tourismthailand.org/tatfs/image/CustomPOI/Picture/P03005929_1.jpeg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">วัดหงษ์ทอง</h5>
            <p class="card-text">
              วัดที่สวยงามแห่งหนึ่งในจังหวัดฉะเชิงเทรา
              ที่ถูกน้ำทะเลกัดเซาะจนพื้นที่ใช้สอยภายในวัดหายไปเกินครึ่ง
              ด้วยเหตุนี้ทำให้สิ่งก่อสร้างที่เคยตั้งอยู่ริมทะเล
              กลายเป็นสิ่งก่อสร้างในทะเลไปโดยปริยาย เราจึงมีโอกาสได้เห็นทั้งโบสถ์กลางน้ำ อาคารในทะเล
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
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              รวมไปถึงพระเอกใหม่ของวัดอย่าง “ซีวอล์ก” หรือสะพานกระจกใส
              สะพานแก้วที่ทอดตัวออกไปในท้องทะเล ที่กลายเป็นจุดชมพระอาทิตย์ตกของเมืองแปดริ้ว
              และไฮไลต์ที่น่าตื่นใจอย่างมากในช่วงเวลาน้ำขึ้น
              เพราะถ้ามองผิวเผินจะดูคล้ายกับผู้คนกำลังเดินอยู่บนผิวน้ำ ปัจจุบันพูดได้เต็มปากเลยว่า
              นี่คือจุดชมพระอาทิตย์ตกทะเลแห่งใหม่ ที่เต็มไปด้วยความน่าประทับใจของเมืองแปดริ้ว
              วัดหงษ์ทอง เปิดทุกวัน เวลา 06.00-18.00 น.
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <img
            src="https://apis.sawasdee.ai/microsite/images/post/ckeditor/image-20230201113610-4.png"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
      </div>
    </div>

    <!-- สิ่งของแนะนำขาย -->
    <h1>แนะนำสินค้า</h1>
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
import Header_box_east from '../east/Box_menu_east.vue'

import { ref } from 'vue'
import { item_advice_east_01Store } from '../east/index_east'

const item_advice_east_01 = item_advice_east_01Store()
const item_advice_east_01_all = ref(item_advice_east_01.item_advice_east_list_01)
</script>
