<script setup>
import Header_box_north from '../north/Box_menu_north.vue'
</script>
<template>
  <!-- แถบ ภาพ  -->
<<<<<<< HEAD
  <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="carousel-image-container">
          <img
            src="https://scontent.fbkk29-8.fna.fbcdn.net/v/t1.15752-9/370076801_338465975340834_7604343998514706667_n.png?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEnQIik8-kxyu9cimxPfTbeKG3xK8yQfQYobfErzJB9Bnkj7m7T_41zh00bP0SEN4SNzvac8YYqLKWLYsk5x9Fm&_nc_ohc=qR-Q7A0iYs8AX_5T_oc&_nc_ht=scontent.fbkk29-8.fna&oh=03_AdQswqJ6SuFF3I3ekxHMecHrAQctnS1b-TNszsHGu1f_zg&oe=65515C2A"
            class="d-block w-100"
            style="filter: brightness(90%)"
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
          <h2 class="display-3">ภาคเหนือ</h2>
          <p lass="h4">ดอยสุเทพเป็นศรี ประเพณีเป็นสง่า บุปผาชาติล้วนงามตา นามล้ำค่านครพิงค์</p>
        </div>
      </div>
=======
  <div class="imgTitleN">
    <router-link :to="{ name: 'main' }">
     
    </router-link>
    <div class="textTitle-n">
      <h2>ภาคเหนือ</h2>
      <p>ดอยสุเทพเป็นศรี ประเพณีเป็นสง่า บุปผาชาติล้วนงามตา นามล้ำค่านครพิงค์</p>
>>>>>>> 32499d83f8092f54d95143793e6d1c214b14840a
    </div>
  </div>
  <!-- แถบ menu -->
  <Header_box_north></Header_box_north>
  <!--กิจกรรมที่น่าสนใจ-->
  <div class="container">
<<<<<<< HEAD
    <h1 class="conTitle_north"><strong>สถานที่ท่องเที่ยวที่น่าสนใจของภาคเหนือ</strong></h1>
    <div class="container_all_north">
      <!--box1 รูปท่างซ้าย-->
      <div class="LPage_north">
        <div class="Limg_north">
=======
    <h1 class="conTitle-n">สถานที่ท่องเที่ยวที่น่าสนใจของภาคเหนือ</h1>
    <div class="container_all-n">
      <!--box1 รูปท่างซ้าย-->
      <div class="LPage-n">
        <div class="Limg">
>>>>>>> 32499d83f8092f54d95143793e6d1c214b14840a
          <img
            src="https://tanaumbrella.net/wp-content/uploads/2020/02/umbrella-borsang-1.jpg"
            class="imgBow1_north"
          />
        </div>
        <div class="container_text_north">
          <h5 class="h3">
            ร่มบ่อสร้าง หมู่บ้านหัตถกรรมร่มบ่อสร้าง ต้นกำเนิดร่มสาน พร้อมเพ้นท์ร่มคันเดียวในโลก
            จังหวัดเชียงใหม่
          </h5>
<<<<<<< HEAD
          <p class="textConten_north">
=======
          <p class="card-text">
>>>>>>> 32499d83f8092f54d95143793e6d1c214b14840a
            "เทศกาลร่มบ่อสร้าง" ที่สร้างชื่อเสียงให้กับจังหวัดเชียงใหม่ และนักท่องเที่ยว
            ทั้งชาวไทยและชาวต่างประเทศได้รู้จักกันในนามของหมู่บ้านที่มีงานผลิตร่ม
            และยังเปิดให้นักท่องเที่ยวและนักเดินทางสามารถสร้างสรรค์ร่มของตัวเองได้
          </p>
          <a
            href="https://www.museumthailand.com/th/3829/storytelling/%E0%B8%A3%E0%B9%88%E0%B8%A1%E0%B8%9A%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87/"
            class="btnLink_north"
          >
            แสดงข้อมูลเพิ่มเติม</a
          >
        </div>
      </div>
      <!--box 2รูปขวา-->
