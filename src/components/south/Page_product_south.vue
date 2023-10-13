<script setup>
import Header_box_south from '../south/Box_menu_south.vue'
import { Otop_southStore } from '../../stores/All_product'
import { ref, computed } from 'vue'
import { addToCart } from '../shop/Cart_count.js'
import { cart } from '../shop/Cart_count'

const totalItems = computed(() => cart.value.reduce((acc, item) => acc + item.quantity, 0))

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

        <!-- ตระกร้า -->
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <router-link :to="{ name: 'cart' }">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="60"
                fill="currentColor"
                class="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                />
              </svg>
              <span>[ {{ totalItems }} ]</span>
            </router-link>
          </li>
          <!-- เมนู -->
          <li class="nav-item">
            <router-link :to="{ name: 'orderList' }">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="60"
                fill="currentColor"
                class="bi bi-card-checklist"
                viewBox="0 0 16 16"
              >
                <path
                  d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                />
                <path
                  d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </router-link>
          </li>
        </ul>
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
