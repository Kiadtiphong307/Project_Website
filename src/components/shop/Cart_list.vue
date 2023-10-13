<script setup>
import { cart } from '../shop/Cart_count';
import { addOrder } from '../shop/Order_count';
import { computed, ref } from 'vue';
import header_bar from '/Project_Website/src/views/Header_box.vue';

const totalPrice = (item) => computed(() => item.price * item.quantity);

const totalCartPrice = computed(() => {
  return cart.value.reduce((acc, item) => acc + item.price * item.quantity, 0);
});

const totalItemsInCart = computed(() => {
  return cart.value.reduce((acc, item) => acc + item.quantity, 0);
});

const removeFromCart = (itemToRemove) => {
  const index = cart.value.findIndex(item => item.name === itemToRemove.name);
  if (index !== -1) {
    cart.value.splice(index, 1);
  }
};

const shippingAddress = ref({
  fullName: '',
  phoneNumber: '',
  province: '',
  district: '',
  subDistrict: '',
  address: '',
  zip: ''
});

const clearShippingAddress = () => {
  shippingAddress.value = {
    fullName: '',
    phoneNumber: '',
    province: '',
    district: '',
    subDistrict: '',
    address: '',
    zip: ''
  };
};

const confirmOrder = () => {
  if (totalItemsInCart.value > 0 && isShippingAddressComplete()) {
    const orderData = { items: cart.value, shippingAddress: { ...shippingAddress.value } };
    addOrder(orderData);
    cart.value = [];
  } else {
    console.log("ไม่สามารถยืนยันการสั่งซื้อได้ โปรดตรวจสอบว่าคุณมีสินค้าในตะกร้าสินค้าและกรอกข้อมูลที่อยู่จัดส่งทั้งหมด");
  }
};

const isShippingAddressComplete = () => {
  const { fullName, phoneNumber, province, district, subDistrict, address, zip } = shippingAddress.value;
  return fullName && phoneNumber && province && district && subDistrict && address && zip;
};

const confirmOrderHandler = () => {
  if (totalItemsInCart.value > 0 && isShippingAddressComplete()) {
    confirmOrder();
    clearShippingAddress();
    alert('สั่งซื้อสำเร็จ');
  } else {
    if (totalItemsInCart.value === 0) {
      alert('กรุณาเพิ่มสินค้าลงในตะกร้าก่อนทำการสั่งซื้อ');
    } else if (!isShippingAddressComplete()) {
      alert('กรุณากรอกข้อมูลที่อยู่การจัดส่งให้ครบถ้วน');
    }
  }
};
</script>




<template>
<div class="container">
  <header_bar/>

  <div v-if="cart.length">
    <section class="h-100" style="background-color: #eee;">
  <div class="container h-100 py-5" >
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-10">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h1 class="fw-normal mb-0 text-black">ตะกร้า</h1>
        </div>

        <div class="card rounded-3 mb-4" v-for="(item, index) in cart" :key="index">
          <div class="card-body p-4">
            <div class="row d-flex justify-content-between align-items-center">
              <div class="col-md-2 col-lg-2 col-xl-2">
                <img :src="item.img" class="img-fluid rounded-3" alt="Cotton T-shirt">
              </div>
              <div class="col-md-3 col-lg-3 col-xl-3">
                <span>รายการ {{ index + 1 }} </span>
                
                <p class="lead fw-normal mb-2">{{ item.name }}</p>
                <p><span class="text-muted">ราคา : {{item.price}} บาท</span></p>
              </div>

              <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                <input id="form1" min="0" name="quantity" type="number" v-model="item.quantity"
                  class="form-control form-control-sm" />
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 class="mb-0">{{ totalPrice(item).value }} บาท</h5>
              </div>
              

              <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <button @click="() => removeFromCart(item)" class="btn btn-link p-0 border-0 bg-transparent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="20" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                  </svg>
                </button>
              </div>              
           </div>
          </div>
        </div>
      </div>
    </div>    
  </div>

    <div class="card mb-5">
      <div class="card-body p-4">
        <div class="float-end">
          <p class="mb-0 me-5 d-flex align-items-center">
            <h4><span class="small text-muted me-2"> รายการทั้งหมด {{ totalItemsInCart }} จำนวน </span></h4>
          </p>

          <p class="mb-0 me-5 d-flex align-items-center">
            <strong><h3> <span class="small text-muted me-2"> ยอดรวมทั้งหมด {{ totalCartPrice }}  บาท</span></h3></strong>
          </p>

        </div>
      </div>
  </div>
      </section>  

    <section class="h-100" style="background-color: #eee;">
  <div>
    <form @submit.prevent="confirmOrder">
      <h1 class="fw-normal mb-0 text-black">ที่อยู่การจัดส่ง</h1>
      <hr>

      <div class="mb-3">
        <label for="fullName" class="form-label">ชื่อ-สกุล</label>
        <input v-model="shippingAddress.fullName" type="text" class="form-control" id="fullName" required>
      </div>
    
      <div class="mb-3">
        <label for="phoneNumber" class="form-label">เบอร์โทรศัทพ์</label>
        <input v-model="shippingAddress.phoneNumber" type="text" class="form-control" id="phoneNumber" required>
      </div>
    
      <div class="mb-3">
        <label for="province" class="form-label">จังหวัด</label>
        <input v-model="shippingAddress.province" type="text" class="form-control" id="province" required>
      </div>
    
      <div class="mb-3">
        <label for="district" class="form-label">อำเภอ</label>
        <input v-model="shippingAddress.district" type="text" class="form-control" id="district" required>
      </div>
    
      <div class="mb-3">
        <label for="subDistrict" class="form-label">ตำบล</label>
        <input v-model="shippingAddress.subDistrict" type="text" class="form-control" id="subDistrict" required>
      </div>
    
      <div class="mb-3">
        <label for="address" class="form-label">ที่อยู่</label>
        <input v-model="shippingAddress.address" type="text" class="form-control" id="address" required>
      </div>
    
      <div class="mb-3">
        <label for="zip" class="form-label">รหัสไปรษณีย์</label>
        <input v-model="shippingAddress.zip" type="text" class="form-control" id="zip" required>
      </div>
    
    </form>
  </div>

      </section>

    <div class="d-flex justify-content-end">
      <button @click="confirmOrderHandler" type="button" class="btn btn-primary btn-lg">สั่งซื้อ</button>
    </div>
  </div>


  <div v-else>
    <p style="color: red;">**ไม่มีสินค้าในตระกร้า**</p>
  </div>
</div>

</template>