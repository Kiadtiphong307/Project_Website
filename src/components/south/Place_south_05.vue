<template>
  <!-- แถบ ภาพ  -->
  <!-- น้องเอิร์ธ -->
  <!-- น้องบอส -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-8.fna.fbcdn.net/v/t1.15752-9/387526729_659544962634980_3737299389350029963_n.png?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEvqZHGc2qOeQMk0FMcgWoTuF6EJxiB6x24XoQnGIHrHSOx66cjkg4aOijGZXHBhh3wzEAVRblMRNedKcYwwrgh&_nc_ohc=cD-Inw3stjkAX88wmmM&_nc_ht=scontent.fbkk29-8.fna&oh=03_AdS7kFfgJzdZuKUZS1y0EansxUckTbjy5QXjM5LuNBh8ZA&oe=65530C8F"
          class="d-block w-100"
          style="filter: brightness(75%)"
          maxheight="500px"
        />
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
  <div class="container_s5">
    <div class="LPage_s5">
          <img
            src="https://api.tourismthailand.org/upload/live/article_desktop_cover_image/22069-22036.png"
            class="imgBow_s5"
          />
        <div style="margin-block: 10px">
      <h5 class="card-title"><strong>เกาะตะรุเตา</strong></h5>
            <p class="textConten_s5">
              ตะรุเตา เกาะที่เต็มไปด้วยตำนานและคำบอกเล่า ทั้งขุมสมบัติ ถ้ำลับ โจรสลัด สัตว์ร้าย
              หรือแม้กระทั่งต้นไม้มีพิษ แต่ในคำบอกเล่าสุดแฟนตาซี ถือว่ายังมีเค้าโครงจากเรื่องจริง
              ด้วยเป็นเกาะขนาดใหญ่ที่มีภูมิประเทศหลากหลาย แถมยังเงียบสงบ
              จึงไม่แปลกหากตะรุเตาจะเต็มไปด้วยพืชพรรณแปลกๆ
            </p>
          </div>
        </div>

    <!--box รูปขวา-->
    <div class="RPage_s5">
      <div>
        <p class="textConten_s5">
              รวมถึงสัตว์หายาก และหากใครชอบศึกษาประวัติศาสตร์ จะรู้ว่านอกจากธรรมชาติและชายหาดสวยๆ
              แล้ว บนเกาะแห่งนี้ยังมีสถานที่ท่องเที่ยวทางประวัติศาสตร์มากมาย
              โดยเฉพาะสถานกักกันตัวนักโทษ ซึ่งท้ายสุดแล้วกลายเป็นที่มาของตำนาน “โจรสลัดแห่งตะรุเตา”
              เรื่องเล่าที่ถูกนำไปสร้างเป็นภาพยนตร์และนวนิยายมาแล้วหลายต่อหลายครั้ง
              ช่วงเวลาที่เกาะตะรุเตาเปิดให้นักท่องเที่ยวเข้ามาผจญภัย คือ
              เดือนตุลาคม-เดือนพฤษภาคมของทุกปี
            </p>
            <a class="btn_cart_s5" href="https://www.thairath.co.th/lifestyle/travel/thaitravel/2708365">อ่านเพิ่มเติม...</a>
          </div>
          <div class="Rimg_s5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSi9X8L0bIZHzQ8zC91gTxHCPecr-YwJ8hUQ&usqp=CAU"
            class="imgBow_s5"
          />
        </div>
        </div>

    <!-- สิ่งของแนะนำขาย -->
    <h1 style="text-align: center">สิ่งที่ควรเตรียมไป</h1>
    <hr />

    <div class="recomen_s5">
      <div
        class="re_conten_s5"
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
@media (min-width: 1030px) {
  .container_s5 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: center;
  }

  .btn_cart_s5 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart_s5:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }

  .LPage_s5 {
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
  .RPage_s5 {
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
  .imgBow_s5 {
    max-width: 300px;
    margin: 10px;
  }
  .recomen_s5 {
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
  .re_conten_s5 {
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
  .container_s5 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }
  .btn_cart_s5 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart_s5:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage_s5 {
    display: grid;
    grid-template-columns: 300px auto;
    column-gap: 10px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .RPage_s5 {
    display: grid;
    grid-template-columns: auto 300px;
    column-gap: 1px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .imgBow_s5 {
    max-width: 250px;
    margin: 10px;
  }
  .textConten_s5 {
    padding: 20px;
    height: 100px;
    width: 400px;
    overflow: auto;
  }
  .recomen_s5 {
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
  .re_conten_s5 {
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
  .container_s5 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }

  .btn_cart_s5 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart_s5:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage_s5 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    border-bottom: 2px solid;
    margin-block: 5px;
    max-width: 300px;
  }
  .RPage_s5 {
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
  .imgBow_s5 {
    max-width: 90%;
    margin: 10px;
  }
  .textConten_s5 {
    padding: 20px;
    height: 150px;
    width: 300px;
    overflow: auto;
  }
  .recomen_s5 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    align-items: stretch;
    row-gap: 2px;
    column-gap: 2px;
    margin-block: 10px;
    max-width: 600px;
  }
  .re_conten_s5{
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
import Header_box_south from '../south/Box_menu_south.vue'

import { ref } from 'vue'
import { item_advice_south_02Store } from '../south/index_south'

const item_advice_south_02 = item_advice_south_02Store()
const item_advice_south_02_all = ref(item_advice_south_02.item_advice_south_list_02)
</script>
