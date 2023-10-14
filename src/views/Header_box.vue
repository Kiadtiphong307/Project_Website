<script setup>
import { computed, ref } from 'vue'
import { accounts } from '../stores/Account'
import { cart } from '../components/shop/Cart_count'

const totalItems = computed(() => cart.value.reduce((acc, item) => acc + item.quantity, 0))

const enteredUsername = ref('')
const enteredPassword = ref('')
const confirmedPassword = ref('')
const isLoggedIn = ref(false)
const isInputValid = ref(false)

const localStorageKey = 'loggedIn'
const previousLoggedInState = localStorage.getItem(localStorageKey)
isLoggedIn.value = previousLoggedInState === 'true'

const handleLogin = () => {
  const foundAccount = accounts.find(
    (account) =>
      account.username === enteredUsername.value && account.password === enteredPassword.value
  )
  if (foundAccount) {
    alert('เข้าสู่ระบบสำเร็จ')
    isLoggedIn.value = true
    localStorage.setItem(localStorageKey, 'true')

    // Clearing the entered values
    enteredUsername.value = ''
    enteredPassword.value = ''
  } else {
    alert('เข้าสู่ระบบไม่สำเร็จ')
    alert('โปรดตรวจสอบชื่อผู้ใช้งาน หรือ รหัสผ่าน')
    localStorage.setItem(localStorageKey, 'false')
  }
}

const handleRegister = () => {
  const usernameRegex = /^[a-zA-Z0-9]+$/
  const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/

  if (
    enteredUsername.value &&
    enteredPassword.value &&
    enteredPassword.value === confirmedPassword.value &&
    usernameRegex.test(enteredUsername.value) &&
    passwordRegex.test(enteredPassword.value)
  ) {
    const newAccount = { username: enteredUsername.value, password: enteredPassword.value }
    const isExistingAccount = accounts.some((account) => account.username === newAccount.username)

    if (isExistingAccount) {
      alert('บัญชีนี้สมัครบัญชีไม่สำเร็จ')
    } else {
      accounts.push(newAccount)
      alert('สมัครบัญชีสำเร็จ')
      enteredUsername.value = ''
      enteredPassword.value = ''
      confirmedPassword.value = ''
    }
  } else {
    isInputValid.value = true
    alert('โปรดตรวจสอบข้อมูลและกรอกข้อมูลให้ครบถ้วน')
  }
}

const handleLogout = () => {
  isLoggedIn.value = false
  localStorage.setItem(localStorageKey, 'false')
}

const showPassword = ref(false)
</script>

<template>
  <!--แถบ header-->
  <div class="headNav">
    <!-- โลโก้ -->
    <div class="icon_title">
      <div href="#" class="logo_icon">
        <router-link :to="{ name: 'main' }">
          <img
            src="https://cdn.discordapp.com/attachments/1153766321666932836/1162317327547777034/DeeJai.png?ex=653b7f5d&is=65290a5d&hm=3e9fe6bad05c206667c205c02e17d0e3349f3b7b38c52ce173a9017b76754098&"
            alt="iocon_logo"
            width="60"
            height="60"
          />
        </router-link>
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
            color="white"
            fill="currentColor"
            class="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
            />
          </svg>
          <span style="color: white;">[ {{ totalItems }} ]</span>
        </router-link>
      </li>

      <!-- เมนู -->
      <li class="nav-item">
        <router-link :to="{ name: 'orderList' }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="60"
            color="white"
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

      <li v-if="!isLoggedIn" class="nav-item">
        <button
          type="button"
          class="btn-login"
        >
          เข้าสู่ระบบ
        </button>
      </li>

      <li v-if="isLoggedIn" class="nav-item" @click="handleLogout">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          class="bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
      </li>
    </ul>
  </div>

  <!-- Login Modal -->
  <div
    class="modal fade"
    id="loginModal"
    tabindex="-1"
    aria-labelledby="loginModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title" id="loginModalLabel">เข้าสู่ระบบ</h3>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body">
          <!-- Your login form here -->
          <form @submit.prevent="handleLogin">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">ชื่อผู้ใช้งาน</label>
              <input
                v-model="enteredUsername"
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                name="username"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">รหัสผ่าน</label>
              <input
                v-model="enteredPassword"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                name="password"
              />
            </div>
            <button type="submit" class="btn btn-primary">เข้าสู่ระบบ</button>
          </form>
        </div>

        <div class="modal-footer">
          <a href="#" data-bs-toggle="modal" data-bs-target="#registerModal">หากยังไม่มีบัญชี</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Register Modal -->
  <div
    class="modal fade"
    id="registerModal"
    tabindex="-1"
    aria-labelledby="registerModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title" id="registerModalLabel">สมัครสมาชิก</h3>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <!-- Your registration form here -->
          <form @submit.prevent="handleRegister">
            <div class="mb-3">
              <label for="exampleInputName" class="form-label">ชื่อผู้ใช้</label>
              <input
                v-model="enteredUsername"
                type="text"
                class="form-control"
                id="exampleInputName"
                placeholder="กรุณากรอกชื่อผู้ใช้เป็นตัวอักษรภาษาอังกฤษและตัวเลขเท่านั้น"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail" class="form-label">อีเมล</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail"
                placeholder="กรุณากรอกอีเมล"
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword" class="form-label">รหัสผ่าน</label>
              <div class="input-group">
                <input
                  v-model="enteredPassword"
                  :type="showPassword ? 'text' : 'password'"
                  class="form-control"
                  id="exampleInputPassword"
                  placeholder="กรุณากรอกรหัสผ่านภาษาอังกฤษและตัวเลข ขั้นต่ำ 8 ตัว"
                />
                <button class="btn btn-outline-secondary" @click="showPassword = !showPassword">
                  {{ showPassword ? 'ซ่อน' : 'แสดง' }}รหัสผ่าน
                </button>
              </div>
            </div>

            <div class="mb-3">
              <label for="exampleInputConfirmPassword" class="form-label">ยืนยันรหัสผ่าน</label>
              <input
                v-model="confirmedPassword"
                type="password"
                class="form-control"
                id="exampleInputConfirmPassword"
                placeholder="กรุกณากรอกรหัสผ่านอีกครั้ง"
              />
            </div>

            <button type="submit" class="btn btn-success">สมัครสมาชิก</button>
          </form>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
          >
            เข้าสู่ระบบ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-login{
  background-color: rgb(114, 174, 231);
  border-radius: 10px;
  border: 1px;
  padding: 5px;
  box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.342); 
}
.btn-login:hover{
  background-color: rgb(190, 215, 238);
  border-radius: 10px;
  border: 1px;
  padding: 5px;
  box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.342); 
}
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

.title_box {
  font-size: 30px;
  color: white;
  font-weight: bold;
}
.logo_icon {
  display: flex;
  align-items: center;
  gap: 15px; /* ปรับระยะห่างระหว่างโลโก้และตัวอักษร */
}

/* แถบ Header */
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

.title_box {
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
  padding: 18px;
  text-decoration: none;
}
</style>
