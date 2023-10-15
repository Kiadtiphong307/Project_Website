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
          src="https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.15752-9/369839227_1475009400009377_5314507570066498479_n.png?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeECgD6oouxO75BHSKBHLRPRgoOPJqi1JdSCg48mqLUl1J16rPr29s0V9wf3Sy3qR4jga00KTaPf4qU0Hk4rAqsO&_nc_ohc=xu2btCxRle4AX_BFRor&_nc_ht=scontent.fbkk3-2.fna&_nc_e2o=f&oh=03_AdRk9B0Q7AbaMdfWPo5N-CyewvXsY1GrA6eBVka_-p-cVQ&oe=65533A7E"
          class="d-block w-100"
          style="filter: brightness(75%);max-height: 500px;"
        />
      </div>
      <div class="carousel-caption d-none d-md-block">
      <h5 class="display-3">วนอุทยานภูบ่อบิด</h5>
      <p>วนอุทยานภูบ่อบิด อ.เมือง จ.เลย</p>
    </div>
    </div>
  </div>
  <!-- แถบ menu -->
  <Header_box_north_east></Header_box_north_east>
  <!-- แถบ เนื้อหา -->
  <!-- box รูปซ้าย -->
  <div class="container-ne2">
    <div class="LPage-ne2">
      <img
        src="http://i-san.tourismthailand.org/wp-content/uploads/2018/12/9283229714e07ffa9e510de121a8e72013b91357-715x475.jpg"
        class="imgBow"
      />
      <div style="margin-block: 10px;">
        <h2 class="card-title">วนอุทยานภูบ่อบิด</h2>
        <p class="textConten-ne2">
          ภูบักบิด หรือ ภูบ่บิด เป็นภูเขาเล็กๆ อยู่ห่างจากจังหวัดเลย 1 กิโลเมตร
          ด้วยระยะทางที่ใกล้จากตัวเมือง จึงนับเป็น ‘หอชมทะเลหมอกใจกลางเมือง’ หนึ่งเดียวในประเทศไทย
          แถมยังเป็นขวัญใจของนักวิ่ง ในการเวียนมาฝึกซ้อมยามเช้ากันอยู่บ่อยๆ
        </p>
        
      </div>
    </div>
    <!--box รูปขวา-->
    <div class="RPage-ne2">
      <div>
        <p class="textConten-ne2">
          ด้วยระยะทางเดินสู่จุดยอดที่พอเรียกเหงื่อได้กำลังดี เมื่อแลกกับวิวสวยๆ ที่ปลายทางแล้ว
          การพิชิตยอดภูบ่อบิดเพื่ออากาศบริสุทธิ์ พร้อมชมดวงอาทิตย์ท่ามกลางทะเลหมอกยามเช้า
          จัดว่าเป็นอะไรที่คุ้มค่าแก่การเดินทางมาสัมผัสหมอกกลางเมือง ณ ที่แห่งนี้
        </p>
        <a href="https://www.thairath.co.th/lifestyle/travel/thaitravel/2707158?fbclid=IwAR3356QAvipXvkzqSUgrqKeF6hIL5rJUPkup_WlOEcK-n3myanYsqNhyAAA" class="btn_cart-ne4">อ่านเพิ่มเติม</a>
      </div>
      <img
        src="https://s.isanook.com/tr/0/ud/286/1434209/t2.jpg?ip/resize/w728/q80/jpg"
        class="imgBow"
      />
    </div>

    <!-- สิ่งของแนะนำขาย -->
    <h1 style="text-align: center">สิ่งที่ควรเตรียมไป</h1>
    <div class="recomen-ne2">
      <div class="re_conten-ne2" v-for="(i, index) in item_advice_north_east_02_all" :key="index">
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
@media (min-width: 1030px) {
  .container-ne2 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: center;
  }
  .btn_cart-ne2 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart-ne2:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage-ne2 {
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
  .RPage-ne2 {
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
  .recomen-ne2 {
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
  .re_conten-ne2 {
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
  .container-ne2 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }
  .btn_cart-ne2 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart-ne2:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage-ne2 {
    display: grid;
    grid-template-columns: 300px auto;
    column-gap: 10px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .RPage-ne2 {
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
  .textConten-ne2 {
    padding: 20px;
    height: 100px;
    width: 400px;
    overflow: auto;
  }
  .recomen-ne2 {
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
  .re_conten-ne2 {
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
  .container-ne2 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }
  .btn_cart-ne2 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart-ne2:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage-ne2 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    border-bottom: 2px solid;
    margin-block: 5px;
    max-width: 300px;
  }
  .RPage-ne2 {
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
    max-width: 100%;
    margin: 10px;
  }
  .textConten-ne2 {
    padding: 20px;
    height: 200px;
    width: 300px;
    overflow: auto;
  }
  .recomen-ne2 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    align-items: stretch;
    row-gap: 2px;
    column-gap: 2px;
    margin-block: 10px;
    max-width: 600px;
  }
  .re_conten-ne2 {
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
