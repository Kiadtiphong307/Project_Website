<script setup>
import Header_box_north from '../north/Box_menu_north.vue'
import { Otop_northStore } from '../../stores/All_product'
import { ref } from 'vue'
import { addToCart } from '../shop/Cart_count.js'

const otop_northStore = Otop_northStore()
const otop_north_all = ref(otop_northStore.Otop_north_list)

const handleAddToCart = (item) => {
  addToCart(item)
}
</script>

<template>
  <!-- แถบ ภาพ  -->

  <div class="imgTitle"></div>

  <!-- แถบ menu -->
  <Header_box_north></Header_box_north>
  <!--กิจกรรมที่น่าสนใจ-->
  <div class="container">
    <h1 class="conTitle">หมวดหมู่สินค้าOTOPภาคเหนือ</h1>
    <div class="container_otop">
      <div class="otop_conten" v-for="(i, index) in otop_north_all" :key="index">
        <img :src="i.img" class="img_otop" />
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
          <button type="submit" @click="handleAddToCart(i)" class="btn_cart">ลงตะกร้า</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.imgTitle {
  max-width: 100%;
  padding-block: 200px;
  background-image: url(https://scontent.xx.fbcdn.net/v/t1.15752-9/370238141_1380124635963637_1233118382069501642_n.png?stp=dst-png_p403x403&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeFyc_p_AwX3GBsNHXU6qJR4N2PDAZX4D_Y3Y8MBlfgP9gA7B2JJKaXytlHHqxsuP4uX9GnJqFvVeT8Nl5JbaSB8&_nc_ohc=UAWE9mVxK5EAX-J-_dB&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_e2o=f&oh=03_AdQOPsR2U-BKsew0GF1Sbz-TRm7n_ezM08vIkjyZ-oSqYA&oe=654E376D);
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
