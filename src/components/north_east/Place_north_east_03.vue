<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://img.wongnai.com/p/400x0/2023/01/02/3863404ea09d4cb58f6c17bbee4c61b6.jpg"
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
        <h5>ผาพญากูปรี</h5>
        <p>ผาพญากูปรี อ.ภูสิงห์ จ.ศรีสะเกษ</p>
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_north_east></Header_box_north_east>

  <!-- แถบ เนื้อหา -->

  <!-- box รูปซ้าย -->
  <div class="container">
    <div class="card mb-3" style="max-width: 1500px">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="https://img.wongnai.com/p/400x0/2023/01/02/e3524011ac7841cd83d115b0b2d91cf1.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">ผาพญากูปรี</h5>
            <p class="card-text">
              จุดชมวิวที่มีทิวทัศน์สวยตระการตา แถมมีความเป็นมาที่น่าสนใจ
              ที่ตั้งอยู่ในบริเวณที่เคยมีการค้นพบ 'กูปรี'
              สัตว์ป่าที่สูญพันธุ์ไปแล้วจากสารบบประเทศไทย 'ผาพญากูปรี'
              ถือเป็นจุดชมวิวที่มีอากาศเย็นบริสุทธิ์จากแนวเทือกเขาพนมดงรัก
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
              ทั้งยังเป็นจุดชมธรรมชาติที่สวยงามของลำห้วยสำราญ
              แหล่งต้นน้ำสำคัญที่หล่อเลี้ยงชาวศรีสะเกษ และยังมีเส้นทางเดินลงไปชมภาพวาดพญากูปรี
              รวมถึงเที่ยวชมน้ำตกพญากูปรีในบริเวณเดียวกันได้อีกด้วย
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <img
            src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.6435-9/110164723_659171278020502_571406635823272562_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGHKhK-Empx-Gx7ikdJfQPujee98g1tdfGN573yDW118eqGZhKsrixqYRsvf3IkEcAxg4J_STE2s-i99Rj8ZkZu&_nc_ohc=3NJB04xHnfgAX9OfwJB&_nc_ht=scontent.fbkk13-2.fna&oh=00_AfCT-CkTy90Grs0lmsT7WBfnOa7yhPGPj5DVKdg1dbeG8w&oe=6543BC42"
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
      <div
        class="card mb-3"
        style="max-width: 1500px"
        v-for="(i, index) in item_advice_north_east_01_all"
        :key="index"
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="i.img" class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ i.name }}</h5>
              <p class="card-text">{{ i.category }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p class="card-text">
    <small class="text-body-secondary">
      <a href="https://travel.trueid.net/detail/kW22p6w5JexW">อ้างอิงมาจาก</a></small
    >
  </p>
</template>

<script setup>
import Header_box_north_east from '../north_east/Box_menu_north_east.vue'

import { ref } from 'vue'
import { item_advice_north_east_01Store } from '../north_east/index_north_east'

const item_advice_north_east_01 = item_advice_north_east_01Store()
const item_advice_north_east_01_all = ref(item_advice_north_east_01.item_advice_north_east_list_01)
</script>
