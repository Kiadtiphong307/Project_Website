<script setup>
import Header_box_east from '../east/Box_menu_east.vue'
</script>

<template>
  <!-- แถบ ภาพ  -->
  <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="carousel-image-container">
                <img
                  src="https://scontent.fbkk29-8.fna.fbcdn.net/v/t1.15752-9/370132029_694877935910078_4630516151446266638_n.png?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHnRGwXxteffFGdN7uqoKHTBa7Sp3zjodEFrtKnfOOh0XUiALPiRMmJm2oLB-ysbSNa7_QaqBmRPLiiEfUatVtI&_nc_ohc=osRxPM8t7WEAX9Xc1ar&_nc_ht=scontent.fbkk29-8.fna&oh=03_AdQdznH5Lwi5rh9itqWrLn2Pem2M7jawZ456cooCIlv6Rg&oe=6550BF8F"
                  class="d-block w-100"
                  style="filter: brightness(63%)"
                  height="450"
                />
              </div>

              <div class="carousel-caption d-none d-md-block" style="padding-bottom: 9rem">
                <h5 class="display-3">ภาคตะวันออก</h5>
                <p class="h4">
                  นํ้าตกลือเลื่อง เมืองผลไม้ พริกไทยพันธุ์ดี อัญมณีมากเหลือ เสื่อจันทบูร
                  สมบูรณ์ธรรมชาติ สมเด็จพระเจ้าตากสินกู้ชาติ รวมญาติที่จันทบุรี
                  (คำขวัญประจำจังหวัดจังหวัดจันทบุรี)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- แถบ Menu  -->
  <Header_box_east></Header_box_east>

  <!--กิจกรรมที่น่าสนใจ-->
  <div class="container">
    <h1 class="conTitle_east"><strong>สถานที่ท่องเที่ยวที่น่าสนใจของภาคตะวันออก</strong></h1>
    <hr />
    <div class="container_all_east">
      <!--box1 รูปท่างซ้าย-->
      <div class="LPage_east">
        <div class="Limg_east">
            <img
              src="https://cms.dmpcdn.com/travel/2019/06/12/a8503e91-5131-4ee5-b812-8aa971e91ab3_original.JPG"
              class="imgBow1_east"
            />
          </div>
          <div class="container_text_east">
            <div class="card-body">
              <h5 class="h3"><strong>Hom's House บ้านของหอม ขนมไทย</strong></h5>
              <p class="cardtext_east">
                วันนี้ข้าจักพาพวกเจ้ามากินขนมไทย ที่ Hom's House บ้านของหอมขนมไทย เรือนหลังน้อยๆ
                ย่านบางแสน เป็นทั้งคาเฟ่ และร้านดอกไม้
                กับเมนูขนมไทยที่เห็นก็รับรู้ได้เลยว่าประณีตแค่ไหน
              </p>
                  <a class="btnLink_east" href=" https://www.facebook.com/ourhomshouse"
                    >แสดงข้อมูลเพิ่มเติม</a>
          </div>
        </div>
      </div>
      <!--box2 รูปขวา-->
      <div class="RPage_east">
        <div class="container_text_east">
              <h5 class="h3"><strong>Moon Diner</strong></h5>
              <p class="cardtext_east">
                พาสายปาร์ตี้มาย้อนวันวานไปกับ MOON DINER บาร์เปิดใหม่ สีสันจัดจ้าน
                เหมือนโผล่ไปสัมผัสอีกมิติในยุค 50s เฟอร์นิเจอร์ในร้านเป็นสไตล์อเมริกันวินเทจ~
                เก็บทุกรายละเอียด โซฟา เคาน์เตอร์ เหมือนในหนังเลย พร้อมอาหาร และเครื่องดื่มอีกเพียบ
                เริ่มไม่แน่ใจแล้วว่านี่บาร์หรือสตูดิโอ มีมุมถ่ายรูปเท่ๆ มากมายพร้อมบริการคุณ
              </p>
                  <a class="btnLink_east" href=" https://www.facebook.com/MOON-DINER"
                    >แสดงข้อมูลเพิ่มเติม</a
                  >
            </div>
          <div class="Rimg_east">
            <img
              src="https://cms.dmpcdn.com/travel/2019/06/12/e98262f7-a047-4578-a8e0-b592a73e6d1f_original.JPG"
              class="imgBow_east"
              alt="..."
            />
          </div>
        </div>
      <!--box3 รูปท่างซ้าย-->
      <div class="LPage_east">
        <div class="Limg_east">
            <img
              src="https://cms.dmpcdn.com/travel/2019/06/12/3513c19f-133b-4b5a-b054-2eda486c7c40_original.JPG"
              class="imgBow_east"
            />
          </div>
          <div class="container_text_east">
              <h5 class="h3"><strong>To Die For Coffee</strong></h5>
              <p class="cardtext_east">
                ไปเที่ยวทะเลกันดีกว่าา~ ชิคๆ คูลๆ แถวบางแสนเนอะ To Die For Coffee - Bangsaen
                ตั้งอยู่ในโรงแรม Wheeler Bed & Bike - Bangsaen เท่ทั้งตัวร้านกาแฟ และตัวโรงแรมเลย
                แถมบาริสต้ายังโอปป้าไปอีกก ดี๊ดีย์~ มาพร้อมกับ Key Message ว่า “ตายไม่ได้
                ถ้ายังไม่ได้มา”
              </p>
                  <a class="btnLink_east" href=" https://www.facebook.com/ToDieForCoffee"
                    >แสดงข้อมูลเพิ่มเติม</a>
            </div>
          </div>
      <!--box4 รูปขวา-->
      <div class="RPage_east">
        <div class="container_text_east">
              <h5 class="h3"><strong>Babycha</strong></h5>
              <p class="cardtext_east">
                ร้านชานมไข่มุกน้องใหม่ Babycha นี่ร้านชาไข่มุกงายยย ไม่ใช่สตูดิโอ~
                สูตรพิเศษจากคุณแม็ก Aussanai Arunkiri เพื่อเอาใจคนรักชาไข่มุกอย่างเต็มที่
                มาพร้อมกับชาหลากหลายรสชาติ และท็อปปิ้งอีกเพียบ บริการตัวเองได้เลยน้าา ตักไข่มุกเอง
                กดชาเอง
              </p>
                  <a class="btnLink_east" href="https://www.facebook.com/Babycha">
                    แสดงข้อมูลเพิ่มเติม</a>
            </div>
          <div class="Rimg_east">
            <img
              src="https://cms.dmpcdn.com/travel/2019/06/12/ab104e65-f297-4af9-9c11-275a898e4b52_original.JPG"
              class="imgBow_east"
            />
          </div>
        </div>
      <!--box5 รูปท่างซ้าย-->
      <div class="LPage_east">
        <div class="Limg_east">
            <img
              src="https://cms.dmpcdn.com/travel/2019/06/12/e9f3c8bd-7615-4ecc-8117-a53dcd3e0020_original.JPG"
              class="imgBow_east"
            />
          </div>
          <div class="container_text_east">
              <h5 class="h3"><strong>Cakery Patisseries Boutique Café</strong></h5>
              <p class="cardtext_east">
                คาเฟ่ท่ามกลางธรรมชาติอย่าง Cakery Patisseries Boutique Cafe’ คิดว่าอยู่ในเทพนิยาย
                รู้สึกเหมือนตัวเองเป็นเจ้าหญิงเลยจ๊าาาา~ ตัวร้านตกแต่งน่าร๊ากกก มีดอกไม้อยู่ทุกๆ มุม
                สีสันพาสเทลมาก น่ารักไปจนถึงเมนูเครื่องดื่ม และขนม
              </p>
                  <a
                  class="btnLink_east"
                    href="https://www.facebook.com/CakeryPatisseriesBoutiqueCafe"
                    >แสดงข้อมูลเพิ่มเติม</a>
            </div>
          </div>
      <!--box6 รูปขวา-->
      <div class="RPage_east">
        <div class="container_text_east">
              <h5 class="h3"><strong>3 of H</strong></h5>
              <p class="cardtext_east">
                3 of H คาเฟ่สายชิลแบบสโลว์ไลฟ์ ท่ามกลางแหล่งชุมชน อะ แต่มีที่จอดรถเด้ออ!! เช้าๆ
                แบบนี้กาแฟสักแก้วมะ? ของกินเล่นกินจริงเยอะแยะเลย ที่สำคัญราคามิตรภาพสุดๆ
                หรือจะเอาโน้ตบุ้คมานั่งทำงานก็ได้ ปลั้กเพียบ เจ้าของร้านใจดี
                มีแมวน้อยตัวจิ๋วแวะมาเล่นเป็นเพื่อนไม่มีเหงาแน่นอน
              </p>
                  <a class="btnLink_east" href=" https://www.facebook.com/3-of-H">
                    แสดงข้อมูลเพิ่มเติม</a>
            </div>
          <div class="Rimg_east">
            <img
              src="https://cms.dmpcdn.com/travel/2019/06/12/0d6c2c93-a727-4198-9e8f-074a92fab95f_original.JPG"
              class="imgBow_east"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
    <a class="btnLink_east blockquote d-grid gap-2 col-5 mx-auto" href="https://food.trueid.net/detail/rOJdP09gGWXj"
    style="width: 35%"
      >อ้างอิงมาจาก https://food.trueid.net/detail/rOJdP09gGWXj</a>
