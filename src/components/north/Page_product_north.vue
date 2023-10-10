<script setup>
import Header_box_north from '../north/Box_menu_north.vue'
import { ref } from 'vue'
import { Otop_northStore } from '../../stores/All_product'

const otop_northStore = Otop_northStore()
const otop_north_all = ref(otop_northStore.Otop_north_list)
</script>

<template>
  <!-- แถบ ภาพ  -->

  <div class="imgTitle">
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
    <div class="textTitle">
      <h2>สินค้าภาคเหนือที่น่าสนใจ</h2>
      <p>สินค้าที่พวกเราคัดสรรค์มาเพื่อคุณ</p>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_north></Header_box_north>
  <!--กิจกรรมที่น่าสนใจ-->
  <div class="container">
    <h1 class="conTitle">หมวดหมู่สินค้าOTOPภาคเหนือ</h1>
    <div class="container_otop">
      <div class="otop_conten" v-for="(i, index) in otop_north_all" :key="index">
        <img :src="i.img" class="img_otop" />
        <div>
          <h5>
            <strong>{{ i.name }}</strong>
          </h5>
          <p>
            <strong>ประเภท: {{ i.category }}</strong>
          </p>
          <p>
            <strong>ราคา: {{ i.price }} บาท</strong>
          </p>
          <!-- <p class="">{{ i.text }}</p> -->
          <button type="button" class="btn_cart">ลงตะกร้า</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.imgTitle {
  max-width: 100%;
  background-position: left bottom;
  background-size: cover;
  padding-top: 200px;
  padding-bottom: 100px;
  background-image: url(https://i.pinimg.com/736x/92/69/3e/92693ead2b7aaf5110a59e3e27cc47db.jpg);
}
.container_otop {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: stretch;
  align-items: stretch;
  column-gap: 10px;
  padding: 40px;
  row-gap: 20px;
}
.otop_conten {
  display: grid;
  grid-template-columns: 250px auto;
  justify-items: stretch;
  margin-block: 10px;
  column-gap: 10px;
}
.img_otop {
  max-width: 300px;
  border-radius: 15px;
}
.btn_cart {
  margin-inline: 100px;
  color: white;
  background-color: black;
  border-radius: 10px;
}
</style>
