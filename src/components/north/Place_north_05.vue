<script setup>
import Header_box_north from '../north/Box_menu_north.vue'

import { ref } from 'vue'
import { item_advice_north_05Store } from '../north/index_north'

const item_advice_north_05 = item_advice_north_05Store()
const item_advice_north_05_all = ref(item_advice_north_05.item_advice_north_list_05)
</script>
<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk4-3.fna.fbcdn.net/v/t1.15752-9/387617313_715523600594829_173210498840244655_n.png?_nc_cat=100&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeF4Z6tkTav_KVlF_q1hR5GUnVC6-HWH3PSdULr4dYfc9H_WYyCQcBYSLeiBVtNHn-Dm4AgZA-RozbArF6xnAjbZ&_nc_ohc=hK31c2-82W8AX_ubKbg&_nc_ht=scontent.fbkk4-3.fna&_nc_e2o=f&oh=03_AdREynRTiOxTi9rRDmvgh9Dc7tq5Tg8UV3kxlYMSzdn_Ow&oe=65532A63"
          class="d-block w-100"
          style="filter: brightness(75%); max-height: 500px"
        />
      </div>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="display-3">เขื่อนแม่งัด อุทยานแห่งชาติศรีลานนา</h5>
        <p>อุทยานแห่งชาติที่ควรมาเยือนซักครั้ง</p>
      </div>
    </div>
  </div>
  <!-- แถบ menu -->
  <Header_box_north></Header_box_north>

  <!-- แถบ เนื้อหา -->
  <!-- box รูปซ้าย -->
  <div class="container-n5">
    <div class="LPage-n5">
      <img
        src="https://i.pinimg.com/564x/e5/98/6e/e5986ead821600e86c01eac7079d1bf6.jpg"
        class="imgBow"
      />
      <div style="margin-block: 10px">
        <h2 class="card-title">เขื่อนแม่งัด อุทยานแห่งชาติศรีลานนา</h2>
        <p class="textConten-n5">
          เขื่อนแม่งัด ตั้งอยู่ในเขตอุทยานแห่งชาติศรีลานนา จังหวัดเชียงใหม่ และอยู่ไม่ไกลจาก
          วัดบ้านเด่น มากนัก ซึ่งวิวทิวทัศน์ของเขื่อนล้อมรอบไปด้วยภูเขาที่เขียวขจี
        </p>
        <a href="https://travel.trueid.net/detail/kW22p6w5JexW" class="btn_cart-n5">อ้างอิงมาจาก</a>
      </div>
    </div>
    <!--box รูปขวา-->
    <div class="RPage-n5">
      <div class="container_text-n5">
        <p class="textConten-n5">
          ความสำคัญของเขื่อนแม่งัด คือ
          การทำหน้าที่ส่งน้ำหล่อเลี้ยงพื้นที่เพาะปลูกในที่ราบเชิงเขาทั้งสองฝั่งของลำน้ำแม่งัด
          อีกทั้งยังช่วยบรรเทาอุทกภัยในเขตลุ่มน้ำปิง โดยเฉพาะบรรเทาน้ำหลากเข้าท่วมตัวเมืองเชียงใหม่
          รวมทั้งยังเป็นแหล่งเพาะพันธุ์สัตว์น้ำ
          นอกจากเป็นเขื่อนที่ใช้เพื่อประโยชน์ในด้านการชลประทานแล้ว ด้วยวิวของเขื่อนที่งดงาม
          รายล้อมด้วยภูเขาเขียวขจี เขื่อนแม่งัดจึงกลายเป็นสถานที่ท่องเที่ยวพักผ่อนหย่อนใจยอดฮิต
          อีกแห่งหนึ่งที่เหมาะสำหรับคนรักธรรมชาติ และต้องการพักผ่อนแบบสงบ ท่ามกลางสายน้ำ
        </p>
      </div>
      <img
        src="https://www.chillpainai.com/src/wewakeup/scoop/img_scoop/scoop/kang/travel2/5meangud/mtf.jpg"
        class="imgBow"
      />
    </div>

    <!-- สิ่งของแนะนำขาย -->
    <h1 style="text-align: center">สิ่งที่ควรเตรียมไป</h1>
    <div class="recomen-n5">
      <div class="re_conten-n5" v-for="(i, index) in item_advice_north_05_all" :key="index">
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
  .container-n5 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: center;
  }
  .imgTitle {
    max-width: 100%;
    background-position: left bottom;
    background-size: cover;
    padding-top: 200px;
    padding-bottom: 100px;
    background-image: url(https://i.pinimg.com/564x/a4/11/bf/a411bfbf71e49fc1a525fccf0bbc0d40.jpg);
  }
  .btn_cart-n5 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart-n5:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage-n5 {
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
  .RPage-n5 {
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
  .textConten-n5 {
    padding: 20px;
    width: 500px;
  }
  .recomen-n5 {
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
  .re_conten-n5 {
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
  .container-n5 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }
  .imgTitle {
    max-width: 100%;
    background-position: left bottom;
    background-size: cover;
    padding-top: 200px;
    padding-bottom: 100px;
    background-image: url(https://i.pinimg.com/564x/a4/11/bf/a411bfbf71e49fc1a525fccf0bbc0d40.jpg);
  }
  .btn_cart-n5 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart-n5:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage-n5 {
    display: grid;
    grid-template-columns: 300px auto;
    column-gap: 10px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .RPage-n5 {
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
  .textConten-n5 {
    padding: 10px;
    height: 100px;
    width: 400px;
    overflow: auto;
  }
  .recomen-n5 {
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
  .re_conten-n5 {
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
  .container-n5 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }
  .imgTitle {
    max-width: 100%;
    background-position: left bottom;
    background-size: cover;
    padding-top: 200px;
    padding-bottom: 100px;
    background-image: url(https://i.pinimg.com/564x/a4/11/bf/a411bfbf71e49fc1a525fccf0bbc0d40.jpg);
  }
  .btn_cart-n5 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart-n5:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage-n5 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    border-bottom: 2px solid;
    margin-block: 5px;
    max-width: 300px;
  }
  .RPage-n5 {
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
  .textConten-n5 {
    padding: 10px;
    height: 150px;
    width: 300px;
    overflow: auto;
  }
  .recomen-n5 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    align-items: stretch;
    row-gap: 2px;
    column-gap: 2px;
    margin-block: 10px;
    max-width: 600px;
  }
  .re_conten-n5 {
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
