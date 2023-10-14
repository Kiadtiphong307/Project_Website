<script setup>
import Header_box_north_east from '../north_east/Box_menu_north_east.vue'

import { ref } from 'vue'
import { item_advice_north_east_01Store } from '../north_east/index_north_east'

const item_advice_north_east_01 = item_advice_north_east_01Store()
const item_advice_north_east_01_all = ref(item_advice_north_east_01.item_advice_north_east_list_01)
</script>
<template>
  <!-- แถบ ภาพ  -->
<<<<<<< HEAD
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-7.fna.fbcdn.net/v/t1.15752-9/370072521_1767159360395157_5641868215004618720_n.png?_nc_cat=106&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFxu8gF-PmVJ56BB9tnszcQr4sriUP5-AaviyuJQ_n4BgP5DbLjclziutwiuosi_eyWlSv1MswSCmWGJgeeAT-S&_nc_ohc=GhnVm_X5joMAX_C38Fb&_nc_ht=scontent.fbkk29-7.fna&oh=03_AdRDmaa1zggs7Z-27gyuLQDMBso82D3kmuIZ-_Av_m4M8Q&oe=65519DDA"
          class="d-block w-100"
          style="filter: brightness(75%)"
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
        <h5 class="display-3">วัดพุทธวนาราม</h5>
        <p class="h4">วัดพุทธวนาราม (วัดป่าวังน้ำเย็น) อ.เมือง จ.มหาสารคาม</p>
      </div>
=======
  <div class="imgTitle">
    <div class="textTitle">
      <h5>วัดพุทธวนาราม</h5>
      <p>วัดพุทธวนาราม (วัดป่าวังน้ำเย็น) อ.เมือง จ.มหาสารคาม</p>
>>>>>>> 32499d83f8092f54d95143793e6d1c214b14840a
    </div>
  </div>
  <!-- แถบ menu -->
  <Header_box_north_east></Header_box_north_east>
  <!-- แถบ เนื้อหา -->
  <!-- box รูปซ้าย -->
  <div class="container">
    <div class="LPage_Place_north_east_05">
      <img
        src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.6435-9/120636979_3677002152310477_3875167207650464581_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHlXXXfwrYiSIG2aA1x01crcV1FbFsNFrhxXUVsWw0WuE0XbUKRbLuFqp3VCNlfvyQAgVO1etTfc-nZWNyrAw39&_nc_ohc=WRSOAShYjKoAX9RHYzD&_nc_ht=scontent.fbkk13-2.fna&oh=00_AfBKjoE3PEEKPrMz9hhXSnDqMOQeefQzpAycLvVgB4gULg&oe=6543C296"
        class="imgBow_Place_north_east_05"
      />
      <div class="container_text_Place_north_east_05">
        <h2 class="display-5">วัดพุทธวนาราม</h2>
        <p class="h5">
          พระอุโบสถ ที่สร้างจากไม้ตะเคียนที่ใหญ่ที่สุดในโลก โดยเสาไม้ตะเคียนทองขนาดใหญ่
          ใช้เสาไม้ตะเคียนทองมากถึง 32 ต้น ขนาด 4 คนโอบ พระอุโบสถหลังนี้มีความสูงกว่า 20 เมตร
        </p>
      </div>
    </div>
    <!--box รูปขวา-->
    <div class="RPage_Place_north_east_05">
      <div class="container_text_Place_north_east_05">
        <p class="h5">
          เมตร ภายในมีองค์พระประธานปางนาคปรกแกะสลักจากไม้สักทองทั้งองค์
          ปัจจุบันวัดแห่งนี้นอกจากเป็นที่ศรัทธาของพุทธศาสนิกชน
          ยังมีชื่อเสียงมากขึ้นด้านการท่องเที่ยว
          กลายเป็นจุดหมายห้ามพลาดของจังหวัดที่นักท่องเที่ยวทั่วไปสามารถแวะเวียนเยี่ยมชมสักการะสิ่งศักดิ์สิทธิ์ได้
        </p>
        <a href="https://travel.trueid.net/detail/kW22p6w5JexW" class="btn_cart_Place_north_east_05">อ่านเพิ่มเติม...</a>
      </div>
      <img
        src="https://www.mahatsachan.com/wp-content/uploads/2021/01/106100847_1032410543841895_7475103690081161300_o-1024x683.jpg"
        class="imgBow_Place_north_east_05"
      />
    </div>

    <!-- สิ่งของแนะนำขาย -->
    <h1 class="textcenter_Place_north_east_05"><strong>อุปกรณ์ที่ควรเอาไป</strong></h1>
    <div class="recomen_Place_north_east_05">
      <div class="re_conten_Place_north_east_05" v-for="(i, index) in item_advice_north_east_01_all" :key="index">
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
.btn_cart_Place_north_east_05 {
  padding: 5px;
  color: white;
  text-decoration: none;
  background-color: black;
  border-radius: 5px;
}
.btn_cart_Place_north_east_05:hover {
  padding: 8px;
  color: white;
  text-decoration: none;
  background-color: rgb(4, 60, 203);
  border-radius: 5px;
}
.LPage_Place_north_east_05 {
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
.RPage_Place_north_east_05 {
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
.imgBow_Place_north_east_05 {
  max-width: 880px;
  margin: 10px;
}
.container {
  padding: 5px;
}
.recomen_Place_north_east_05 {
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
.re_conten_Place_north_east_05 {
  display: grid;
  grid-template-columns: 200px auto;
  column-gap: 10px;
  justify-items: stretch;
  align-items: center;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 5px;
}
.textcenter_Place_north_east_05 {
  text-align: center;
  margin-inline: 430px;
  border-bottom: 2px solid;
}
</style>
