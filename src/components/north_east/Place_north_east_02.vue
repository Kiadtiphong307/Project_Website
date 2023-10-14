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
          src="https://scontent.fbkk29-9.fna.fbcdn.net/v/t1.15752-9/369839227_1475009400009377_5314507570066498479_n.png?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeH26qB3kbadeFWiu65Q9ADYgoOPJqi1JdSCg48mqLUl1NIWdAUuEhf_iOE5qni5tlQLs4rq2UvebmeAFWlWRYiI&_nc_ohc=3qT4T542LyoAX8MHGGn&_nc_ht=scontent.fbkk29-9.fna&oh=03_AdQ3WoeYGmPjokfrzQYTQGzOtjylypLSP1Hi-T4dRD1YmQ&oe=6551B0BE"
          class="d-block w-100"
          style="filter: brightness(95%)"
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
        <h5 class="display-3">วนอุทยานภูบ่อบิด</h5>
        <p class="h4">วนอุทยานภูบ่อบิด อ.เมือง จ.เลย</p>
      </div>
    </div>
  </div>
  <!-- แถบ menu -->
  <Header_box_north_east></Header_box_north_east>
  <!-- แถบ เนื้อหา -->
  <!-- box รูปซ้าย -->
  <div class="container">
    <div class="LPage_Place_north_east_02">
      <img
        src="http://i-san.tourismthailand.org/wp-content/uploads/2018/12/9283229714e07ffa9e510de121a8e72013b91357-715x475.jpg"
        class="imgBow_Place_north_east_02"
      />
      <div class="container_text_Place_north_east_02">
        <h2 class="display-5">วนอุทยานภูบ่อบิด</h2>
        <p class="h5">
          ภูบักบิด หรือ ภูบ่บิด เป็นภูเขาเล็กๆ อยู่ห่างจากจังหวัดเลย 1 กิโลเมตร
          ด้วยระยะทางที่ใกล้จากตัวเมือง จึงนับเป็น ‘หอชมทะเลหมอกใจกลางเมือง’ หนึ่งเดียวในประเทศไทย
          แถมยังเป็นขวัญใจของนักวิ่ง ในการเวียนมาฝึกซ้อมยามเช้ากันอยู่บ่อยๆ
        </p>
      </div>
    </div>
    <!--box รูปขวา-->
    <div class="RPage_Place_north_east_02">
      <div class="container_text_Place_north_east_02">
        <p class="h5">
          ด้วยระยะทางเดินสู่จุดยอดที่พอเรียกเหงื่อได้กำลังดี เมื่อแลกกับวิวสวยๆ ที่ปลายทางแล้ว
          การพิชิตยอดภูบ่อบิดเพื่ออากาศบริสุทธิ์ พร้อมชมดวงอาทิตย์ท่ามกลางทะเลหมอกยามเช้า
          จัดว่าเป็นอะไรที่คุ้มค่าแก่การเดินทางมาสัมผัสหมอกกลางเมือง ณ ที่แห่งนี้
        </p>
        <a href="https://travel.trueid.net/detail/kW22p6w5JexW" class="btn_cart_Place_north_east_02">อ่านเพิ่มเติม...</a>
      </div>
      <img
        src="https://s.isanook.com/tr/0/ud/286/1434209/t2.jpg?ip/resize/w728/q80/jpg"
        class="imgBow_Place_north_east_02"
      />
    </div>

    <!-- สิ่งของแนะนำขาย -->
    <h1 class="textcenter_Place_north_east_02"><strong>อุปกรณ์ที่ควรเอาไป</strong></h1>
    <div class="recomen_Place_north_east_02">
      <div class="re_conten_Place_north_east_02" v-for="(i, index) in item_advice_north_east_02_all" :key="index">
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
.btn_cart_Place_north_east_02 {
  padding: 5px;
  color: white;
  text-decoration: none;
  background-color: black;
  border-radius: 5px;
}
.btn_cart_Place_north_east_02:hover {
  padding: 8px;
  color: white;
  text-decoration: none;
  background-color: rgb(4, 60, 203);
  border-radius: 5px;
}
.LPage_Place_north_east_02 {
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
.RPage_Place_north_east_02 {
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
.imgBow_Place_north_east_02 {
  max-width: 880px;
  margin: 10px;
}
.container_text_Place_north_east_02 {
  padding: 5px;
}
.recomen_Place_north_east_02 {
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
.re_conten_Place_north_east_02 {
  display: grid;
  grid-template-columns: 200px auto;
  column-gap: 10px;
  justify-items: stretch;
  align-items: center;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 5px;
}
.textcenter_Place_north_east_02 {
  text-align: center;
  margin-inline: 430px;
  border-bottom: 2px solid;
}
</style>
