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
          height="550"
        />
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_south></Header_box_south>

  <!-- แถบ เนื้อหา -->

  <!-- box รูปซ้าย -->
  <div class="container">
    <!-- สิ่งของแนะนำขาย -->
    <h1 class="textcenter"><strong>แนะนำสินค้า</strong></h1>
    <hr />

    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col" v-for="(i, index) in otop_south_all" :key="index">
          <div
            class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
          >
            <img :src="i.img" class="rounded float-start" alt="..." width="300" height="300" />
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
    </div>
  </div>
  <p class="card-text">
    <small class="text-body-secondary">
      <a
        class="btn btn-outline-secondary"
        href="https://www.thairath.co.th/lifestyle/travel/thaitravel/2708365"
      >
        ขอบคุณข้อมูลอ้างอิงจาก
      </a></small
    >
  </p>
  <p class="card-text">
    <small class="text-body-secondary">
      <a
        class="btn btn-outline-secondary"
        href="https://palanla.com/th/domesticLocation/detail/1560"
      >
        ขอบคุณข้อมูลอ้างอิงจาก
      </a></small
    >
  </p>
</template>
<style scoped>
.textcenter {
  text-align: center;
  margin-inline: 480px;
  border-bottom: 2px solid;
}
</style>
