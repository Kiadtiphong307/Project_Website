<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://i.pinimg.com/736x/e8/95/9a/e8959a063b375c093b1b5f21e2797435.jpg"
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
        <h5>เขื่อนแม่งัด อุทยานแห่งชาติศรีลานนา</h5>
        <p>อุทยานแห่งชาติที่ควรมาเยือนซักครั้ง</p>
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_north></Header_box_north>

  <!-- แถบ เนื้อหา -->

  <!-- box รูปซ้าย -->
  <div class="container">
    <div class="card mb-3" style="max-width: 1500px">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="https://i.pinimg.com/564x/e5/98/6e/e5986ead821600e86c01eac7079d1bf6.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">เขื่อนแม่งัด อุทยานแห่งชาติศรีลานนา</h5>
            <p class="card-text">
              เขื่อนแม่งัด ตั้งอยู่ในเขตอุทยานแห่งชาติศรีลานนา จังหวัดเชียงใหม่ และอยู่ไม่ไกลจาก
              วัดบ้านเด่น มากนัก ซึ่งวิวทิวทัศน์ของเขื่อนล้อมรอบไปด้วยภูเขาที่เขียวขจี
            </p>
          </div>
        </div>
      </div>
    </div>

    <!--box รูปขวา-->
    <div class="card mb-3" style="max-width: 1500px">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="https://www.chillpainai.com/src/wewakeup/scoop/img_scoop/scoop/kang/travel2/5meangud/mtf.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <p class="card-text">
              ความสำคัญของเขื่อนแม่งัด คือ
              การทำหน้าที่ส่งน้ำหล่อเลี้ยงพื้นที่เพาะปลูกในที่ราบเชิงเขาทั้งสองฝั่งของลำน้ำแม่งัด
              อีกทั้งยังช่วยบรรเทาอุทกภัยในเขตลุ่มน้ำปิง
              โดยเฉพาะบรรเทาน้ำหลากเข้าท่วมตัวเมืองเชียงใหม่ รวมทั้งยังเป็นแหล่งเพาะพันธุ์สัตว์น้ำ
              นอกจากเป็นเขื่อนที่ใช้เพื่อประโยชน์ในด้านการชลประทานแล้ว ด้วยวิวของเขื่อนที่งดงาม
              รายล้อมด้วยภูเขาเขียวขจี เขื่อนแม่งัดจึงกลายเป็นสถานที่ท่องเที่ยวพักผ่อนหย่อนใจยอดฮิต
              อีกแห่งหนึ่งที่เหมาะสำหรับคนรักธรรมชาติ และต้องการพักผ่อนแบบสงบ ท่ามกลางสายน้ำ
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- สิ่งของแนะนำขาย -->
    <h1>แนะนำสินค้า</h1>
    <hr />

    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col" v-for="index in 4" :key="index">
        <div class="card">
          <img
            src="https://media.discordapp.net/attachments/1153766321666932836/1153887346882773063/1.jpg?ex=65178e55&is=65163cd5&hm=3000ed1d1b278ba7d013ff4a926d2caca1902c2b30928485f6b0d1e897429086&=&width=585&height=585"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </p>
            <button type="button" class="btn btn-primary">Primary</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p class="card-text">
    <small class="text-body-secondary">
      <a
        href="https://www.paiduaykan.com/travel/%E0%B9%80%E0%B8%82%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%87%E0%B8%B1%E0%B8%94"
      >
        ขอบคุณข้อมูลจาก</a
      ></small
    >
  </p>
  <p class="card-text">
    <small class="text-body-secondary">
      <a href="https://travel.trueid.net/detail/kW22p6w5JexW"> ขอบคุณข้อมูลจาก</a></small
    >
  </p>
</template>

<script setup>
import Header_box_north from '../north/Box_menu_north.vue'
</script>
