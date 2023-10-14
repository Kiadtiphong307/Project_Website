<script setup>
import Header_box_east from '../east/Box_menu_east.vue'
import { Otop_eastStore } from '../../stores/All_product'
import { ref } from 'vue'
import { addToCart } from '../shop/Cart_count.js'

const otop_eastStore = Otop_eastStore()
const otop_east_all = ref(otop_eastStore.Otop_east_list)

const handleAddToCart = (item) => {
  addToCart(item)
}
</script>

<template>
  <!-- แถบ ภาพ  -->

  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-7.fna.fbcdn.net/v/t1.15752-9/387593657_6765877803479798_8168857763006525534_n.png?_nc_cat=106&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeG_Q_0LYJor6HDQQzuY5q-dYRn0stqJGyNhGfSy2okbI02Jv8YoT_GkkZohC7OS1fsGh79GWXun6dNsUVaMLMRb&_nc_ohc=XvSYrxWVwxUAX93UXfK&_nc_ht=scontent.fbkk29-7.fna&oh=03_AdRQw7yvifWje5c2OFC7PxtTytZ_vmmw2NLodz4noKCT8Q&oe=654E0959"
          class="d-block w-100"
          alt="..."
          height="450"
        />
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_east></Header_box_east>

  <!--กิจกรรมที่น่าสนใจ-->
  <div class="container">
    <h1 class="textcenter_Page_product_east"><strong>สินค้าOTOPที่น่าสนใจ</strong></h1>
    <hr />

    <div class="container_otop_Page_product_east">
      <div class="otop_conten_Page_product_east" v-for="(i, index) in otop_east_all" :key="index">
          <img :src="i.img" class="img_otop_Page_product_east"/>
          <div class="card-body">
            <h5 class="card-text mb-auto">
              <strong class="h3">{{ i.name }}</strong>
            </h5>
            <p class="card-text">
              <strong>ประเภท: {{ i.category }}</strong>
            </p>
            <p class="card-text">
              <strong>ราคา:{{ i.price }} บาท</strong>
            </p>
            <p class="card-text">{{ i.text }}</p>
            <button
              type="submit"
              @click="handleAddToCart(i)"
              class="btn_cart_Page_product_east"
              style="border-radius: 30px"
            >
              ลงตะกร้า
            </button>
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped>
.textcenter {
  text-align: center;
  margin-inline: 420px;
  border-bottom: 2px solid;
}
.container_otop_Page_product_east {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: stretch;
  align-items: stretch;
  column-gap: 10px;
  padding: 40px;
  row-gap: 20px;
}
.otop_conten_Page_product_east {
  display: grid;
  grid-template-columns: 250px auto;
  justify-items: stretch;
  margin-block: 10px;
  column-gap: 10px;
}
.img_otop_Page_product_east {
  max-width: 300px;
  border-radius: 15px;
}
.btn_cart_Page_product_east {
  margin-inline: 100px;
  color: white;
  background-color: black;
  border-radius: 10px;
}
.textcenter_Page_product_east {
  text-align: center;
  margin-inline: 380px;
  border-bottom: 2px solid;
}
</style>
