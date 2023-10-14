<script setup>
import Header_box_central from '../central/Box_menu_central.vue'
</script>

<template>
  <!-- แถบ ภาพ  -->
  <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="carousel-image-container">
          <img
            src="https://scontent.fbkk29-7.fna.fbcdn.net/v/t1.15752-9/387333797_1385648352371015_4182642729400666643_n.png?_nc_cat=108&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGWqVd7Y9I1-dFucZUSsaQRPBFhAiRQXXo8EWECJFBdenDAhdIJ64HTmHXsxAkYIune1iJLaxQN0wkW8hhkgCcg&_nc_ohc=8eP6kDHHeWgAX-5sjcJ&_nc_ht=scontent.fbkk29-7.fna&oh=03_AdRGTE2WetFycY6OdS3Uq32bIuRJMlH3AQZ77UUAYthLfQ&oe=6550879D"
            class="d-block w-100"
            style="filter: brightness(110%)"
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
          <h5 class="display-3">ภาคกลาง</h5>
          <p class="h4">
            กรุงเทพมหานคร อมรรัตนโกสินทร์ มหินทรายุธยา มหาดิลก ภพนพรัตน์ ราชธานี บุรีรมย์
            อุดมราชนิเวศน์ มหาสถาน อมรพิมานอวตารสถิต สักกะทัตติยะ วิษณุกรรมประสิทธิ์ (กรุงเทพมหานคร)
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- แถบ Menu  -->
  <Header_box_central></Header_box_central>

  <!--กิจกรรมที่น่าสนใจ-->
  <div class="container">
    <h1 class="conTitle_central"><strong>คาเฟ่น่าเที่ยวที่ไม่ควรพลาด!!</strong></h1>
    <hr />
    <div class="container_all_central">
      <!--box1 รูปท่างซ้าย-->
      <div class="LPage_central">
        <div class="Limg_central">
          <img
            src="https://img.wongnai.com/p/1600x0/2021/04/30/b5e78ff0a3c3471988b39546b26f7cea.jpg"
            class="imgBow_central"
          />
        </div>
        <div class="container_text_central">
          <h5 class="h3"><strong>Billybillies Cafe and Workshop Studio</strong></h5>
          <p class="textConten_central">
            ร้าน "Billybillies" คาเฟ่ติดริมถนนใหญ่ปลายทางเดินลง BTS สถานีแบริง ร้านโทนสีขาวและน้ำตาล
            ให้ความรู้สึกถึงบรรยากาศแบบอังกฤษย้อนยุค กลิ่นอายความอบอุ่นและเพลย์ลิสต์ดี ๆ
            ในวันหยุดทางร้านจะมีกิจกรรม Workshop ดี ๆ ทั้งทำเคสมือถือ ทำเทียนหอม และอื่น ๆ
            อีกมากมายให้เข้าร่วมกันด้วย
          </p>
          <a class="btnLink_central" href="https://www.wongnai.com/news/cafe-workshop?ref=ct">
            แสดงข้อมูลเพิ่มเติม</a
          >
        </div>
      </div>
      <!--box 2รูปขวา-->
      <div class="RPage_central">
        <div class="container_text_central">
          <h5 class="h3"><strong>NAHIM Cafe x Handcraft</strong></h5>
          <p class="textConten_central">
            เมนูเด็ดทางร้านคือ “วาฟเฟิลบราวนี” ร้อน ๆ เสิร์ฟพร้อมไอศกรีมเย็น ๆ ไม่หวานเกิน
            กับครีมสดที่ไม่เลี่ยนเลย หวานละมุนหอมละไม บรรยากาศในร้านเรียกว่าถ่ายรูปสวยทุกมุม
            มีตุ๊กตาน่ารัก ๆ ให้หยิบมาถ่ายรูปได้ งานคราฟท์ก็น่ารัก ได้ยางรัดผมตัวอัลปาก้ามาครอบครอง
            ราคาก็ไม่แพง นั่งชิลได้สบาย ๆ คนมาตลอด แต่ไม่แน่นมาก ไม่วุ่นวาย ใครว่าง ๆ
            มาเรียนทำโดนัทน่ารัก ๆ ที่นี่ได้ มีการสอนแต่งหน้าคุกกี้น่ารัก ๆ ด้วย
          </p>
          <a class="btnLink" href="https://www.wongnai.com/news/cafe-workshop?ref=ct">
            แสดงข้อมูลเพิ่มเติม</a
          >
        </div>
        <div class="Rimg_central">
          <img
            src="https://img.wongnai.com/p/1600x0/2021/04/30/4ede52a8efb04cf0838a1cd34c67b5ba.jpg"
            class="imgBow_central"
          />
        </div>
      </div>
      <!--box3 รูปท่างซ้าย-->
      <div class="LPage_central">
        <div class="Limg_central">
          <img
            src="https://img.wongnai.com/p/800x0/2021/04/30/dba4a10c7baf4d4180c3637056752e13.jpg"
            class="imgBow_central"
          />
        </div>

        <div class="container_text_central">
          <h5 class="h3"><strong>Sane Cafe and Workshop</strong></h5>
          <p class="textConten_central">
            คาเฟ่ขนมไทย "เสน่ห์" รอบนี้เค้าย้ายร้านมาอยู่ถนนอิสรภาพแล้วนะคะ
            สามารถเข้าได้ทั้งจากทางถนนอิสรภาพ หรือถนนเพชรเกษมก็ได้ค่ะมีที่จอดรถเยอะค่ะ
            “ขนมเหนียวดังโงะ” เป็นขนมเหนียวแบบไทย ๆ เสิร์ฟในรูปแบบดังโงะญี่ปุ่น อร่อยค่ะ ชอบมาก
            “ขนมเปียกปูนกะทิสด” รสชาติหวานกำลังดีเลยค่ะ ใครสนใจทำขนมไทย ที่ร้านมีสอนทำขนมไทยด้วยนะคะ
          </p>
          <a class="btnLink_central" href="https://www.wongnai.com/news/cafe-workshop?ref=ct">
            แสดงข้อมูลเพิ่มเติม</a
          >
        </div>
      </div>
      <!--box4รูปขวา-->
      <div class="RPage_central">
        <div class="container_text_central">
          <h5 class="h3"><strong>The KAFE' by Mha art & craft</strong></h5>
          <p class="textConten_central">
            คาเฟ่เท่ ๆ ที่เต็มไปด้วยกาแฟคุณภาพ พร้อมทั้งมี Workshop
            การทำเครื่องหนังให้เอาไปใช้กันได้ยาว ๆ ทั้งกระเป๋า และเครื่องหนังอื่น ๆ เพียบ
          </p>
          <a class="btnLink_central" href="https://www.wongnai.com/news/cafe-workshop?ref=ct">
            แสดงข้อมูลเพิ่มเติม</a
          >
        </div>
        <div class="Rimg_central">
          <img
            src="https://img.wongnai.com/p/800x0/2021/04/30/c1d5946cd4794b248a834c14f5222637.jpg"
            class="imgBow_central"
          />
        </div>
      </div>

      <!--box5 รูปท่างซ้าย-->
      <div class="LPage_central">
        <div class="Limg_central">
          <img
            src="https://img.wongnai.com/p/800x0/2021/04/30/d83f26a70533423996102cc72f6d7138.jpg"
            class="imgBow_central"
          />
        </div>
        <div class="container_text_central">
          <h5 class="h3"><strong>April Trees Cafe</strong></h5>
          <p class="textConten_central">
            คาเฟ่จากคุณเต็งหนึ่ง ที่มีการเปิดสอนทำเค้กสุดน่ารักทุกเดือน
            แถมยังมีคาเฟ่ให้ได้นั่งพักผ่อนเพลิน ๆ เค้กก็เป็นเอกลักษณ์มาก
          </p>
          <a class="btnLink_central" href="hhttps://www.wongnai.com/news/cafe-workshop?ref=ct">
            แสดงข้อมูลเพิ่มเติม</a
          >
        </div>
      </div>
      <!--box6รูปขวา-->
      <div class="RPage_central">
        <div class="container_text_central">
          <h5 class="h3"><strong>A clay cafe</strong></h5>
          <p class="textConten_central">
            คาเฟ่น่ารัก ๆ ที่เต็มไปด้วยงานปั้นเซรามิคหลากหลายรูปแบบ ซึ่งเป็นทั้งภาชนะ ของตกแต่ง
            และของกระจุกจิกให้ซื้อกลับ แถมยังมี workshop สอนปั้นเซรามิคสำหรับผู้ที่สนใจด้วยค่ะ
            เมนูมีทั้งอาหาร ของหวาน เครื่องดื่ม โดยอาหารจะมีไม่มากไม่ถึง 10 เมนู
            เป็นเมนูจานเดียวง่าย ๆ อย่างข้าวหมูตุ๋น พาสต้า ขนมปังหน้าผักโขมอบชีส
            ส่วนของหวานค่อนข้างเยอะมีทั้งเบเกอรี ขนมเปี๊ยะ ขนมไทยอย่างขนมต้ม และไอศกรีมโฮมเมดหลายรส
          </p>
          <a class="btnLink_central" href="https://www.wongnai.com/news/cafe-workshop?ref=ct">
            แสดงข้อมูลเพิ่มเติม</a
          >
        </div>
        <div class="Rimg_central">
          <img
            src="https://img.wongnai.com/p/800x0/2021/04/30/3fb72c92b17242d8939af6500271d596.jpg"
            class="imgBow_central"
          />
        </div>
      </div>
    </div>
  </div>
  <a
    class="btnLink_central blockquote d-grid gap-2 col-5 mx-auto"
    href="https://www.wongnai.com/news/cafe-workshop"
    style="width: 36%"
  >
    อ้างอิงมาจาก https://www.wongnai.com/news/cafe-workshop</a
  >
