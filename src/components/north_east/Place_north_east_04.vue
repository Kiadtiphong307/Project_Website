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
          src="https://scontent.fbkk4-4.fna.fbcdn.net/v/t1.15752-9/370351708_205696719207025_4055785953824528915_n.png?_nc_cat=109&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEzl54mSjEkvipBG1l5BMIfPcrb_-dIeY49ytv_50h5jkidFTHgeB0dPZshzHNc-U_WJk-zZC5vI3Wvs48dCTHr&_nc_ohc=HrorrvbWoKMAX_Sh_Xs&_nc_ht=scontent.fbkk4-4.fna&_nc_e2o=f&oh=03_AdT9dJer-uvxf6xhFQGZLzuxjPKiOYVt6Jvfz-WRQ-6QXA&oe=65533F26"
          class="d-block w-100"
          style="filter: brightness(75%);max-height: 500px;"
        />
      </div>
      <div class="carousel-caption d-none d-md-block">
      <h5 class="display-3">ชุมชนบ้านปรางค์นคร</h5>
      <p>ชุมชนบ้านปรางค์นคร อ.คง จ.นครราชสีมา</p>
      </div>
    </div>
  </div>
  <!-- แถบ menu -->
  <Header_box_north_east></Header_box_north_east>
  <!-- แถบ เนื้อหา -->
  <!-- box รูปซ้าย -->
  <div class="container-ne4">
    <div class="LPage-ne4">
      <img
        src="https://image.posttoday.com/uploads/images/md/2023/08/SYKinagG1FweL9er6hJI.webp?x-image-process=style/lg-webp"
        class="imgBow"
      />
      <div style="margin-block: 10px;">
        <h5 class="card-title">ชุมชนบ้านปรางค์นคร</h5>
        <p class="textConten-ne4">
          สัมผัสมนต์เสน่ห์ วิถีของชุมชนเชิงวัฒนธรรมเก่าแก่
          กับบรรดาชาวบ้านที่พร้อมหยิบยื่นมิตรภาพอันแสนอบอุ่น โดยหมู่บ้านแห่งนี้เป็นชุมชนท่องเที่ยว
          OTOP ที่มีของดีน่าสนใจอยู่หลายอย่าง เช่น บ้านเรือนไทยโคราช อายุกว่า 100 ปี
          ที่ปัจจุบันยังมีคนพักอาศัยอยู่จริง
        </p>

      </div>
    </div>
    <!--box รูปขวา-->
    <div class="RPage-ne4">
      <div >
        <p class="textConten">
          นอกจากนี้ ยังมี สะพานข้ามบารายสวรรค์ สะพานไม้ไผ่ที่เกิดจากความสามัคคีของชาวบ้าน
          และที่เป็นไฮไลต์ห้ามพลาด คือ กิจกรรมรับพลังจักรวาลที่ “ปราสาทบ้านปรางค์”
          โบราณสถานศักดิ์สิทธิ์ ศูนย์รวมใจประจำหมู่บ้าน
          ส่วนกิจกรรมพายเรืออีโปงกับชิมอาหารพื้นถิ่นก็ถือว่าน่าสนใจ จัดเป็นของดีสุดคลาสสิกแดนอีสาน
          ที่รักษาคุณค่าวัฒนธรรม ความเชื่อ ที่ไม่จำเป็นต้องจัดฉาก หรือปรุงแต่งใดๆ
        </p>
        <a href="https://www.thairath.co.th/lifestyle/travel/thaitravel/2707158?fbclid=IwAR3356QAvipXvkzqSUgrqKeF6hIL5rJUPkup_WlOEcK-n3myanYsqNhyAAA" class="btn_cart-ne4">อ่านเพิ่มเติม</a>
      </div>
      <img
        src="https://www.otoptravel.net/wp-content/uploads/2022/05/45105882_2212080682339742_4720658568611627008_n.jpg"
        class="imgBow"
      />
    </div>

    <!-- สิ่งของแนะนำขาย -->
    <h1 style="text-align: center">สิ่งที่ควรเตรียมไป</h1>
    <div class="recomen-ne4">
      <div class="re_conten-ne4" v-for="(i, index) in item_advice_north_east_01_all" :key="index">
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
@media (min-width: 1030px) {
  .container-ne4 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: center;
  }
  .btn_cart-ne4 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart-ne4:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage-ne4 {
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
  .RPage-ne4 {
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
  .container_text {
    padding: 5px;
  }
  .textConten {
    padding: 20px;
    width: 500px;
  }
  .recomen-ne4 {
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
  .re_conten-ne4 {
    display: grid;
    grid-template-columns: 200px auto;
    column-gap: 10px;
    justify-items: stretch;
    align-items: center;
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
    padding: 5px;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .container-ne4 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }
  .btn_cart-ne4 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart-ne4:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage-ne4 {
    display: grid;
    grid-template-columns: 300px auto;
    column-gap: 10px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .RPage-ne4 {
    display: grid;
    grid-template-columns: auto 300px;
    column-gap: 1px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .imgBow {
    max-width: 880px;
    margin: 10px;
  }
  .textConten-ne4 {
    padding: 20px;
    height: 100px;
    width: 400px;
    overflow: auto;
  }
  .recomen-ne4 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: stretch;
    align-items: stretch;
    row-gap: 2px;
    column-gap: 2px;
    margin-block: 10px;
    max-width: 900px;
    max-height: 300px;
  }
  .re_conten-ne4 {
    display: grid;
    grid-template-columns: 100px auto;
    column-gap: 10px;
    justify-items: stretch;
    align-items: center;
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
    padding: 5px;
    box-sizing: content-box;
  }
}
@media (max-width: 767px) {
  .container-ne4 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }
  .btn_cart-ne4 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart-ne4:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage-ne4 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    border-bottom: 2px solid;
    margin-block: 5px;
    max-width: 300px;
  }
  .RPage-ne4 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    justify-content: center;
    align-items: stretch;
    justify-items: stretch;
    max-width: 300px;
    margin-block: 5px;
    border-bottom: 2px solid;
  }
  .imgBow {
    max-width: 100%;
    margin: 10px;
  }
  .textConten-ne4 {
    padding: 20px;
    height: 200px;
    width: 300px;
    overflow: auto;
  }
  .recomen-ne4 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    align-items: stretch;
    row-gap: 2px;
    column-gap: 2px;
    margin-block: 10px;
    max-width: 600px;
  }
  .re_conten-ne4 {
    display: grid;
    grid-template-columns: 100px auto;
    column-gap: 10px;
    justify-items: stretch;
    align-items: center;
    box-sizing: content-box;
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
    padding: 5px;
  }
}
</style>
