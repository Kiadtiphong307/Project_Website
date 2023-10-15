<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-8.fna.fbcdn.net/v/t1.15752-9/387519680_874205577375019_4751885481233347889_n.png?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeH_nSXd_vYX9cdMrEi2XSK48kDu0gK9P73yQO7SAr0_vW9PdnnUxU7cPHRhYCpxfaYOQaO27DkPUNDyVaDhldnn&_nc_ohc=whj_SFVPOOkAX_t7bC8&_nc_ht=scontent.fbkk29-8.fna&oh=03_AdSTlgyqZn1KBFpBFpIoevRPXaDf2bBcfyFNp14dNUptVQ&oe=6550915C"
          class="d-block w-100"
          style="filter: brightness(75%)"
          maxheight="500px"
        />
      </div>
      <div class="carousel-caption d-none d-md-block" style="padding-bottom: 9rem">
      <h5 class="display-3">หอมนสิการ</h5>
      <p class="h4">หอมนสิการ อ.แก่งคอย จ.สระบุรี</p>
    </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_central></Header_box_central>

  <!-- แถบ เนื้อหา -->

  <!-- box รูปซ้าย -->
  <div class="container_c1">
    <div class="LPage_c1">
          <img
            src="https://mpics.mgronline.com/pics/Images/565000009180205.JPEG"
            class="imgBow_c1"
            alt="..."
          />
        <div style="margin-block: 10px;">
        <h2 class="card-title"><strong>หอมนสิการ</strong></h2>
            <p class="textConten_c1">
              สถานที่ท่องเที่ยวเชิงวัฒนธรรมรูปแบบใหม่ สร้างขึ้นจากศรัทธา
              และแรงบันดาลที่มีต่อพุทธศาสนา ภายในตัวอาคารสีขาวบริสุทธิ์ที่ซ่อนตัวอยู่กลางหุบเขา
              ประกอบด้วยกิจกรรมที่หลากหลาย อาทิ สักการะพระบรมสารีริกธาตุ 18 พระองค์,
              ชมภาพปักพระบรมโลกนาถ, สัมผัสความงามของหอจัตุรัสอันศักดิ์สิทธิ์
            </p>
          </div>
        </div>
    <!--box รูปขวา-->
    <div class="RPage_c1">
      <div>
        <p class="textConten_c1">
              ยังมีโซนนิทรรศการร่วมสมัยที่บอกเล่าความเป็นมาเป็นไปของพระพุทธเจ้า
              รวมถึงห้องจัดแสดงงานอาร์ตประเภทต่างๆ ที่แฝงไว้ด้วยปริศนาธรรม
              ส่วนผู้ที่มาก็จะได้ซึมซับหลักธรรมแบบครบรส ทั้งตาดู หูฟัง สมองคิด และกายปฏิบัติ
              ถือเป็นธรรมะคอมมูนิตี้แบบครบวงจรอย่างแท้จริง
            </p>
            <a class="btn_cart_c1" href="https://www.thairath.co.th/lifestyle/travel/thaitravel/2705387?gallery_id=1"
        >อ่านเพิ่มเติม...</a
      >
          </div>
          <img
            src="https://mpics.mgronline.com/pics/Images/565000009180206.JPEG"
            class="imgBow_c1"
            alt="..."
          />
        </div>
 

    <!-- สิ่งของแนะนำขาย -->
    <h1 style="text-align: center"><strong>สิ่งที่ควรเตรียมไป</strong></h1>
    <hr />

    <div class="recomen_c1">
      <div class="re_conten_c1"
        style="max-width: 1500px"
        v-for="(i, index) in item_advice_central_01_all"
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
  .container_c1 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: center;
  }
  .btn_cart_c1 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart_c1:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage_c1 {
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
  .RPage_c1 {
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
  .imgBow_c1 {
    max-width: 880px;
    margin: 10px;
  }
  .recomen_c1 {
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
  .re_conten_c1 {
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
  .container_c1 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }

  .btn_cart_c1 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart_c1:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage_c1 {
    display: grid;
    grid-template-columns: 300px auto;
    column-gap: 10px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .RPage_c1 {
    display: grid;
    grid-template-columns: auto 300px;
    column-gap: 1px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .imgBow_c1 {
   max-height: 200px;
    margin: 10px;
  }
  .textConten_c1 {
    padding: 20px;
    height: 100px;
    width: 400px;
    overflow: auto;
  }
  .recomen_c1 {
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
  .re_conten_c1 {
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
  .container_c1 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }
  .btn_cart_c1 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart_c1:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage_c1 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    border-bottom: 2px solid;
    margin-block: 5px;
    max-width: 300px;
  }
  .RPage_c1 {
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
  .imgBow_c1 {
  max-height: 180px;
    margin: 10px;
  }
  .textConten_c1 {
    padding: 20px;
    height: 150px;
    width: 300px;
    overflow: auto;
  }
  .recomen_c1 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    align-items: stretch;
    row-gap: 2px;
    column-gap: 2px;
    margin-block: 10px;
    max-width: 600px;
  }
  .re_conten_c1 {
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
import { item_advice_central_01Store } from '../central/index_central'

const item_advice_central_01 = item_advice_central_01Store()
const item_advice_central_01_all = ref(item_advice_central_01.item_advice_central_list_01)
</script>
