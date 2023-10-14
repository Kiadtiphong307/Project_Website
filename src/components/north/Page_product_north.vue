<script setup>
import Header_box_north from '../north/Box_menu_north.vue'
import { ref } from 'vue'
import { Otop_northStore } from '../../stores/All_product'

const otop_northStore = Otop_northStore()
const otop_north_all = ref(otop_northStore.Otop_north_list)
</script>

<template>
  <!-- แถบ ภาพ  -->

  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-image-container">
        <img
          src="https://scontent.fbkk29-5.fna.fbcdn.net/v/t1.15752-9/386458934_311035248223132_1537075123796840911_n.png?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGY8BGYWGyMuH6me37jEOtk4krk1349mwTiSuTXfj2bBDt2q8TBpcZP6aWCqchrAI87DG1yTJwF7v8ETogo0E5F&_nc_ohc=87NEOr7csf4AX_amC9H&_nc_ht=scontent.fbkk29-5.fna&oh=03_AdQj3zD2eRiGUO89VTkmll7P-2JRZLEGPDZpvbHPQ4fClg&oe=65515997"
          class="d-block w-100"
          alt="..."
          height="450"
        />
<<<<<<< HEAD
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
=======
      </svg>
    </router-link>
>>>>>>> 32499d83f8092f54d95143793e6d1c214b14840a
  </div>
  <!-- แถบ menu -->
  <Header_box_north></Header_box_north>
  <!--กิจกรรมที่น่าสนใจ-->
  <div class="container">
<<<<<<< HEAD
    <h1 class="textcenter_Page_product_north">สินค้าOTOPที่น่าสนใจ</h1>
    <div class="container_otop_Page_product_north">
      <div class="otop_conten_Page_product_north" v-for="(i, index) in otop_north_all" :key="index">
        <img :src="i.img" class="img_otop_Page_product_north" />
=======
    <h1 class="conTitle-n" style="padding-bottom: 10px">หมวดหมู่สินค้าOTOPภาคเหนือ</h1>
    <div class="container_otop-n">
      <div class="otop_conten-n" v-for="(i, index) in otop_north_all" :key="index">
        <img :src="i.img" class="img_otop-n" />
>>>>>>> 32499d83f8092f54d95143793e6d1c214b14840a
        <div>
          <h5>
            <strong>{{ i.name }}</strong>
          </h5>
          <p>
            <strong>ประเภท: {{ i.category }}</strong>
          </p>
          <p>
            <strong>ราคา: {{ i.price }} บาท</strong>
          </p>
          <!-- <p class="">{{ i.text }}</p> -->
<<<<<<< HEAD
          <button type="submit" @click="handleAddToCart(i)" class="btn_cart_Page_product_north">ลงตะกร้า</button>
=======
          <button type="button" class="btn_cart-n">ลงตะกร้า</button>
>>>>>>> 32499d83f8092f54d95143793e6d1c214b14840a
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
<<<<<<< HEAD
.container_otop_Page_product_north {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: stretch;
  align-items: stretch;
  column-gap: 10px;
  padding: 40px;
  row-gap: 20px;
}
.otop_conten_Page_product_north {
  display: grid;
  grid-template-columns: 250px auto;
  justify-items: stretch;
  margin-block: 10px;
  column-gap: 10px;
}
.img_otop_Page_product_north {
  max-width: 300px;
  border-radius: 15px;
}
.btn_cart_Page_product_north {
  margin-inline: 100px;
  color: white;
  background-color: black;
  border-radius: 10px;
=======
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
>>>>>>> 32499d83f8092f54d95143793e6d1c214b14840a
}
.textcenter_Page_product_north {
  text-align: center;
  margin-inline: 380px;
  border-bottom: 2px solid;
}
</style>
