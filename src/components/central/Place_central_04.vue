<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-1.fna.fbcdn.net/v/t1.15752-9/370033797_1206844753986192_926853601596424030_n.png?_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeE7QWzMPgAYYzJyfY8fTV-LtkupSgQ1nLC2S6lKBDWcsKQRo_PtSIE7G5tpopo4eqEzhmkLbmD8fYiRWPmq4Tju&_nc_ohc=pIdWwWBQATQAX__Wm1J&_nc_ht=scontent.fbkk29-1.fna&oh=03_AdQOCERCghR0bzDa_2RSCDZzcnAIQpniD7vdPxHxov3CsQ&oe=6550936B"
          class="d-block w-100"
          style="filter: brightness(90%)"
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
        <h5 class="display-3">อุโมงค์สามมิติ</h5>
        <p class="h4">อุโมงค์สามมิติ อ.ทองผาภูมิ จ.กาญจนบุรี</p>
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_central></Header_box_central>

  <!-- แถบ เนื้อหา -->

  <!-- box รูปซ้าย -->
  <div class="container">
    <div class="LPage_Place_central_04">
      <img
        src="https://files.thailandtourismdirectory.go.th/assets/upload/2021/8/17//d87cffda-db4c-46a0-93a6-bde26f866c38.jpg"
        class="imgBow_Place_central_04"
      />
    <div class="container_text_Place_central_04">
      <h5 class="display-5"><strong>อุโมงค์สามมิติ</strong></h5>
      <p class="h5">
        อุโมงค์แห่งนี้ เป็นเหมืองแร่เก่า มีความยาว 2,300 เมตร เป็นพื้นที่ท่องเที่ยวโดยชุมชน
        แหล่งเรียนรู้ทางธรณีวิทยา และระบบนิเวศ บริเวณรอบๆ เหมืองปกคลุมด้วยผืนป่าสีเขียว
        พบเห็นพืชสมุนไพรเทียนตาตั๊กแตนเป็นหย่อมๆ
        ส่วนภายในอุโมงค์เริ่มมีหินงอกหินย้อยเปล่งประกายระยิบระยับ ธารน้ำน้อยๆ ไหลสู่น้ำตกผาแดง
        ยังคงมีหลักฐานจากอดีตเป็นเครื่องจักร
      </p>
    </div>
  </div>

  <!--box รูปขวา-->
  <div class="RPage_Place_central_04">
    <div class="container_text_Place_central_04">
      <p class="h5">
        ท่อลมขนาดใหญ่ให้พบเห็น
        ส่วนไฮไลต์อยู่ที่ประสบการณ์ลอดอุโมงค์ภายใต้ความมืดแต่กลับมีอากาศเย็นสบาย
        เมื่อมีแสงไฟสาดส่องไปยังไอหมอกที่ปกคลุมบริเวณปากอุโมงค์
        จะดูคล้ายกับประตูกาลเวลาราวกับฉากในภาพยนตร์ และเมื่อได้ผ่านทะลุออกไป
        จะให้ความรู้สึกราวกับว่าได้ทะลุผ่านจากมิติหนึ่งไปสู่อีกมิติ จึงเป็นที่มาของชื่อ
        “อุโมงค์สามมิติ” ที่ผู้คนต่างเรียกขาน
      </p>
      <a class="btn_cart_Place_central_04" href="https://travel.trueid.net/detail/kW22p6w5JexW"
        >อ่านเพิ่มเติม...</a
      >
    </div>
    <img
      src="https://www.unseennewchapters.com/img/kanchanaburi-02.71da4740.jpg"
      class="imgBow_Place_central_04"
      alt="..."
    />
  </div>

  <!-- สิ่งของแนะนำขาย -->
  <h1 class="textcenter_Place_central_04"><strong>อุปกรณ์ที่ควรเอาไป</strong></h1>
  <hr />

  <div class="recomen_Place_central_04">
    <div
      class="re_conten_Place_central_04"
      style="max-width: 1500px"
      v-for="(i, index) in item_advice_central_03_all"
      :key="index"
    >
      <div class="card">
        <img :src="i.img" class="img-fluid rounded-start" alt="..." />
      </div>
      <div class="re_text">
        <h5 class="card-title">{{ i.name }}</h5>
        <p class="card-text">{{ i.category }}</p>
      </div>
    </div>
  </div>
</div>
</template>
<style scoped>
.textcenter_Place_central_04 {
  text-align: center;
  margin-inline: 430px;
  border-bottom: 2px solid;
}
.btn_cart_Place_central_04 {
  padding: 5px;
  color: white;
  text-decoration: none;
  background-color: black;
  border-radius: 5px;
}
.btn_cart_Place_central_04:hover {
  padding: 8px;
  color: white;
  text-decoration: none;
  background-color: rgb(4, 60, 203);
  border-radius: 5px;
}
.LPage_Place_central_04 {
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
.RPage_Place_central_04 {
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
.imgBow_Place_central_04 {
  max-width: 880px;
  margin: 10px;
}
.container_text_Place_central_04 {
  padding: 5px;
}
.textConten {
  padding: 20px;
  width: 500px;
}
.recomen_Place_central_04 {
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
.re_conten_Place_central_04 {
  display: grid;
  grid-template-columns: 200px auto;
  column-gap: 10px;
  justify-items: stretch;
  align-items: center;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 5px;
}
</style>
<script setup>
import Header_box_central from '../central/Box_menu_central.vue'

import { ref } from 'vue'
import { item_advice_central_03Store } from '../central/index_central'

const item_advice_central_03 = item_advice_central_03Store()
const item_advice_central_03_all = ref(item_advice_central_03.item_advice_central_list_03)
</script>
