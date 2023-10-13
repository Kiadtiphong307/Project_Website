<script setup>
import { computed } from 'vue'
import { cart } from '../components/shop/Cart_count'

const totalItems = computed(() => cart.value.reduce((acc, item) => acc + item.quantity, 0))
</script>


<template>
  <!--แถบ header-->
  <div class="headNav">

    <!-- โลโก้ -->
    <div class="icon_title">
    <div href="#" class="logo_icon">
      <img src="https://cdn.discordapp.com/attachments/1153766321666932836/1162317327547777034/DeeJai.png?ex=653b7f5d&is=65290a5d&hm=3e9fe6bad05c206667c205c02e17d0e3349f3b7b38c52ce173a9017b76754098&" alt="iocon_logo" width="60" height="60" />
    <span class="title_box">DeeJai Travel</span>
    </div>
     
    </div>

    <ul class="nav justify-content-end">
      <!-- ตระกร้า -->
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
      <li class="nav-item" >
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

      <!-- login -->
      <li class="nav-item">
        <RouterLink :to="{ name: 'login_register' }">
        <button type="button" class="btn btn-primary">เข้าสู่ระบบ</button>
        </RouterLink>
      </li>

      <li class="nav-item">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">เข้าสู่ระบบ</button>
      </li>

    </ul>

  </div>

  <!--แถบ menu-->
  <nav class="BodyNav">
    <router-link :to="{ name: 'main' }" class="btnNav"> หน้าแรก </router-link>
    <div class="btnNav">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        ภูมิภาคที่สนใจ
      </a>
      <ul class="dropdown-menu">
        <li>
          <RouterLink :to="{ name: 'home_north' }" class="btnDrop" href="#">ภาคเหนือ</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'home_north_east' }" class="btnDrop" href="#"
            >ภาคตะวันออกเฉียงเหนือ</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'home_central' }" class="btnDrop" href="#">ภาคกลาง</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'home_east' }" class="btnDrop">ภาคตะวันออก</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'home_south' }" class="btnDrop" href="#">ภาคใต้</RouterLink>
        </li>
      </ul>
    </div>
    <div class="btnGrop">
      <div>
        <router-link :to="{ name: 'about_page' }" class="btnNav" href="#">about</router-link>
      </div>
      <div class="btnNav">
        <router class="nav-link" href="#">link</router>
      </div>
    </div>
  </nav>

    <!-- Login Modal -->
    <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title" id="loginModalLabel">เข้าสู่ระบบ</h3>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body">
            <!-- Your login form here -->
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
              </div>
              <button type="submit" class="btn btn-primary">เข้าสู่ระบบ</button>

              <div class="mb-3">
                <a href="#" data-bs-toggle="modal" data-bs-target="#registerModal">หากยังไม่มีบัญชี</a>
              </div>

            </form>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">ปิดหน้าต่าง</button>
          </div>

        </div>
      </div>
    </div>

      <!-- Register Modal -->
    <div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="registerModalLabel">Register</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- Your registration form here -->
          <form>
            <div class="mb-3">
              <label for="exampleInputName" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="exampleInputName">
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
    </div>
</template>

<style scoped>

.icon_title {
  display: flex;
  align-items: center;
  justify-content: space-between; /* จัดตำแหน่งให้เท่ากัน */
}

.logo_icon {
  display: flex;
  align-items: center;
  gap: 10px; /* ปรับระยะห่างระหว่างโลโก้และข้อความ */
}

.nav {
  display: flex;
  align-items: center;
  gap: 20px; /* ปรับระยะห่างระหว่างองค์ประกอบในแถว */
}

.nav-item {
  list-style-type: none; 
}

.btn {
  margin: 0; /* ลบขอบ */
  padding: 10px 20px; /* ปรับขนาดของปุ่ม */
}

.title_box{
  font-size: 30px;
  color: white;
  font-weight: bold;
}
.logo_icon {
  display: flex;
  align-items: center;
  gap: 15px; /* ปรับระยะห่างระหว่างโลโก้และตัวอักษร */
}

.nav-item {
  margin-left: 0px; 
}

.headNav {
  display: flex;
  justify-content: space-between; 
  align-items: center;
  background-color: rgb(0, 95, 112);
  padding: 25px;
  text-decoration: none;
}

.BodyNav {
  background-color: rgb(14, 171, 182);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.btnGrop {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.btnNav {
  padding: 10px;
  color: white;
  display: inline-block;
  box-sizing: border-box;
  text-decoration: none;
}
.dropdown-menu {
  background-color: rgba(6, 164, 175, 0.726);
}
.btnDrop {
  padding: 10px;
  color: white;
  display: inline-block;
  box-sizing: border-box;
  text-decoration: none;
}

</style>


