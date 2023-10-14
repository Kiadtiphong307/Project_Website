<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-8.fna.fbcdn.net/v/t1.15752-9/387549372_3644979035771922_6084315774217730756_n.png?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeF470lLJah9CON3rv3uqiI1y8TcxksfG8TLxNzGSx8bxKup_v7a-Tgr8jYv5Ynf9mjNUWIPCtL5cmWCU0G7Ir-R&_nc_ohc=iEXUXmv6HIkAX9VIHyM&_nc_ht=scontent.fbkk29-8.fna&oh=03_AdR8eQgfPSMxjU3W_-O9-_TjryVl_rk41Z-FyDW3WJXKWg&oe=6550AB7E"
          class="d-block w-100"
          style="filter: brightness(87%)"
          :height="'450'"
        />
      </div>
      <div class="carousel-caption d-none d-md-block" style="padding-bottom: 9rem">
        <h5 class="display-3">วัดทางสาย</h5>
        <p class="h4">วัดทางสาย อ.บางสะพาน จ.ประจวบคีรีขันธ์</p>
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_central></Header_box_central>

  <!-- แถบ เนื้อหา -->

  <!-- box รูปซ้าย -->
  <div class="container">
    <div class="LPage_Place_central_05">
          <img
            src="https://www.paiduaykan.com/travel/wp-content/uploads/2021/04/11-DSC_9601-768x515.jpg"
            class="imgBow_Place_central_05"
          />
        <div class="container_text_Place_central_05">
            <h5 class="display-5"><strong>วัดทางสาย</strong></h5>
            <p class="h5">
              “พระมหาธาตุเจดีย์ภักดีประกาศ” เป็นเจดีย์ที่ได้รับพระราชทานชื่อจากในหลวงรัชกาลที่ 9
              ถือเป็นสถาปัตยกรรมที่น่าเลื่อมใส
              เนื่องจากเจดีย์แห่งนี้สร้างขึ้นโดยไม่มีการใช้งบจากทางราชการ
              แต่สร้างขึ้นจากพลังศรัทธาอันยิ่งใหญ่ของมวลชนที่มีต่อพระมหากษัตริย์
              เพื่อเป็นการเฉลิมพระเกียรติ และถวายเป็นพระราชกุศลโดยเฉพาะในวโรกาสครองราชย์ครบรอบ 50 ปี
              ตัวอาคาร 5 ชั้น คือการครองราชย์ครบ 50 ปี ส่วนเจดีย์หมู่ 9 องค์
              หมายถึงวัดประจำรัชกาลที่ 9
            </p>
          </div>
        </div>


    <!--box รูปขวา-->
    <div class="container">
      <div class="LPage_Place_central_05">
          <img
            src="https://www.paiduaykan.com/travel/wp-content/uploads/2021/04/13-SON08053-768x512.jpg"
            class="imgBow_Place_central_05"
          />
          <div class="container_text_Place_central_05">
            <p class="h5">
              นอกจากความงดงามของที่มาที่ไปแล้ว ด้านบนของเจดีย์ยังเป็นสุดยอดจุดชมวิวดวงอาทิตย์ขึ้น
              และตกแห่งเมืองประจวบ
              ซึ่งเราสามารถมองเห็นความสวยงามของชายหาดบ้านกรูดและทิวมะพร้าวได้ไกลสุดสายตา
            </p>
            <a class="btn_cart_Place_central_05" href="https://travel.trueid.net/detail/kW22p6w5JexW"
        >อ่านเพิ่มเติม...</a>
          </div>
        </div>
      </div>

    <!-- สิ่งของแนะนำขาย -->
    <h1 class="textcenter_Place_central_05"><strong>อุปกรณ์ที่ควรเอาไป</strong></h1>
    <hr />

    <div class="recomen_Place_central_05">
      <div
        class="re_conten_Place_central_05"
        style="max-width: 1500px"
        v-for="(i, index) in item_advice_central_03_all"
        :key="index"
      >
      <div>
      <div class="card">
            <img :src="i.img" class="img-fluid rounded-start" alt="..." />
          </div>
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
.textcenter_Place_central_05 {
  text-align: center;
  margin-inline: 430px;
  border-bottom: 2px solid;
}
.btn_cart_Place_central_05 {
  padding: 5px;
  color: white;
  text-decoration: none;
  background-color: black;
  border-radius: 5px;
}
.btn_cart_Place_central_05:hover {
  padding: 8px;
  color: white;
  text-decoration: none;
  background-color: rgb(4, 60, 203);
  border-radius: 5px;
}
.LPage_Place_central_05 {
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
.RPage_Place_central_05 {
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
.imgBow_Place_central_05 {
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
.recomen_Place_central_05 {
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
.re_conten_Place_central_05 {
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
import Header_box_central from '../central/Box_menu_central.vue'

import { ref } from 'vue'
import { item_advice_central_03Store } from '../central/index_central'

const item_advice_central_03 = item_advice_central_03Store()
const item_advice_central_03_all = ref(item_advice_central_03.item_advice_central_list_03)
</script>
