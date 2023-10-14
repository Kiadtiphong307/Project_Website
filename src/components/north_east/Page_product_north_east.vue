<script setup>
import Header_box_north_east from '../north_east/Box_menu_north_east.vue'
import { Otop_north_eastStore } from '../../stores/All_product'
import { ref } from 'vue'
import { addToCart } from '../shop/Cart_count.js'

const otop_north_eastStore = Otop_north_eastStore()
const otop_north_east_all = ref(otop_north_eastStore.Otop_north_east_list)

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
  <Header_box_north_east></Header_box_north_east>
  <!--กิจกรรมที่น่าสนใจ-->
  <div class="container">
    <h1 class="conTitle">สินค้าOTOPที่น่าสนใจ</h1>
    <div class="container_otop">
      <div class="otop_conten" v-for="(i, index) in otop_north_east_all" :key="index">
        <img :src="i.img" class="img_otop" />
        <div>
          <h5>
            <strong>{{ i.name }}</strong>
          </h5>
          <p>
            <strong>ประเภท: {{ i.category }}</strong>
          </p>
          <p>
            <strong>ราคา:{{ i.price }} บาท</strong>
          </p>
          <button type="submit" @click="handleAddToCart(i)" class="btn_cart">ลงตะกร้า</button>
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
  background-color: bisque;
  background-image: url();
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
