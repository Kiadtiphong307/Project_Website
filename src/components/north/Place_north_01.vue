<script setup>
import Header_box_north from '../north/Box_menu_north.vue'

import { ref } from 'vue'
import { item_advice_north_01Store } from '../north/index_north'

const item_advice_north_01 = item_advice_north_01Store()
const item_advice_north_01_all = ref(item_advice_north_01.item_advice_north_list_01)
</script>
<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-8.fna.fbcdn.net/v/t1.15752-9/385484294_892956832424577_6647299020391367785_n.png?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeF3-s8MQrWngshEzPVIhB7wNCARxxogH5g0IBHHGiAfmEi9BJ246vQQfDUvw7Q3oBsFDE7wOAa1v2IivfLdpJ62&_nc_ohc=A9fu00G048cAX8NGDVu&_nc_ht=scontent.fbkk29-8.fna&oh=03_AdTRxrPTcm4kRwxHfRbyuWBNuGiHuKgjQuwtFBDI_DwSkQ&oe=65515941"
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
        <h2 class="display-3">ประตูท่าแพ</h2>
        <p class="h4">จุดถ่ายรูปที่ไม่ควรพลาด</p>
      </div>
    </div>
  </div>
  <!-- แถบ menu -->
  <Header_box_north></Header_box_north>
  <!-- แถบ เนื้อหา -->
  <!-- box รูปซ้าย -->
<<<<<<< HEAD
  <div class="container">
    <div class="LPage_Place_north_01">
=======
  <div class="container-n1">
    <div class="LPage-n1">
>>>>>>> 32499d83f8092f54d95143793e6d1c214b14840a
      <img
        src="https://i.pinimg.com/564x/46/7e/85/467e85d04949954473e824aae11cc891.jpg"
        class="imgBow_Place_north_01"
      />
<<<<<<< HEAD
      <div class="container_text_Place_north_01">
        <h2 class="display-5">ประตูท่าแพ</h2>
        <p class="h5">
=======
      <div style="margin-block: 10px;">
        <h2 class="card-title">ประตูท่าแพ</h2>
        <p class="textConten-n1">
>>>>>>> 32499d83f8092f54d95143793e6d1c214b14840a
          ประตูท่าแพ ถือเป็นอีกหนึ่งจุดถ่ายภาพเช็คอินที่ห้ามพลาดของจังหวัดเชียงใหม่
          เพราะเป็นสถานที่ยอดนิยมของนักท่องเที่ยวที่รู้จักกันดีเมื่อมาที่นี่
          นับว่าเป็นจุดไฮไลท์ที่จะต้องมาเก็บภาพ ไม่ว่าจะเป็นภาพนิ่ง หรือภาพเคลื่อนไหวกับนกพิราบ
        </p>
<<<<<<< HEAD
      </div>
    </div>
    <!--box รูปขวา-->
    <div class="RPage_Place_north_01">
      <div class="container_text_Place_north_01">
        <p class="h5">
=======
        <a href="https://travel.trueid.net/detail/kW22p6w5JexW" class="btn_cart-n1">อ่านเพิ่มเติม</a>
      </div>
    </div>
    <!--box รูปขวา-->
    <div class="RPage-n1">
      <div>
        <p class="textConten-n1">
>>>>>>> 32499d83f8092f54d95143793e6d1c214b14840a
          ประตูท่าแพซึ่งตั้งอยู่ในปัจจุบันนี้
          เทศบาลนครเชียงใหม่และกรมศิลปากรได้ร่วมกันสร้างขึ้นมาใหม่ เมื่อปี พ.ศ. 2528
          โดยอาศัยหลักฐานทางประวัติศาสตร์และโบราณคดี ประตูท่าแพ เดิมเป็นประตู 2 ชั้น
          วางตำแหน่งเยื้องกันและมีป้อมยื่นออกมาข้างประตูเมือง
          เพื่อใช้เป็นปราการป้องกันเมืองยามศึกสงครามในอดีต
        </p>
        <a href="https://travel.trueid.net/detail/kW22p6w5JexW" class="btn_cart_Place_north_01">อ่านเพิ่มเติม...</a>
      </div>
      <img
        src="https://i.pinimg.com/564x/9f/84/9b/9f849babe21739644bcca118cf0bbe29.jpg"
        class="imgBow_Place_north_01"
      />
    </div>
    <!-- สิ่งของแนะนำขาย -->
