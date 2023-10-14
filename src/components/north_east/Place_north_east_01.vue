<script setup>
import Header_box_north_east from '../north_east/Box_menu_north_east.vue'
import { ref } from 'vue'
import { item_advice_north_east_01Store } from '../north_east/index_north_east'

const item_advice_north_east_01 = item_advice_north_east_01Store()
const item_advice_north_east_01_all = ref(item_advice_north_east_01.item_advice_north_east_list_01)
</script>
<template>
  <!-- แถบ ภาพ  -->
<<<<<<< HEAD
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-4.fna.fbcdn.net/v/t1.15752-9/369839227_321589403887549_4908643948762714837_n.png?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeH5YqxtzRUW0106g4ZikZR7GNNklM_pVQIY02SUz-lVAvUuyZmnAate2_rzHEfj1_e8mOFJunn638trjotlS0wi&_nc_ohc=nirydHTTkSAAX920wQM&_nc_ht=scontent.fbkk29-4.fna&oh=03_AdRqA3EsZgJsRBrRhYGHRhFsDdcYwUvFRnuGquFFb4b6Tw&oe=65517D9B"
          class="d-block w-100"
          style="filter: brightness(90%)"
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
        <h2 class="display-3">มอหินขาว</h2>
        <p class="h4">มอหินขาว อ.เมือง จ.ชัยภูมิ</p>
      </div>
=======
  <div class="imgTitle">
    <div class="textTitle">
      <h2>มอหินขาว</h2>
      <p>มอหินขาว อ.เมือง จ.ชัยภูมิ</p>
>>>>>>> 32499d83f8092f54d95143793e6d1c214b14840a
    </div>
  </div>
  <!-- แถบ menu -->
  <Header_box_north_east></Header_box_north_east>
  <!-- แถบ เนื้อหา -->
  <!-- box รูปซ้าย -->
  <div class="container">
    <div class="LPage_Place_north_east_01">
      <img src="https://img.kapook.com/u/2015/suppaporn/morhinkaow/chang02.jpg" class="imgBow_Place_north_east_01" />
      <div class="container_text">
        <h2 class="display-5">มอหินขาว</h2>
        <p class="h5">
          แหล่งท่องเที่ยวสุดอันซีน ที่ตั้งอยู่ในเขตอุทยานแห่งชาติภูแลนคา มีจุดเด่นที่เสาหินยักษ์ 5
          ก้อน ที่หลายคนบอกว่า คล้ายกับ “สโตนเฮนจ์” ประเทศอังกฤษ
          และจะยิ่งสวยงามขึ้นแบบทวีคูณในช่วงฤดูฝน
          เพราะนอกจากนักเดินทางจะได้ชมประติมากรรมธรรมชาติของเสาหินแล้ว
          ยังจะได้ชื่นชมดอกไม้ที่กำลังบานสะพรั่งทั่วมอหินขาว
        </p>
      </div>
    </div>

    <!--box รูปขวา-->
    <div class="RPage_Place_north_east_01">
      <div class="container_text">
        <div class="card-body">
          <p class="h5">
            นอกจากนี้ยังมีกลุ่มหินที่น่าสนใจอื่นๆ ได้แก่ หินเจดีย์โขลงช้าง ลานหินต้นไทร
            และจุดชมวิวผาหัวนาค ส่วนหากชอบการแคมปิ้งและดูดาว บริเวณมอหินขาวก็ถือว่า เป็นจุดชมดวงดาว
            และทางช้างเผือกที่ควรค่าแก่การมาเยี่ยมเยือน
          </p>
          <a href="https://travel.trueid.net/detail/kW22p6w5JexW" class="btn_cart_Place_north_east_01">อ่านเพิ่มเติม...</a>
        </div>
      </div>
      <img src="https://img.kapook.com/u/2015/suppaporn/morhinkaow/mor04.jpg" class="imgBow_Place_north_east_01" />
    </div>

    <!-- สิ่งของแนะนำขาย -->
    <h1 class="textcenter_Place_north_east_01"><strong>อุปกรณ์ที่ควรเอาไป</strong></h1>
    <div class="recomen_Place_north_east_01">
      <div class="re_conten_Place_north_east_01" v-for="(i, index) in item_advice_north_east_01_all" :key="index">
        <div>
          <div class="card">
            <img :src="i.img" />
          </div>
        </div>
        <div class="re_text">
          <h5>{{ i.name }}</h5>
          <p>{{ i.category }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.textcenter_Place_north_east_01 {
  text-align: center;
  margin-inline: 430px;
  border-bottom: 2px solid;
}
.btn_cart_Place_north_east_01 {
  padding: 5px;
  color: white;
  text-decoration: none;
  background-color: black;
  border-radius: 5px;
}
.btn_cart_Place_north_east_01:hover {
  padding: 8px;
  color: white;
  text-decoration: none;
  background-color: rgb(4, 60, 203);
  border-radius: 5px;
}
.LPage_Place_north_east_01 {
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
.RPage_Place_north_east_01 {
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
.imgBow_Place_north_east_01 {
  max-width: 880px;
  margin: 10px;
}
.container{
  padding: 5px;
}
.textConten {
  padding: 20px;
  width: 500px;
}
.recomen_Place_north_east_01 {
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
.re_conten_Place_north_east_01 {
  display: grid;
  grid-template-columns: 200px auto;
  column-gap: 10px;
  justify-items: stretch;
  align-items: center;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 5px;
}
</style>
