<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://s.isanook.com/tr/0/ud/287/1437671/line_album_11566_230511_25.jpg?ip/resize/w728/q80/jpg"
          class="d-block w-100"
          style="filter: brightness(75%)"
          height="550"
        />
      </div>
      <div class="carousel-caption d-none d-md-block" style="padding-bottom: 9rem">
        <h5 class="display-3">หินพับผ้า</h5>
        <p class="h4">หินพับผ้า อ.ขนอม จ.นครศรีธรรมราช</p>
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
            src="https://us-fbcloud.net/wb/data/1404/1404632-img.vhyt8p.1beii.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="h2"><strong>หินพับผ้า</strong></h5>
            <p class="h5">
              ผาหินรูปร่างแปลกตาที่พบเห็นได้บริเวณกลางทะเลขนอม
              เป็นปรากฏการณ์ทางธรณีวิทยาที่มีอยู่เพียงน้อยแห่งบนโลกใบนี้
              มีลักษณะเป็นแผ่นหินซ้อนเรียงกันเป็นชั้นๆ
              ซึ่งแต่ละจุดจะดูสวยงามแตกต่างกันตามแต่จะจินตนาการ โดยชาวต่างชาติเรียกปรากฏการณ์นี้ว่า
              ‘Pancake Rock’ ส่วนคนไทยรู้จักกันในชื่อ ‘หินพับผ้า’
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
              เพราะดูคล้ายกับผ้าที่พับซ้อนกันเป็นชั้นๆ เป็นความมหัศจรรย์ของธรรมชาติเมืองคอน
              ซึ่งนักท่องเที่ยวสามารถเช่าเรือจากชุมชนแหลมประทับ
              เพื่อมาเที่ยวชมพิพิธภัณฑ์ธรรมชาติแห่งนี้ได้ตลอดวัน
              สามารถเดินทางมาชมชั้นหินได้ตลอดทั้งปี ทั้งนี้ขึ้นอยู่กับ ลม ฟ้า และอากาศ
              แต่ช่วงที่แนะนำ คือ เดือนมกราคม-เมษายน
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <img
            src="https://www.unseennewchapters.com/img/nakhonsithammarat-detail-banner-m.1dc559e7.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
      </div>
    </div>

    <!-- สิ่งของแนะนำขาย -->
    <!-- ตาเขียว -->
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
