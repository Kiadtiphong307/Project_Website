<script setup>
import Header_box_north from '../north/Box_menu_north.vue'

import { ref } from 'vue'
import { item_advice_north_04Store } from '../north/index_north'

const item_advice_north_04 = item_advice_north_04Store()
const item_advice_north_04_all = ref(item_advice_north_04.item_advice_north_list_04)
</script>
<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-7.fna.fbcdn.net/v/t1.15752-9/387525113_677504464478520_8878151929878967250_n.png?_nc_cat=108&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEjP18okCk6RGQxdqdVq2M5NlAFVsg-pfQ2UAVWyD6l9BXhyf8Y9zNC9N9TjCbY6uXxckKTpzMSntQf9l3IPHaN&_nc_ohc=OHsY33xf1Y8AX-mDarH&_nc_ht=scontent.fbkk29-7.fna&oh=03_AdTqIV7HkoB2omty08jg4I_RRoYa26E6LpK_SzoTsvCgFw&oe=65514CDB"
          class="d-block w-100"
          style="filter: brightness(75%)"
          :height="'450'"
        />
<<<<<<< HEAD
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
        <h5 class="display-3">วัดเด่นสะหลีศรีเมืองแกน</h5>
        <p class="h4">เป็นวัดที่มีความงดงามอลังการ เหมาะแก่การไหว้พระขอพร</p>
      </div>
=======
      </svg>
    </router-link>
    <div>
      <h5>วัดเด่นสะหลีศรีเมืองแกน</h5>
      <p>เป็นวัดที่มีความงดงามอลังการ เหมาะแก่การไหว้พระขอพร</p>
>>>>>>> 32499d83f8092f54d95143793e6d1c214b14840a
    </div>
  </div>
  <!-- แถบ menu -->
  <Header_box_north></Header_box_north>
  <!-- แถบ เนื้อหา -->
  <!-- box รูปซ้าย -->
<<<<<<< HEAD
  <div class="container">
    <div class="LPage_Place_north_04">
      <img src="https://img.salehere.co.th/p/1200x0/2022/02/07/i5jteglqgc26.jpg" class="imgBow_Place_north_04" />
      <div class="container_text_Place_north_04">
        <h5 class="display-5">วัดเด่นสะหลีศรีเมืองแกน</h5>
        <p class="h5">
=======
  <div class="container-n4">
    <div class="LPage-n4">
      <img src="https://img.salehere.co.th/p/1200x0/2022/02/07/i5jteglqgc26.jpg" class="imgBow" />
      <div style="margin-block: 10px">
        <h5 class="card-title">วัดเด่นสะหลีศรีเมืองแกน</h5>
        <p class="textConten-n4">
>>>>>>> 32499d83f8092f54d95143793e6d1c214b14840a
          วัดเด่นสะหลีศรีเมืองแกน หรือ วัดบ้านเด่น เป็นวัดที่มีความงดงามอลังการ วิหารต่างๆ
          ของวัดแห่งนี้ส่วนใหญ่เป็นไม้สัก ออกแบบทรงล้านนา
          ตามราวบันไดของวิหารจะมีรูปปั้นสัตว์ในวรรณคดีให้ได้ชมมากมายเลย เช่น นกยุง นาค ช้าง เป็นต้น
          นอกจากนี้บริเวณรอบๆ วัดยังมีปีนักษัตรประจำปีเกิด
          และพระธาตุจำลองที่สร้างอยู่ภายในตัววัดให้นักท่องเที่ยวได้มาทำบุญกัน
        </p>
<<<<<<< HEAD
      </div>
    </div>
    <!--box รูปขวา-->
    <div class="RPage_Place_north_04">
      <div class="container_text_Place_north_04">
        <p class="h5">
=======
        <a href="https://travel.trueid.net/detail/kW22p6w5JexW" class="btn_cart-n4">อ้างอิงมาจาก</a>
      </div>
    </div>
    <!--box รูปขวา-->
    <div class="RPage-n4">
      <div>
        <p class="textConten-n4">