<<<<<<< HEAD
    <h1 class="textcenter_Place_north_01"><strong>อุปกรณ์ที่ควรเอาไป</strong></h1>
    <div class="recomen_Place_north_01">
      <div class="re_conten_Place_north_01" v-for="(i, index) in item_advice_north_01_all" :key="index">
        <div>
          <div class="card">
            <img :src="i.img" />
          </div>
=======
    <h1 style="text-align: center">สิ่งที่ควรเตรียมไป</h1>
    <div class="recomen-n1">
      <div class="re_conten-n1" v-for="(i, index) in item_advice_north_01_all" :key="index">
        <div class="card">
          <img :src="i.img" />
>>>>>>> 32499d83f8092f54d95143793e6d1c214b14840a
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
<<<<<<< HEAD
.textcenter_Place_north_01{
  text-align: center;
  margin-inline: 430px;
  border-bottom: 2px solid;
}
.btn_cart_Place_north_01  {
  padding: 5px;
  color: white;
  text-decoration: none;
  background-color: black;
  border-radius: 5px;
}
.btn_cart_Place_north_01:hover {
  padding: 8px;
  color: white;
  text-decoration: none;
  background-color: rgb(4, 60, 203);
  border-radius: 5px;
}
.LPage_Place_north_01 {
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
.RPage_Place_north_01 {
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
.imgBow_Place_north_01 {
  max-width: 880px;
  margin: 10px;
}
.container_text_Place_north_01 {
  padding: 5px;
}
.textConten_Place_north_01 {
  padding: 20px;
  width: 500px;
}
.recomen_Place_north_01 {
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
.re_conten_Place_north_01 {
  display: grid;
  grid-template-columns: 200px auto;
  column-gap: 10px;
  justify-items: stretch;
  align-items: center;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 5px;
=======
@media (min-width: 1030px) {
  .container-n1 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: center;
  }
  .imgTitle {
    max-width: 100%;
    background-position: left bottom;
    background-size: cover;
    padding-top: 200px;
    padding-bottom: 100px;
    background-image: url(https://i.pinimg.com/564x/a4/11/bf/a411bfbf71e49fc1a525fccf0bbc0d40.jpg);
  }
  .btn_cart-n1 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart-n1:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage-n1 {
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
  .RPage-n1 {
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
  .recomen-n1 {
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
  .re_conten-n1 {
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
  .container-n1 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }
  .imgTitle {
    max-width: 100%;
    background-position: left bottom;
    background-size: cover;
    padding-top: 200px;
    padding-bottom: 100px;
    background-image: url(https://i.pinimg.com/564x/a4/11/bf/a411bfbf71e49fc1a525fccf0bbc0d40.jpg);
  }
  .btn_cart-n1 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart-n1:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage-n1 {
    display: grid;
    grid-template-columns: 300px auto;
    column-gap: 10px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .RPage-n1 {
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
  .textConten-n1 {
    padding: 20px;
    height: 100px;
    width: 400px;
    overflow: auto;
  }
  .recomen-n1 {
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
  .re_conten-n1 {
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
  .container-n1 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }
  .imgTitle {
    max-width: 100%;
    background-position: left bottom;
    background-size: cover;
    padding-top: 200px;
    padding-bottom: 100px;
    background-image: url(https://i.pinimg.com/564x/a4/11/bf/a411bfbf71e49fc1a525fccf0bbc0d40.jpg);
  }
  .btn_cart-n1 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart-n1:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage-n1 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    border-bottom: 2px solid;
    margin-block: 5px;
    max-width: 300px;
  }
  .RPage-n1 {
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
    max-width: 880px;
    margin: 10px;
  }
  .textConten-n1 {
    padding: 20px;
    height: 150px;
    width: 300px;
    overflow: auto;
  }
  .recomen-n1 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    align-items: stretch;
    row-gap: 2px;
    column-gap: 2px;
    margin-block: 10px;
    max-width: 600px;
  }
  .re_conten-n1 {
    display: grid;
    grid-template-columns: 100px auto;
    column-gap: 10px;
    justify-items: stretch;
    align-items: center;
    box-sizing: content-box;
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
    padding: 5px;
  }
>>>>>>> 32499d83f8092f54d95143793e6d1c214b14840a
}
</style>
