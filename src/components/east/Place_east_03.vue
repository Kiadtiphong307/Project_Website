<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-9.fna.fbcdn.net/v/t1.15752-9/387512583_318542597541347_4731118519752174230_n.png?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFFic1e4b95tBb8ebmGZJjkKRrI8GnCKLgpGsjwacIouB1fckkIAkU4pmqekkwjWQvhShFURaDfvdUMM2c-LRV2&_nc_ohc=khoiyq8T2j8AX8gGI4B&_nc_oc=AQl21nJXnMCLOnhKyoydg3z5uKRl7aVWIgDczU-Pk37eubEDIKpMHk2bmc-JbF9QvoM&_nc_ht=scontent.fbkk29-9.fna&oh=03_AdSj5fX3OUZZAT_3tSyRUVZpAf2C6NyOnodIhtYrt8lrEA&oe=6550F634"
          class="d-block w-100"
          style="filter: brightness(95%)"
          :height="'450'"
        />
      </div>
      <div class="carousel-caption d-none d-md-block" style="padding-bottom: 9rem">
        <h5 class="display-3">วัดหงษ์ทอง</h5>
        <p class="h4">วัดหงษ์ทอง อ.บางปะกง จ.ฉะเชิงเทรา</p>
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_east></Header_box_east>

  <!-- แถบ เนื้อหา -->

  <!-- box รูปซ้าย -->
  <div class="container">
    <div class="LPage_Place_east_03">
      <img
        src="https://tatapi.tourismthailand.org/tatfs/image/CustomPOI/Picture/P03005929_1.jpeg"
        class="imgBow_Place_east_03"
      />
      <div class="container_text_Place_east_03">
        <h5 class="display-5"><strong>วัดหงษ์ทอง</strong></h5>
        <p class="h5">
          วัดที่สวยงามแห่งหนึ่งในจังหวัดฉะเชิงเทรา
          ที่ถูกน้ำทะเลกัดเซาะจนพื้นที่ใช้สอยภายในวัดหายไปเกินครึ่ง
          ด้วยเหตุนี้ทำให้สิ่งก่อสร้างที่เคยตั้งอยู่ริมทะเล กลายเป็นสิ่งก่อสร้างในทะเลไปโดยปริยาย
          เราจึงมีโอกาสได้เห็นทั้งโบสถ์กลางน้ำ อาคารในทะเล
        </p>
      </div>
    </div>

    <!--box รูปขวา-->
    <div class="RPage_Place_east_03">
      <div class="container_text_Place_east_03">
        <p class="h5">
          รวมไปถึงพระเอกใหม่ของวัดอย่าง “ซีวอล์ก” หรือสะพานกระจกใส สะพานแก้วที่ทอดตัวออกไปในท้องทะเล
          ที่กลายเป็นจุดชมพระอาทิตย์ตกของเมืองแปดริ้ว และไฮไลต์ที่น่าตื่นใจอย่างมากในช่วงเวลาน้ำขึ้น
          เพราะถ้ามองผิวเผินจะดูคล้ายกับผู้คนกำลังเดินอยู่บนผิวน้ำ ปัจจุบันพูดได้เต็มปากเลยว่า
          นี่คือจุดชมพระอาทิตย์ตกทะเลแห่งใหม่ ที่เต็มไปด้วยความน่าประทับใจของเมืองแปดริ้ว วัดหงษ์ทอง
          เปิดทุกวัน เวลา 06.00-18.00 น.
        </p>
        <a class="btn_cart_Place_east_03" href="https://travel.trueid.net/detail/kW22p6w5JexW">อ้างอิงมาจาก</a>
      </div>
      <img
        src="https://apis.sawasdee.ai/microsite/images/post/ckeditor/image-20230201113610-4.png"
        class="imgBow_Place_east_03"
      />
    </div>

    <!-- สิ่งของแนะนำขาย -->
    <h1 class="textcenter_Place_east_03"><strong>อุปกรณ์ที่ควรเอาไป</strong></h1>
    <hr />

    <div class="recomen_Place_east_03">
      <div
        class="re_conten_Place_east_03"
        style="max-width: 1500px"
        v-for="(i, index) in item_advice_east_01_all"
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
.textcenter_Place_east_03 {
  text-align: center;
  margin-inline: 430px;
  border-bottom: 2px solid;
}
.btn_cart_Place_east_03 {
  padding: 5px;
  color: white;
  text-decoration: none;
  background-color: black;
  border-radius: 5px;
}
.btn_cart_Place_east_03:hover {
  padding: 8px;
  color: white;
  text-decoration: none;
  background-color: rgb(4, 60, 203);
  border-radius: 5px;
}
.LPage_Place_east_03 {
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
.RPage_Place_east_03 {
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
.imgBow_Place_east_03 {
  max-width: 880px;
  margin: 10px;
}
.container_text_Place_east_03 {
  padding: 5px;
}
.textConten {
  padding: 20px;
  width: 500px;
}
.recomen_Place_east_03 {
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
.re_conten_Place_east_03 {
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
import Header_box_east from '../east/Box_menu_east.vue'

import { ref } from 'vue'
import { item_advice_east_01Store } from '../east/index_east'

const item_advice_east_01 = item_advice_east_01Store()
const item_advice_east_01_all = ref(item_advice_east_01.item_advice_east_list_01)
</script>
