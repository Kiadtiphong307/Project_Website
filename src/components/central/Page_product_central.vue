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
          maxheight="500px"
        />
      </div>
    </div>
  </div>

  <!-- แถบ menu -->
  <Header_box_central></Header_box_central>

  <!--กิจกรรมที่น่าสนใจ-->
  <div class="container">
    <h1 class="text-center"><ins><strong>สินค้าOTOPที่น่าสนใจ</strong></ins></h1>
    <hr />

    <div class="container_otop_c">
      <div class="otop_conten_c" v-for="(i, index) in otop_central_all" :key="index">

          <img :src="i.img" class="img_otop_c"/>
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
</template>
<style scoped>
@media (min-width: 1030px) {
  .imgTitle {
    max-width: 100%;
    padding-block: 200px;
    background-image: url(https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.15752-9/386458934_311035248223132_1537075123796840911_n.png?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHmjzl-csr_jQ4WrrpwRuod4krk1349mwTiSuTXfj2bBLrzIlfHSmwW4f_E_04E6izxstTVXcRbJ-B5Ic7nZV3I&_nc_ohc=KfEJuQcp78MAX83axBf&_nc_ht=scontent.fbkk12-1.fna&_nc_e2o=f&oh=03_AdSXziZrrDiifiUtEgjSiTWa0YwkFPjXoOOka_t3c0H0JA&oe=654E4617);
  }
  .container_otop_c {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: stretch;
    align-items: stretch;
    column-gap: 20px;
    padding: 40px;
    row-gap: 10px;
  }
  .otop_conten_c {
    display: grid;
    grid-template-columns: 250px auto;
    justify-items: stretch;
    column-gap: 10px;
    border: 1px solid;
    border-radius: 10px;
    padding-block: 20px;
  }
  .img_otop_c {
    max-width: 300px;
    border-radius: 15px;
  }
  .btn_cart_c {
    margin-inline: 100px;
    color: white;
    background-color: black;
    border-radius: 10px;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .imgTitle_c {
    max-width: 100%;
    padding-block: 200px;
    background-image: url(https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.15752-9/386458934_311035248223132_1537075123796840911_n.png?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHmjzl-csr_jQ4WrrpwRuod4krk1349mwTiSuTXfj2bBLrzIlfHSmwW4f_E_04E6izxstTVXcRbJ-B5Ic7nZV3I&_nc_ohc=KfEJuQcp78MAX83axBf&_nc_ht=scontent.fbkk12-1.fna&_nc_e2o=f&oh=03_AdSXziZrrDiifiUtEgjSiTWa0YwkFPjXoOOka_t3c0H0JA&oe=654E4617);
  }
  .container_otop_c {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: stretch;
    align-items: stretch;
    column-gap: 20px;
    row-gap: 10px;
    padding-inline: 50px;
  }
  .otop_conten_c {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    row-gap: 10px;
    padding-block: 10px;
    border: 1px solid;
    border-radius: 10px;
  }
  .img_otop_c {
    max-width: 200px;
    border-radius: 15px;
  }
  .btn_cart_c {
    margin-inline: 100px;
    color: white;
    background-color: black;
    border-radius: 10px;
  }
}
@media (max-width: 767px) {
  .imgTitle_c {
    max-width: 100%;
    padding-block: 200px;
    background-image: url(https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.15752-9/386458934_311035248223132_1537075123796840911_n.png?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHmjzl-csr_jQ4WrrpwRuod4krk1349mwTiSuTXfj2bBLrzIlfHSmwW4f_E_04E6izxstTVXcRbJ-B5Ic7nZV3I&_nc_ohc=KfEJuQcp78MAX83axBf&_nc_ht=scontent.fbkk12-1.fna&_nc_e2o=f&oh=03_AdSXziZrrDiifiUtEgjSiTWa0YwkFPjXoOOka_t3c0H0JA&oe=654E4617);
  }
  .container_otop_c {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    column-gap: 20px;
    row-gap: 10px;
  }
  .otop_conten_c {
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
  .img_otop_c {
    max-width: 200px;
    border-radius: 15px;
  }
  .btn_cart_c {
    margin-inline: 100px;
    color: white;
    background-color: black;
    border-radius: 10px;
  }
}
</style>
