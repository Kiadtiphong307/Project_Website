<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-8.fna.fbcdn.net/v/t1.15752-9/387519680_874205577375019_4751885481233347889_n.png?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeH_nSXd_vYX9cdMrEi2XSK48kDu0gK9P73yQO7SAr0_vW9PdnnUxU7cPHRhYCpxfaYOQaO27DkPUNDyVaDhldnn&_nc_ohc=whj_SFVPOOkAX_t7bC8&_nc_ht=scontent.fbkk29-8.fna&oh=03_AdSTlgyqZn1KBFpBFpIoevRPXaDf2bBcfyFNp14dNUptVQ&oe=6550915C"
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
      <h5 class="display-3">หอมนสิการ</h5>
      <p class="h4">หอมนสิการ อ.แก่งคอย จ.สระบุรี</p>
    </div>
  </div>
</div>

  <!-- แถบ menu -->
  <Header_box_central></Header_box_central>

  <!-- แถบ เนื้อหา -->

  <!-- box รูปซ้าย -->
  <div class="container">
    <div class="LPage_Place_central_01">
      <img src="https://mpics.mgronline.com/pics/Images/565000009180205.JPEG" 
      class="imgBow_Place_central_01" />
      <div class="container_text_Place_central_01">
        <h5 class="display-5"><strong>หอมนสิการ</strong></h5>
        <p class="h5">
          สถานที่ท่องเที่ยวเชิงวัฒนธรรมรูปแบบใหม่ สร้างขึ้นจากศรัทธา และแรงบันดาลที่มีต่อพุทธศาสนา
          ภายในตัวอาคารสีขาวบริสุทธิ์ที่ซ่อนตัวอยู่กลางหุบเขา ประกอบด้วยกิจกรรมที่หลากหลาย อาทิ
          สักการะพระบรมสารีริกธาตุ 18 พระองค์, ชมภาพปักพระบรมโลกนาถ,
          สัมผัสความงามของหอจัตุรัสอันศักดิ์สิทธิ์
        </p>
      </div>
    </div>

    <!--box รูปขวา-->
    <div class="RPage_Place_central_01">
      <div class="container_text_Place_central_01">
        <p class="h5">
          ยังมีโซนนิทรรศการร่วมสมัยที่บอกเล่าความเป็นมาเป็นไปของพระพุทธเจ้า
          รวมถึงห้องจัดแสดงงานอาร์ตประเภทต่างๆ ที่แฝงไว้ด้วยปริศนาธรรม
          ส่วนผู้ที่มาก็จะได้ซึมซับหลักธรรมแบบครบรส ทั้งตาดู หูฟัง สมองคิด และกายปฏิบัติ
          ถือเป็นธรรมะคอมมูนิตี้แบบครบวงจรอย่างแท้จริง
        </p>
      <a class="btn_cart_Place_central_01" href="https://travel.trueid.net/detail/kW22p6w5JexW"
        >อ่านเพิ่มเติม...</a>
      </div>
      <img
        src="https://scontent.fbkk29-1.fna.fbcdn.net/v/t1.15752-9/387479109_349880420813615_1367376856580042845_n.png?_nc_cat=100&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFJO9Nj88otN1Md46I2ttwnh2G74-w6K5eHYbvj7Dorl_7n2wPONhgaPDcNlEL-9PnHllcqrlsflrGbblZXaizy&_nc_ohc=JdeJtL1S0g8AX9cXd4A&_nc_ht=scontent.fbkk29-1.fna&oh=03_AdSQjP1P7l5jSgbN2g_EaHzvX5YnmSJyjPNkr9rObLhtcg&oe=65507585"
        class="imgBow_Place_central_01"
      />
    </div>

    <!-- สิ่งของแนะนำขาย -->
    <h1 class="textcenter_Place_central_01"><strong>อุปกรณ์ที่ควรเอาไป</strong></h1>
    <hr />

    <div class="recomen_Place_central_01">
      <div
        class="re_conten_Place_central_01"
        style="max-width: 1500px"
        v-for="(i, index) in item_advice_central_01_all"
        :key="index"
      >
        <div>
          <div class="card">
            <img :src="i.img" class="img-fluid rounded-start" alt="..." />
          </div>
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
.textcenter_Place_central_01 {
  text-align: center;
  margin-inline: 430px;
  border-bottom: 2px solid;
}
.btn_cart_Place_central_01 {
  padding: 5px;
  color: white;
  text-decoration: none;
  background-color: black;
  border-radius: 5px;
}
.btn_cart_Place_central_01:hover {
  padding: 8px;
  color: white;
  text-decoration: none;
  background-color: rgb(4, 60, 203);
  border-radius: 5px;
}
.LPage_Place_central_01 {
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
.RPage_Place_central_01 {
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
.imgBow_Place_central_01 {
  max-width: 880px;
  margin: 10px;
}
.container_text_Place_central_01 {
  padding: 5px;
}
.textConten_Place_central_01 {
  padding: 20px;
  width: 500px;
}
.recomen_Place_central_01 {
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
.re_conten_Place_central_01 {
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
import { item_advice_central_01Store } from '../central/index_central'

const item_advice_central_01 = item_advice_central_01Store()
const item_advice_central_01_all = ref(item_advice_central_01.item_advice_central_list_01)
</script>
