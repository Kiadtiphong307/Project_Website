<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-8.fna.fbcdn.net/v/t1.15752-9/370295290_1483753312421483_4888976312918379260_n.png?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHTDKh_JI2S8V3G61IhgEpBH0Ob3q-17X4fQ5ver7XtfjBrCZpVYRLf2lzqkW9uSN9WsIslg8tHWBhu2YLdsW65&_nc_ohc=BCEMYrRXpp4AX8iMezl&_nc_ht=scontent.fbkk29-8.fna&oh=03_AdRc7TlJLYNLaT14wdNm50mNltKoE_8ByldUKSH33vyhJQ&oe=65508B09"
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
        <h5 class="display-3">ภูผาแรด</h5>
        <p class="h4">ภูผาแรด อ.เมืองราชบุรี จ.ราชบุรี</p>
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_central></Header_box_central>

  <!-- แถบ เนื้อหา -->

  <!-- box รูปซ้าย -->
  <div class="container">
    <div class="LPage_Place_central_03">
      <img
        src="https://scontent.fbkk29-8.fna.fbcdn.net/v/t1.15752-9/385409257_1047851006235729_7602243840478672545_n.png?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFGDv-LL7FROGueo6YDqPJHQxP4MRDxKLVDE_gxEPEotcKCz8qjhNekd_xXFwRWafrO8PtT-s_L6vSdmw2b3Br7&_nc_ohc=yJ44E0I9fi8AX8ZXRzg&_nc_ht=scontent.fbkk29-8.fna&oh=03_AdTgAOfyp8QcsGazCv3YXCzNcKVSq87Sc7EYMLernlbaig&oe=6550B572"
        class="imgBow_Place_central_03"
      />
    <div class="container_text_Place_central_03">
      <h5 class="display-5"><strong>ภูผาแรด</strong></h5>
      <p class="h5">
        บริเวณนี้เคยเป็นแหล่งสัมปทานระเบิดหินภายในอุทยานหินเขางู ถูกซ่อนไว้กลางหุบเขามานานหลายปี
        ลักษณะเป็นผาสูงชันที่มีร่องรอยเว้าแหว่งของหินจากแรงระเบิด เผยให้เห็นความสวยงามของลวดลาย
        และสีสันของหน้าผาหินแกรนิต ซึ่งเป็นหินที่ถูกเปรียบเปรยว่า แข็งแกร่งดั่ง “แรด”
        จึงเป็นที่มาของชื่อ “ภูผาแรด” เสน่ห์ของมุมลับแห่งนี้ อยู่ที่ความสวยงามในแต่ละช่วงเวลาของวัน
      </p>
    </div>
  </div>

  <!--box รูปขวา-->
  <div class="RPage_Place_central_03">
    <div class="container_text_Place_central_03">
      <p class="h5">
        ซึ่งขึ้นอยู่กับทิศทางของแสงแดดที่ส่องลงบริเวณหน้าผาแต่ละฝั่ง
        และให้จับตาวินาทีที่น้ำนิ่งจนเกิดภาพเงาสะท้อนคล้ายภาพ Abstract บนผิวน้ำ
        ถือเป็นงานอาร์ตที่ธรรมชาติรังสรรค์ เป็นความมหัศจรรย์บทใหม่ของเมืองราชบุรี
        สามารถเดินทางท่องเที่ยวได้ตลอดทั้งปี ตั้งแต่เวลา 08.00 - 17.00.น
      </p>
      <a class="btn_cart_Place_central_03" href="https://travel.trueid.net/detail/kW22p6w5JexW"
        >อ่านเพิ่มเติม...</a>
    </div>
      <img
        src="https://www.mcot.net/uploads/article/202308/0ddd2668b0a007355ae6e24290eab631.jpg"
        class="imgBow_Place_central_03"
      />
    </div>

    <!-- สิ่งของแนะนำขาย -->
    <!-- สิ่งของแนะนำขาย -->
    <h1 class="textcenter_Place_central_03"><strong>อุปกรณ์ที่ควรเอาไป</strong></h1>
    <hr />
    <div class="recomen_Place_central_03">
      <div
        class="re_conten_Place_central_03"
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
.textcenter_Place_central_03 {
  text-align: center;
  margin-inline: 430px;
  border-bottom: 2px solid;
}
.btn_cart_Place_central_03 {
  padding: 5px;
  color: white;
  text-decoration: none;
  background-color: black;
  border-radius: 5px;
}
.btn_cart_Place_central_03:hover {
  padding: 8px;
  color: white;
  text-decoration: none;
  background-color: rgb(4, 60, 203);
  border-radius: 5px;
}
.LPage_Place_central_03 {
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
.RPage_Place_central_03 {
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
.imgBow_Place_central_03 {
  max-width: 880px;
  margin: 10px;
}
.container_text_Place_central_03 {
  padding: 5px;
}
.textConten {
  padding: 20px;
  width: 500px;
}
.recomen_Place_central_03 {
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
.re_conten_Place_central_03 {
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
import { item_advice_central_02Store } from '../central/index_central'

const item_advice_central_02 = item_advice_central_02Store()
const item_advice_central_02_all = ref(item_advice_central_02.item_advice_central_list_02)
</script>
