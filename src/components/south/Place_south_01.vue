<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-1.fna.fbcdn.net/v/t1.15752-9/370233718_627819136101384_3813810973368825864_n.png?_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEEqmi6JyRR184cLnKfHur1qZER5Z6JX4ipkRHlnolfiDmh7ARp6-B50Zmjh40a7ta6uAPKUMFNCk08nJifMDoB&_nc_ohc=MMf0keR-5FUAX-uZYal&_nc_ht=scontent.fbkk29-1.fna&oh=03_AdT91cJ-cauj2yC0bex95cJUL4bVN5t8KWveWcXkYYAkxg&oe=6551323C"
          class="d-block w-100"
          style="filter: brightness(85%)"
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
        <h5 class="display-3">อุทยานธรรมเขานาในหลวง อ.พนม จ.สุราษฎร์ธานี</h5>
        <p class="h4">อุทยานธรรมชาติที่สวยและงดงามเหมาะแก่การมาเยี่ยมชม ซักครั้ง</p>
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_south></Header_box_south>

  <!-- แถบ เนื้อหา -->

  <!-- box รูปซ้าย -->
  <div class="container">
    <div class="LPage_Place_south_01">
      <img src="https://s.isanook.com/tr/0/ud/281/1409765/ghf.jpg" class="imgBow_Place_south_01" />
      <div class="container_text_Place_south_01">
        <h5 class="display-5"><strong>อุทยานธรรมเขานาในหลวง อ.พนม จ.สุราษฎร์ธานี</strong></h5>
        <p class="h5">
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
    <div class="RPage_Place_south_01">
      <div class="container_text_Place_south_01">
        <p class="h5">
          ตามประวัติของพื้นที่บริเวณเขานาในคือ มีกลุ่มชาวบ้านราว 40 คน อพยพจาก อ.ชะอวด
          จ.นครศรีธรรมราช เข้ามาตั้งรกรากครั้งแรกในปี พ.ศ. 2518
          ซึ่งขณะนั้นพื้นที่บริเวณเขานาในอยู่ภายใต้การครอบครองของพรรคคอมมิวนิสต์แห่งประเทศไทย
          กลุ่มชาวบ้านจึงส่งตัวแทนเข้าเจรจาเพื่อขออยู่อาศัยและบุกเบิกพื้นที่ทำมาหากิน
          ต่อมาชาวบ้านจากพื้นที่อื่นๆ ทราบข่าวจึงทยอยตามเข้ามาสมทบ
          ก่อนที่พรรคคอมมิวนิสต์จะยุติบทบาทการสู้รบกับรัฐบาลไทยลงในปี พ.ศ. 2525 ชุมชนจึงได้ขยายตัว
          มีการก่อตั้งวัด โรงเรียน สถานีอนามัย พัฒนาระบบสาธารณูปโภคขึ้น รวมถึงอุทยานธรรมที่สวยงาม
          สงบ และร่มรื่นแห่งนี้
        </p>
        <a class="btn_cart_Place_south_01" href="https://travel.trueid.net/detail/kW22p6w5JexW"
          >อ่านเพิ่มเติม...</a
        >
      </div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj1cUue3D_2rl_1uYCb1eHUdQrp5LspIrMiA&usqp=CAU"
        class="imgBow_Place_south_01"
      />
    </div>

    <!-- สิ่งของแนะนำขาย -->
    <h1 class="textcenter_Place_south_01"><strong>อุปกรณ์ที่ควรเอาไป</strong></h1>
    <hr />

    <div class="recomen_Place_south_01">
      <div
        class="re_conten_Place_south_01"
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
.textcenter_Place_south_01 {
  text-align: center;
  margin-inline: 430px;
  border-bottom: 2px solid;
}
.btn_cart_Place_south_01 {
  padding: 5px;
  color: white;
  text-decoration: none;
  background-color: black;
  border-radius: 5px;
}
.btn_cart_Place_south_01:hover {
  padding: 8px;
  color: white;
  text-decoration: none;
  background-color: rgb(4, 60, 203);
  border-radius: 5px;
}
.LPage_Place_south_01 {
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
.RPage_Place_south_01 {
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
.imgBow_Place_south_01 {
  max-width: 880px;
  margin: 10px;
}
.container_text_Place_south_01 {
  padding: 5px;
}
.textConten {
  padding: 20px;
  width: 500px;
}
.recomen_Place_south_01 {
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
.re_conten_Place_south_01 {
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
import { item_advice_south_01Store } from '../south/index_south'

const item_advice_south_01 = item_advice_south_01Store()
const item_advice_south_01_all = ref(item_advice_south_01.item_advice_south_list_01)
</script>