<<<<<<< HEAD
      <div class="RPage_north">
        <div class="container_text_north">
          <h5 class="h3">
            พิพิธภัณฑ์เซรามิคธนบดี ต้นกำเนิดชามตราไก่ พร้อมเพ้นท์ชามใบเดียวในโลก จังหวัดลำปาง
          </h5>
          <p class="textConten_north">
=======
      <div class="RPage-n">
        <div class="container_text">
          <h5 class="card-title">
            พิพิธภัณฑ์เซรามิคธนบดี ต้นกำเนิดชามตราไก่ พร้อมเพ้นท์ชามใบเดียวในโลก จังหวัดลำปาง
          </h5>
          <p class="card-text">
>>>>>>> 32499d83f8092f54d95143793e6d1c214b14840a
            สำหรับการเข้าชมพิพิธภัณฑ์เซรามิคธนบดี
            ตั๋วเข้าชมสามารถเป็นส่วนลดในการซื้อของและเครื่องดื่มได้ด้วยค่ะ มีการจัดแบ่งเป็นรอบๆ
            ได้เดินชมทั่วโรงงานเลยค่ะ โดยหนึ่งรอบใช้เวลา 30 นาที มีวิทยากรบรรยายแนะนำ
            ประวัติความเป็นมาและต้นกำเนิดของชามไก่ให้เราได้ฟังกันอีกด้วย พร้อมทั้งมี workshop
            การเพ้นท์ชามตราไก่ใบเดียวในโลกอีกด้วยเจ้า
          </p>
          <a href="https://travel.trueid.net/detail/jBmnEnAj479N" class="btnLink_north">
            แสดงข้อมูลเพิ่มเติม</a
          >
        </div>
        <div class="Rimg_north">
          <img
<<<<<<< HEAD
            src="https://cms.dmpcdn.com/travel/2020/02/25/23ef0c20-57b4-11ea-807f-0f499e2341ed_original.JPG"
            class="imgBow_north"
=======
            src="http://www.wherever-go.com/wp-content/uploads/2018/10/P9211038-1600x1067.jpg"
            class="imgBow"
>>>>>>> 32499d83f8092f54d95143793e6d1c214b14840a
          />
        </div>
      </div>
      <!--box3 รูปท่างซ้าย-->
<<<<<<< HEAD
      <div class="LPage_north">
        <div class="Limg_north">
=======
      <div class="LPage-n">
        <div class="Limg">
>>>>>>> 32499d83f8092f54d95143793e6d1c214b14840a
          <img
            src="https://cdn.chiangmainews.co.th/wp-content/uploads/2023/06/23115439/1687496079_016872-chiangmainews.jpg"
            class="imgBow_north"
          />
        </div>
<<<<<<< HEAD
        <div class="container_text_north">
          <h5 class="h3"><strong>NatureTalk</strong></h5>
          <p class="textConten_north">
=======
        <div class="container_text">
          <h5 class="card-title">NatureTalk</h5>
          <p class="card-text">
>>>>>>> 32499d83f8092f54d95143793e6d1c214b14840a
            คาเฟ่บ้านดินขาวมีกิจกรรมที่น่าใจมากมายไม่ว่าจะเป็นการผสมสีจากธรรมชาติ หรือ
            การเรียนปั้นดินเผาและลงสี อันเดียวของโลก
          </p>
          <a
            href="https://www.museumthailand.com/th/3829/storytelling/%E0%B8%A3%E0%B9%88%E0%B8%A1%E0%B8%9A%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87/"
            class="btnLink_north"
          >
            แสดงข้อมูลเพิ่มเติม</a
          >
        </div>
      </div>
      <!--box 4 รูปขวา-->
<<<<<<< HEAD
      <div class="RPage_north">
        <div class="container_text_north">
          <h5 class="h3"><strong>ZOHNG - PAINT in the Garden</strong></h5>
          <p class="textConten_north">
=======
      <div class="RPage-n">
        <div class="container_text">
          <h5 class="card-title">ZOHNG - PAINT in the Garden</h5>
          <p class="card-text">
