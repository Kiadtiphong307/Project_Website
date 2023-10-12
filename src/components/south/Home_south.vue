<script setup>
import Header_box_south from '../south/Box_menu_south.vue'
</script>

<template>
  <!-- แถบ ภาพ  -->
  <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="carousel-image-container">
          <img
            src="https://i.pinimg.com/736x/1f/d2/85/1fd2858972eae4e02a7f903cefb57fe5.jpg"
            class="d-block w-100" alt="..." height="550"
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
          <h5 class="display-3">ภาคใต้</h5>
          <p class="h4">
            ประตูภาคใต้ ไหว้เสร็จในกรมฯ ชมไร่กาแฟ แลหาดทรายรี ตีกล้วยเล็บมือนาง ขึ้นชื่อเรื่องรังนก
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_south></Header_box_south>

  <!--กิจกรรมที่น่าสนใจ-->
  <div class="container">
    <h1 class="textcenter"><strong>สถานที่ท่องเที่ยวที่น่าสนใจของภาคใต้</strong></h1>
    <hr />
    <div class="container_all">
      <!--box1 รูปท่างซ้าย-->
      <div class="card mb-3" style="max-width: 1500px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://we-offers.com/wp-content/uploads/2021/10/tarzan-adventure-phuket%EF%BB%BF-01-1.jpg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="h3"><strong>Tarzan Adventure ภูเก็ต</strong></h5>
              <p class="cardtext">
                ออกกำลังกายกลางเเจ้ง ปีนป่าย ห้อยโหน 'ทาร์ซาน เเอดเวนเจอร์ ภูเก็ต' (Tarzan Adventure
                Phuket) ผู้เชี่ยวชาญกิจกรรมซิปไลน์ในภูเก็ต ท้าทายความมันส์กับ 42 ฐาน
                ซึ่งเเต่ละฐานถูกออกเเบบขึ้นเพื่อสร้างความสนุกสนาน ความตื่นเต้น เร้าใจ
                ให้กับผู้เล่นทุกวัยได้อย่างเต็มที่ เปิดประสบการณ์ใหม่ๆกับการเล่น
                ซิปไลน์หลากหลายรูปเเบบไม่เหมือนใคร อาทิเช่น ไต่สะพาน, ปีนตาข่าย, โหนซิปไลน์, โรยตัว,
                ไต่เชือก, และสนุกสุดเหวี่ยงกับไฮไลท์ ผ่านด่านอุปสรรคสุดโหด ซุปเปอร์ไคลม์ (Super
                Climb) ฟลายอิ้ง สเก็ตบอร์ด (Flying Skateboard) และอืกมากมาย รับอากาศบริสุทธิ์
                สัมผัสบรรยากาศป่าโกงกาง ตื่นตากับซีวิวสวยๆบนเเหลมพันวา ปลอดภัย 100%
                อุปกรณ์มาตราฐานด้วยเทคโนโลยี Coudou Pro มั่นใจตลอดทุกการเคลื่อนไหว
              </p>
              <p class="card-text">
                <small class="text-body-secondary"
                  >
                    <a class="btn btn-dark" href="https://we-offers.com/product/tarzan-adventure-phuket/?lang=th"
                      >รายละเอียดเพิ่มเติม</a
                    >
                  </small
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
              <h5 class="h3"><strong>หมู่เกาะชุมพร</strong></h5>
              <p class="cardtext">
                เป็นอุทยานแห่งชาติเมื่อปี 2532 แรกเริ่มใช้ชื่ออุทยานแห่งชาติหาดทรายรี
                ต่อมาได้รับการประกาศเป็นอุทยานแห่งชาติหมู่เกาะชุมพร เมื่อวันที่ 24 กุมภาพันธ์ 2542
                ครอบคลุมพื้นที่ 198,125 ไร่ ตั้งแต่เกาะจระเข้ในเขตอำเภอปะทิวจดเกาะง่ามใหญ่
                เกาะง่ามน้อย เกาะเสม็ด เกาะมะพร้าว เกาะมาตรา เกาะทองหลาง เกาะลังกาจิว
                บริเวณอ่าวทุ่งคาในเขตอำเภอเมือง และหมู่เกาะในเขตอำเภอสวี อำเภอทุ่งตะโก
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  <a
                  class="btn btn-dark"
                    href="https://thai.tourismthailand.org/Attraction/%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%88%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%9E%E0%B8%A3"
                  >
                    แสดงข้อมูลเพิ่มเติม</a
                  ></small
                >
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <img
              src="https://tatapi.tourismthailand.org/tatfs/Image/custompoi/picture/P03007460_1.jpg"
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
              src="https://www.ticket2attraction.com/media/1283587/surf-97.jpg?width=500&height=500"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="h3"><strong>หาดป่าตอง</strong></h5>
              <p class="cardtext">
                ชายหาดชื่อดังที่ยาวกว่า 3.5 กิโลเมตร หาดที่นักท่องเที่ยวมักนิยมไปเดินเล่นพักผ่อน
                สนุกสนานกับสีสันยามค่ำคืน แต่ใครจะรู้เล่าว่าตอนกลางวัน
                ยามคลื่นลมเป็นใจเราก็สามารถแบกเซิร์ฟไปเจอคลื่นที่หาดป่าตองได้เช่นกัน
              </p>
              <p class="card-text">
                <small class="text-body-secondary"
                  >
                    <a class="btn btn-dark" href="https://www.ticket2attraction.com/th/blogs/surf-phuket/"
                      >รายละเอียดเพิ่มเติม</a
                    >
                  </small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--box 4รูปขวา-->
      <div class="card mb-3" style="max-width: 1500px">
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="h3"><strong>Rolly Cafe</strong></h5>
              <p class="cardtext">
                ร้าน Rolly cafe เป็นคาเฟ่สโลบาร์ มีเมล็ดกาแฟให้เลือกหลากหลายที่มา
                ทั้งของในประเทศและต่างประเทศ นอกจากกาแฟแล้วยังมีเครื่องดื่มพวกชาต่าง ๆ และมีเค้ก
                homemade ทำสดใหม่ทุกวัน เมนูแนะนำคือ iced espresso
                ใช้เมล็ดเบลนของทางร้าน(เมล็ดต่างประเทศ+เมล็ดไทย) และ orange cold brew
                (brazil+ethiopia) สำหรับท่านไหนที่ไม่ทานกาแฟ แนะนำ Rolly paradise เป็น signature
                ของร้าน
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  <a class="btn btn-dark" href="https://www.facebook.com/rollyyycafe/"> แสดงข้อมูลเพิ่มเติม</a></small
                >
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <img
              src="https://scontent.fbkk8-4.fna.fbcdn.net/v/t39.30808-6/378021206_787929146507595_3142067566188781602_n.jpg?stp=dst-jpg_p843x403&_nc_cat=101&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeHoKWPork6J8zrmUFXQqKWK8kyfwZq_F3XyTJ_Bmr8XdXcFv6fjt8EoUMgC4t2rxBxUOEXeVkT38pLxG-XPKfzP&_nc_ohc=mjUTFiQUPzEAX-UO15q&_nc_ht=scontent.fbkk8-4.fna&oh=00_AfDq-o89NurSxjUa5ESP0jkUt8KM_npzOvprbgtCavRR6A&oe=652040CA"
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
              src="https://cbtthailand.dasta.or.th/upload-file-api/Resources/RelateAttraction/Images/RAT800198/2.jpeg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="h3"><strong>พิพิธภัณฑ์หนังตะลุง</strong></h5>
              <p class="cardtext">
                พิพิธภัณฑ์หนังตะลุงก่อตั้งขึ้นโดย หนังสุชาติ ทรัพย์สิน ศิลปินแห่งชาติ
                (สาขาการแสดงพื้นบ้านหนังตะลุง) และนายวาที ทรัพย์สิน ผู้เป็นลูกชาย
                การจัดทำพิพิธภัณฑ์หนังตะลุงเกิดจากแรงบันดาลใจที่นายหนังสุชาติ ทรัพย์สิน
                ได้มีโอกาสแสดงหนังตะลุงต่อหน้าพระพักตร์ พระบาทสมเด็จพระเจ้าอยู่หัว รัชกาลที่ 9
                เมื่อปี พ.ศ. 2527 ในคราวนั้นพระบาทสมเด็จพระเจ้าอยู่หัว รัชกาลที่ 9 มีรับสั่งว่า
                “ขอบใจที่รักษาของเก่าไว้ให้ อย่าหวงวิชา ช่วยเผยแพร่ ช่วยถ่ายทอด”
                จากพระกระแสรับสั่งในวันนั้น ก่อให้เกิดแรงบันดาลใจของนายหนังสุชาติ
                ทรัพย์สินและครอบครัว ในการจัดทำพิพิธภัณฑ์หนังตะลุง
              </p>
              <p class="card-text">
                <small class="text-body-secondary"
                  >
                    <a class="btn btn-dark" href="https://communityarchive.sac.or.th/community/SuChartSupsin"
                      >รายละเอียดเพิ่มเติม</a
                    >
                  </small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--box 6รูปขวา-->
      <div class="card mb-3" style="max-width: 1500px">
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="h3"><strong>Coming Home Cafe & Seascape</strong></h5>
              <p class="cardtext">
                #คาเฟ่ฮาลาล ที่บรรยากาศดีมากๆ ที่นี่เป็นทั้งคาเฟ่และร้านอาหารในหนึ่งเดียว
                ในส่วนของคาเฟ่ เป็นสไตล์มินิมอลคลีนๆ ถ่ายรูปสวยมาก ช่วงเย็นๆแสงลอดหน้าต่างพอดีเลย
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  <a class="btn btn-dark" href="https://www.facebook.com/Cominghome.phuket">
                    แสดงข้อมูลเพิ่มเติม</a
                  ></small
                >
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <img
              src="https://scontent.fbkk8-4.fna.fbcdn.net/v/t39.30808-6/257837445_237948621697263_1581911832597680771_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeEIcDtN9szvAYQ-pLNqWD8SZRjekKrapqllGN6QqtqmqfkdAEeCRegIUZIMtOSt6oz_OtNWrdUWejckVrzRRNYK&_nc_ohc=pyEHl_OYm1sAX9S4Zo5&_nc_ht=scontent.fbkk8-4.fna&oh=00_AfDSz187tIqmlyzMLJzndyg88ZhyIGpNK-XAlkTebqPJlw&oe=651F8922"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
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
  margin-inline: 230px;
  border-bottom: 2px solid;
}
.cardtext{
  font-size: 17px;
}
</style>