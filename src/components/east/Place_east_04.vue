<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-6.fna.fbcdn.net/v/t1.15752-9/387329025_1343532069883712_3092022503912891061_n.png?_nc_cat=109&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFf7k4W2A5r5acmicjt4MdOAoyfdhwxjHYCjJ92HDGMdg5SyfxKtrPt34SUUTQj3GggSOzJ4Dp-DXuNmFrUW-3W&_nc_ohc=KvUl3d1EvWgAX-uan4N&_nc_ht=scontent.fbkk29-6.fna&oh=03_AdQwizDRllDau5vF-FzW8fXaKxbCUIKSQKnfI9pcraUE8Q&oe=6550E11B"
          class="d-block w-100"
          style="filter: brightness(85%)"
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
        <h5 class="display-3">วัดถ้ำเขาประทุน</h5>
        <p class="h4">Some representative placeholder content for the first slide.</p>
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_east></Header_box_east>

  <!-- แถบ เนื้อหา -->

  <!-- box รูปซ้าย -->
  <div class="container">
    <div class="LPage_Place_east_04">
          <img
            src="https://www.unseennewchapters.com/img/rayong-01.6b0de6f8.jpg"
            class="imgBow_Place_east_04"/>
            <div class="container">
            <h5 class="display-5"><strong>วัดถ้ำเขาประทุน</strong></h5>
            <p class="h5">
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
    <div class="RPage_Place_east_04">
      <div class="container_text_Place_east_04">
            <p class="h5">
              พร้อม ‘โพรงพญานาค’ ซึ่งเป็นจุดที่คนเฒ่าคนแก่เล่าว่า เคยพบเห็นพญานาคเลื้อยผ่านเข้าออก
              โดยรวมถือเป็นวัดที่เต็มไปด้วยพลังศรัทธาแห่งพญานาค เป็นรสชาติใหม่ เมืองระยอง
              ที่อยากให้ผู้คนมาลิ้มลองด้วยตัวเอง นักท่องเที่ยวสามารถท่องเที่ยวได้ตลอดทั้งปี
              กิจกรรมพิเศษอย่างนั่งเรือลอดถ้ำ จะจัดขึ้นในช่วงฤดูฝน ตั้งแต่เดือนกรกฎาคม-พฤศจิกายน
            </p>
            <a class="btn_cart_Place_east_04" href="https://travel.trueid.net/detail/kW22p6w5JexW"
        >อ่านเพิ่มเติม...</a>
          </div>
          <img
            src="https://img.salehere.co.th/p/1200x0/2022/06/07/3eqtb380isly.jpg"
            class="imgBow_Place_east_04"
          />
        </div>

    <!-- สิ่งของแนะนำขาย -->
    <h1 class="textcenter_Place_east_04"><strong>อุปกรณ์ที่ควรเอาไป</strong></h1>
    <hr />

    <div class="recomen_Place_east_04">
      <div
        class="re_conten_Place_east_04"
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
  <p class="card-text">
    <small class="text-body-secondary">
      <a class="btn btn-outline-secondary" href="https://travel.trueid.net/detail/kW22p6w5JexW"
        >อ้างอิงมาจาก</a
      ></small
    >
  </p>
</template>
<style scoped>
.textcenter_Place_east_04 {
  text-align: center;
  margin-inline: 430px;
  border-bottom: 2px solid;
}
.btn_cart_Place_east_04 {
  padding: 5px;
  color: white;
  text-decoration: none;
  background-color: black;
  border-radius: 5px;
}
.btn_cart_Place_east_04:hover {
  padding: 8px;
  color: white;
  text-decoration: none;
  background-color: rgb(4, 60, 203);
  border-radius: 5px;
}
.LPage_Place_east_04 {
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
.RPage_Place_east_04 {
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
.imgBow_Place_east_04 {
  max-width: 880px;
  margin: 10px;
}
.container_text_Place_east_04 {
  padding: 5px;
}
.textConten {
  padding: 20px;
  width: 500px;
}
.recomen_Place_east_04 {
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
.re_conten_Place_east_04 {
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
import { item_advice_east_02Store } from '../east/index_east'

const item_advice_east_02 = item_advice_east_02Store()
const item_advice_east_02_all = ref(item_advice_east_02.item_advice_east_list_02)
</script>
