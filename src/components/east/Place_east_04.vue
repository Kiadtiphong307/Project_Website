<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-6.fna.fbcdn.net/v/t1.15752-9/387329025_1343532069883712_3092022503912891061_n.png?_nc_cat=109&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFf7k4W2A5r5acmicjt4MdOAoyfdhwxjHYCjJ92HDGMdg5SyfxKtrPt34SUUTQj3GggSOzJ4Dp-DXuNmFrUW-3W&_nc_ohc=Cd_JAHLE4r8AX8tTaw5&_nc_ht=scontent.fbkk29-6.fna&oh=03_AdRl1FCHQjAseWyg6FpicxBj_uVhg8xvXdodKkV076vMQg&oe=6553139B"
          class="d-block w-100"
          style="filter: brightness(75%)"
          maxheight="500px"
        />
      </div>
      <div class="carousel-caption d-none d-md-block" style="padding-bottom: 9rem">
        <h5 class="display-3">วัดถ้ำเขาประทุน</h5>
        <p class="h4">Some representative placeholder content for the first slide.</p>
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_east></Header_box_east>

  <!-- แถบ เนื้อหา -->

  <!-- box รูปซ้าย -->
  <div class="container_e4">
    <div class="LPage_e4">
          <img
            src="https://www.unseennewchapters.com/img/rayong-01.6b0de6f8.jpg"
            class="imgBow_e4"
            alt="..."
          />
        <div style="margin-block: 10px;">
            <h5 class="card-title"><strong>วัดถ้ำเขาประทุน</strong></h5>
            <p class="textConten_e4">
              วัดถ้ำเขาประทุน เป็นวัดที่มีภูมิประเทศเป็นหุบเขา หน้าผา และยอดเขาสูง
              มีถ้ำเล็กที่เต็มไปด้วยหินงอกหินย้อยอยู่ภายใน ด้านหน้าของวัดมี ‘ถ้ำพญานาคราช’
              เป็นถ้ำรับแขก และมีลำแสงจากช่องเขารูปทรงพญานาคที่มองแล้วชวนให้รู้สึกอัศจรรย์ใจ
              แต่ไฮไลต์ของจริงคือการนั่งเรือลอดถ้ำเข้าไปยัง ‘หุบผาสวรรค์’
              ที่พอหลุดออกมาจากความมืดของถ้ำ จะเหมือนทะลุออกมายังอีกมิติหนึ่ง
              ประกอบไปด้วยถ้ำอีกหลายถ้ำ ทั้งถ้ำนาคี, ถ้ำรอยพระพุทธบาท และถ้ำหินงอกหินย้อย
            </p>
          </div>
        </div>

    <!--box รูปขวา-->
    <div class="RPage_e4">
      <div>
        <p class="textConten_e4">
              พร้อม ‘โพรงพญานาค’ ซึ่งเป็นจุดที่คนเฒ่าคนแก่เล่าว่า เคยพบเห็นพญานาคเลื้อยผ่านเข้าออก
              โดยรวมถือเป็นวัดที่เต็มไปด้วยพลังศรัทธาแห่งพญานาค เป็นรสชาติใหม่ เมืองระยอง
              ที่อยากให้ผู้คนมาลิ้มลองด้วยตัวเอง นักท่องเที่ยวสามารถท่องเที่ยวได้ตลอดทั้งปี
              กิจกรรมพิเศษอย่างนั่งเรือลอดถ้ำ จะจัดขึ้นในช่วงฤดูฝน ตั้งแต่เดือนกรกฎาคม-พฤศจิกายน
            </p>
            <a class="btn_cart_e4" href="https://www.thairath.co.th/lifestyle/travel/thaitravel/2709207?gallery_id=1"
        >อ่านเพิ่มเติม</a>
          </div>
          <img
            src="https://img.salehere.co.th/p/1200x0/2022/06/07/3eqtb380isly.jpg"
            class="imgBow_e4"
            alt="..."
          />
        </div>

    <!-- สิ่งของแนะนำขาย -->
    <h1 style="text-align: center"><strong>สิ่งที่ควรเตรียมไป</strong></h1>
    <hr />

    <div class="recomen_e4">
      <div class="re_conten_e4"
        style="max-width: 1500px"
        v-for="(i, index) in item_advice_east_02_all"
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
  .container_e4 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: center;
  }
  .btn_cart_e4 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart_e4:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage_e4 {
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
  .RPage_e4 {
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
  .imgBow_e4 {
    max-width: 880px;
    margin: 10px;
  }
  .recomen_e4 {
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
  .re_conten_e4 {
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
  .container_e4 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }

  .btn_cart_e4 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart_e4:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage_e4 {
    display: grid;
    grid-template-columns: 300px auto;
    column-gap: 10px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .RPage_e4 {
    display: grid;
    grid-template-columns: auto 300px;
    column-gap: 1px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .imgBow_e4 {
   max-height: 200px;
    margin: 10px;
  }
  .textConten_e4 {
    padding: 20px;
    height: 100px;
    width: 400px;
    overflow: auto;
  }
  .recomen_e4 {
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
  .re_conten_e4 {
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
  .container_e4 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }
  .btn_cart_e4 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart_e4:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage_e4 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    border-bottom: 2px solid;
    margin-block: 5px;
    max-width: 300px;
  }
  .RPage_e4 {
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
  .imgBow_e4 {
  max-height: 180px;
    margin: 10px;
  }
  .textConten_e4 {
    padding: 20px;
    height: 150px;
    width: 300px;
    overflow: auto;
  }
  .recomen_e4 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    align-items: stretch;
    row-gap: 2px;
    column-gap: 2px;
    margin-block: 10px;
    max-width: 600px;
  }
  .re_conten_e4 {
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
import Header_box_east from '../east/Box_menu_east.vue'

import { ref } from 'vue'
import { item_advice_east_02Store } from '../east/index_east'

const item_advice_east_02 = item_advice_east_02Store()
const item_advice_east_02_all = ref(item_advice_east_02.item_advice_east_list_02)
</script>
