<script setup>
import Header_box_north_east from '../north_east/Box_menu_north_east.vue'
</script>

<template>
  <!-- แถบ ภาพ  -->
  <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="carousel-image-container">
          <img
            src="https://www.salika.co/wp-content/uploads/2018/05/agriculture-animals-asia-460223.jpg"
            class="d-block w-100"
            alt="..."
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

        <div class="carousel-caption d-none d-md-block">
          <h5>ภาคอีสาน</h5>
          <p>สองนางศาลศักดิ์สิทธ์ อิทธิฤทธิ์หลวงพ่อใหญ่ แหล่งน้ำใสหนองกุดทิง สุดใหญ่ยิ่งแข่งเรือยาว หาดทรายขาวเป็นสง่า น่าทัศนาแก่งอาฮง งามน้ำโขงที่บึงกาฬ สุขสำราญที่ได้ยล (จังหวัดบึงกาฬ)</p>
        </div>
      </div>
    </div>
  </div>

  <Header_box_north_east></Header_box_north_east>

  <!--กิจกรรมที่น่าสนใจ-->
  <div class="container">
    <h1>สายคาเฟ่ห้ามพลาด!!</h1>
    <hr />
    <div class="container_all">
      <!--box1 รูปท่างซ้าย-->
      <div class="card mb-3" style="max-width: 1500px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://lh4.googleusercontent.com/Mc0-OrfmiXbQRT_8bJS8uE9wBluOGRzrPivzIlOKqwV8uP1d0eEsRkgjLhsvuWkJO-9Rbewrw6V6SCKK4JIyQ3nuzts_Ye30KBM_BOA1JQSGysKb5BO5DWEMd9zYKBdZhF9hXDxL-Syi1uUGgLtSgA"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Zero Fat In Buriram</h5>
              <p class="card-text">
                ZERO FAT In Buriram ที่มีคติประจำร้าน และเป็นที่ชื่นชอบสำหรับหนุ่มสาวรักสุขภาพสายเฮลตี้ คือ “ทุกเมนูของร้าน ZERO FAT In Buriram แห่งนี้
                มีรสชาติหวานแบบไม่มีน้ำตาล” เพราะทางร้านใส่ใจลูกค้าในทุกระดับ 
                ตั้งแต่การค้นหาวัตถุดิบ การรังสรรค์เมนูอาหาร จนถึงการบริการด้านอื่นๆ 
                และด้วยการออกแบบร้านไสตล์มินิมอลสีขาวเป็นคาเฟ่เล็กๆ
                 แต่มีพื้นที่สำหรับให้บริการลูกค้าได้อย่างกว้างขวาง ทั้งที่จอดรถก็ไม่มีปัญหาสำหรับคาเฟ่นี้ 
                 และพื้นที่ธรรมชาติให้นั่งดื่มกาแฟ ทานขนม พูดคุยกับเพื่อนๆ 
                 ก็ไม่ให้เลือกในหลายมุมภายใต้ร่มไม้ขนาดใหญ่ที่ปกคลุมพื้นที่โดยรอบ 
                 สำหรับเมนูที่ทางร้านแนะนำ และได้รับการตอบรับจากลูกค้าว่าอร่อย น่ากิน คือ 
                 เมนูกาแฟสดรสเข้มข้น โดยเสริฟให้ทานคู่กับน้ำมะพร้าวน้ำหอม ในชื่อว่า Coconut black
                 coffee และที่สำคัญทางร้านใช้ความหวานของหญ้าหวาน ทดแทนความหวานของน้ำตาลในทุกเมนู 
              </p>
              <p class="card-text">
                <small class="text-body-secondary"> <a href=" https://www.facebook.com/bansai.saicafe/?_rdc=2&_rdr">แสดงข้อมูลเพิ่มเติม</a></small>
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
              <h5 class="card-title">T taste. Khamriang.</h5>
              <p class="card-text"> "T taste. Khamriang โดยคาเฟ่แห่งนี้มีความโดดเด่นด้านธรรมชาติที่ตกแต่งด้วยต้นไม้ขนาดใหญ่ให้ปกคลุมร่มเงานของแดด และต้นไม่ขนาดเล็กที่ตกแต่งความสวยงามให้เพื่อนๆ ได้เข้ามาถ่ายรูปกันมากมายในทุกพื้นที่ของร้าน และด้วยความกว้างของพื้นที่นี้เอง ทางร้านจึงมีการให้บริการแบบชิวๆ ทั้งแบบในห้องแอร์ และแบบนั่งรับลมธรรมชาติสบายๆ และด้วยทางร้านตกแต่งเฟอร์นิเจอร์ต่างๆ ด้วยไม้เป็นส่วนใหญ่ จึงทำให้สอดรับเข้ากันเป็นอย่างดีกับบรรยากาศภายนอกร้าน หนุ่มสาวที่ชื่นชอบการถ่ายรูปต้องขอประชาสัมพันธ์เลยว่า ไม่ว่าจะเลือกนั่งพื้นที่ภายในร้าน หรือภายนอกร้าน ก็มีจุดถ่ายรูปที่สวยมากๆ ได้ทุกมุมไม่แตกต่างกันเลยทีเดียวครับ ในด้านของเมนู T’taste. Khamriang แห่งนี้ก็พิเศษเป็นอย่างมาก คือ ที่นี้มีมีเมล็ดกาแฟคั้นสดสำหรับลูกค้าที่ชื่นชอบในรสชาติของกาแฟสด ให้ทดลองเลือกชิมมากมาย หากรสชาติถูกลิ้น
              </p>
              <p class="card-text">
                <small class="text-body-secondary"> <a href="https://www.facebook.com/profile.php?id=100063693206775"> แสดงข้อมูลเพิ่มเติม</a></small>
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <img
              src="https://shorturl.at/bduHL"
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
              src="https://lh6.googleusercontent.com/l-f_3CiJIShqdlWiUB3zYOMUWuHqw02_lQ-qU648JCIazrk4escofTuXGhEvuhe_xxCokuPJYIxUFbsj50MXlI8X43ty6uMgTpoujVCN56cO9iZxZfUmU0OibYTHVPiMBPsjiU5xMNx69tkjVTsUxA"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Zen cafe & restaurant</h5>
              <p class="card-text">
                Zen cafe & restaurant เป็นคาเฟ่ใน จ.ยโสธร ที่เป็นการผสมผสานระหว่าง คาเฟ่ ร้านอาหาร และที่พักภายในธรรมชาติ และด้วยมีการผสมผสานนี้เองจึงเป็นจุดขายของร้าน Zen cafe & restaurant ที่ดึงดูดให้นักท่องเที่ยวในจังหวัดอื่นๆ นิยมเดินทางมาพักผ่อนแบบชนิดที่ว่าต้องจองกันล่วงหน้าก็เคยมีมาแล้ว อีกทั้งที่พื้นที่ตั้งอยู่ไม่ไกลจากถนนสายหลักของเมือง จึงสามารถเดินทางมายังร้านได้โดยสะดวก ในเรื่องของเมนูอาหารก็มีให้บริการ ที่ลูกค้านิยมสั่งกันเป็นประจำ เช่น ยำสามทะเล ปลาทับทิมทอดน้ำปลา สลัดไก่อบซอส ส้มตำ ลาบ น้ำตก และเมนูอาหารอีสานต่างๆ เป็นต้น ในด้านเครื่องดื่มก็มีเมนูที่แนะนำคือ ชานมกุหลาบ และชานมมันม่วงญี่ปุ่น รับรองว่าเมื่อมา Zen cafe & restaurant จะได้รับการบริการที่ครบครันทั้งการผ่อนคลายทางธรรมชาติ อาหารอร่อย และที่พักดีๆ รวมกันอยู่ที่ Zen cafe & restaurant เรียบร้อยแล้ว              </p>
              <p class="card-text">
                <small class="text-body-secondary"> <a href="www.https://www.facebook.com/zencafeandrestaurant.com/yellowsubmarinecoffee">แสดงข้อมูลเพิ่มเติม</a></small>
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
              <h5 class="card-title">Ob-uan homemade cakery</h5>
              <p class="card-text">
                อบ-อวล คาเฟ่ มีพื้นที่ตั้งอยู่ใน อ.เมือง จ.ร้อยเอ็ด ที่มีชื่อเสียงโด่งดังมายาวนานจากการทำขนมเค้ก ที่มีรสชาติที่ถูกลิ้นของชาว จ.ร้อยเอ็ด จนขายดีกระจายไปในจังหวัดใกล้เคียง จนกระทั้งมาเปิดร้าน อบ-อวล คาเฟ่ แห่งนี้ โดยเมนูเค้กที่สำคัญที่ทางร้านเชื่อมั่นเป็นอย่างยิ่งว่าอร่อยไม่เหมือนใคร              </p>
              <p class="card-text">
                <small class="text-body-secondary"> <a href="https://www.facebook.com/obuanhomemade?_rdc=2&_rdr"> แสดงข้อมูลเพิ่มเติม</a></small>
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <img
              src="https://lh5.googleusercontent.com/dLA030r1kliHUWQRMW03toxt9j2Unl2tMy62G04beCFSLJlvjFcDkzsow0SmLIxwATTqsLAVQIay5ziBhXKUjgdPFcCqc9Xjd1yyDV9ARr4laPWChekuMKOoNvsVzu9aBS42o55Sc6PQx7cZE2kD3g"
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
              src="https://shorturl.at/cuFOR"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">ภิรมย์บุรี</h5>
              <p class="card-text">
                ภิรมย์บุรี ได้รับความนิยมเป็นอย่างมากจากการตกแต่งร้านที่ถูกใจวัยรุ่นชาวสกลนคร โดยทางร้านมีพื้นที่สำหรับถ่ายรูปแนวๆ หลายมุม อีกทั้งยังมีกาแฟ และเครื่องดื่มที่รอให้บริการอยู่มากมาย ซึ่งมีรสชาติเข้มข้นถูกใจอย่างแน่นอน และยิ่งไปกว่านั้น คือการบริการที่เป็นกันเองของพนักงานทุกคน เมื่อได้มีโอกาสมา จ.สกลนคร อยากจะให้มาลองเมืองแห่งความสุขที่มาจากความหมายของ ภิรมย์บุรี
              </p>
              <p class="card-text">
                <small class="text-body-secondary"> <a href="https://www.facebook.com/piromburi/?locale=th_TH&_rdc=2&_rdr">แสดงข้อมูลเพิ่มเติม</a></small>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <a href="https://cafeuc.org/%E0%B8%84%E0%B8%B2%E0%B9%80%E0%B8%9F%E0%B9%88%E0%B9%83%E0%B8%99%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87-21-9/5-%E0%B8%84%E0%B8%B2%E0%B9%80%E0%B8%9F%E0%B9%88-%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B8%AD%E0%B8%B5%E0%B8%AA%E0%B8%B2%E0%B8%99/">ขอบคุณข้อมูลอ้างอิงจาก</a>

</template>
