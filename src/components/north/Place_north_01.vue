<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://i.pinimg.com/564x/a4/11/bf/a411bfbf71e49fc1a525fccf0bbc0d40.jpg"
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
        <h5>ประตูท่าแพ</h5>
        <p>จุดถ่ายรูปที่ไม่ควรพลาด</p>
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
            src="https://i.pinimg.com/564x/46/7e/85/467e85d04949954473e824aae11cc891.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">ประตูท่าแพ</h5>
            <p class="card-text">
              ประตูท่าแพ ถือเป็นอีกหนึ่งจุดถ่ายภาพเช็คอินที่ห้ามพลาดของจังหวัดเชียงใหม่ เพราะเป็นสถานที่ยอดนิยมของนักท่องเที่ยวที่รู้จักกันดีเมื่อมาที่นี่
               นับว่าเป็นจุดไฮไลท์ที่จะต้องมาเก็บภาพ ไม่ว่าจะเป็นภาพนิ่ง หรือภาพเคลื่อนไหวกับนกพิราบ 
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
              ประตูท่าแพซึ่งตั้งอยู่ในปัจจุบันนี้ เทศบาลนครเชียงใหม่และกรมศิลปากรได้ร่วมกันสร้างขึ้นมาใหม่ เมื่อปี พ.ศ. 2528 โดยอาศัยหลักฐานทางประวัติศาสตร์และโบราณคดี ประตูท่าแพ 
              เดิมเป็นประตู 2 ชั้น วางตำแหน่งเยื้องกันและมีป้อมยื่นออกมาข้างประตูเมือง เพื่อใช้เป็นปราการป้องกันเมืองยามศึกสงครามในอดีต
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <img
            src="https://i.pinimg.com/564x/9f/84/9b/9f849babe21739644bcca118cf0bbe29.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
      </div>
    </div>

    <!-- สิ่งของแนะนำขาย -->
    <h1>สิ่งที่ควรเตรียมไป</h1>
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
  <p class="card-text"><small class="text-body-secondary"> <a href="https://travel.trueid.net/detail/kW22p6w5JexW">อ้างอิงมาจาก</a></small></p>
</template>

<script setup>
import Header_box_north from '../north/Box_menu_north.vue'
</script>
