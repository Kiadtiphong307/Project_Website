<script setup>
import Header_box_north from '../../components/north/Box_menu_north.vue'
</script>
<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-8.fna.fbcdn.net/v/t1.15752-9/370076801_338465975340834_7604343998514706667_n.png?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGC7wiDpzD1UAqaMJYFgLk4KG3xK8yQfQYobfErzJB9BiFbdjMVQs6v_4PAgqCml6GcBM82kCthXdVcxo6wPzZq&_nc_ohc=7GXm7RRaAjIAX-q-YIJ&_nc_ht=scontent.fbkk29-8.fna&_nc_e2o=f&oh=03_AdTbQ1YT_qFLtn0KMhdtBNTJTwn8YQwaxRuo2ZqqUhm7dg&oe=654DD82A"
          class="d-block w-100"
          style="filter: brightness(75%); max-height: 500px"
        />
      </div>
      <div class="carousel-caption d-none d-md-block" >
        <h5 class="display-3">ภาคเหนือ</h5>
        <p>ดอยสุเทพเป็นศรี ประเพณีเป็นสง่า บุปผาชาติล้วนงามตา นามล้ำค่านครพิงค์</p>
      </div>
    </div>
  </div>
  <!-- แถบ menu -->
  <Header_box_north></Header_box_north>
  <!--กิจกรรมที่น่าสนใจ-->
  <div class="container">
    <h1 class="conTitle-n">สถานที่ท่องเที่ยวที่น่าสนใจของภาคเหนือ</h1>
    <div class="container_all-n">
      <!--box1 รูปท่างซ้าย-->
      <div class="LPage-n">
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
          <p class="card-text">
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
      <div class="RPage-n">
        <div class="container_text">
          <h5 class="card-title">
            พิพิธภัณฑ์เซรามิคธนบดี ต้นกำเนิดชามตราไก่ พร้อมเพ้นท์ชามใบเดียวในโลก จังหวัดลำปาง
          </h5>
          <p class="card-text">
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
            src="http://www.wherever-go.com/wp-content/uploads/2018/10/P9211038-1600x1067.jpg"
            class="imgBow"
          />
        </div>
      </div>
      <!--box3 รูปท่างซ้าย-->
      <div class="LPage-n">
        <div class="Limg">
          <img
            src="https://cdn.chiangmainews.co.th/wp-content/uploads/2023/06/23115439/1687496079_016872-chiangmainews.jpg"
            class="imgBow"
          />
        </div>
        <div class="container_text">
          <h5 class="card-title">NatureTalk</h5>
          <p class="card-text">
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
      <div class="RPage-n">
        <div class="container_text">
          <h5 class="card-title">ZOHNG - PAINT in the Garden</h5>
          <p class="card-text">
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
            src="https://www.reviewchiangmai.com/wp-content/uploads/2021/09/20-1536x1154.jpg"
            class="imgBow"
          />
        </div>
      </div>
      <!--box5 รูปท่างซ้าย-->
      <div class="LPage-n">
        <div class="Limg">
          <img
            src="https://cdn.chiangmainews.co.th/wp-content/uploads/2023/06/23115853/1687496332_873155-chiangmainews.jpg"
            class="imgBow"
          />
        </div>
        <div class="container_text">
          <h5 class="card-title">Chiangmai Arts & Crafts Workshop</h5>
          <p class="card-text">
            จัดสวนเล็กๆในโหลแล้วทำให้มีพื้นที่สีเขียวสบายตา ไม่ต้องดูแลเยอะแค่เพียงรดน้ำอาทิตย์ล่ะ
            1-2 ครั้ง
          </p>

          <a href="https://www.facebook.com/CMAWC" class="btnLink"> แสดงข้อมูลเพิ่มเติม</a>
        </div>
      </div>
      <!--box 6 รูปขวา-->
      <div class="RPage-n">
        <div class="container_text">
          <h5 class="card-title">Chapter 2wo</h5>
          <p class="card-text">
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

<style scoped>
@media (min-width: 1030px) {
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
    margin-block: 25px;
    width: 1000px;
    border-bottom: 2px solid;
  }
  .RPage-n {
    display: grid;
    grid-template-columns: auto 300px;
    column-gap: 20px;
    justify-items: stretch;
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
    height: 150px;
    width: auto;
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
    padding: 10px;
  }
  .card-text {
    padding: 10px;
    height: 100px;
    width: auto;
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
}
</style>
