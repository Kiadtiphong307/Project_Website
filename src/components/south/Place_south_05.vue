<template>
  <!-- แถบ ภาพ  -->
  <!-- น้องเอิร์ธ -->
  <!-- น้องบอส -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://s359.kapook.com/pagebuilder/31774ae1-c3b8-465f-a487-6a7f5bacc773.jpg"
          class="d-block w-100"
          alt="..."
          height="550"
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
        <h5 class="display-3">เกาะตะรุเตา</h5>
        <p class="h4">เกาะตะรุเตา อ.เมือง จ.สตูล</p>
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_south></Header_box_south>

  <!-- แถบ เนื้อหา -->

  <!-- box รูปซ้าย -->
  <div class="container">
    <div class="card mb-3" style="max-width: 1500px">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="https://api.tourismthailand.org/upload/live/article_desktop_cover_image/22069-22036.png"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="h2"><strong>เกาะตะรุเตา</strong></h5>
            <p class="h5">
              ตะรุเตา เกาะที่เต็มไปด้วยตำนานและคำบอกเล่า ทั้งขุมสมบัติ ถ้ำลับ โจรสลัด สัตว์ร้าย
              หรือแม้กระทั่งต้นไม้มีพิษ แต่ในคำบอกเล่าสุดแฟนตาซี ถือว่ายังมีเค้าโครงจากเรื่องจริง
              ด้วยเป็นเกาะขนาดใหญ่ที่มีภูมิประเทศหลากหลาย แถมยังเงียบสงบ
              จึงไม่แปลกหากตะรุเตาจะเต็มไปด้วยพืชพรรณแปลกๆ
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSi9X8L0bIZHzQ8zC91gTxHCPecr-YwJ8hUQ&usqp=CAU"
            class="d-block w-100"
            alt="..."
            height="200"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <p class="h5">
              รวมถึงสัตว์หายาก และหากใครชอบศึกษาประวัติศาสตร์ จะรู้ว่านอกจากธรรมชาติและชายหาดสวยๆ
              แล้ว บนเกาะแห่งนี้ยังมีสถานที่ท่องเที่ยวทางประวัติศาสตร์มากมาย
              โดยเฉพาะสถานกักกันตัวนักโทษ ซึ่งท้ายสุดแล้วกลายเป็นที่มาของตำนาน “โจรสลัดแห่งตะรุเตา”
              เรื่องเล่าที่ถูกนำไปสร้างเป็นภาพยนตร์และนวนิยายมาแล้วหลายต่อหลายครั้ง
              ช่วงเวลาที่เกาะตะรุเตาเปิดให้นักท่องเที่ยวเข้ามาผจญภัย คือ
              เดือนตุลาคม-เดือนพฤษภาคมของทุกปี
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
        v-for="(i, index) in item_advice_south_02_all"
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
              <button type="button" class="btn btn-dark" style="border-radius: 30px">
                LINK สินค้า
              </button>
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
import Header_box_south from '../south/Box_menu_south.vue'

import { ref } from 'vue'
import { item_advice_south_02Store } from '../south/index_south'

const item_advice_south_02 = item_advice_south_02Store()
const item_advice_south_02_all = ref(item_advice_south_02.item_advice_south_list_02)
</script>
