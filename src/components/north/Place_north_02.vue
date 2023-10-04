<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://www.paiduaykan.com/travel/wp-content/uploads/2021/12/2-SON00547.jpg"
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
        <h5>สวนสนแม่แตง</h5>
        <p>สถานที่ที่ร่มรื่นเหมาะกับวันพักผ่อน</p>
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
            src="https://www.paiduaykan.com/travel/wp-content/uploads/2021/12/1-SON00554.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">สวนสนแม่แตง</h5>
            <p class="card-text">
              สวนสนแม่แตง หรือสวนผลิตเมล็ดพันธ์สองใบ
              ตั้งอยู่ในเขตพื้นที่รับผิดชอบของสถานีวนวัฒนาวิจัยอินทรขิล จังหวัดเชียงใหม่
              ซึ่งเป็นสถานีงานวิจัยด้านป่าไม้ บรรยากาศรอบๆ ของสวนสนแห่งนี้ดูร่มรื่นสบายตา
              จึงเหมาะแก่การมาถ่ายภาพ หรือจะมาพักผ่อนหย่อนใจก็ได้ค่ะ
              ภายในจะมีจุดถ่ายภาพให้กับนักท่องเที่ยว บริเวณกว้างขว้างมากๆ
              เลือกมุมถ่ายภาพได้ตามใจกันเลย
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
              สวนผลิตเมล็ดพันธ์สนสองใบหรือ สวนสนแม่แตง ตั้งอยู่ติดถนนหมายเลข 107
              เส้นทางแม่แตงมุ่งหน้าสู่อำเภอเชียงดาวและฝา
              เป็นเส้นทางผ่านไปยังสองอำเภอนี้สามารถแวะเที่ยวก่อนไปต่อยังจุดอื่นได้
              ลักษณะเป็นสวนสนคาริเบียน ในเนื้อที่ 27 ไร่
              ซึ่งเป็นงานวิจัยการพัฒนาและฟื้นฟูทดลองปลูกสนคาริเบีย
              ภายในสวนสวยอากาศร่มรื่นเย็นสบายตลอดทั้งวัน
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <img
            src="https://img.wongnai.com/p/1920x0/2018/09/11/87d33f9b8d34413ba023c77b1f6c3691.jpg"
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
      <a
        href="https://www.paiduaykan.com/travel/%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B8%AA%E0%B8%99%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B9%81%E0%B8%95%E0%B8%87"
      >
        อ้างอิงมาจาก</a
      ></small
    >
  </p>
  <p class="card-text">
    <small class="text-body-secondary">
      <a href="https://travel.trueid.net/detail/kW22p6w5JexW"> อ้างอิงมาจาก</a></small
    >
  </p>
</template>

<script setup>
import Header_box_north from '../north/Box_menu_north.vue'
</script>
