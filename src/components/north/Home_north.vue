<script setup>
import Header_box_north from '../north/box_menu_north.vue'
</script>

<template>
  <!-- แถบ ภาพ  -->
  <div class="imgTitle">
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
    <div class="textTitle">
      <h2>ภาคเหนือ</h2>
      <p>ดอยสุเทพเป็นศรี ประเพณีเป็นสง่า บุปผาชาติล้วนงามตา นามล้ำค่านครพิงค์</p>
    </div>
  </div>
  <!-- แถบ menu -->
  <Header_box_north></Header_box_north>
  <!--กิจกรรมที่น่าสนใจ-->
  <div class="container">
    <h1 class="conTitle">สถานที่ท่องเที่ยวที่น่าสนใจของภาคเหนือ</h1>
    <div class="container_all">
      <!--box1 รูปท่างซ้าย-->
      <div class="LPage">
        <div class="Limg">
          <img
            src="https://i.pinimg.com/564x/71/00/07/710007ceba5959aa2ecce3fc50bd8bda.jpg"
            class="imgBow1"
          />
        </div>
        <div class="container_text">
          <h5 class="card-title">
            ร่มบ่อสร้าง หมู่บ้านหัตถกรรมร่มบ่อสร้าง ต้นกำเนิดร่มสาน พร้อมเพ้นท์ร่มคันเดียวในโลก
            จังหวัดเชียงใหม่
          </h5>
          <p class="textConten">
            "เทศกาลร่มบ่อสร้าง" ที่สร้างชื่อเสียงให้กับจังหวัดเชียงใหม่ และนักท่องเที่ยว
            ทั้งชาวไทยและชาวต่างประเทศได้รู้จักกันในนามของหมู่บ้านที่มีงานผลิตร่ม
            และยังเปิดให้นักท่องเที่ยวและนักเดินทางสามารถสร้างสรรค์ร่มของตัวเองได้
          </p>
          <a
            href="https://www.museumthailand.com/th/3829/storytelling/%E0%B8%A3%E0%B9%88%E0%B8%A1%E0%B8%9A%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87/"
            class="btnLink"
          >
            แสดงข้อมูลเพิ่มเติม</a
          >
        </div>
      </div>
      <!--box 2รูปขวา-->
      <div class="RPage">
        <div class="container_text">
          <h5 class="card-title">
            พิพิธภัณฑ์เซรามิคธนบดี ต้นกำเนิดชามตราไก่ พร้อมเพ้นท์ชามใบเดียวในโลก จังหวัดลำปาง
          </h5>
          <p class="textConten">
            สำหรับการเข้าชมพิพิธภัณฑ์เซรามิคธนบดี
            ตั๋วเข้าชมสามารถเป็นส่วนลดในการซื้อของและเครื่องดื่มได้ด้วยค่ะ มีการจัดแบ่งเป็นรอบๆ
            ได้เดินชมทั่วโรงงานเลยค่ะ โดยหนึ่งรอบใช้เวลา 30 นาที มีวิทยากรบรรยายแนะนำ
            ประวัติความเป็นมาและต้นกำเนิดของชามไก่ให้เราได้ฟังกันอีกด้วย พร้อมทั้งมี workshop
            การเพ้นท์ชามตราไก่ใบเดียวในโลกอีกด้วยเจ้า
          </p>
          <a href="https://travel.trueid.net/detail/jBmnEnAj479N" class="btnLink">
            แสดงข้อมูลเพิ่มเติม</a
          >
        </div>
        <div class="Rimg">
          <img
            src="https://cms.dmpcdn.com/travel/2020/02/25/01688150-57b3-11ea-807f-0f499e2341ed_original.JPG"
            class="imgBow"
          />
        </div>
      </div>
      <!--box3 รูปท่างซ้าย-->
      <div class="LPage">
        <div class="Limg">
          <img
            src="https://cdn.chiangmainews.co.th/wp-content/uploads/2023/06/23115439/1687496079_016872-chiangmainews.jpg"
            class="imgBow"
          />
        </div>
        <div class="container_text">
          <h5 class="card-title">NatureTalk</h5>
          <p class="textConten">
            คาเฟ่บ้านดินขาวมีกิจกรรมที่น่าใจมากมายไม่ว่าจะเป็นการผสมสีจากธรรมชาติ หรือ
            การเรียนปั้นดินเผาและลงสี อันเดียวของโลก
          </p>
          <a
            href="https://www.museumthailand.com/th/3829/storytelling/%E0%B8%A3%E0%B9%88%E0%B8%A1%E0%B8%9A%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87/"
            class="btnLink"
          >
            แสดงข้อมูลเพิ่มเติม</a
          >
        </div>
      </div>
      <!--box 4 รูปขวา-->
      <div class="RPage">
        <div class="container_text">
          <h5 class="card-title">ZOHNG - PAINT in the Garden</h5>
          <p class="textConten">
            มีให้เลือกเยอะมากถึง 10 กิจกรรม เช่น การจัดดอกไม้สำหรับของขวัญวันพิเศษเพื่อให้คนพิเศษ
            จัดสรรได้เองตามความรู้สึก การทำน้ำหอมแฮนด์เมด ไม่ซ้ำใคร เพ้นท์ลวดลายตกแต่งตามใจชอบ
            ไม่มีพื้นฐานก็ทำได้
          </p>
          <a href="https://www.facebook.com/profile.php?id=100065022761841" class="btnLink">
            แสดงข้อมูลเพิ่มเติม</a
          >
        </div>
        <div class="Rimg">
          <img
            src="https://scontent.fbkk8-4.fna.fbcdn.net/v/t39.30808-6/348618170_266645379178657_7669838876589248207_n.jpg?stp=dst-jpg_p843x403&_nc_cat=104&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeGTgeok-q6B-RVt_txyhP6wTrO6xgDxZp5Os7rGAPFmniSa-iAXiW6afAfPB8dTV-iH_jSxRN8M7EUCPKW7AHg6&_nc_ohc=JoNcepoeIRIAX-G8NWn&_nc_ht=scontent.fbkk8-4.fna&oh=00_AfDnpMcgfZNbNluepKxgHvSpwHJG2ind6eIDeoms9KaAfA&oe=65205951"
            class="imgBow"
          />
        </div>
      </div>
      <!--box5 รูปท่างซ้าย-->
      <div class="LPage">
        <div class="Limg">
          <img
            src="https://cdn.chiangmainews.co.th/wp-content/uploads/2023/06/23115853/1687496332_873155-chiangmainews.jpg"
            class="imgBow"
          />
        </div>
        <div class="container_text">
          <h5 class="card-title">Chiangmai Arts & Crafts Workshop</h5>
          <p class="textConten">
            จัดสวนเล็กๆในโหลแล้วทำให้มีพื้นที่สีเขียวสบายตา ไม่ต้องดูแลเยอะแค่เพียงรดน้ำอาทิตย์ล่ะ
            1-2 ครั้ง
          </p>

          <a href="https://www.facebook.com/CMAWC" class="btnLink"> แสดงข้อมูลเพิ่มเติม</a>
        </div>
      </div>
      <!--box 6 รูปขวา-->
      <div class="RPage">
        <div class="container_text">
          <h5 class="card-title">Chapter 2wo</h5>
          <p class="textConten">
            คาเฟ่แนวญี่ปุ่นที่มีบริกรสุดน่ารักที่ไม่ว่าใครเห็นก็ต้องหลงรัก รวมไปถึงการสอนทำกาแฟ
            และลีลาการทำอาร์ตลาเต้ของบาริสต้าก็หาตัวจับยากทีเดียว
          </p>
          <a href="" class="btnLink"> แสดงข้อมูลเพิ่มเติม</a>
        </div>
        <div class="Rimg">
          <img
            src="https://cdn.chiangmainews.co.th/wp-content/uploads/2023/06/23120456/1687496696_048632-chiangmainews.jpg"
            class="imgBow"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.container_all {
  display: grid;
  grid-template-columns: 1fr ;
  justify-items: stretch;
  align-items: stretch;
  row-gap: 1px;
}
.imgTitle {
  max-width: 100%;
  background-position: left bottom;
  background-size: cover;
  padding-top: 200px;
  padding-bottom: 100px;
  background-image: url(https://i.pinimg.com/564x/fa/16/37/fa1637b9d60e2cc853a90108b77139c8.jpg);
}
.textTitle {
  color: white;
  text-align: center;
  font-size: x-large;
}
.conTitle {
  text-align: center;
  margin-inline: 300px;
  border-bottom: 2px solid;
}
.Limg{
  display: grid;
  grid-template-columns: 1fr ;
  justify-items: center;
}
.Rimg{
  display: grid;
  grid-template-columns: 1fr ;
  justify-items: center;
}
.imgBow {
  max-width: 280px;
  margin: 10px;
}
.imgBow1{
  max-width: 280px;
  height: 260px;
  margin: 10px
}
.LPage {
  display: grid;
  grid-template-columns: 240px auto;
  column-gap: 50px;
  justify-items: stretch;
  margin-inline: 170px;
  margin-block: 25px;
  width: 1000px;
  border-bottom: 2px solid;
}
.RPage {
  display: grid;
  grid-template-columns: auto 300px;
  column-gap: 20px;
  justify-items: stretch;
  margin-inline: 170px;
  margin-block: 25px;
  width: 1000px;
  border-bottom: 2px solid;

}
.container_text{
  padding: 40px;
}
.textConten {
  padding: 20px;
  width: 600px;
}
.btnLink {
  background-color: black;
  text-decoration: none;
  color: white;
  padding: 5px;
}
</style>
