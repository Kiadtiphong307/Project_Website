<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://image.posttoday.com/uploads/images/contents/w1024/2023/08/SCWMOHMyiA70y4LJYWRF.webp"
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
        <h5>ชุมชนบ้านปรางค์นคร</h5>
        <p>ชุมชนบ้านปรางค์นคร อ.คง จ.นครราชสีมา</p>
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
            src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/271182730_3437326856494125_2827378806103116201_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeF6Sn-m_ge01F709AIl84TTdxMTy3cNF5x3ExPLdw0XnF4u_NWITpcqPgsICWKWm8IXbyimzqUxAPuysjl_uwBz&_nc_ohc=CZpgoJMpy0AAX_AgJqp&_nc_ht=scontent.fbkk13-2.fna&oh=00_AfDi_DMqLmyR8Vx1SLN_mhhqxFwR7rNEXzIKe9zWNUXniA&oe=65218583"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">ชุมชนบ้านปรางค์นคร</h5>
            <p class="card-text">
              สัมผัสมนต์เสน่ห์ วิถีของชุมชนเชิงวัฒนธรรมเก่าแก่
              กับบรรดาชาวบ้านที่พร้อมหยิบยื่นมิตรภาพอันแสนอบอุ่น
              โดยหมู่บ้านแห่งนี้เป็นชุมชนท่องเที่ยว OTOP ที่มีของดีน่าสนใจอยู่หลายอย่าง เช่น
              บ้านเรือนไทยโคราช อายุกว่า 100 ปี ที่ปัจจุบันยังมีคนพักอาศัยอยู่จริง
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
              นอกจากนี้ ยังมี สะพานข้ามบารายสวรรค์ สะพานไม้ไผ่ที่เกิดจากความสามัคคีของชาวบ้าน
              และที่เป็นไฮไลต์ห้ามพลาด คือ กิจกรรมรับพลังจักรวาลที่ “ปราสาทบ้านปรางค์”
              โบราณสถานศักดิ์สิทธิ์ ศูนย์รวมใจประจำหมู่บ้าน
              ส่วนกิจกรรมพายเรืออีโปงกับชิมอาหารพื้นถิ่นก็ถือว่าน่าสนใจ
              จัดเป็นของดีสุดคลาสสิกแดนอีสาน ที่รักษาคุณค่าวัฒนธรรม ความเชื่อ ที่ไม่จำเป็นต้องจัดฉาก
              หรือปรุงแต่งใดๆ
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <img
            src="https://www.otoptravel.net/wp-content/uploads/2022/05/45105882_2212080682339742_4720658568611627008_n.jpg"
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