>>>>>>> 32499d83f8092f54d95143793e6d1c214b14840a
            มีให้เลือกเยอะมากถึง 10 กิจกรรม เช่น การจัดดอกไม้สำหรับของขวัญวันพิเศษเพื่อให้คนพิเศษ
            จัดสรรได้เองตามความรู้สึก การทำน้ำหอมแฮนด์เมด ไม่ซ้ำใคร เพ้นท์ลวดลายตกแต่งตามใจชอบ
            ไม่มีพื้นฐานก็ทำได้
          </p>
          <a href="https://www.facebook.com/profile.php?id=100065022761841" class="btnLink_north">
            แสดงข้อมูลเพิ่มเติม</a
          >
        </div>
        <div class="Rimg_north">
          <img
<<<<<<< HEAD
            src="https://scontent.fbkk29-7.fna.fbcdn.net/v/t39.30808-6/301722774_452710590239696_1435172969441293236_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG9qgTDY-VN2D8_0IYc0-VuB0Rhy9Z4WKQHRGHL1nhYpDE8a3vyAbKyL9ZuMWS7Q5HhZl9w5S4As6wSm0vPuVKH&_nc_ohc=JpLhqZHDcoQAX89Qjjw&_nc_oc=AQnmqPqZsL2fZcWeUALYS5GUASdqSuWFm7ZJ6gp3CO3y4YNTG-9WLl4rGjq2yynoCVc&_nc_ht=scontent.fbkk29-7.fna&oh=00_AfD5hxX1IHZBHy-d-9NDN1UaQLgeSnqdwy0o5LzVxUXbig&oe=652FE335"
            class="imgBow_north"
=======
            src="https://www.reviewchiangmai.com/wp-content/uploads/2021/09/20-1536x1154.jpg"
            class="imgBow"
>>>>>>> 32499d83f8092f54d95143793e6d1c214b14840a
          />
        </div>
      </div>
      <!--box5 รูปท่างซ้าย-->
<<<<<<< HEAD
      <div class="LPage_north">
        <div class="Limg_north">
=======
      <div class="LPage-n">
        <div class="Limg">
>>>>>>> 32499d83f8092f54d95143793e6d1c214b14840a
          <img
            src="https://cdn.chiangmainews.co.th/wp-content/uploads/2023/06/23115853/1687496332_873155-chiangmainews.jpg"
            class="imgBow_north"
          />
        </div>
<<<<<<< HEAD
        <div class="container_text_north">
          <h5 class="h3"><strong>Chiangmai Arts & Crafts Workshop</strong></h5>
          <p class="textConten_north">
=======
        <div class="container_text">
          <h5 class="card-title">Chiangmai Arts & Crafts Workshop</h5>
          <p class="card-text">
>>>>>>> 32499d83f8092f54d95143793e6d1c214b14840a
            จัดสวนเล็กๆในโหลแล้วทำให้มีพื้นที่สีเขียวสบายตา ไม่ต้องดูแลเยอะแค่เพียงรดน้ำอาทิตย์ล่ะ
            1-2 ครั้ง
          </p>

          <a href="https://www.facebook.com/CMAWC" class="btnLink_north"> แสดงข้อมูลเพิ่มเติม</a>
        </div>
      </div>
      <!--box 6 รูปขวา-->
<<<<<<< HEAD
      <div class="RPage_north">
        <div class="container_text_north">
          <h5 class="h3"><strong>Chapter 2wo</strong></h5>
          <p class="textConten_north">
=======
      <div class="RPage-n">
        <div class="container_text">
          <h5 class="card-title">Chapter 2wo</h5>
          <p class="card-text">
>>>>>>> 32499d83f8092f54d95143793e6d1c214b14840a
            คาเฟ่แนวญี่ปุ่นที่มีบริกรสุดน่ารักที่ไม่ว่าใครเห็นก็ต้องหลงรัก รวมไปถึงการสอนทำกาแฟ
            และลีลาการทำอาร์ตลาเต้ของบาริสต้าก็หาตัวจับยากทีเดียว
          </p>
          <a href="" class="btnLink_north"> แสดงข้อมูลเพิ่มเติม</a>
        </div>
        <div class="Rimg_north">
          <img
            src="https://cdn.chiangmainews.co.th/wp-content/uploads/2023/06/23120456/1687496696_048632-chiangmainews.jpg"
            class="imgBow_north"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<<<<<<< HEAD