>>>>>>> 32499d83f8092f54d95143793e6d1c214b14840a
          วัดเด่นสะหรีศรีเมืองแกน เป็นชื่อที่มีความคล้องจองและชวนให้สงสัยทุกครั้งที่ได้ยิน หลาย ๆ
          คนอาจจะสงสัยว่าชื่อนี้มีความหมายว่าอะไรกันใช่ไหมล่ะคะ ต้องบอกก่อนว่า
          เมื่อนานมาแล้วครูบาเทืองได้มาที่วัดแห่งนี้ซึ่งตั้งอยู่ในเมืองแกน และได้มีต้นโพธิ์เกิดขึ้น
          ชาวบ้านเรียกต้นโพธิ์ต้นนั้นกันว่า เก๊าสะหลี และวัดแห่งนี้ได้ตั้งอยู่บนเนิน
          ทำให้พื้นที่วัดนั้นเด่นกว่าที่อื่น ๆ
        </p>
        <a href="https://travel.trueid.net/detail/kW22p6w5JexW" class="btn_cart_Place_north_04">อ่านเพิ่มเติม..</a>
      </div>
      <img src="https://img.salehere.co.th/p/1200x0/2022/02/07/2eiijjktipv6.jpg" class="imgBow_Place_north_04" />
    </div>
    <!-- สิ่งของแนะนำขาย -->
<<<<<<< HEAD
    <h1 class="textcenter_Place_north_04"><strong>อุปกรณ์ที่ควรเอาไป</strong></h1>
    <div class="recomen_Place_north_04">
      <div class="re_conten_Place_north_04" v-for="(i, index) in item_advice_north_04_all" :key="index">
=======
    <h1 style="text-align: center">สิ่งที่ควรเตรียมไป</h1>
    <div class="recomen-n4">
      <div class="re_conten-n4" v-for="(i, index) in item_advice_north_04_all" :key="index">
>>>>>>> 32499d83f8092f54d95143793e6d1c214b14840a
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
<<<<<<< HEAD
.textcenter_Place_north_04 {
  text-align: center;
  margin-inline: 430px;
  border-bottom: 2px solid;
}
.btn_cart_Place_north_04 {
  padding: 5px;
  color: white;
  text-decoration: none;
  background-color: black;
  border-radius: 5px;
}
.btn_cart_Place_north_04:hover {
  padding: 8px;
  color: white;
  text-decoration: none;
  background-color: rgb(4, 60, 203);
  border-radius: 5px;
}
.LPage_Place_north_04 {
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
.RPage_Place_north_04 {
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
.imgBow_Place_north_04 {
  max-width: 880px;
  margin: 10px;
}
.container_text_Place_north_04 {
  padding: 5px;
}
.textConten_Place_north_04 {
  padding: 20px;
  width: 500px;
}
.recomen_Place_north_04 {
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
.re_conten_Place_north_04 {
  display: grid;
  grid-template-columns: 200px auto;
  column-gap: 10px;
  justify-items: stretch;
  align-items: center;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 5px;
=======
@media (min-width: 1030px) {
  .container-n4 {
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
  .btn_cart-n4 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart-n4:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage-n4 {
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
  .RPage-n4 {
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
  .container_text-n4 {
    padding: 5px;
  }
  .textConten-n4 {
    padding: 20px;
    width: 500px;
  }
  .recomen-n4 {
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
  .re_conten-n4 {
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
  .container-n4 {
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
  .btn_cart-n4 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart-41:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage-n4 {
    display: grid;
    grid-template-columns: 300px auto;
    column-gap: 10px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .RPage-n4 {
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
  .textConten-n4 {
    padding: 20px;
    height: 100px;
    width: 400px;
    overflow: auto;
  }
  .recomen-n4 {
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
  .re_conten-n4 {
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
  .container-n4 {
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
  .btn_cart-n4 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart-n4:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage-n4 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    border-bottom: 2px solid;
    margin-block: 5px;
    max-width: 300px;
  }
  .RPage-n4 {
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
  .textConten-n4 {
    padding: 20px;
    height: 150px;
    width: 300px;
    overflow: auto;
  }
  .recomen-n4 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    align-items: stretch;
    row-gap: 2px;
    column-gap: 2px;
    margin-block: 10px;
    max-width: 600px;
  }
  .re_conten-n4 {
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
