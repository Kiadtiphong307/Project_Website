<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://www.paiduaykan.com/travel/wp-content/uploads/2021/04/1-768x513.jpg"
          class="d-block w-100"
          style="filter: brightness(90%)"
          :height="'450'"
        />
      </div>
      <div class="carousel-caption d-none d-md-block" style="padding-bottom: 9rem">
        <h5 class="display-3">วัดทางสาย</h5>
        <p class="h4">วัดทางสาย อ.บางสะพาน จ.ประจวบคีรีขันธ์</p>
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
            <h5 class="h2"><strong>วัดทางสาย</strong></h5>
            <p class="h5">
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
            <p class="h5">
              นอกจากความงดงามของที่มาที่ไปแล้ว ด้านบนของเจดีย์ยังเป็นสุดยอดจุดชมวิวดวงอาทิตย์ขึ้น
              และตกแห่งเมืองประจวบ
              ซึ่งเราสามารถมองเห็นความสวยงามของชายหาดบ้านกรูดและทิวมะพร้าวได้ไกลสุดสายตา
            </p>
          </div>
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
import { item_advice_central_03Store } from '../central/index_central'

const item_advice_central_03 = item_advice_central_03Store()
const item_advice_central_03_all = ref(item_advice_central_03.item_advice_central_list_03)
</script>
