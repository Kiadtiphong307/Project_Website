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
          src="https://scontent.fbkk4-5.fna.fbcdn.net/v/t1.15752-9/369856938_234627502927085_3172637021821908409_n.png?_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeF9P09NOsZztXf94q-0ojllMxDUej5H20MzENR6PkfbQxmB87NVFcCKQBQ6HCfHq3R3UNlwVipdXLiUBYY8IVoI&_nc_ohc=vke8og1aUR0AX_RhGqc&_nc_ht=scontent.fbkk4-5.fna&_nc_e2o=f&oh=03_AdREnFjitQ0a9arszK_-XwJ0VZb5vBgw1I7PnUI7t_9n_A&oe=655357D0"
          class="d-block w-100"
          alt="..."
          style="max-height: 500px;"
        />
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_north_east></Header_box_north_east>
  <!--กิจกรรมที่น่าสนใจ-->
  <div class="container">
    <h1 class="conTitle-ne">สินค้าOTOPที่น่าสนใจ</h1>
    <div class="container_otop-ne">
      <div class="otop_conten-ne" v-for="(i, index) in otop_north_east_all" :key="index">
        <img :src="i.img" class="img_otop-ne" />
        <div>
          <h5 class="card-text">
            <strong>{{ i.name }}</strong>
          </h5>
          <p class="card-text">
            <strong>ประเภท: {{ i.category }}</strong>
          </p>
          <p class="card-text">
            <strong>ราคา:{{ i.price }} บาท</strong>
          </p>
          <button type="submit" @click="handleAddToCart(i)" class="btn btn-dark">ลงตะกร้า</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@media (min-width: 1030px) {
  .container_otop-ne {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: stretch;
    align-items: stretch;
    column-gap: 20px;
    padding: 40px;
    row-gap: 10px;
  }
  .otop_conten-ne {
    display: grid;
    grid-template-columns: 300px auto;
    justify-items: stretch;
    align-items: center;
    column-gap: 10px;
    border: 1px solid;
    border-radius: 10px;
    padding: 20px;
  }
  .img_otop-ne {
    max-width: 300px;
    border-radius: 15px;
  }
  .btn_cart-ne {
    margin-inline: 100px;
    color: white;
    background-color: black;
    border-radius: 10px;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .container_otop-ne {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: stretch;
    align-items: stretch;
    column-gap: 20px;
    row-gap: 10px;
    padding-inline: 50px;
  }
  .otop_conten-ne {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    row-gap: 10px;
    padding: 10px;
    border: 1px solid;
    border-radius: 10px;
  }
  .img_otop-ne {
    max-width: 200px;
    border-radius: 15px;
  }
  .btn_cart-ne {
    margin-inline: 100px;
    color: white;
    background-color: black;
    border-radius: 10px;
  }
}
@media (max-width: 767px) {
  .container_otop-ne {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    column-gap: 20px;
    row-gap: 10px;
  }
  .otop_conten-ne {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    row-gap: 10px;
    padding-block: 10px;
    border: 1px solid;
    border-radius: 10px;
    padding-inline: 10px;
    max-width: 100%;
  }
  .img_otop-ne {
    max-width: 100%;
    border-radius: 15px;
  }

}
</style>
