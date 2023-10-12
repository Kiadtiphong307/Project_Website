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
                  src="https://s359.kapook.com//pagebuilder/037951b6-33c7-4130-a250-44ee7ee41a5e.jpg"
                  class="d-block w-100" alt="..." height="450"/>
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

              <div class="carousel-caption d-none d-md-block">
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
    <h1 class="textcenter"><strong>คาเฟ่ที่ไม่ควรพลาด!!</strong></h1>
    <hr />
    <div class="container_all">
      <!--box1 รูปท่างซ้าย-->
      <div class="card mb-3" style="max-width: 1500px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://cms.dmpcdn.com/travel/2019/06/12/a8503e91-5131-4ee5-b812-8aa971e91ab3_original.JPG"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="h3"><strong>Hom's House บ้านของหอม ขนมไทย</strong></h5>
              <p class="cardtext">
                วันนี้ข้าจักพาพวกเจ้ามากินขนมไทย ที่ Hom's House บ้านของหอมขนมไทย เรือนหลังน้อยๆ
                ย่านบางแสน เป็นทั้งคาเฟ่ และร้านดอกไม้
                กับเมนูขนมไทยที่เห็นก็รับรู้ได้เลยว่าประณีตแค่ไหน
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  <a class="btn btn-dark" href=" https://www.facebook.com/ourhomshouse">แสดงข้อมูลเพิ่มเติม</a></small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--box2 รูปขวา-->
      <div class="card mb-3" style="max-width: 1500px">
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="h3"><strong>Moon Diner</strong></h5>
              <p class="cardtext">
                พาสายปาร์ตี้มาย้อนวันวานไปกับ MOON DINER บาร์เปิดใหม่ สีสันจัดจ้าน
                เหมือนโผล่ไปสัมผัสอีกมิติในยุค 50s เฟอร์นิเจอร์ในร้านเป็นสไตล์อเมริกันวินเทจ~
                เก็บทุกรายละเอียด โซฟา เคาน์เตอร์ เหมือนในหนังเลย พร้อมอาหาร และเครื่องดื่มอีกเพียบ
                เริ่มไม่แน่ใจแล้วว่านี่บาร์หรือสตูดิโอ มีมุมถ่ายรูปเท่ๆ มากมายพร้อมบริการคุณ
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  <a class="btn btn-dark" href=" https://www.facebook.com/MOON-DINER">แสดงข้อมูลเพิ่มเติม</a></small
                >
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <img
              src="https://cms.dmpcdn.com/travel/2019/06/12/e98262f7-a047-4578-a8e0-b592a73e6d1f_original.JPG"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
        </div>
      </div>
      <!--box3 รูปท่างซ้าย-->
      <div class="card mb-3" style="max-width: 1500px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://cms.dmpcdn.com/travel/2019/06/12/3513c19f-133b-4b5a-b054-2eda486c7c40_original.JPG"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="h3"><strong>To Die For Coffee</strong></h5>
              <p class="cardtext">
                ไปเที่ยวทะเลกันดีกว่าา~ ชิคๆ คูลๆ แถวบางแสนเนอะ To Die For Coffee - Bangsaen
                ตั้งอยู่ในโรงแรม Wheeler Bed & Bike - Bangsaen เท่ทั้งตัวร้านกาแฟ และตัวโรงแรมเลย
                แถมบาริสต้ายังโอปป้าไปอีกก ดี๊ดีย์~ มาพร้อมกับ Key Message ว่า “ตายไม่ได้
                ถ้ายังไม่ได้มา”
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  <a class="btn btn-dark" href=" https://www.facebook.com/ToDieForCoffee">แสดงข้อมูลเพิ่มเติม</a></small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--box4 รูปขวา-->
      <div class="card mb-3" style="max-width: 1500px">
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="h3"><strong>Babycha</strong></h5>
              <p class="cardtext">
                ร้านชานมไข่มุกน้องใหม่ Babycha นี่ร้านชาไข่มุกงายยย ไม่ใช่สตูดิโอ~
                สูตรพิเศษจากคุณแม็ก Aussanai Arunkiri เพื่อเอาใจคนรักชาไข่มุกอย่างเต็มที่
                มาพร้อมกับชาหลากหลายรสชาติ และท็อปปิ้งอีกเพียบ บริการตัวเองได้เลยน้าา ตักไข่มุกเอง
                กดชาเอง
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  <a class="btn btn-dark" href="https://www.facebook.com/Babycha"> แสดงข้อมูลเพิ่มเติม</a></small
                >
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <img
              src="https://cms.dmpcdn.com/travel/2019/06/12/ab104e65-f297-4af9-9c11-275a898e4b52_original.JPG"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
        </div>
      </div>
      <!--box5 รูปท่างซ้าย-->
      <div class="card mb-3" style="max-width: 1500px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://cms.dmpcdn.com/travel/2019/06/12/e9f3c8bd-7615-4ecc-8117-a53dcd3e0020_original.JPG"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="h3"><strong>Cakery Patisseries Boutique Café</strong></h5>
              <p class="cardtext">
                คาเฟ่ท่ามกลางธรรมชาติอย่าง Cakery Patisseries Boutique Cafe’ คิดว่าอยู่ในเทพนิยาย
                รู้สึกเหมือนตัวเองเป็นเจ้าหญิงเลยจ๊าาาา~ ตัวร้านตกแต่งน่าร๊ากกก มีดอกไม้อยู่ทุกๆ มุม
                สีสันพาสเทลมาก น่ารักไปจนถึงเมนูเครื่องดื่ม และขนม
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  <a class="btn btn-dark" href="https://www.facebook.com/CakeryPatisseriesBoutiqueCafe"
                    >แสดงข้อมูลเพิ่มเติม</a
                  ></small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--box6 รูปขวา-->
      <div class="card mb-3" style="max-width: 1500px">
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="h3"><strong>3 of H</strong></h5>
              <p class="cardtext">
                3 of H คาเฟ่สายชิลแบบสโลว์ไลฟ์ ท่ามกลางแหล่งชุมชน อะ แต่มีที่จอดรถเด้ออ!! เช้าๆ
                แบบนี้กาแฟสักแก้วมะ? ของกินเล่นกินจริงเยอะแยะเลย ที่สำคัญราคามิตรภาพสุดๆ
                หรือจะเอาโน้ตบุ้คมานั่งทำงานก็ได้ ปลั้กเพียบ เจ้าของร้านใจดี
                มีแมวน้อยตัวจิ๋วแวะมาเล่นเป็นเพื่อนไม่มีเหงาแน่นอน
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  <a class="btn btn-dark" href=" https://www.facebook.com/3-of-H"> แสดงข้อมูลเพิ่มเติม</a></small
                >
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <img
              src="https://cms.dmpcdn.com/travel/2019/06/12/0d6c2c93-a727-4198-9e8f-074a92fab95f_original.JPG"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="d-grid gap-2 col-6 mx-auto">
  <a class="btn btn-outline-secondary" href="https://food.trueid.net/detail/rOJdP09gGWXj">ขอบคุณข้อมูล</a>
</div>
</template>
<style scoped>
.h4{
  font-family: Arial, Helvetica, sans-serif;
}
.display-3{
  font-family: "Gill Sans", sans-serif;
}
.textcenter{
  text-align: center;
  margin-inline: 400px;
  border-bottom: 2px solid;
}
.cardtext{
  font-size: 17px;
}
</style>