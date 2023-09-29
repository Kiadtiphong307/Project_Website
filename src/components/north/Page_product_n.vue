<template>
    <!-- แถบ ภาพ  -->

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://images.wallpaperscraft.com/image/single/girl_neko_ears_1054650_1920x1080.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
      </div>

      <!-- แถบ menu -->
      <Header_box_north></Header_box_north>


       <!--กิจกรรมที่น่าสนใจ-->
<div class="container">
       <h1>กิจกรรมที่น่าสนใจ</h1>
       <hr>
       
        <div class="row row-cols-1 row-cols-md-2 g-4" >
          <div class="col" v-for="index in 10" :key="index">
            <div class="card" >
              <img src="https://media.discordapp.net/attachments/1153766321666932836/1153887346882773063/1.jpg?ex=65178e55&is=65163cd5&hm=3000ed1d1b278ba7d013ff4a926d2caca1902c2b30928485f6b0d1e897429086&=&width=585&height=585" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button type="button" class="btn btn-primary">Primary</button>
              </div>
            </div>
          </div>
        </div>
</div>
</template>

<script setup>
import Header_box_north from '../north/Box_menu_north.vue'
</script>