<style scoped>
.container_all_north {
  display: block;
  grid-template-columns: 1fr;
  justify-items: stretch;
  align-items: stretch;
  row-gap: 1px;
}
.textTitle_north {
  color: white;
  text-align: center;
  font-size: x-large;
}
.conTitle_north {
  text-align: center;
  margin-inline: 260px;
  border-bottom: 2px solid;
}
.Limg_north {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
}
.Rimg_north {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
}
.imgBow_north {
  max-width: 280px;
  margin: 10px;
}
.imgBow1_north {
  max-width: 280px;
  height: 260px;
  margin: 10px;
}
.LPage_north {
  display: grid;
  grid-template-columns: 240px auto;
  column-gap: 50px;
  justify-items: stretch;
  margin-inline: 170px;
  margin-block: 25px;
  width: 1000px;
  border-bottom: 2px solid;
}
.RPage_north {
  display: grid;
  grid-template-columns: auto 300px;
  column-gap: 20px;
  justify-items: stretch;
  margin-inline: 170px;
  margin-block: 25px;
  width: 1000px;
  border-bottom: 2px solid;
}
.container_text_north {
  padding: 40px;
}
.textConten_north {
  padding: 20px;
  width: 600px;
}
.btnLink_north {
  background-color: black;
  text-decoration: none;
  color: white;
  padding: 5px;
=======
<style>
@media (min-width: 1030px) {
  .container_all-n {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    align-items: stretch;
    row-gap: 1px;
  }
  .imgTitleN {
    max-width: 100%;
    background-position: left bottom;
    background-size: cover;
    padding-top: 200px;
    padding-bottom: 100px;
    background-image: url(https://scontent.fbkk29-8.fna.fbcdn.net/v/t1.15752-9/370076801_338465975340834_7604343998514706667_n.png?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGC7wiDpzD1UAqaMJYFgLk4KG3xK8yQfQYobfErzJB9BiFbdjMVQs6v_4PAgqCml6GcBM82kCthXdVcxo6wPzZq&_nc_ohc=7GXm7RRaAjIAX-q-YIJ&_nc_ht=scontent.fbkk29-8.fna&_nc_e2o=f&oh=03_AdTbQ1YT_qFLtn0KMhdtBNTJTwn8YQwaxRuo2ZqqUhm7dg&oe=654DD82A);
  }
  .textTitle-n {
    color: white;
    text-align: center;
    font-size: x-large;
  }
  .conTitle-n {
    text-align: center;
    margin-inline: 300px;
    border-bottom: 2px solid;
  }
  .Limg {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }
  .Rimg {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }
  .imgBow {
    max-width: 280px;
    margin: 10px;
  }
  .imgBow1 {
    max-width: 280px;
    height: 260px;
    margin: 10px;
  }
  .LPage-n {
    display: grid;
    grid-template-columns: 240px auto;
    column-gap: 50px;
    justify-items: stretch;
    margin-inline: 170px;
    margin-block: 25px;
    width: 1000px;
    border-bottom: 2px solid;
  }
  .RPage-n {
    display: grid;
    grid-template-columns: auto 300px;
    column-gap: 20px;
    justify-items: stretch;
    margin-inline: 170px;
    margin-block: 25px;
    width: 1000px;
    border-bottom: 2px solid;
  }
  .container_text {
    padding: 40px;
  }
  .card-text {
    padding: 20px;
    width: 600px;
  }
  .btnLink {
    background-color: black;
    text-decoration: none;
    color: white;
    padding: 5px;
  }
  .container_all {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    align-items: stretch;
    row-gap: 1px;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .container_all-n {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    row-gap: 1px;
  }
  .imgTitleN {
    max-width: 100%;
    background-position: left bottom;
    background-size: cover;
    padding-top: 200px;
    padding-bottom: 100px;
    background-image: url(https://scontent.fbkk29-8.fna.fbcdn.net/v/t1.15752-9/370076801_338465975340834_7604343998514706667_n.png?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGC7wiDpzD1UAqaMJYFgLk4KG3xK8yQfQYobfErzJB9BiFbdjMVQs6v_4PAgqCml6GcBM82kCthXdVcxo6wPzZq&_nc_ohc=7GXm7RRaAjIAX-q-YIJ&_nc_ht=scontent.fbkk29-8.fna&_nc_e2o=f&oh=03_AdTbQ1YT_qFLtn0KMhdtBNTJTwn8YQwaxRuo2ZqqUhm7dg&oe=654DD82A);
  }
  .textTitle-n {
    color: white;
    text-align: center;
    font-size: x-large;
  }
  .conTitle-n {
    text-align: center;
    margin-inline: 30px;
    border-bottom: 2px solid;
  }
  .Limg {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }
  .Rimg {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }
  .imgBow {
    max-height: 200px;
    margin: 10px;
  }
  .imgBow1 {
    max-width: 280px;
    height: 260px;
    margin: 10px;
  }
  .LPage-n {
    display: grid;
    grid-template-columns: 250px auto;
    column-gap: 5px;
    max-width: 600px;
    justify-items: stretch;
    margin-block: 25px;
    border-bottom: 2px solid;
  }
  .RPage-n {
    display: grid;
    grid-template-columns: auto 300px;
    column-gap: 5px;
    max-width: 600px;
    justify-items: stretch;
    margin-block: 25px;
    border-bottom: 2px solid;
  }
  .container_text {
    padding: 40px;
  }
  .card-text {
    padding: 20px;
    height: 100px;
    overflow: auto;
  }
  .btnLink {
    background-color: black;
    text-decoration: none;
    color: white;
    padding: 5px;
  }
}
@media (max-width: 767px) {
  .container_all-n {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    row-gap: 1px;
  }
  .imgTitleN {
    max-width: 100%;
    background-position: left bottom;
    background-size: cover;
    text-align: center;
    padding-top: 200px;
    padding-bottom: 100px;
    background-image: url(https://scontent.fbkk29-8.fna.fbcdn.net/v/t1.15752-9/370076801_338465975340834_7604343998514706667_n.png?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGC7wiDpzD1UAqaMJYFgLk4KG3xK8yQfQYobfErzJB9BiFbdjMVQs6v_4PAgqCml6GcBM82kCthXdVcxo6wPzZq&_nc_ohc=7GXm7RRaAjIAX-q-YIJ&_nc_ht=scontent.fbkk29-8.fna&_nc_e2o=f&oh=03_AdTbQ1YT_qFLtn0KMhdtBNTJTwn8YQwaxRuo2ZqqUhm7dg&oe=654DD82A);
  }
  .textTitle-n {
    color: white;
    text-align: center;
    font-size: x-small;
  }
  .conTitle-n {
    text-align: center;
    margin-inline: 30px;
    border-bottom: 2px solid;
  }
  .Limg {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }
  .Rimg {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }
  .imgBow {
    max-height: 200px;
    margin: 10px;
  }
  .imgBow1 {
    height: 160px;
    margin: 10px;
  }
  .LPage-n {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    border-bottom: 2px solid;
    margin-block: 5px;
    max-width: 300px;
  }
  .RPage-n {
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
  .container_text {
    padding: 40px;
  }
  .card-text {
    padding: 20px;
    height: 100px;
    overflow: auto;
  }
  .btnLink {
    background-color: black;
    text-decoration: none;
    color: white;
    padding: 5px;
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
  .Limg {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }
  .Rimg {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }
  .imgBow {
    max-width: 280px;
    margin: 10px;
  }
  .imgBow1 {
    max-width: 280px;
    height: 260px;
    margin: 10px;
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
  .container_text {
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
>>>>>>> 32499d83f8092f54d95143793e6d1c214b14840a
}
</style>
