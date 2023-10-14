<template>
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
      <div>
        <router-link :to="{ name: 'weather_today' }" class="btnNav" href="#"
          >เช็คสภาพอากาศ</router-link
        >
      </div>
    </div>
  </nav>
</template>

<style scoped>
@media (min-width: 1040px) {
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
}
@media (min-width: 768px) and (max-width: 1024px) {
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
}
@media (max-width: 767px) {
  .BodyNav {
    background-color: rgb(14, 171, 182);
    padding: 10px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    max-width: 100%;
    overflow-x: auto;
  }
  .btnGrop {
    display: flex;
    justify-content: end;
    box-sizing: border-box;
  }
  .btnNav {
    padding: 10px;
    color: white;
    display: inline-block;
    box-sizing: border-box;
    max-width: 500px; 
    height: 40px;
    white-space: nowrap;
    cursor: pointer;
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
}
</style>
