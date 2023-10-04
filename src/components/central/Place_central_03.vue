<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03025718_1.jpeg"
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
        <h5>ภูผาแรด</h5>
        <p>ภูผาแรด อ.เมืองราชบุรี จ.ราชบุรี</p>
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_central></Header_box_central>

  <!-- แถบ เนื้อหา -->

  <!-- box รูปซ้าย -->
  <div class="container">
    <div class="card mb-3" style="max-width: 1500px">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="https://www.mcot.net/uploads/article/202308/6cad4580c8ef76c3a5c9fc80f0028970.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">ภูผาแรด</h5>
            <p class="card-text">
              บริเวณนี้เคยเป็นแหล่งสัมปทานระเบิดหินภายในอุทยานหินเขางู
              ถูกซ่อนไว้กลางหุบเขามานานหลายปี
              ลักษณะเป็นผาสูงชันที่มีร่องรอยเว้าแหว่งของหินจากแรงระเบิด
              เผยให้เห็นความสวยงามของลวดลาย และสีสันของหน้าผาหินแกรนิต
              ซึ่งเป็นหินที่ถูกเปรียบเปรยว่า แข็งแกร่งดั่ง “แรด” จึงเป็นที่มาของชื่อ “ภูผาแรด”
              เสน่ห์ของมุมลับแห่งนี้ อยู่ที่ความสวยงามในแต่ละช่วงเวลาของวัน
            </p>
          </div>
        </div>
      </div>
    </div>

    <!--box รูปขวา-->
    <div class="card mb-3" style="max-width: 1500px">
      <div class="row g-0">
        <div class="col-md-8">
          <div class="card-body">
            <p class="card-text">
              ซึ่งขึ้นอยู่กับทิศทางของแสงแดดที่ส่องลงบริเวณหน้าผาแต่ละฝั่ง
              และให้จับตาวินาทีที่น้ำนิ่งจนเกิดภาพเงาสะท้อนคล้ายภาพ Abstract บนผิวน้ำ
              ถือเป็นงานอาร์ตที่ธรรมชาติรังสรรค์ เป็นความมหัศจรรย์บทใหม่ของเมืองราชบุรี
              สามารถเดินทางท่องเที่ยวได้ตลอดทั้งปี ตั้งแต่เวลา 08.00 - 17.00 น
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <img
            src="https://www.mcot.net/uploads/article/202308/0ddd2668b0a007355ae6e24290eab631.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
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
          </div>
        </div>
      </div>
    </div>
  </div>
  <p class="card-text">
    <small class="text-body-secondary">
      <a href="https://www.thairath.co.th/lifestyle/travel/thaitravel/2705387?gallery_id=1"
        >แสดงข้อมูลเพิ่มเติม</a
      >
    </small>
  </p>
</template>

<script setup>
import Header_box_central from '../central/box_menu_central.vue'
</script>
