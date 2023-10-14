<template>
  <!-- แถบ ภาพ  -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://www.khaosod.co.th/wpapp/uploads/2021/03/col01p1-14.jpg"
          class="d-block w-100"
          alt="..."
          :height="'450'"
        />
      </div>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="display-3">วัดถ้ำเขาประทุน</h5>
        <p class="h4">Some representative placeholder content for the first slide.</p>
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_east></Header_box_east>

  <!-- แถบ เนื้อหา -->

  <!-- box รูปซ้าย -->
  <div class="container">
    <div class="card mb-3" style="max-width: 1500px">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="https://www.unseennewchapters.com/img/rayong-01.6b0de6f8.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="h2"><strong>วัดถ้ำเขาประทุน</strong></h5>
            <p class="h5">
              วัดถ้ำเขาประทุน เป็นวัดที่มีภูมิประเทศเป็นหุบเขา หน้าผา และยอดเขาสูง
              มีถ้ำเล็กที่เต็มไปด้วยหินงอกหินย้อยอยู่ภายใน ด้านหน้าของวัดมี ‘ถ้ำพญานาคราช’
              เป็นถ้ำรับแขก และมีลำแสงจากช่องเขารูปทรงพญานาคที่มองแล้วชวนให้รู้สึกอัศจรรย์ใจ
              แต่ไฮไลต์ของจริงคือการนั่งเรือลอดถ้ำเข้าไปยัง ‘หุบผาสวรรค์’
              ที่พอหลุดออกมาจากความมืดของถ้ำ จะเหมือนทะลุออกมายังอีกมิติหนึ่ง
              ประกอบไปด้วยถ้ำอีกหลายถ้ำ ทั้งถ้ำนาคี, ถ้ำรอยพระพุทธบาท และถ้ำหินงอกหินย้อย
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
            <p class="h5">
              พร้อม ‘โพรงพญานาค’ ซึ่งเป็นจุดที่คนเฒ่าคนแก่เล่าว่า เคยพบเห็นพญานาคเลื้อยผ่านเข้าออก
              โดยรวมถือเป็นวัดที่เต็มไปด้วยพลังศรัทธาแห่งพญานาค เป็นรสชาติใหม่ เมืองระยอง
              ที่อยากให้ผู้คนมาลิ้มลองด้วยตัวเอง นักท่องเที่ยวสามารถท่องเที่ยวได้ตลอดทั้งปี
              กิจกรรมพิเศษอย่างนั่งเรือลอดถ้ำ จะจัดขึ้นในช่วงฤดูฝน ตั้งแต่เดือนกรกฎาคม-พฤศจิกายน
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <img
            src="https://img.salehere.co.th/p/1200x0/2022/06/07/3eqtb380isly.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
      </div>
    </div>

    <!-- สิ่งของแนะนำขาย -->
    <h1 class="textcenter"><strong>แนะนำสินค้า</strong></h1>
    <hr />

    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div
        class="card mb-3"
        style="max-width: 1500px"
        v-for="(i, index) in item_advice_east_02_all"
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
              <button type="button" class="btn btn-dark">LINK สินค้า</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p class="card-text">
    <small class="text-body-secondary">
      <a class="btn btn-outline-secondary" href="https://travel.trueid.net/detail/kW22p6w5JexW"
        >อ้างอิงมาจาก</a
      ></small
    >
  </p>
</template>
<style scoped>
.textcenter {
  text-align: center;
  margin-inline: 500px;
  border-bottom: 2px solid;
}
</style>
<script setup>
import Header_box_east from '../east/Box_menu_east.vue'

import { ref } from 'vue'
import { item_advice_east_02Store } from '../east/index_east'

const item_advice_east_02 = item_advice_east_02Store()
const item_advice_east_02_all = ref(item_advice_east_02.item_advice_east_list_02)
</script>
