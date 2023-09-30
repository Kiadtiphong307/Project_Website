<template>
    <!--แถบ header-->
    <nav class="navbar bg-primary" data-bs-theme="dark">
        <nav class="navbar bg-body-tertiary">
            <div class="container">
              <a class="navbar-brand" href="#">
                <img src="" alt="Bootstrap" width="30" height="24">
              </a>
            </div>
          </nav>
      </nav>

      <!--แถบ menu-->
      <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">

              <router-link :to="{ name: 'main' }" class="navbar-brand"> หน้าแรก </router-link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <router-link :to="{ name: 'about_page' }" class="nav-link active" aria-current="page" href="#">about</router-link>
                  </li>
                  <li class="nav-item">
                    <router class="nav-link" href="#">link</router>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      ภูมิภาคที่สนใจ
                    </a>
                    <ul class="dropdown-menu">
                      <li><RouterLink :to="{ name: 'home_north' }" class="dropdown-item" href="#">ภาคเหนือ</RouterLink></li>
                      <li><RouterLink :to="{ name: 'home_north_east' }" class="dropdown-item" href="#">ภาคตะวันออกเฉียงเหนือ</RouterLink></li>
                      <li><RouterLink :to="{ name: 'home_central' }" class="dropdown-item" href="#">ภาคกลาง</RouterLink></li>
                      <li><RouterLink :to="{ name: 'home_east' }" class="dropdown-item" >ภาคตะวันออก</RouterLink></li>
                      <li><RouterLink :to="{ name: 'home_south' }" class="dropdown-item" href="#">ภาคใต้</RouterLink></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      </nav>
        
</template>