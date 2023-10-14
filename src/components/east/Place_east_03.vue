<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://apis.sawasdee.ai/microsite/images/post/ckeditor/image-20230201113511-1.png"
          class="d-block w-100"
          alt="..."
          :height="'450'"
        />
      </div>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="display-3">วัดหงษ์ทอง</h5>
        <p class="h4">วัดหงษ์ทอง อ.บางปะกง จ.ฉะเชิงเทรา</p>
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
            <h5 class="h2"><strong>วัดหงษ์ทอง</strong></h5>
            <p class="h5">
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
            <p class="h5">
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
