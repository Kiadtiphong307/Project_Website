<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-1.fna.fbcdn.net/v/t1.15752-9/370233718_627819136101384_3813810973368825864_n.png?_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEEqmi6JyRR184cLnKfHur1qZER5Z6JX4ipkRHlnolfiDmh7ARp6-B50Zmjh40a7ta6uAPKUMFNCk08nJifMDoB&_nc_ohc=MMf0keR-5FUAX-uZYal&_nc_ht=scontent.fbkk29-1.fna&oh=03_AdSYKKe1CDajp6cVMD0vPQNrJsiW1WjO7LITlu4N517nxA&oe=6552F43C"
          class="d-block w-100"
          style="filter: brightness(75%)"
          maxheight="500px"
        />
      </div>
      <div class="carousel-caption d-none d-md-block" style="padding-bottom: 9rem">
        <h5 class="display-3">อุทยานธรรมเขานาในหลวง</h5>
        <p class="h4">อุทยานธรรมชาติที่สวยและงดงามเหมาะแก่การมาเยี่ยมชม ซักครั้ง</p>
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_south></Header_box_south>

  <!-- แถบ เนื้อหา -->

  <!-- box รูปซ้าย -->
  <div class="container_s1">
    <div class="LPage_s1">
      <img
        src="https://s.isanook.com/tr/0/ud/281/1409765/ghf.jpg"
        class="imgBow_s1"
          />
        <div style="margin-block: 10px">
        <h5 class="card-title"><strong>อุทยานธรรมเขานาในหลวง</strong></h5>
            <p class="textConten_s1">
              อุทยานธรรมเขานาในหลวง เป็นสำนักสงฆ์ที่สร้างขึ้นด้วยพลังศรัทธาของชาวบ้าน
              สถานที่แห่งนี้เป็นที่รู้จักจากความวิจิตรของประตูพุทธวดี หรือซุ้มประตูแห่งกาลเวลา
              ถือเป็นไฮไลต์อันแสนงดงามยามเมื่อแสงเช้าตกกระทบ ก่อนจะต่อยอดพลังศรัทธา
              ด้วยการสร้างเจดีย์ร้อยยอดพันองค์ เจดีย์ลอยฟ้าพุทธศิลาวดี เจดีย์ลอยฟ้าพุทธราชาวดี
              ทำให้ปัจจุบันสถานที่แห่งนี้เป็นเหมือนสวรรค์บนดิน โดยเฉพาะยามทะเลหมอกที่สวยงามอย่างมาก
              และเจดีย์แต่ละองค์จะดูคล้ายกับลอยอยู่บนก้อนเมฆ เป็นภาพอุทยานธรรมลอยฟ้าที่ดูตื่นตา
              และน่าอัศจรรย์ใจ นักท่องเที่ยวสามารถเดินทางมาชมความมหัศจรรย์ได้ตลอดทั้งปี
            </p>
          </div>
        </div>

    <!--box รูปขวา-->
    <div class="RPage_s1">
      <div>
        <p class="textConten_s1">
              ตามประวัติของพื้นที่บริเวณเขานาในคือ มีกลุ่มชาวบ้านราว 40 คน อพยพจาก อ.ชะอวด
              จ.นครศรีธรรมราช เข้ามาตั้งรกรากครั้งแรกในปี พ.ศ. 2518
              ซึ่งขณะนั้นพื้นที่บริเวณเขานาในอยู่ภายใต้การครอบครองของพรรคคอมมิวนิสต์แห่งประเทศไทย
              กลุ่มชาวบ้านจึงส่งตัวแทนเข้าเจรจาเพื่อขออยู่อาศัยและบุกเบิกพื้นที่ทำมาหากิน
              ต่อมาชาวบ้านจากพื้นที่อื่นๆ ทราบข่าวจึงทยอยตามเข้ามาสมทบ
              ก่อนที่พรรคคอมมิวนิสต์จะยุติบทบาทการสู้รบกับรัฐบาลไทยลงในปี พ.ศ. 2525
              ชุมชนจึงได้ขยายตัว มีการก่อตั้งวัด โรงเรียน สถานีอนามัย พัฒนาระบบสาธารณูปโภคขึ้น
              รวมถึงอุทยานธรรมที่สวยงาม สงบ และร่มรื่นแห่งนี้
            </p>
            <a class="btn_cart_s1" href="https://www.thairath.co.th/lifestyle/travel/thaitravel/2708365 "
        >อ่านเพิ่มเติม...</a>
          </div>
          <div class="Rimg_s1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj1cUue3D_2rl_1uYCb1eHUdQrp5LspIrMiA&usqp=CAU"
            class="imgBow_s1"
          />
        </div>
      </div>

    <!-- สิ่งของแนะนำขาย -->
    <h1 style="text-align: center">สิ่งที่ควรเตรียมไป</h1>
    <hr />

    <div class="recomen_s1">
      <div
        class="re_conten_s1"
        style="max-width: 1500px"
        v-for="(i, index) in item_advice_south_01_all"
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
  .container_s1{
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: center;
  }
  .btn_cart_s1 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart_s1:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage_s1 {
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
  .RPage_s1 {
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
  .imgBow_s1 {
    max-width: 880px;
    margin: 10px;
  }
  .recomen_s1 {
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
  .re_conten_s1 {
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
  .container_s1 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }
  .btn_cart_s1 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart_s1:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage_s1 {
    display: grid;
    grid-template-columns: 300px auto;
    column-gap: 10px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .RPage_s1 {
    display: grid;
    grid-template-columns: auto 300px;
    column-gap: 1px;
    justify-items: stretch;
    align-items: center;
    max-width: 800px;
    border-bottom: 2px solid;
  }
  .imgBow_s1 {
    max-width: 880px;
    margin: 10px;
  }
  .textConten_s1 {
    padding: 20px;
    height: 100px;
    width: 400px;
    overflow: auto;
  }
  .recomen_s1 {
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
  .re_conten_s1 {
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
  .container_s1 {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    justify-items: center;
    align-items: stretch;
  }

  .btn_cart_s1 {
    padding: 5px;
    color: white;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
  }
  .btn_cart_s1:hover {
    padding: 8px;
    color: white;
    text-decoration: none;
    background-color: rgb(4, 60, 203);
    border-radius: 5px;
  }
  .LPage_s1 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    border-bottom: 2px solid;
    margin-block: 5px;
    max-width: 300px;
  }
  .RPage_s1 {
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
  .imgBow_s1 {
    max-width: 90%;
    margin: 10px;
  }
  .textConten_s1 {
    padding: 20px;
    height: 150px;
    width: 300px;
    overflow: auto;
  }
  .recomen_s1 {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    align-items: stretch;
    row-gap: 2px;
    column-gap: 2px;
    margin-block: 10px;
    max-width: 600px;
  }
  .re_conten_s1 {
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
import { item_advice_south_01Store } from '../south/index_south'

const item_advice_south_01 = item_advice_south_01Store()
const item_advice_south_01_all = ref(item_advice_south_01.item_advice_south_list_01)
</script>
