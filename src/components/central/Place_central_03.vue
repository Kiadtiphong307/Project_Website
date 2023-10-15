<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-8.fna.fbcdn.net/v/t1.15752-9/370295290_1483753312421483_4888976312918379260_n.png?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHTDKh_JI2S8V3G61IhgEpBH0Ob3q-17X4fQ5ver7XtfjBrCZpVYRLf2lzqkW9uSN9WsIslg8tHWBhu2YLdsW65&_nc_ohc=BCEMYrRXpp4AX_j_bc1&_nc_ht=scontent.fbkk29-8.fna&oh=03_AdT3T5V8XF_ujZcKsewqJxmeK57vSxhteQfk5m2_jiBHcQ&oe=65524D09"
          class="d-block w-100"
          style="filter: brightness(90%)"
          maxheight="500px"
        />
      </div>
      <div class="carousel-caption d-none d-md-block" style="padding-bottom: 9rem">
        <h5 class="display-3">ภูผาแรด</h5>
        <p class="h4">ภูผาแรด อ.เมืองราชบุรี จ.ราชบุรี</p>
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_central></Header_box_central>

  <!-- แถบ เนื้อหา -->

  <!-- box รูปซ้าย -->
  <div class="container_c3">
    <div class="LPage_c3">
          <img
            src="https://www.mcot.net/uploads/article/202308/6cad4580c8ef76c3a5c9fc80f0028970.jpg"
            class="imgBow_c3"
            alt="..."
          />
        <div style="margin-block: 10px;">
            <h5 class="card-title"><strong>ภูผาแรด</strong></h5>
            <p class="textConten_c3">
              บริเวณนี้เคยเป็นแหล่งสัมปทานระเบิดหินภายในอุทยานหินเขางู
              ถูกซ่อนไว้กลางหุบเขามานานหลายปี
              ลักษณะเป็นผาสูงชันที่มีร่องรอยเว้าแหว่งของหินจากแรงระเบิด
              เผยให้เห็นความสวยงามของลวดลาย และสีสันของหน้าผาหินแกรนิต
              ซึ่งเป็นหินที่ถูกเปรียบเปรยว่า แข็งแกร่งดั่ง “แรด” จึงเป็นที่มาของชื่อ “ภูผาแรด”
              เสน่ห์ของมุมลับแห่งนี้ อยู่ที่ความสวยงามในแต่ละช่วงเวลาของวัน
            </p>
          </div>
        </div>
    <!--box รูปขวา-->
    <div class="RPage_c3">
      <div>
        <p class="textConten_c3">
              ซึ่งขึ้นอยู่กับทิศทางของแสงแดดที่ส่องลงบริเวณหน้าผาแต่ละฝั่ง
              และให้จับตาวินาทีที่น้ำนิ่งจนเกิดภาพเงาสะท้อนคล้ายภาพ Abstract บนผิวน้ำ
              ถือเป็นงานอาร์ตที่ธรรมชาติรังสรรค์ เป็นความมหัศจรรย์บทใหม่ของเมืองราชบุรี
              สามารถเดินทางท่องเที่ยวได้ตลอดทั้งปี ตั้งแต่เวลา 08.00 - 17.00 น
            </p>
            <a class="btn_cart_c3" href="https://www.thairath.co.th/lifestyle/travel/thaitravel/2705387?gallery_id=1"
        >อ่านเพิ่มเติม</a>
          </div>
          <img
            src="https://www.mcot.net/uploads/article/202308/0ddd2668b0a007355ae6e24290eab631.jpg"
            class="imgBow_c3"
            alt="..."
          />
        </div>

    <!-- สิ่งของแนะนำขาย -->
    <!-- สิ่งของแนะนำขาย -->
    <h1 style="text-align: center"><strong>สิ่งที่ควรเตรียมไป</strong></h1>
    <hr />

    <div class="recomen_c3">
      <div class="re_conten_c3"
        style="max-width: 1500px"
        v-for="(i, index) in item_advice_central_02_all"
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
  .container_c3 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: center;
  }
  .btn_cart_c3 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart_c3:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage_c3 {
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
  .RPage_c3 {
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
  .imgBow_c3 {
    max-width: 880px;
    margin: 10px;
  }
  .recomen_c3 {
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
  .re_conten_c3 {
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
  .container_c3 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }

  .btn_cart_c3 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart_c3:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage_c3 {
    display: grid;
    grid-template-columns: 300px auto;
    column-gap: 10px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .RPage_c3 {
    display: grid;
    grid-template-columns: auto 300px;
    column-gap: 1px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .imgBow_c3 {
   max-height: 200px;
    margin: 10px;
  }
  .textConten_c3 {
    padding: 20px;
    height: 100px;
    width: 400px;
    overflow: auto;
  }
  .recomen_c3 {
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
  .re_conten_c3 {
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
  .container_c3 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }
  .btn_cart_c3 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart_c3:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage_c3 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    border-bottom: 2px solid;
    margin-block: 5px;
    max-width: 300px;
  }
  .RPage_c3 {
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
  .imgBow_c3 {
  max-height: 180px;
    margin: 10px;
  }
  .textConten_c3 {
    padding: 20px;
    height: 150px;
    width: 300px;
    overflow: auto;
  }
  .recomen_c3 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    align-items: stretch;
    row-gap: 2px;
    column-gap: 2px;
    margin-block: 10px;
    max-width: 600px;
  }
  .re_conten_c3 {
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
import { item_advice_central_02Store } from '../central/index_central'

const item_advice_central_02 = item_advice_central_02Store()
const item_advice_central_02_all = ref(item_advice_central_02.item_advice_central_list_02)
</script>
