<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-9.fna.fbcdn.net/v/t1.15752-9/370289853_677436577690801_7346062393919505792_n.png?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEtf9ZUeJBbTvm83FIwJ3ZWpMo2KYokTW-kyjYpiiRNb8yFq5AbMdaE4GCwSqM5nL3OqZbzi2bqLbDSAqGHI7aJ&_nc_ohc=xG4gN9GcnB4AX_H-7E5&_nc_ht=scontent.fbkk29-9.fna&oh=03_AdQ_48y5S0FByNmaX8QWfAEUiJvC1mUbDp-yArROQGljlw&oe=6552FA14"
          class="d-block w-100"
          style="filter: brightness(75%)"
          maxheight="500px"
        />
      </div>
      <div class="carousel-caption d-none d-md-block" style="padding-bottom: 9rem">
        <h5 class="display-3">ถ้ำน้ำเขาศิวะ</h5>
        <p class="h4">ถ้ำน้ำเขาศิวะ อ.คลองหาด จ.สระแก้ว</p>
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_east></Header_box_east>

  <!-- แถบ เนื้อหา -->

  <!-- box รูปซ้าย -->
  <div class="container_e5">
    <div class="LPage_e5 ">
      <img
        src="data:image/jpeg;base64,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"
        class="imgBow_e5"
      />
      <div style="margin-block: 10px">
        <h5 class="card-title"><strong>ถ้ำน้ำเขาศิวะ</strong></h5>
        <p class="textConten_e5">
          สถานที่นี้ชาวสระแก้วเรียกว่า บ้านของเทวดา บ้างก็ว่าเป็นวังพญานาค แต่ที่แน่นอน คือ
          ที่นี่เป็นถ้ำที่เกิดมาเพื่อนักท่องเที่ยวสายแอดเวนเจอร์อย่างแท้จริง
          เพราะถ้ำแห่งนี้มีน้ำไหลตลอดทั้งปี บริเวณด้านในของถ้ำจึงมีสภาพเหมือนสระว่ายน้ำ
          ต้องอาศัยการสวมชูชีพ และเกาะห่วงยางลอยคอเข้าไป ซึ่งถ้ำแห่งนี้จะมีเจ้าหน้าที่คอยนำทาง
          และบรรยายเรื่องราวของแต่ละจุดให้ฟังตลอดทั้งทริป
        </p>
      </div>
    </div>

    <!--box รูปขวา-->
    <div class="RPage_e5">
      <div>
        <p class="textConten_e5">
          บรรยากาศด้านในเต็มไปด้วยความสวยงามของหินงอกหินย้อยรูปทรงหลากหลายตามแต่จะจินตนาการ
          และยังมีตำนานพ่อปู่พญานาคองค์สีแดง ที่ชาวบ้านเคยพบเห็นแหวกว่ายอยู่ภายในถ้ำ
          ซึ่งเป็นที่มาของศาลพ่อปู่นาคาที่ตั้งอยู่บริเวณปากถ้ำ
          ลูกหลานพญานาคทราบแล้วเตรียมชุดเปียกด่วน
          นักท่องเที่ยวสามารถเข้าผจญภัยเมืองบาดาลได้ตลอดทั้งปี ตั้งแต่เวลา 10.00-16.00 น.
        </p>
        <a class="btn_cart_e5" href="https://www.thairath.co.th/lifestyle/travel/thaitravel/2709207?gallery_id=1"
          >อ่านเพิ่มเติม</a>
      </div>
      <img
        src="https://s.isanook.com/tr/0/ui/282/1412293/aaf868be79ff968a950292bf72058d9b_1538133839.jpg"
        class="imgBow_e5"
      />
    </div>

    <!-- สิ่งของแนะนำขาย -->
    <h1 style="text-align: center">สิ่งที่ควรเตรียมไป</h1>
    <hr />

    <div class="recomen_e5">
      <div class="re_conten_e5"
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
@media (min-width: 1030px) {
  .container_e5  {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: center;
  }
  .btn_cart_e5{
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart_e5:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage_e5{
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
  .RPage_e5 {
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
  .imgBow_e5 {
    max-width: 880px;
    margin: 10px;
  }
  .recomen_e5{
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
  .re_conten_e5 {
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
  .container_e5 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }

  .btn_cart_e5 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart_e5:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage_e5 {
    display: grid;
    grid-template-columns: 300px auto;
    column-gap: 10px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .RPage_e5 {
    display: grid;
    grid-template-columns: auto 300px;
    column-gap: 1px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .imgBow_e5 {
   max-height: 200px;
    margin: 10px;
  }
  .textConten_e5 {
    padding: 20px;
    height: 100px;
    width: 400px;
    overflow: auto;
  }
  .recomen_e5 {
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
  .re_conten_e5 {
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
  .container_e5 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }
  .btn_cart_e5 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart_e5:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage_e5 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    border-bottom: 2px solid;
    margin-block: 5px;
    max-width: 300px;
  }
  .RPage_e5 {
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
  .imgBow_e5 {
  max-height: 200px;
    margin: 10px;
  }
  .textConten_e5 {
    padding: 20px;
    height: 150px;
    width: 300px;
    overflow: auto;
  }
  .recomen_e5 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    align-items: stretch;
    row-gap: 2px;
    column-gap: 2px;
    margin-block: 10px;
    max-width: 600px;
  }
  .re_conten_e5 {
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
import { item_advice_east_01Store } from '../east/index_east'

const item_advice_east_01 = item_advice_east_01Store()
const item_advice_east_01_all = ref(item_advice_east_01.item_advice_east_list_01)
</script>
