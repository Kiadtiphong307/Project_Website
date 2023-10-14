<script setup>
import Header_box_central from '../central/Box_menu_central.vue'
import { Otop_centralStore } from '../../stores/All_product'
import { ref } from 'vue'
import { addToCart } from '../shop/Cart_count.js'

const otop_centralStore = Otop_centralStore()
const otop_central_all = ref(otop_centralStore.Otop_central_list)

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
          src="https://scontent.fbkk29-4.fna.fbcdn.net/v/t1.15752-9/370294893_635112385484009_6360565414414864349_n.png?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFN-Uoualpdjc0hUPbf9ZUjOGNwyUgeCMU4Y3DJSB4IxSi3r1kaABL_OJejKEqUtaUmMnl2SEwZmTwPzlcNGAt6&_nc_ohc=-IP8fAILOosAX9GIcSe&_nc_ht=scontent.fbkk29-4.fna&oh=03_AdQQ5YuQcEao1zfVWpJPSicHRksjBoTqTt4W30TD6yyv1Q&oe=654E308E"
          class="d-block w-100"
          alt="..."
          height="450"
        />
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_central></Header_box_central>

  <!--กิจกรรมที่น่าสนใจ-->
  <div class="container">
    <h1 class="textcenter"><strong>สินค้าOTOPที่น่าสนใจ</strong></h1>
    <hr />

    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col" v-for="(i, index) in otop_central_all" :key="index">
        <div
          class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
        >
          <img :src="i.img" class="rounded float-start" alt="..." width="300" height="300" />
          <div class="card-body">
            <h5 class="card-title">
              <strong>{{ i.name }}</strong>
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
              class="btn btn-dark"
              style="border-radius: 30px"
            >
              ลงตะกร้า
            </button>
          </div>
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
</style>
