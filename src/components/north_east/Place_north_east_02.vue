<script setup>
import Header_box_north_east from '../north_east/Box_menu_north_east.vue'

import { ref } from 'vue'
import { item_advice_north_east_02Store } from '../north_east/index_north_east'

const item_advice_north_east_02 = item_advice_north_east_02Store()
const item_advice_north_east_02_all = ref(item_advice_north_east_02.item_advice_north_east_list_02)
</script>
<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://i.pinimg.com/564x/a4/11/bf/a411bfbf71e49fc1a525fccf0bbc0d40.jpg"
          class="d-block w-100"
          style="filter: brightness(75%)"
          :height="'450'"
        />
      </div>
      <div class="carousel-caption d-none d-md-block" style="padding-bottom: 9rem">
      <h5 class="display-3">วนอุทยานภูบ่อบิด</h5>
      <p>วนอุทยานภูบ่อบิด อ.เมือง จ.เลย</p>
    </div>
    </div>
  </div>
  <!-- แถบ menu -->
  <Header_box_north_east></Header_box_north_east>
  <!-- แถบ เนื้อหา -->
  <!-- box รูปซ้าย -->
  <div class="container">
    <div class="LPage">
      <img
        src="http://i-san.tourismthailand.org/wp-content/uploads/2018/12/9283229714e07ffa9e510de121a8e72013b91357-715x475.jpg"
        class="imgBow"
      />
      <div class="container_text">
        <h2 class="card-title">วนอุทยานภูบ่อบิด</h2>
        <p class="textConten">
          ภูบักบิด หรือ ภูบ่บิด เป็นภูเขาเล็กๆ อยู่ห่างจากจังหวัดเลย 1 กิโลเมตร
          ด้วยระยะทางที่ใกล้จากตัวเมือง จึงนับเป็น ‘หอชมทะเลหมอกใจกลางเมือง’ หนึ่งเดียวในประเทศไทย
          แถมยังเป็นขวัญใจของนักวิ่ง ในการเวียนมาฝึกซ้อมยามเช้ากันอยู่บ่อยๆ
        </p>
        <a href="https://travel.trueid.net/detail/kW22p6w5JexW" class="btn_cart">อ้างอิงมาจาก</a>
      </div>
    </div>
    <!--box รูปขวา-->
    <div class="RPage">
      <div class="container_text">
        <p class="textConten">
          ด้วยระยะทางเดินสู่จุดยอดที่พอเรียกเหงื่อได้กำลังดี เมื่อแลกกับวิวสวยๆ ที่ปลายทางแล้ว
          การพิชิตยอดภูบ่อบิดเพื่ออากาศบริสุทธิ์ พร้อมชมดวงอาทิตย์ท่ามกลางทะเลหมอกยามเช้า
          จัดว่าเป็นอะไรที่คุ้มค่าแก่การเดินทางมาสัมผัสหมอกกลางเมือง ณ ที่แห่งนี้
        </p>
      </div>
      <img
        src="https://s.isanook.com/tr/0/ud/286/1434209/t2.jpg?ip/resize/w728/q80/jpg"
        class="imgBow"
      />
    </div>

    <!-- สิ่งของแนะนำขาย -->
    <h1 style="text-align: center">สิ่งที่ควรเตรียมไป</h1>
    <div class="recomen">
      <div class="re_conten" v-for="(i, index) in item_advice_north_east_02_all" :key="index">
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
.imgTitle {
  max-width: 100%;
  background-position: left bottom;
  background-size: cover;
  padding-top: 200px;
  padding-bottom: 100px;
  background-image: url(https://i.pinimg.com/564x/a4/11/bf/a411bfbf71e49fc1a525fccf0bbc0d40.jpg);
}
.btn_cart {
  padding: 5px;
  color: white;
  text-decoration: none;
  background-color: black;
  border-radius: 5px;
}
.btn_cart:hover {
  padding: 8px;
  color: white;
  text-decoration: none;
  background-color: rgb(4, 60, 203);
  border-radius: 5px;
}
.LPage {
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
.RPage {
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
.recomen {
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
.re_conten {
  display: grid;
  grid-template-columns: 200px auto;
  column-gap: 10px;
  justify-items: stretch;
  align-items: center;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 5px;
}
</style>
