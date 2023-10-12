<template>
  <!--แถบ header-->
  <div class="headNav">
    <a href="#">
      <img src="" alt="iocon_logo" width="30" height="24" />
    </a>
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
          <RouterLink :to="{ name: 'home_north' }" class="btnDrop" href="#"
            >ภาคเหนือ</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'home_north_east' }" class="btnDrop" href="#"
            >ภาคตะวันออกเฉียงเหนือ</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'home_central' }" class="btnDrop" href="#"
            >ภาคกลาง</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'home_east' }" class="btnDrop">ภาคตะวันออก</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'home_south' }" class="btnDrop" href="#"
            >ภาคใต้</RouterLink
          >
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
</template>

<style scoped>
.headNav {
  background-color: rgb(0, 95, 112);
  padding: 30px;
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
.dropdown-menu{
  background-color: rgba(6, 164, 175, 0.726);
}
.btnDrop{
  padding: 10px;
  color: white;
  display: inline-block;
  box-sizing: border-box;
  text-decoration: none;
}

</style>
