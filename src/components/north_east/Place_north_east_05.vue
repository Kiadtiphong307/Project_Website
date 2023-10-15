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
          src="https://scontent.fbkk3-6.fna.fbcdn.net/v/t1.15752-9/370072521_1767159360395157_5641868215004618720_n.png?_nc_cat=106&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFwonasx3nPmRClq228ls_Gr4sriUP5-AaviyuJQ_n4BvMCx67qubQETSszeKvCrjkD_ygx1F5jBNqFzE9s33Rc&_nc_ohc=GhnVm_X5joMAX_UX_8e&_nc_ht=scontent.fbkk3-6.fna&_nc_e2o=f&oh=03_AdS5rKy0xz7bTGz05mLZ_Rub85qRuROFuLqULXBY98GOhw&oe=65535FDA"
          class="d-block w-100"
          style="filter: brightness(75%);max-height: 500px;"
        />
      </div>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="display-3">วัดพุทธวนาราม</h5>
        <p>วัดพุทธวนาราม (วัดป่าวังน้ำเย็น) อ.เมือง จ.มหาสารคาม</p>
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_north_east></Header_box_north_east>
  <!-- แถบ เนื้อหา -->
  <!-- box รูปซ้าย -->
  <div class="container-ne5">
    <div class="LPage-ne5">
      <img
        src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.6435-9/120636979_3677002152310477_3875167207650464581_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHlXXXfwrYiSIG2aA1x01crcV1FbFsNFrhxXUVsWw0WuE0XbUKRbLuFqp3VCNlfvyQAgVO1etTfc-nZWNyrAw39&_nc_ohc=WRSOAShYjKoAX9RHYzD&_nc_ht=scontent.fbkk13-2.fna&oh=00_AfBKjoE3PEEKPrMz9hhXSnDqMOQeefQzpAycLvVgB4gULg&oe=6543C296"
        class="imgBow"
      />
      <div style="margin-block: 10px;">
        <h2 class="card-title">วัดพุทธวนาราม</h2>
        <p class="textConten-ne5">
          พระอุโบสถ ที่สร้างจากไม้ตะเคียนที่ใหญ่ที่สุดในโลก โดยเสาไม้ตะเคียนทองขนาดใหญ่
          ใช้เสาไม้ตะเคียนทองมากถึง 32 ต้น ขนาด 4 คนโอบ พระอุโบสถหลังนี้มีความสูงกว่า 20 เมตร
        </p>

      </div>
    </div>
    <!--box รูปขวา-->
    <div class="RPage-ne5">
      <div >
        <p class="textConten-ne5">
          เมตร ภายในมีองค์พระประธานปางนาคปรกแกะสลักจากไม้สักทองทั้งองค์
          ปัจจุบันวัดแห่งนี้นอกจากเป็นที่ศรัทธาของพุทธศาสนิกชน
          ยังมีชื่อเสียงมากขึ้นด้านการท่องเที่ยว
          กลายเป็นจุดหมายห้ามพลาดของจังหวัดที่นักท่องเที่ยวทั่วไปสามารถแวะเวียนเยี่ยมชมสักการะสิ่งศักดิ์สิทธิ์ได้
        </p>
        <a href="https://www.thairath.co.th/lifestyle/travel/thaitravel/2707158?fbclid=IwAR3356QAvipXvkzqSUgrqKeF6hIL5rJUPkup_WlOEcK-n3myanYsqNhyAAA" class="btn_cart-ne4">อ่านเพิ่มเติม</a>
      </div>
      <img
        src="https://www.mahatsachan.com/wp-content/uploads/2021/01/106100847_1032410543841895_7475103690081161300_o-1024x683.jpg"
        class="imgBow"
      />
    </div>

    <!-- สิ่งของแนะนำขาย -->
    <h1 style="text-align: center">สิ่งที่ควรเตรียมไป</h1>
    <div class="recomen-ne5">
      <div class="re_conten-ne5" v-for="(i, index) in item_advice_north_east_01_all" :key="index">
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
  .container-ne5 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: center;
  }
  .btn_cart-ne5 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart-ne2:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage-ne5 {
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
  .RPage-ne5 {
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
  .recomen-ne5 {
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
  .re_conten-ne5 {
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
  .container-ne5 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }
  .btn_cart-ne5 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart-ne5:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage-ne5 {
    display: grid;
    grid-template-columns: 300px auto;
    column-gap: 10px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .RPage-ne5 {
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
  .textConten-ne5 {
    padding: 20px;
    height: 100px;
    width: 400px;
    overflow: auto;
  }
  .recomen-ne5 {
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
  .re_conten-ne5 {
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
  .container-ne5 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }
  .btn_cart-ne5 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart-ne5:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage-ne5 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    border-bottom: 2px solid;
    margin-block: 5px;
    max-width: 300px;
  }
  .RPage-ne5 {
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
  .textConten-ne5 {
    padding: 20px;
    height: 200px;
    width: 300px;
    overflow: auto;
  }
  .recomen-ne5 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    align-items: stretch;
    row-gap: 2px;
    column-gap: 2px;
    margin-block: 10px;
    max-width: 600px;
  }
  .re_conten-ne5 {
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