</template>
<style scoped>
.h4 {
  font-family: Arial, Helvetica, sans-serif;
}
.display-3{
  font-family: 'Gill Sans', sans-serif;
}
.textcenter {
  text-align: center;
  margin-inline: 400px;
  border-bottom: 2px solid;
}
.cardtext_east {
  font-size: 17px;
}
.container_all_east {
  display: block;
  grid-template-columns: 1fr;
  justify-items: stretch;
  align-items: stretch;
  row-gap: 1px;
}
.textTitle {
  color: white;
  text-align: center;
  font-size: x-large;
}
.conTitle_east {
  text-align: center;
  margin-inline: 200px;
  border-bottom: 2px solid;
}
.Limg_east {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
}
.Rimg_east {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
}
.imgBow_east {
  max-width: 280px;
  margin: 10px;
}
.imgBow1_east {
  max-width: 280px;
  height: 260px;
  margin: 10px;
}
.LPage_east {
  display: grid;
  grid-template-columns: 240px auto;
  column-gap: 50px;
  justify-items: stretch;
  margin-inline: 170px;
  margin-block: 25px;
  width: 1000px;
  border-bottom: 2px solid;
}
.RPage_east {
  display: grid;
  grid-template-columns: auto 300px;
  column-gap: 20px;
  justify-items: stretch;
  margin-inline: 170px;
  margin-block: 25px;
  width: 1000px;
  border-bottom: 2px solid;
}
.container_text_east {
  padding: 40px;
}
.textConten {
  padding: 20px;
  width: 600px;
}
.btnLink_east {
  background-color: black;
  text-decoration: none;
  color: white;
  padding: 5px;
}
</style>
