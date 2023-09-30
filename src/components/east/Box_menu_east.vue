<template>
    <!-- แถบ Menu  -->
    <div class="text-bg-success">
        <nav class="nav justify-content-between">
            <router-link :to="{ name: 'home_east' }" class="btn btn-primary nav-item nav-link link-body-emphasis active">หน้าแรก</router-link>
            <router-link :to="{ name: 'page_product_east' }" class="btn btn-primary nav-item nav-link link-body-emphasis active">สินค้าแนะนำ</router-link>
            <router-link :to="{ name: 'place_01_east' }" class="btn btn-primary nav-item nav-link link-body-emphasis active" >1</router-link>
            <router-link :to="{ name: 'place_02_east' }" class="btn btn-primary nav-item nav-link link-body-emphasis active">2</router-link>
            <router-link :to="{ name: 'place_03_east' }" class="btn btn-primary nav-item nav-link link-body-emphasis active" >3</router-link>
            <router-link :to="{ name: 'place_04_east' }" class="btn btn-primary nav-item nav-link link-body-emphasis active" >4</router-link>
            <router-link :to="{ name: 'place_05_east' }" class="btn btn-primary nav-item nav-link link-body-emphasis active" >5</router-link>
        </nav>
    </div>
  </template>
  