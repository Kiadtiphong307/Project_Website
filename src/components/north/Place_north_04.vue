<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://img.salehere.co.th/p/1200x0/2022/02/07/q36ylfuquu2v.jpg"
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
        <h5>วัดเด่นสะหลีศรีเมืองแกน</h5>
        <p>เป็นวัดที่มีความงดงามอลังการ เหมาะแก่การไหว้พระขอพร</p>
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
            src="https://img.salehere.co.th/p/1200x0/2022/02/07/i5jteglqgc26.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">วัดเด่นสะหลีศรีเมืองแกน</h5>
            <p class="card-text">
              วัดเด่นสะหลีศรีเมืองแกน หรือ วัดบ้านเด่น เป็นวัดที่มีความงดงามอลังการ วิหารต่างๆ
              ของวัดแห่งนี้ส่วนใหญ่เป็นไม้สัก ออกแบบทรงล้านนา
              ตามราวบันไดของวิหารจะมีรูปปั้นสัตว์ในวรรณคดีให้ได้ชมมากมายเลย เช่น นกยุง นาค ช้าง
              เป็นต้น นอกจากนี้บริเวณรอบๆ วัดยังมีปีนักษัตรประจำปีเกิด
              และพระธาตุจำลองที่สร้างอยู่ภายในตัววัดให้นักท่องเที่ยวได้มาทำบุญกัน
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
              วัดเด่นสะหรีศรีเมืองแกน เป็นชื่อที่มีความคล้องจองและชวนให้สงสัยทุกครั้งที่ได้ยิน หลาย
              ๆ คนอาจจะสงสัยว่าชื่อนี้มีความหมายว่าอะไรกันใช่ไหมล่ะคะ ต้องบอกก่อนว่า
              เมื่อนานมาแล้วครูบาเทืองได้มาที่วัดแห่งนี้ซึ่งตั้งอยู่ในเมืองแกน
              และได้มีต้นโพธิ์เกิดขึ้น ชาวบ้านเรียกต้นโพธิ์ต้นนั้นกันว่า เก๊าสะหลี
              และวัดแห่งนี้ได้ตั้งอยู่บนเนิน ทำให้พื้นที่วัดนั้นเด่นกว่าที่อื่น ๆ
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <img
            src="https://img.salehere.co.th/p/1200x0/2022/02/07/2eiijjktipv6.jpg"
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
            <button type="button" class="btn btn-primary">Primary</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p class="card-text">
    <small class="text-body-secondary">
      <a href="https://salehere.co.th/articles/wat-ban-den-chiang-mai"> อ้างอิงมาจาก </a></small
    >
  </p>
  <p class="card-text">
    <small class="text-body-secondary">
      <a href="https://travel.trueid.net/detail/kW22p6w5JexW"> อ้างอิงมาจาก </a></small
    >
  </p>
</template>

<script setup>
import Header_box_north from '../north/Box_menu_north.vue'
</script>
