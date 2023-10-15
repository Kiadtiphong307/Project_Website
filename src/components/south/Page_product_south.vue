<script setup>
import Header_box_south from '../south/Box_menu_south.vue'
import { Otop_southStore } from '../../stores/All_product'
import { ref } from 'vue'
import { addToCart } from '../shop/Cart_count.js'

const otop_southStore = Otop_southStore()
const otop_south_all = ref(otop_southStore.Otop_south_list)

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
          src="https://scontent.fbkk29-5.fna.fbcdn.net/v/t1.15752-9/387555130_1036514387774840_6452738890701898177_n.png?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeErG2XjBWX_qjPUYMYRoYm8dvZI-MebaJF29kj4x5tokTMbpHOf0M2SoLVtH8lTPUOW64zVuXpxHA1z_f3lgTZz&_nc_ohc=AqofRQxSxK4AX_JO7QV&_nc_ht=scontent.fbkk29-5.fna&oh=03_AdRj5MP70TlwzsUSL0iBNZZiZRVDLYEDNcmExFcQzdDWYA&oe=654EB29B"
          class="d-block w-100"
          alt="..."
          maxheight="500px"
        />
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_south></Header_box_south>

  <!-- แถบ เนื้อหา -->

  <!-- box รูปซ้าย -->
  <div class="container" >
    <h1 class="text-center"><strong>สินค้าOTOPที่น่าสนใจ</strong></h1>
    <hr />
    <div class="container_otop_s">
      <div class="otop_conten_s" v-for="(i, index) in otop_south_all" :key="index">
        <img :src="i.img" class="img_otop_s" />
        <div class="card-body">
          <h5 class="card-text mb-auto">
            <strong class="h3">{{ i.name }}</strong>
          </h5>
          <p class="card-text">
            <strong>ประเภท: {{ i.category }}</strong>
          </p>
          <p class="card-text">
            <strong>ราคา: {{ i.price }} บาท</strong>
          </p>
          <p class="card-text">{{ i.text }}</p>
          <button
            type="submut"
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
  <a class="btnLink_s" href="https://fav-agoodtime.com/travel/southern-otop/
otop"
    >
      อ้างอิงมาจาก
    </a>
</template>
<style scoped>
@media (min-width: 1030px) {
  .container_otop_s {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    column-gap: 20px;
    padding: 40px;
    row-gap: 10px;
  }
  .btnLink_s {
    background-color: black;
    text-decoration: none;
    color: white;
    margin-bottom: 10px;
    padding: 5px;
    width: 36%;
    margin-inline: 47%;
  }
  .otop_conten_s {
    display: grid;
    grid-template-columns: 250px auto;
    justify-items: stretch;
    column-gap: 10px;
    border: 1px solid;
    border-radius: 10px;
    padding-block: 20px;
  }
  .img_otop_s {
    max-width: 300px;
    border-radius: 15px;
  }
  .btn_cart_s {
    margin-inline: 100px;
    color: white;
    background-color: black;
    border-radius: 10px;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .container_otop_s {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: stretch;
    align-items: stretch;
    column-gap: 20px;
    row-gap: 10px;
    padding-inline: 50px;
  }
  .btnLink_s {
    background-color: black;
    text-decoration: none;
    color: white;
    padding: 5px;
    margin-inline: 47%;
  }
  .otop_conten_s {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    row-gap: 10px;
    padding-block: 10px;
    border: 1px solid;
    border-radius: 10px;
  }
  .img_otop_s {
    max-width: 200px;
    border-radius: 15px;
  }
  .btn_cart_s {
    margin-inline: 100px;
    color: white;
    background-color: black;
    border-radius: 10px;
  }
}
@media (max-width: 767px) {
  .container_otop_s {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    column-gap: 20px;
    row-gap: 10px;
  }
  .btnLink_s {
    background-color: black;
    text-decoration: none;
    color: white;
    padding: 5px;
    margin-inline: 42%;
  }
  .otop_conten_s {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    row-gap: 10px;
    padding-block: 10px;
    border: 1px solid;
    border-radius: 10px;
    padding-inline: 10px;
  }
  .img_otop_s {
    max-width: 200px;
    border-radius: 15px;
  }
  .btn_cart_s {
    margin-inline: 100px;
    color: white;
    background-color: black;
    border-radius: 10px;
  }
}
</style>
