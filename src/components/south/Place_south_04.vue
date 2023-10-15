<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-5.fna.fbcdn.net/v/t1.15752-9/370195101_3494696777458128_5337590874790048784_n.png?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFA3pmRikZOzNxT4C0RQgH9Ge27SkHY884Z7btKQdjzzhb3WfbB1sNUF0Z4eOtjrZikCwwTntTBrqA-kKGiWe8i&_nc_ohc=MAg0lQmfUCEAX_VO-91&_nc_oc=AQmbmVrlvkVUgfRr0XqPVZYZLbFgz1gpWbR4YgaQOjt4bXS5MyIaADy4dWdDM91AsRQ&_nc_ht=scontent.fbkk29-5.fna&oh=03_AdR1DmqU2f4I4kFA8jD3qkpDUcjXLj_-_DJpq5wd9qK47Q&oe=6553096C"
          class="d-block w-100"
          style="filter: brightness(75%)"
          maxheight="500px"
        />
      </div>
      <div class="carousel-caption d-none d-md-block" style="padding-bottom: 9rem">
        <h5 class="display-3">หินพับผ้า</h5>
        <p class="h4">หินพับผ้า อ.ขนอม จ.นครศรีธรรมราช</p>
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_south></Header_box_south>

  <!-- แถบ เนื้อหา -->

  <!-- box รูปซ้าย -->
  <div class="container_s4">
    <div class="LPage_s4">
      <img
        src="https://us-fbcloud.net/wb/data/1404/1404632-img.vhyt8p.1beii.jpg"
        class="imgBow_s4"
      />
      <div style="margin-block: 10px">
      <h5 class="card-title"><strong>หินพับผ้า</strong></h5>
        <p class="textConten_s4">
          ผาหินรูปร่างแปลกตาที่พบเห็นได้บริเวณกลางทะเลขนอม
          เป็นปรากฏการณ์ทางธรณีวิทยาที่มีอยู่เพียงน้อยแห่งบนโลกใบนี้
          มีลักษณะเป็นแผ่นหินซ้อนเรียงกันเป็นชั้นๆ ซึ่งแต่ละจุดจะดูสวยงามแตกต่างกันตามแต่จะจินตนาการ
          โดยชาวต่างชาติเรียกปรากฏการณ์นี้ว่า ‘Pancake Rock’ ส่วนคนไทยรู้จักกันในชื่อ ‘หินพับผ้า’
        </p>
      </div>
    </div>

    <!--box รูปขวา-->
    <div class="RPage_s4">
      <div>
        <p class="textConten_s4">
          เพราะดูคล้ายกับผ้าที่พับซ้อนกันเป็นชั้นๆ เป็นความมหัศจรรย์ของธรรมชาติเมืองคอน
          ซึ่งนักท่องเที่ยวสามารถเช่าเรือจากชุมชนแหลมประทับ
          เพื่อมาเที่ยวชมพิพิธภัณฑ์ธรรมชาติแห่งนี้ได้ตลอดวัน สามารถเดินทางมาชมชั้นหินได้ตลอดทั้งปี
          ทั้งนี้ขึ้นอยู่กับ ลม ฟ้า และอากาศ แต่ช่วงที่แนะนำ คือ เดือนมกราคม-เมษายน
        </p>
        <a class="btn_cart_s4" href="https://www.thairath.co.th/lifestyle/travel/thaitravel/2708365 ">อ่านเพิ่มเติม...</a>
      </div>
      <div class="Rimg_s4">
        <img
          src="https://www.unseennewchapters.com/img/nakhonsithammarat-detail-banner-m.1dc559e7.jpg"
          class="imgBow_s4"
        />
      </div>
    </div>

    <!-- สิ่งของแนะนำขาย -->
    <!-- ตาเขียว -->
    <h1 style="text-align: center">สิ่งที่ควรเตรียมไป</h1>
    <hr />

    <div class="recomen_s4">
      <div
        class="re_conten_s4"
        style="max-width: 1500px"
        v-for="(i, index) in item_advice_south_02_all"
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
  .container_s4 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: center;
  }
 
  .btn_cart_s4 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart_s4:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }

  .LPage_s4 {
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
  .RPage_s4 {
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
  .imgBow_s4 {
    max-width: 300px;
    margin: 10px;
  }
  .recomen_s4 {
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
  .re_conten_s4 {
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
  .container_s4 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }
  .btn_cart_s4 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart_s4:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage_s4 {
    display: grid;
    grid-template-columns: 300px auto;
    column-gap: 10px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .RPage_s4 {
    display: grid;
    grid-template-columns: auto 300px;
    column-gap: 1px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .imgBow_s4 {
    max-width: 250px;
    margin: 10px;
  }
  .textConten_s4 {
    padding: 20px;
    height: 100px;
    width: 400px;
    overflow: auto;
  }
  .recomen_s4 {
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
  .re_conten_s4 {
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
  .container_s4 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }

  .btn_cart_s4 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart_s4:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage_s4 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    border-bottom: 2px solid;
    margin-block: 5px;
    max-width: 300px;
  }
  .RPage_s4 {
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
  .imgBow_s4 {
    max-width: 90%;
    margin: 10px;
  }
  .textConten_s4 {
    padding: 20px;
    height: 150px;
    width: 300px;
    overflow: auto;
  }
  .recomen_s4 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    align-items: stretch;
    row-gap: 2px;
    column-gap: 2px;
    margin-block: 10px;
    max-width: 600px;
  }
  .re_conten_s4 {
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
import Header_box_south from '../south/Box_menu_south.vue'

import { ref } from 'vue'
import { item_advice_south_02Store } from '../south/index_south'

const item_advice_south_02 = item_advice_south_02Store()
const item_advice_south_02_all = ref(item_advice_south_02.item_advice_south_list_02)
</script>
