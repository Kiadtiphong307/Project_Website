<script setup>
import Header_box_north from '../north/Box_menu_north.vue'

import { ref } from 'vue'
import { item_advice_north_05Store } from '../north/index_north'

const item_advice_north_05 = item_advice_north_05Store()
const item_advice_north_05_all = ref(item_advice_north_05.item_advice_north_list_05)
</script>
<template>
  <!-- แถบ ภาพ  -->
  <div class="imgTitle">
    <div class="textTitle">
      <h2>เขื่อนแม่งัด อุทยานแห่งชาติศรีลานนา</h2>
      <p>อุทยานแห่งชาติที่ควรมาเยือนซักครั้ง</p>
    </div>
  </div>
  <!-- แถบ menu -->
  <Header_box_north></Header_box_north>

  <!-- แถบ เนื้อหา -->
  <!-- box รูปซ้าย -->
  <div class="container">
    <div class="LPage">
      <img
        src="https://i.pinimg.com/564x/e5/98/6e/e5986ead821600e86c01eac7079d1bf6.jpg"
        class="imgBow"
      />
      <div class="container_text">
        <h2 class="card-title">เขื่อนแม่งัด อุทยานแห่งชาติศรีลานนา</h2>
        <p class="textConten">
          เขื่อนแม่งัด ตั้งอยู่ในเขตอุทยานแห่งชาติศรีลานนา จังหวัดเชียงใหม่ และอยู่ไม่ไกลจาก
          วัดบ้านเด่น มากนัก ซึ่งวิวทิวทัศน์ของเขื่อนล้อมรอบไปด้วยภูเขาที่เขียวขจี
        </p>
        <a href="https://travel.trueid.net/detail/kW22p6w5JexW" class="btn_cart">อ้างอิงมาจาก</a>
      </div>
    </div>
    <!--box รูปขวา-->
    <div class="RPage">
      <div class="container_text">
        <p class="textConten">
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
    <div class="recomen">
      <div class="re_conten" v-for="(i, index) in item_advice_north_05_all" :key="index">
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
.container {
  margin-block: 20px;
}
.imgTitle {
  max-width: 100%;
  background-position: left bottom;
  background-size: cover;
  padding-top: 200px;
  padding-bottom: 100px;
  background-image: url(https://i.pinimg.com/564x/e5/98/6e/e5986ead821600e86c01eac7079d1bf6.jpg);
}
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
  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.2);
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
.container_text {
  padding: 5px;
}
.textConten {
  padding: 20px;
  width: 500px;
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
  border-radius: 5px;
}
</style>
