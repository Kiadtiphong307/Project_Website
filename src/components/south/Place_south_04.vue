<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-5.fna.fbcdn.net/v/t1.15752-9/370195101_3494696777458128_5337590874790048784_n.png?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFA3pmRikZOzNxT4C0RQgH9Ge27SkHY884Z7btKQdjzzhb3WfbB1sNUF0Z4eOtjrZikCwwTntTBrqA-kKGiWe8i&_nc_ohc=MAg0lQmfUCEAX_VO-91&_nc_oc=AQmbmVrlvkVUgfRr0XqPVZYZLbFgz1gpWbR4YgaQOjt4bXS5MyIaADy4dWdDM91AsRQ&_nc_ht=scontent.fbkk29-5.fna&oh=03_AdQm7ruga96BXmK5gDvVudpKHQhtqc7H2RS0mRoEzg1e-w&oe=6551476C"
          class="d-block w-100"
          style="filter: brightness(75%)"
          height="450"
        />
      </div>
      <div class="carousel-caption d-none d-md-block" style="padding-bottom: 9rem">
        <h5 class="display-3">หินพับผ้า</h5>
        <p class="h4">หินพับผ้า อ.ขนอม จ.นครศรีธรรมราช</p>
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_south></Header_box_south>

  <!-- แถบ เนื้อหา -->

  <!-- box รูปซ้าย -->
  <div class="container">
    <div class="LPage_Place_south_04">
          <img
            src="https://us-fbcloud.net/wb/data/1404/1404632-img.vhyt8p.1beii.jpg"
            class="imgBow_Place_south_04"
          />
          <div class="container_text_Place_south_04">
            <h5 class="display-5" style="font-size: 2.2rem;"><strong>หินพับผ้า</strong></h5>
            <p class="h5" style="font-size: 1rem;">
              ผาหินรูปร่างแปลกตาที่พบเห็นได้บริเวณกลางทะเลขนอม
              เป็นปรากฏการณ์ทางธรณีวิทยาที่มีอยู่เพียงน้อยแห่งบนโลกใบนี้
              มีลักษณะเป็นแผ่นหินซ้อนเรียงกันเป็นชั้นๆ
              ซึ่งแต่ละจุดจะดูสวยงามแตกต่างกันตามแต่จะจินตนาการ โดยชาวต่างชาติเรียกปรากฏการณ์นี้ว่า
              ‘Pancake Rock’ ส่วนคนไทยรู้จักกันในชื่อ ‘หินพับผ้า’
            </p>
          </div>
        </div>


    <!--box รูปขวา-->
    <div class="RPage_Place_south_04">
      <div class="container_text_Place_south_04">
            <p class="h5" style="font-size: 1rem;">
              เพราะดูคล้ายกับผ้าที่พับซ้อนกันเป็นชั้นๆ เป็นความมหัศจรรย์ของธรรมชาติเมืองคอน
              ซึ่งนักท่องเที่ยวสามารถเช่าเรือจากชุมชนแหลมประทับ
              เพื่อมาเที่ยวชมพิพิธภัณฑ์ธรรมชาติแห่งนี้ได้ตลอดวัน
              สามารถเดินทางมาชมชั้นหินได้ตลอดทั้งปี ทั้งนี้ขึ้นอยู่กับ ลม ฟ้า และอากาศ
              แต่ช่วงที่แนะนำ คือ เดือนมกราคม-เมษายน
            </p>
            <a class="btn_cart_Place_south_04" href="https://travel.trueid.net/detail/kW22p6w5JexW"
        >อ่านเพิ่มเติม...</a>
          </div>
          <img
            src="https://www.unseennewchapters.com/img/nakhonsithammarat-detail-banner-m.1dc559e7.jpg"
            class="imgBow_Place_south_04"
          />
        </div>
    <!-- สิ่งของแนะนำขาย -->
    <!-- ตาเขียว -->
    <h1 class="textcenter_Place_south_04"><strong>อุปกรณ์ที่ควรเอาไป</strong></h1>
    <hr />

    <div class="recomen_Place_south_04">
      <div
        class="re_conten_Place_south_04"
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
.textcenter_Place_south_04 {
  text-align: center;
  margin-inline: 430px;
  border-bottom: 2px solid;
}
.btn_cart_Place_south_04 {
  padding: 5px;
  color: white;
  text-decoration: none;
  background-color: black;
  border-radius: 5px;
}
.btn_cart_Place_south_04:hover {
  padding: 8px;
  color: white;
  text-decoration: none;
  background-color: rgb(4, 60, 203);
  border-radius: 5px;
}
.LPage_Place_south_04 {
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
.RPage_Place_south_04 {
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
.imgBow_Place_south_04 {
  max-width: 880px;
  margin: 10px;
}
.container_text_Place_south_04 {
  padding: 5px;
}
.textConten_Place_south_04 {
  padding: 20px;
  width: 500px;
}
.recomen_Place_south_04 {
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
.re_conten_Place_south_04 {
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
