<script setup>
import Header_box_north_east from '../north_east/Box_menu_north_east.vue'

import { ref } from 'vue'
import { item_advice_north_east_01Store } from '../north_east/index_north_east'

const item_advice_north_east_01 = item_advice_north_east_01Store()
const item_advice_north_east_01_all = ref(item_advice_north_east_01.item_advice_north_east_list_01)
</script>
<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-6.fna.fbcdn.net/v/t1.15752-9/370351708_205696719207025_4055785953824528915_n.png?_nc_cat=109&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFChUymdm3BLVyNKBPYLBoRPcrb_-dIeY49ytv_50h5jgpCUfbgN7TOy2L7lwD7nHUSX6QGgKH4smkcmYgF7gxn&_nc_ohc=nCAJ-z1ByQYAX9_mvBZ&_nc_ht=scontent.fbkk29-6.fna&oh=03_AdT3j2HF7nW1BTp_DO7E0jnT98O1nwf60rrD5Ni-glp30g&oe=6551B566"
          class="d-block w-100"
          style="filter: brightness(85%)"
          :height="'450'"
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
      <div class="carousel-caption d-none d-md-block" style="padding-bottom: 9rem">
        <h2 class="display-3">ชุมชนบ้านปรางค์นคร</h2>
        <p class="h4">ชุมชนบ้านปรางค์นคร อ.คง จ.นครราชสีมา</p>
      </div>
    </div>
  </div>
  <!-- แถบ menu -->
  <Header_box_north_east></Header_box_north_east>
  <!-- แถบ เนื้อหา -->
  <!-- box รูปซ้าย -->
  <div class="container">
    <div class="LPage">
      <img
        src="https://image.posttoday.com/uploads/images/md/2023/08/SYKinagG1FweL9er6hJI.webp?x-image-process=style/lg-webp"
        class="imgBow"
      />
      <div class="container_text">
        <h5 class="display-5">ชุมชนบ้านปรางค์นคร</h5>
        <p class="h5">
          สัมผัสมนต์เสน่ห์ วิถีของชุมชนเชิงวัฒนธรรมเก่าแก่
          กับบรรดาชาวบ้านที่พร้อมหยิบยื่นมิตรภาพอันแสนอบอุ่น โดยหมู่บ้านแห่งนี้เป็นชุมชนท่องเที่ยว
          OTOP ที่มีของดีน่าสนใจอยู่หลายอย่าง เช่น บ้านเรือนไทยโคราช อายุกว่า 100 ปี
          ที่ปัจจุบันยังมีคนพักอาศัยอยู่จริง
        </p>
      </div>
    </div>
    <!--box รูปขวา-->
    <div class="RPage">
      <div class="container_text">
        <p class="h5">
          นอกจากนี้ ยังมี สะพานข้ามบารายสวรรค์ สะพานไม้ไผ่ที่เกิดจากความสามัคคีของชาวบ้าน
          และที่เป็นไฮไลต์ห้ามพลาด คือ กิจกรรมรับพลังจักรวาลที่ “ปราสาทบ้านปรางค์”
          โบราณสถานศักดิ์สิทธิ์ ศูนย์รวมใจประจำหมู่บ้าน
          ส่วนกิจกรรมพายเรืออีโปงกับชิมอาหารพื้นถิ่นก็ถือว่าน่าสนใจ จัดเป็นของดีสุดคลาสสิกแดนอีสาน
          ที่รักษาคุณค่าวัฒนธรรม ความเชื่อ ที่ไม่จำเป็นต้องจัดฉาก หรือปรุงแต่งใดๆ
        </p>
        <a href="https://travel.trueid.net/detail/kW22p6w5JexW" class="btn_cart">อ่านเพิ่มเติม...</a>
      </div>
      <img
        src="https://www.otoptravel.net/wp-content/uploads/2022/05/45105882_2212080682339742_4720658568611627008_n.jpg"
        class="imgBow"
      />
    </div>

    <!-- สิ่งของแนะนำขาย -->
    <h1 class="textcenter"><strong>อุปกรณ์ที่ควรเอาไป</strong></h1>
    <div class="recomen">
      <div class="re_conten" v-for="(i, index) in item_advice_north_east_01_all" :key="index">
        <div>
          <div class="card">
            <img :src="i.img" />
          </div>
        </div>
        <div class="re_text">
          <h4>{{ i.name }}</h4>
          <p>{{ i.category }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.btn_cart {
  padding: 5px;
  color: white;
  text-decoration: none;
  background-color: black;
  border-radius: 5px;
}
.btn_cart:hover {
  padding: 8px;
  color: white;
  text-decoration: none;
  background-color: rgb(4, 60, 203);
  border-radius: 5px;
}
.LPage {
  display: grid;
  grid-template-columns: 400px auto;
  column-gap: 10px;
  justify-items: stretch;
  align-items: center;
  margin-inline: 170px;
  margin-block: 5px;
  width: 1000px;
  border-bottom: 2px solid;
}
.RPage {
  display: grid;
  grid-template-columns: auto 400px;
  column-gap: 1px;
  justify-items: stretch;
  align-items: center;
  margin-inline: 170px;
  margin-block: 5px;
  width: 1000px;
  border-bottom: 2px solid;
}
.imgBow {
  max-width: 880px;
  margin: 10px;
}
.container {
  padding: 5px;
}
.recomen {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: stretch;
  align-items: stretch;
  row-gap: 2px;
  column-gap: 2px;
  max-width: 1000px;
  margin-inline: 200px;
  margin-block: 10px;
}
.re_conten {
  display: grid;
  grid-template-columns: 200px auto;
  column-gap: 10px;
  justify-items: stretch;
  align-items: center;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 5px;
}
.textcenter {
  text-align: center;
  margin-inline: 430px;
  border-bottom: 2px solid;
}
</style>
