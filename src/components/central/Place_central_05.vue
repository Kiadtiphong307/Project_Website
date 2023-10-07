<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://www.paiduaykan.com/travel/wp-content/uploads/2021/04/1-768x513.jpg"
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
        <h5>วัดทางสาย</h5>
        <p>วัดทางสาย อ.บางสะพาน จ.ประจวบคีรีขันธ์</p>
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
            src="https://www.paiduaykan.com/travel/wp-content/uploads/2021/04/11-DSC_9601-768x515.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">วัดทางสาย</h5>
            <p class="card-text">
              “พระมหาธาตุเจดีย์ภักดีประกาศ” เป็นเจดีย์ที่ได้รับพระราชทานชื่อจากในหลวงรัชกาลที่ 9
              ถือเป็นสถาปัตยกรรมที่น่าเลื่อมใส
              เนื่องจากเจดีย์แห่งนี้สร้างขึ้นโดยไม่มีการใช้งบจากทางราชการ
              แต่สร้างขึ้นจากพลังศรัทธาอันยิ่งใหญ่ของมวลชนที่มีต่อพระมหากษัตริย์
              เพื่อเป็นการเฉลิมพระเกียรติ และถวายเป็นพระราชกุศลโดยเฉพาะในวโรกาสครองราชย์ครบรอบ 50 ปี
              ตัวอาคาร 5 ชั้น คือการครองราชย์ครบ 50 ปี ส่วนเจดีย์หมู่ 9 องค์
              หมายถึงวัดประจำรัชกาลที่ 9
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
            src="https://www.paiduaykan.com/travel/wp-content/uploads/2021/04/13-SON08053-768x512.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <p class="card-text">
              นอกจากความงดงามของที่มาที่ไปแล้ว ด้านบนของเจดีย์ยังเป็นสุดยอดจุดชมวิวดวงอาทิตย์ขึ้น
              และตกแห่งเมืองประจวบ
              ซึ่งเราสามารถมองเห็นความสวยงามของชายหาดบ้านกรูดและทิวมะพร้าวได้ไกลสุดสายตา
            </p>
          </div>
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
import Header_box_central from '../central/Box_menu_central.vue'

import { ref } from 'vue'
import { item_advice_central_03Store } from '../central/index_central'

const item_advice_central_03 = item_advice_central_03Store()
const item_advice_central_03_all = ref(item_advice_central_03.item_advice_central_list_03)
</script>
