<script setup>
import Header_box_north from '../north/Box_menu_north.vue'

import { ref } from 'vue'
import { item_advice_north_02Store } from '../north/index_north'

const item_advice_north_02 = item_advice_north_02Store()
const item_advice_north_02_all = ref(item_advice_north_02.item_advice_north_list_02)
</script>
<template>
  <!-- แถบ ภาพ  -->
  <div class="imgTitle">
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
    <div class="textTitle">
      <h2>สวนสนแม่แตง</h2>
      <p>สถานที่ที่ร่มรื่นเหมาะกับวันพักผ่อน</p>
    </div>
  </div>
  <!-- แถบ menu -->
  <Header_box_north></Header_box_north>
  <!-- แถบ เนื้อหา -->
  <!-- box รูปซ้าย -->
  <div class="container">
    <div class="LPage">
      <img
        src="https://www.paiduaykan.com/travel/wp-content/uploads/2021/12/1-SON00554.jpg"
        class="imgBow"
      />
      <div class="container_text">
        <h5 class="card-title">สวนสนแม่แตง</h5>
        <p class="textConten">
          สวนสนแม่แตง หรือสวนผลิตเมล็ดพันธ์สองใบ
          ตั้งอยู่ในเขตพื้นที่รับผิดชอบของสถานีวนวัฒนาวิจัยอินทรขิล จังหวัดเชียงใหม่
          ซึ่งเป็นสถานีงานวิจัยด้านป่าไม้ บรรยากาศรอบๆ ของสวนสนแห่งนี้ดูร่มรื่นสบายตา
          จึงเหมาะแก่การมาถ่ายภาพ หรือจะมาพักผ่อนหย่อนใจก็ได้ค่ะ
          ภายในจะมีจุดถ่ายภาพให้กับนักท่องเที่ยว บริเวณกว้างขว้างมากๆ เลือกมุมถ่ายภาพได้ตามใจกันเลย
        </p>
        <a href="https://travel.trueid.net/detail/kW22p6w5JexW" class="btn_cart">อ่านเพิ่มเติม</a>
      </div>
    </div>
    <!--box รูปขวา-->
    <div class="RPage">
      <div class="container_text">
        <p class="textConten">
          สวนผลิตเมล็ดพันธ์สนสองใบหรือ สวนสนแม่แตง ตั้งอยู่ติดถนนหมายเลข 107
          เส้นทางแม่แตงมุ่งหน้าสู่อำเภอเชียงดาวและฝา
          เป็นเส้นทางผ่านไปยังสองอำเภอนี้สามารถแวะเที่ยวก่อนไปต่อยังจุดอื่นได้
          ลักษณะเป็นสวนสนคาริเบียน ในเนื้อที่ 27 ไร่
          ซึ่งเป็นงานวิจัยการพัฒนาและฟื้นฟูทดลองปลูกสนคาริเบีย
          ภายในสวนสวยอากาศร่มรื่นเย็นสบายตลอดทั้งวัน
        </p>
      </div>
      <img
        src="https://img.wongnai.com/p/1920x0/2018/09/11/87d33f9b8d34413ba023c77b1f6c3691.jpg"
        class="imgBow"
      />
    </div>
    <!-- สิ่งของแนะนำขาย -->
    <h1 style="text-align: center">สิ่งที่ควรเตรียมไป</h1>
    <div class="recomen">
      <div class="re_conten" v-for="(i, index) in item_advice_north_02_all" :key="index">
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
  background-image: url(https://www.paiduaykan.com/travel/wp-content/uploads/2021/12/2-SON00547.jpg);
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
</style>
