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
          src="https://scontent.fbkk29-4.fna.fbcdn.net/v/t1.15752-9/370294893_635112385484009_6360565414414864349_n.png?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFN-Uoualpdjc0hUPbf9ZUjOGNwyUgeCMU4Y3DJSB4IxSi3r1kaABL_OJejKEqUtaUmMnl2SEwZmTwPzlcNGAt6&_nc_ohc=-IP8fAILOosAX_y0TpA&_nc_ht=scontent.fbkk29-4.fna&oh=03_AdRlIx5DkjUFLGhjYHfaBezQ1L9gkxD--iYlE_LNVWPUfA&oe=65509B4E"
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
    <h1 class="textcenter_Page_product_central"><strong>สินค้าOTOPที่น่าสนใจ</strong></h1>
    <hr />
    <div class="container_otop_Page_product_central">
      <div
        class="otop_conten_Page_product_central"
        v-for="(i, index) in otop_central_all"
        :key="index"
      >
        <img
          :src="i.img"
          class="img_otop_Page_product_central"
          alt="..."
          width="300"
          height="300"
        />
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
          <button type="submit" @click="handleAddToCart(i)" class="btn_cart_Page_product_central">
            ลงตะกร้า
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container_otop_Page_product_central {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: stretch;
  align-items: stretch;
  column-gap: 10px;
  padding: 40px;
  row-gap: 20px;
}
.otop_conten_Page_product_central {
  display: grid;
  grid-template-columns: 250px auto;
  justify-items: stretch;
  margin-block: 10px;
  column-gap: 10px;
}
.img_otop_Page_product_central {
  max-width: 300px;
  border-radius: 15px;
}
.btn_cart_Page_product_central {
  margin-inline: 100px;
  color: white;
  background-color: black;
  border-radius: 10px;
}
.textcenter_Page_product_central {
  text-align: center;
  margin-inline: 380px;
  border-bottom: 2px solid;
}
</style>
