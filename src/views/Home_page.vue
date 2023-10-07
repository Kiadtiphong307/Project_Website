<script setup>
import header_bar from '../views/Header_box.vue'
</script>

<template>
  <header_bar></header_bar>
  <div class="container">
    <main>
      <div class="Colrou">
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <!--การใส่ภาพ-->
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://tatapi.tourismthailand.org/tatfs/IMAGE/Event/Picture/E0002303.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>ประเพณีรับบัว</h5>
                <p>Some representative placeholder content for the first slide.</p>
                <div class="mb-3">
                  <!--กรอ e-mail และ คำอธิบาย-->
                  <label for="exampleFormControlInput1" class="form-label">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="http://www.dhammathai.org/day/pic/takbatthewo1.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://img.kapook.com/u/panadda/%E0%B8%95%E0%B8%B1%E0%B8%81%E0%B8%9A%E0%B8%B2%E0%B8%95%E0%B8%A3%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%95%E0%B9%89%E0%B8%A1%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B9%82%E0%B8%A2%E0%B8%99%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%9E%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B8%89%E0%B8%B2%E0%B8%A2.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- ปุ่ม เลื่อนภาพไป-กลับ-->
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <!--กิจกรรมที่น่าสนใจ-->
      <hr />
      <h1>ปฎิทินประเพณีทั้ง 4 ภาคในเดือนตุลาคม</h1>
      <div class="container_all">
        <!--box1 รูปท่างซ้าย-->
        <div class="card mb-3" style="max-width: 1500px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5yHAr4nUtZmjbx56onQ4vKN1l4CehATcCGUrMWpSwF6Ery2adyM.webp"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  งานตักบาตรเทโว วัดสังกัสรัตนคีรี เขาสะแกกรัง จังหวัดอุทัยธานี (ภาคกลาง)
                </h5>
                <p class="card-text">
                  งานประเพณีตักบาตรเทโว ถือว่าเป็นประเพณีสำคัญของจังหวัดของอุทัยธานีเลยก็ว่าได้
                  ภายในงานจะมีพระสงฆ์กว่า 500 รูป เดินลงมาตามบันได 449 ขั้น จากมณฑปบนยอดเขาสะแกกรัง
                  มาสู่ลานวัดสังกัสรัตนคีรี เพื่อมารับบิณฑบาต โดยจะมีความสอดคล้องกับพุทธประวัติ
                  ในวันที่พระพุทธเจ้าเสด็จลงมาจากสวรรค์ชั้นดาวดึงส์หลังจากการเทศนาโปรดพระมารดา
                  ทำให้ในแต่ละปีจะมีพุทธศาสนิกชนมาร่วมงานตักบาตรข้าวสารอาหารแห้ง ข้าวต้มลูกโยน
                  แด่พระภิกษุสงฆ์
                </p>
                <p class="card-text">
                  <small class="text-body-secondary"
                    ><a href="https://travel.trueid.net/detail/6o1az9lGe6ro"
                      >แสดงข้อมูลเพิ่มเติม</a
                    ></small
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
                <h5 class="card-title">ประเพณีรับบัว จังหวัดสมุทรปราการ (ภาคกลาง)</h5>
                <p class="card-text">
                  ประเพณีรับบัว เป็นประเพณีเก่าแก่ที่สืบทอดกันมาตั้งแต่โบราณของชาวอำเภอบางพลี
                  จังหวัดสมุทรปราการ ซึ่งจะจัดขึ้นทุกวันขึ้น 14 ค่ำ เดือน 11 โดยจะมีการอัญเชิญหลวง
                  พ่อโตองค์จำลอง จากวัดบางพลีใหญ่ใน มาลงเรือตกแต่งอย่างสวยงามด้วยดอกไม้ และล่องไปตาม
                  คลองบางพลี เพื่อให้ชาวบ้านได้สักการะ โดยมีความเชื่อว่า
                  หากอธิษฐานแล้วโยนบัวลงเรือที่ประดิษฐานหลวงพ่อโตจะทำให้คำอธิษฐานประสบความสำเร็จ
                  สมปรารถนา ตามที่ได้ขอพรไว้
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    <a href="https://travel.trueid.net/detail/pdNJ8D8wD3vd"
                      >แสดงข้อมูลเพิ่มเติม</a
                    ></small
                  >
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <img
                src="https://tatapi.tourismthailand.org/tatfs/IMAGE/Event/Picture/E0002303.jpg"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
          </div>
        </div>
        <!-- box3 -->
        <div class="card mb-3" style="max-width: 1500px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://img.kapook.com/u/2020/Tanapol/travel/rokyon/saraburievent4.jpg"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  ประเพณีตักบาตรข้าวต้มลูกโยน วัดพระพุทธฉาย จังหวัดสระบุรี (ภาคกลาง)
                </h5>
                <p class="card-text">
                  งานประเพณีตักบาตรข้าวต้มลูกโยน ณ วัดพระพุทธฉาย
                  เป็นประเพณีที่สืบทอดกันมาเป็นเวลานานจัดขึ้นในวันแรม๑คํ่า เดือน ๑๑ ของทุกปี
                  กิจกรรมภายในงานมีการจำลองเหตุการณ์เมื่อครั้งพระพุทธเจ้าเสด็จลงจากสวรรค์ชั้นดาวดึงส์
                  และการแสดง “รำวงสระบุรี”
                </p>
                <p class="card-text">
                  <small class="text-body-secondary"
                    ><a href="http://www.dhammathai.org/day/takbatthewo_saraburi.php"
                      >แสดงข้อมูลเพิ่มเติม</a
                    ></small
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <!--box 4-->
        <div class="card mb-3" style="max-width: 1500px">
          <div class="row g-0">
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">ประเพณีแห่ปราสาทผึ้ง จังหวัดสกลนคร (ภาคอีสาน)</h5>
                <p class="card-text">
                  งานประเพณีแห่ปราสาทผึ้งนั้น ถือเป็นงานใหญ่ประจำปีของจังหวัดสกลนคร
                  จะจัดขึ้นในช่วงเดือน 11 หรือช่วงออกพรรษา โดยเป็นความเชื่อของชาวอีสาน
                  ถือว่าการทำบุญด้วยการถวายต้นผึ้งเป็นบุญกุศลสูงส่ง ดังนั้นในวันออกพรรษาของทุกปี
                  ชาวคุ้มวัดต่าง ๆ
                  จึงนำขี้ผึ้งไปถวายวัดเพื่อให้พระสงฆ์นำไปทำเทียนน้ำมนต์และเทียนเพื่อจุดให้แสงสว่างตอนกลางคืน
                  ในช่วงแรกเริ่มก็ทำโครงต้นผึ้งง่าย ๆ
                  ด้วยการตัดต้นกล้วยมาประดิษฐ์เป็นหอทรงตะลุ่มสี่เหลี่ยมซ้อนกัน
                  แล้วนำขี้ผึ้งมาทำเป็นดอกผึ้งเสียบรอบ ๆ หอที่ทำขึ้น แล้วแห่ไปถวายวัด
                  ต่อมามีช่างที่มีความรู้และความคิดริเริ่มทำปราสาทผึ้งจริง ๆ
                  โดยทำเป็นรูปปราสาทเรือนยอด เลียนแบบปราสาทราชวัง ใช้ไม้ทำเป็นโครงปราสาท
                  แล้วหล่อเทียนเป็นรูปลายไทยติดรอบ ๆ โครงไม้
                  จนเกิดเป็นการแข่งขันของชาวบ้านในแต่ละหมู่บ้านจะมาประชันฝีมือแกะสลักต้นผึ้งให้สวยงามวิจิตรตระการตาที่สุด
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    <a href="https://travel.kapook.com/view260473.html"
                      >แสดงข้อมูลเพิ่มเติม</a
                    ></small
                  >
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <img
                src="https://s359.kapook.com//pagebuilder/e5f0e4bf-a673-4c15-b410-ac2c04ddcb73.jpg"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
          </div>
        </div>
        <!-- box5 -->
        <div class="card mb-3" style="max-width: 1500px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://www.isangate.com/new/images/thumbnails/images/art-culture/candle/lai_rue_fire_01-fill-650x354.jpg"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">ประเพณีไหลเรือไฟ จังหวัดนครพนม (ภาคีสาน)</h5>
                <p class="card-text">
                  ประเพณีไหลเรือไฟ เป็นประเพณีที่ชาวนครพนมภาคภูมิใจ
                  เพราะบรรพบุรุษได้ยึดถือกันมานานตั้งแต่โบราณ
                  โดยมีความเชื่อในประเพณีว่าเนื่องมาจากการบูชารอบพระพุทธบาท การสักการะท้าวพกาพรหม
                  การบวงสรวงพระธาตุจุฬามณีและการระลึกถึงพระคุณของพระแม่คงคา
                  การขอฝนการเอาไฟเผาความทุกข์ และการบูชาพระพุทธเจ้า
                </p>
                <p class="card-text">
                  <small class="text-body-secondary"
                    ><a href="http://www2.nakhonphanom.go.th/charm/detail/29"
                      >แสดงข้อมูลเพิ่มเติม</a
                    ></small
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <!--box 6-->
        <div class="card mb-3" style="max-width: 1500px">
          <div class="row g-0">
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">เทศกาลบั้งไฟพญานาค จังหวัดหนองคาย (ภาคอีสาน)</h5>
                <p class="card-text">
                  “บั้งไฟพญานาค” เป็นปรากฏการณ์ของการเกิดลูกไฟสีแดงอมชมพูพวยพุ่งขึ้นจากลำน้ำโขง
                  ซึ่งจะเกิดขึ้นเฉพาะช่วงจังหวัดหนองคาย จะเริ่มปรากฏจากเหนือผิวน้ำตั้งแต่ระดับ – 30
                  เมตร แล้วจะพุ่งขึ้นสูงประมาณระดับ 50 – 150 เมตร เป็นเวลาประมาณ 5 -10 วินาที
                  แล้วดับหายวับไปในอากาศและไม่มีลักษณะโค้งตกลงมาเหมือนดอกไม้ไฟ โดยลูกไฟไม่มีกลิ่น
                  ไม่มีควัน ไม่มีเสียง ขนาดของลูกไฟมีขนาดตั้งแต่เท่าหัวแม่มือ
                  กระทั่งขนาดเท่าฟองไข่ไก่
                  จะเริ่มปรากฏให้เห็นตั้งแต่เวลาหลังพระอาทิตย์ตกดินจนถึงประมาณ 23.00 น.
                  “ตำนานการเกิดบั้งไฟพญานาค” ตามพุทธประวัติกล่าวว่าเมื่อพระพุทธเจ้าได้ตรัสรู้
                  พระองค์ได้เสด็จเผยแพร่ศาสนาไปทั่วชมพูทวีป พญานาคีบังเกิดความเลื่อมใสและศรัทธายิ่ง
                  จึงจำแลงกายเป็นบุรุษขอบวชเป็นสาวก ค่ำคืนหนึ่งพญานาคีเผลอหลับใหลคืนร่างเดิม
                  พระพุทธเจ้าทรงทราบเรื่องจึงขอให้ลาสิกขา เนื่องจากเป็นเดรัจฉานจะบวชเป็นภิกษุมิได้
                  พญานาคียอมตามคำขอแต่ขอว่ากุลบุตรทั้งปวงที่จะบวชให้เรียกขานว่า “นาค”
                  เพื่อเป็นศักดิ์ศรีของพญานาคก่อนค่อยเข้าโบสถ์
                  จากนั้นเป็นต้นมาจึงเรียกขานกุลบุตรทั้งหลายที่จะบวชว่า “พ่อนาค”
                  ต่อมาเมื่อครั้งพระพุทธเจ้าได้เสด็จจากสวรรค์ชั้นดาวดึงส์
                  หลังจากเสด็จไปโปรดพุทธมารดาเป็นเวลา 3 เดือน เมื่อกลับสู่โลกมนุษย์
                  เหล่าบรรดาพญานาคี นาคเทวี พร้อมทั้งเหล่าบริวารจัดทำเครื่องบูชา และพ่นบั้งไฟถวาย
                  ซึ่งชาวบ้านเรียกว่า “บั้งไฟพญานาค” “บั้งไฟพญานาค”
                  จึงเป็นปรากฏการณ์น่าพิศวงที่รอการพิสูจน์จากผู้คนทั่งโลก
                  ซึ่งจะมีปรากฏการณ์ในช่วงวันออกพรรษาวันขึ้น 15 ค่ำ เดือน 11 ของทุกปี และคาดว่าจะมี
                  “บั้งไฟพญานาค” ปรากฏในวันนี้ ซึ่งผู้สนใจสามารถเดินทางไปชมปรากฏการณ์บั้งไฟพญานาค
                  ได้บริเวณริมฝั่งแม่น้ำโขงในเขตพื้นที่หลายอำเภอของจังหวัดหนองคาย เช่น อำเภอสังคม
                  อำเภอศรีเชียงใหม่ อำเภอเมือง อำเภอโพนพิสัย อำเภอรัตนวาปี และจังหวัดบึงกาฬ
                  อำเภอปากคาด อำเภอเมือง และอำเภอบึงโขงหลง ฯลฯ
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    <a href="https://www.phonphisai.go.th/index/?page=article3679"
                      >แสดงข้อมูลเพิ่มเติม</a
                    ></small
                  >
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <img
                src="https://tatapi.tourismthailand.org/tatfs/IMAGE/Event/Picture/E0002303.jpg"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scope>
.Colrou{
  padding: 50px;
}
</style>
