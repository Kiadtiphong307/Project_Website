<script setup>
import Header_box_north from '../north/Box_menu_north.vue'
import { ref } from 'vue'
import { Otop_northStore } from '../../stores/All_product'
import { addToCart } from '../shop/Cart_count.js'

const otop_northStore = Otop_northStore()
const otop_north_all = ref(otop_northStore.Otop_north_list)

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
          src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.15752-9/386458934_311035248223132_1537075123796840911_n.png?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHmjzl-csr_jQ4WrrpwRuod4krk1349mwTiSuTXfj2bBLrzIlfHSmwW4f_E_04E6izxstTVXcRbJ-B5Ic7nZV3I&_nc_ohc=KfEJuQcp78MAX83axBf&_nc_ht=scontent.fbkk12-1.fna&_nc_e2o=f&oh=03_AdSXziZrrDiifiUtEgjSiTWa0YwkFPjXoOOka_t3c0H0JA&oe=654E4617"
          class="d-block w-100"
        />
      </div>
    </div>
  </div>


  <!-- แถบ menu -->
  <Header_box_north></Header_box_north>
  <!--กิจกรรมที่น่าสนใจ-->
  <div class="container">
    <h1 class="conTitle-n" style="padding-bottom: 10px">หมวดหมู่สินค้าOTOPภาคเหนือ</h1>
    <div class="container_otop-n">
      <div class="otop_conten-n" v-for="(i, index) in otop_north_all" :key="index">
        <img :src="i.img" class="img_otop-n" />
        <div>
          <h5 class="card-text">
            <strong>{{ i.name }}</strong>
          </h5>
          <p class="card-text">
            <strong>ประเภท: {{ i.category }}</strong>
          </p>
          <p class="card-text">
            <strong>ราคา: {{ i.price }} บาท</strong>
          </p>
          <!-- <p class="">{{ i.text }}</p> -->
          <button type="button"  @click="handleAddToCart(i)" class="btn btn-dark" >ลงตะกร้า</button>
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
  .container_otop-n {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: stretch;
    align-items: stretch;
    column-gap: 20px;
    padding: 40px;
    row-gap: 10px;
  }
  .otop_conten-n {
    display: grid;
    grid-template-columns: 250px auto;
    justify-items: stretch;
    column-gap: 10px;
    border: 1px solid;
    border-radius: 10px;
    padding-block: 20px;
  }
  .img_otop-n {
    max-width: 300px;
    border-radius: 15px;
  }
  .btn_cart-n {
    margin-inline: 100px;
    color: white;
    background-color: black;
    border-radius: 10px;
  }
  .imgTitle {
    max-width: 100%;
    padding-block: 200px;
    background-image: url(https://scontent.xx.fbcdn.net/v/t1.15752-9/370238141_1380124635963637_1233118382069501642_n.png?stp=dst-png_p403x403&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeFyc_p_AwX3GBsNHXU6qJR4N2PDAZX4D_Y3Y8MBlfgP9gA7B2JJKaXytlHHqxsuP4uX9GnJqFvVeT8Nl5JbaSB8&_nc_ohc=UAWE9mVxK5EAX-J-_dB&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_e2o=f&oh=03_AdQOPsR2U-BKsew0GF1Sbz-TRm7n_ezM08vIkjyZ-oSqYA&oe=654E376D);
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .imgTitle {
    max-width: 100%;
    padding-block: 200px;
    background-image: url(https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.15752-9/386458934_311035248223132_1537075123796840911_n.png?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHmjzl-csr_jQ4WrrpwRuod4krk1349mwTiSuTXfj2bBLrzIlfHSmwW4f_E_04E6izxstTVXcRbJ-B5Ic7nZV3I&_nc_ohc=KfEJuQcp78MAX83axBf&_nc_ht=scontent.fbkk12-1.fna&_nc_e2o=f&oh=03_AdSXziZrrDiifiUtEgjSiTWa0YwkFPjXoOOka_t3c0H0JA&oe=654E4617);
  }
  .container_otop-n {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: stretch;
    align-items: stretch;
    column-gap: 20px;
    row-gap: 10px;
    padding-inline: 50px;
  }
  .otop_conten-n {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    row-gap: 10px;
    padding-block: 10px;
    border: 1px solid;
    border-radius: 10px;
  }
  .img_otop-n {
    max-width: 200px;
    border-radius: 15px;
  }
  .btn_cart-n {
    margin-inline: 100px;
    color: white;
    background-color: black;
    border-radius: 10px;
  }
}
@media (max-width: 767px) {
  .imgTitle {
    max-width: 100%;
    padding-block: 200px;
    background-image: url(https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.15752-9/386458934_311035248223132_1537075123796840911_n.png?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHmjzl-csr_jQ4WrrpwRuod4krk1349mwTiSuTXfj2bBLrzIlfHSmwW4f_E_04E6izxstTVXcRbJ-B5Ic7nZV3I&_nc_ohc=KfEJuQcp78MAX83axBf&_nc_ht=scontent.fbkk12-1.fna&_nc_e2o=f&oh=03_AdSXziZrrDiifiUtEgjSiTWa0YwkFPjXoOOka_t3c0H0JA&oe=654E4617);
  }
  .container_otop-n {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    column-gap: 20px;
    row-gap: 10px;
  }
  .otop_conten-n {
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
  .img_otop-n {
    max-width: 200px;
    border-radius: 15px;
  }
  .btn_cart-n {
    margin-inline: 100px;
    color: white;
    background-color: black;
    border-radius: 10px;
  }
}
</style>
