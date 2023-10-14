<template>
  <!-- แถบ ภาพ  -->
  <!-- น้องเอิร์ธ -->
  <!-- น้องบอส -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-8.fna.fbcdn.net/v/t1.15752-9/387526729_659544962634980_3737299389350029963_n.png?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEvqZHGc2qOeQMk0FMcgWoTuF6EJxiB6x24XoQnGIHrHSOx66cjkg4aOijGZXHBhh3wzEAVRblMRNedKcYwwrgh&_nc_ohc=mFsB2bJPRp0AX-ZlrER&_nc_ht=scontent.fbkk29-8.fna&oh=03_AdTSwHKlf-UWMWKzQ-7GXDvxjg249Y5xHr0VX3UYbLE4VA&oe=65514A8F"
          class="d-block w-100"
          style="filter: brightness(97%)"
          height="450"
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
        <h5 class="display-3">เกาะตะรุเตา</h5>
        <p class="h4">เกาะตะรุเตา อ.เมือง จ.สตูล</p>
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_south></Header_box_south>

  <!-- แถบ เนื้อหา -->

  <!-- box รูปซ้าย -->
  <div class="container">
    <div class="LPage_Place_south_05">
          <img
            src="https://api.tourismthailand.org/upload/live/article_desktop_cover_image/22069-22036.png"
            class="imgBow_Place_south_05"
          />
          <div class="container_text_Place_south_05">
            <h5 class="display-5"><strong>เกาะตะรุเตา</strong></h5>
            <p class="h5">
              ตะรุเตา เกาะที่เต็มไปด้วยตำนานและคำบอกเล่า ทั้งขุมสมบัติ ถ้ำลับ โจรสลัด สัตว์ร้าย
              หรือแม้กระทั่งต้นไม้มีพิษ แต่ในคำบอกเล่าสุดแฟนตาซี ถือว่ายังมีเค้าโครงจากเรื่องจริง
              ด้วยเป็นเกาะขนาดใหญ่ที่มีภูมิประเทศหลากหลาย แถมยังเงียบสงบ
              จึงไม่แปลกหากตะรุเตาจะเต็มไปด้วยพืชพรรณแปลกๆ
            </p>
          </div>
        </div>

    <!--box รูปขวา-->
    <div class="container">
      <div class="LPage_Place_south_05">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSi9X8L0bIZHzQ8zC91gTxHCPecr-YwJ8hUQ&usqp=CAU"
            class="imgBow_Place_south_05"
          />
        <div class="container_text_Place_south_05">
            <p class="h5">
              รวมถึงสัตว์หายาก และหากใครชอบศึกษาประวัติศาสตร์ จะรู้ว่านอกจากธรรมชาติและชายหาดสวยๆ
              แล้ว บนเกาะแห่งนี้ยังมีสถานที่ท่องเที่ยวทางประวัติศาสตร์มากมาย
              โดยเฉพาะสถานกักกันตัวนักโทษ ซึ่งท้ายสุดแล้วกลายเป็นที่มาของตำนาน “โจรสลัดแห่งตะรุเตา”
              เรื่องเล่าที่ถูกนำไปสร้างเป็นภาพยนตร์และนวนิยายมาแล้วหลายต่อหลายครั้ง
              ช่วงเวลาที่เกาะตะรุเตาเปิดให้นักท่องเที่ยวเข้ามาผจญภัย คือ
              เดือนตุลาคม-เดือนพฤษภาคมของทุกปี
            </p>
            <a class="btn_cart_Place_south_05" href="https://travel.trueid.net/detail/kW22p6w5JexW"
        >อ้างอิงมาจาก</a>
          </div>
        </div>
      </div>

    <!-- สิ่งของแนะนำขาย -->
    <h1 class="textcenter_Place_south_05"><strong>อุปกรณ์ที่ควรเอาไป</strong></h1>
    <hr />

    <div class="recomen_Place_south_05">
      <div
      class="re_conten_Place_south_05"
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
.textcenter_Place_south_05 {
  text-align: center;
  margin-inline: 430px;
  border-bottom: 2px solid;
}
.btn_cart_Place_south_05{
  padding: 5px;
  color: white;
  text-decoration: none;
  background-color: black;
  border-radius: 5px;
}
.btn_cart_Place_south_05:hover {
  padding: 8px;
  color: white;
  text-decoration: none;
  background-color: rgb(4, 60, 203);
  border-radius: 5px;
}
.LPage_Place_south_05{
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
.RPage{
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
.imgBow_Place_south_05{
  max-width: 880px;
  margin: 10px;
}
.container_text_Place_south_05 {
  padding: 5px;
}
.textConten {
  padding: 20px;
  width: 500px;
}
.recomen_Place_south_05{
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
.re_conten_Place_south_05{
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
import Header_box_south from '../south/Box_menu_south.vue'

import { ref } from 'vue'
import { item_advice_south_02Store } from '../south/index_south'

const item_advice_south_02 = item_advice_south_02Store()
const item_advice_south_02_all = ref(item_advice_south_02.item_advice_south_list_02)
</script>