</template>
<style scoped>
.container_all_central {
  display: block;
  grid-template-columns: 1fr;
  justify-items: stretch;
  align-items: stretch;
  row-gap: 1px;
}
.textTitle_central {
  color: white;
  text-align: center;
  font-size: x-large;
}
.conTitle_central {
  text-align: center;
  margin-inline: 300px;
  border-bottom: 2px solid;
}
.Limg_central {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
}
.Rimg_central {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
}
.imgBow_central {
  max-width: 280px;
  margin: 10px;
}
.imgBow1_central {
  max-width: 280px;
  height: 260px;
  margin: 10px;
}
.LPage_central {
  display: grid;
  grid-template-columns: 240px auto;
  column-gap: 50px;
  justify-items: stretch;
  margin-inline: 170px;
  margin-block: 25px;
  width: 1000px;
  border-bottom: 2px solid;
}
.RPage_central {
  display: grid;
  grid-template-columns: auto 300px;
  column-gap: 20px;
  justify-items: stretch;
  margin-inline: 170px;
  margin-block: 25px;
  width: 1000px;
  border-bottom: 2px solid;
}
.container_text_central {
  padding: 40px;
}
.textConten_central {
  padding: 20px;
  width: 600px;
}
.btnLink_central {
  background-color: black;
  text-decoration: none;
  color: white;
  padding: 5px;
}
</style>
