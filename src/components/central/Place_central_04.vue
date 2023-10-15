<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-1.fna.fbcdn.net/v/t1.15752-9/370033797_1206844753986192_926853601596424030_n.png?_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeE7QWzMPgAYYzJyfY8fTV-LtkupSgQ1nLC2S6lKBDWcsKQRo_PtSIE7G5tpopo4eqEzhmkLbmD8fYiRWPmq4Tju&_nc_ohc=pIdWwWBQATQAX8m-3B2&_nc_ht=scontent.fbkk29-1.fna&oh=03_AdSGMeU9QZ3MR06PhaeFJLepsbPZ4kMP0izk0D7dvS-AvQ&oe=6552556B"
          class="d-block w-100"
          style="filter: brightness(85%)"
          maxheight="500px"
        />
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
  <div class="container_c4">
    <div class="LPage_c4">
          <img
            src="https://files.thailandtourismdirectory.go.th/assets/upload/2021/8/17//d87cffda-db4c-46a0-93a6-bde26f866c38.jpg"
            class="imgBow_c4"
            alt="..."
          />

        <div style="margin-block: 10px;">
            <h5 class="card-title"><strong>อุโมงค์สามมิติ</strong></h5>
            <p class="textConten_c4">
              อุโมงค์แห่งนี้ เป็นเหมืองแร่เก่า มีความยาว 2,300 เมตร เป็นพื้นที่ท่องเที่ยวโดยชุมชน
              แหล่งเรียนรู้ทางธรณีวิทยา และระบบนิเวศ บริเวณรอบๆ เหมืองปกคลุมด้วยผืนป่าสีเขียว
              พบเห็นพืชสมุนไพรเทียนตาตั๊กแตนเป็นหย่อมๆ
              ส่วนภายในอุโมงค์เริ่มมีหินงอกหินย้อยเปล่งประกายระยิบระยับ ธารน้ำน้อยๆ ไหลสู่น้ำตกผาแดง
              ยังคงมีหลักฐานจากอดีตเป็นเครื่องจักร
            </p>
          </div>
        </div>

    <!--box รูปขวา-->
    <div class="RPage_c4">
      <div>
        <p class="textConten_c4">
              ท่อลมขนาดใหญ่ให้พบเห็น
              ส่วนไฮไลต์อยู่ที่ประสบการณ์ลอดอุโมงค์ภายใต้ความมืดแต่กลับมีอากาศเย็นสบาย
              เมื่อมีแสงไฟสาดส่องไปยังไอหมอกที่ปกคลุมบริเวณปากอุโมงค์
              จะดูคล้ายกับประตูกาลเวลาราวกับฉากในภาพยนตร์ และเมื่อได้ผ่านทะลุออกไป
              จะให้ความรู้สึกราวกับว่าได้ทะลุผ่านจากมิติหนึ่งไปสู่อีกมิติ จึงเป็นที่มาของชื่อ
              “อุโมงค์สามมิติ” ที่ผู้คนต่างเรียกขาน
            </p>
            <a class="btn_cart_c4" href="https://www.thairath.co.th/lifestyle/travel/thaitravel/2705387?gallery_id=1"
        >อ่านเพิ่มเติม</a>
        </div>
          <img
            src="https://www.unseennewchapters.com/img/kanchanaburi-02.71da4740.jpg"
            class="imgBow_c4"
            alt="..."
          />
        </div>

    <!-- สิ่งของแนะนำขาย -->
    <h1 style="text-align: center"><strong>สิ่งที่ควรเตรียมไป</strong></h1>
    <hr />

    <div class="recomen_c4">
      <div class="re_conten_c4"
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
@media (min-width: 1030px) {
  .container_c4 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: center;
  }
  .btn_cart_c4 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart_c4:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage_c4 {
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
  .RPage_c4 {
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
  .imgBow_c4 {
    max-width: 880px;
    margin: 10px;
  }
  .recomen_c4 {
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
  .re_conten_c4 {
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
  .container_c4 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }

  .btn_cart_c4 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart_c4:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage_c4 {
    display: grid;
    grid-template-columns: 300px auto;
    column-gap: 10px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .RPage_c4 {
    display: grid;
    grid-template-columns: auto 300px;
    column-gap: 1px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .imgBow_c4 {
   max-height: 200px;
    margin: 10px;
  }
  .textConten_c4 {
    padding: 20px;
    height: 100px;
    width: 400px;
    overflow: auto;
  }
  .recomen_c4 {
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
  .re_conten_c4 {
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
  .container_c4 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }
  .btn_cart_c4 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart_c4:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage_c4 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    border-bottom: 2px solid;
    margin-block: 5px;
    max-width: 300px;
  }
  .RPage_c4 {
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
  .imgBow_c4 {
  max-height: 200px;
    margin: 10px;
  }
  .textConten_c4 {
    padding: 20px;
    height: 150px;
    width: 300px;
    overflow: auto;
  }
  .recomen_c4 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    align-items: stretch;
    row-gap: 2px;
    column-gap: 2px;
    margin-block: 10px;
    max-width: 600px;
  }
  .re_conten_c4 {
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
<script setup>
import Header_box_central from '../central/Box_menu_central.vue'

import { ref } from 'vue'
import { item_advice_central_03Store } from '../central/index_central'

const item_advice_central_03 = item_advice_central_03Store()
const item_advice_central_03_all = ref(item_advice_central_03.item_advice_central_list_03)
</script>
