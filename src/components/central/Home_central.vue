<script setup>
import Header_box_central from '../central/Box_menu_central.vue'
</script>

<!-- comment -->
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
                  src="https://roijang.com/wp-content/uploads/2023/07/shutterstock_299388287-1.jpg"
                  class="d-block w-100"
                  alt="..."
                  height="450"
                />
              </div>

              <div class="carousel-caption d-none d-md-block">
                <h5 class="display-3">ภายในมีองค์พระประธานปางนาคปรกแกะสลักจากไม้สักทองทั้งองค์</h5>
                <p class="h4">
                  กรุงเทพมหานคร อมรรัตนโกสินทร์ มหินทรายุธยา มหาดิลก ภพนพรัตน์ ราชธานี บุรีรมย์
                  อุดมราชนิเวศน์ มหาสถาน อมรพิมานอวตารสถิต สักกะทัตติยะ วิษณุกรรมประสิทธิ์
                  (กรุงเทพมหานคร)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- แถบ Menu  -->
  <Header_box_central></Header_box_central>

  <!--กิจกรรมที่น่าสนใจ-->
  <div class="container">
    <h1 class="textcenter"><strong>สถานที่ท่องเที่ยวที่น่าสนใจของภาคกลาง</strong></h1>
    <hr />
    <div class="container_all">
      <!--box1 รูปท่างซ้าย-->
      <div class="card mb-3" style="max-width: 1500px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://img.wongnai.com/p/1600x0/2021/04/30/b5e78ff0a3c3471988b39546b26f7cea.jpg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="h3"><strong>Billybillies Cafe and Workshop Studio</strong></h5>
              <p class="cardtext">
                ร้าน "Billybillies" คาเฟ่ติดริมถนนใหญ่ปลายทางเดินลง BTS สถานีแบริง
                ร้านโทนสีขาวและน้ำตาล ให้ความรู้สึกถึงบรรยากาศแบบอังกฤษย้อนยุค
                กลิ่นอายความอบอุ่นและเพลย์ลิสต์ดี ๆ ในวันหยุดทางร้านจะมีกิจกรรม Workshop ดี ๆ
                ทั้งทำเคสมือถือ ทำเทียนหอม และอื่น ๆ อีกมากมายให้เข้าร่วมกันด้วย
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  <a class="btn btn-dark" href="https://www.wongnai.com/news/cafe-workshop?ref=ct">
                    แสดงข้อมูลเพิ่มเติม</a
                  ></small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--box 2รูปขวา-->
      <div class="card mb-3" style="max-width: 1500px">
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="h3"><strong>NAHIM Cafe x Handcraft</strong></h5>
              <p class="cardtext">
                เมนูเด็ดทางร้านคือ “วาฟเฟิลบราวนี” ร้อน ๆ เสิร์ฟพร้อมไอศกรีมเย็น ๆ ไม่หวานเกิน
                กับครีมสดที่ไม่เลี่ยนเลย หวานละมุนหอมละไม บรรยากาศในร้านเรียกว่าถ่ายรูปสวยทุกมุม
                มีตุ๊กตาน่ารัก ๆ ให้หยิบมาถ่ายรูปได้ งานคราฟท์ก็น่ารัก
                ได้ยางรัดผมตัวอัลปาก้ามาครอบครอง ราคาก็ไม่แพง นั่งชิลได้สบาย ๆ คนมาตลอด
                แต่ไม่แน่นมาก ไม่วุ่นวาย ใครว่าง ๆ มาเรียนทำโดนัทน่ารัก ๆ ที่นี่ได้
                มีการสอนแต่งหน้าคุกกี้น่ารัก ๆ ด้วย
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  <a class="btn btn-dark" href="https://www.wongnai.com/news/cafe-workshop?ref=ct">
                    แสดงข้อมูลเพิ่มเติม</a
                  ></small
                >
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <img
              src="https://img.wongnai.com/p/1600x0/2021/04/30/4ede52a8efb04cf0838a1cd34c67b5ba.jpg"
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
              src="https://img.wongnai.com/p/800x0/2021/04/30/dba4a10c7baf4d4180c3637056752e13.jpg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="h3"><strong>Sane Cafe and Workshop</strong></h5>
              <p class="cardtext">
                คาเฟ่ขนมไทย "เสน่ห์" รอบนี้เค้าย้ายร้านมาอยู่ถนนอิสรภาพแล้วนะคะ
                สามารถเข้าได้ทั้งจากทางถนนอิสรภาพ หรือถนนเพชรเกษมก็ได้ค่ะมีที่จอดรถเยอะค่ะ
                “ขนมเหนียวดังโงะ” เป็นขนมเหนียวแบบไทย ๆ เสิร์ฟในรูปแบบดังโงะญี่ปุ่น อร่อยค่ะ ชอบมาก
                “ขนมเปียกปูนกะทิสด” รสชาติหวานกำลังดีเลยค่ะ ใครสนใจทำขนมไทย
                ที่ร้านมีสอนทำขนมไทยด้วยนะคะ
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  <a class="btn btn-dark" href="https://www.wongnai.com/news/cafe-workshop?ref=ct">
                    แสดงข้อมูลเพิ่มเติม</a
                  ></small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--box4รูปขวา-->
      <div class="card mb-3" style="max-width: 1500px">
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="h3"><strong>The KAFE' by Mha art & craft</strong></h5>
              <p class="cardtext">
                คาเฟ่เท่ ๆ ที่เต็มไปด้วยกาแฟคุณภาพ พร้อมทั้งมี Workshop
                การทำเครื่องหนังให้เอาไปใช้กันได้ยาว ๆ ทั้งกระเป๋า และเครื่องหนังอื่น ๆ เพียบ
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  <a class="btn btn-dark" href="https://www.wongnai.com/news/cafe-workshop?ref=ct">
                    แสดงข้อมูลเพิ่มเติม</a
                  ></small
                >
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <img
              src="https://img.wongnai.com/p/800x0/2021/04/30/c1d5946cd4794b248a834c14f5222637.jpg"
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
              src="https://img.wongnai.com/p/800x0/2021/04/30/d83f26a70533423996102cc72f6d7138.jpg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="h3"><strong>April Trees Cafe</strong></h5>
              <p class="cardtext">
                คาเฟ่จากคุณเต็งหนึ่ง ที่มีการเปิดสอนทำเค้กสุดน่ารักทุกเดือน
                แถมยังมีคาเฟ่ให้ได้นั่งพักผ่อนเพลิน ๆ เค้กก็เป็นเอกลักษณ์มาก
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  <a class="btn btn-dark" href="hhttps://www.wongnai.com/news/cafe-workshop?ref=ct">
                    แสดงข้อมูลเพิ่มเติม</a
                  ></small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--box6รูปขวา-->
      <div class="card mb-3" style="max-width: 1500px">
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="h3"><strong>A clay cafe</strong></h5>
              <p class="cardtext">
                คาเฟ่น่ารัก ๆ ที่เต็มไปด้วยงานปั้นเซรามิคหลากหลายรูปแบบ ซึ่งเป็นทั้งภาชนะ ของตกแต่ง
                และของกระจุกจิกให้ซื้อกลับ แถมยังมี workshop สอนปั้นเซรามิคสำหรับผู้ที่สนใจด้วยค่ะ
                เมนูมีทั้งอาหาร ของหวาน เครื่องดื่ม โดยอาหารจะมีไม่มากไม่ถึง 10 เมนู
                เป็นเมนูจานเดียวง่าย ๆ อย่างข้าวหมูตุ๋น พาสต้า ขนมปังหน้าผักโขมอบชีส
                ส่วนของหวานค่อนข้างเยอะมีทั้งเบเกอรี ขนมเปี๊ยะ ขนมไทยอย่างขนมต้ม
                และไอศกรีมโฮมเมดหลายรส
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  <a class="btn btn-dark" href="https://www.wongnai.com/news/cafe-workshop?ref=ct">
                    แสดงข้อมูลเพิ่มเติม</a
                  ></small
                >
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <img
              src="https://img.wongnai.com/p/800x0/2021/04/30/3fb72c92b17242d8939af6500271d596.jpg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <small class="text-body-secondary">
    <a class="btn btn-outline-secondary" href="https://www.wongnai.com/news/cafe-workshop">
      แสดงข้อมูลเพิ่มเติม</a
    ></small
  >
</template>
<style scoped>
.h4 {
  font-family: Arial, Helvetica, sans-serif;
}
.display-3 {
  font-family: 'Gill Sans', sans-serif;
}
.textcenter {
  text-align: center;
  margin-inline: 350px;
  border-bottom: 2px solid;
}
.cardtext {
  font-size: 17px;
}
</style>
