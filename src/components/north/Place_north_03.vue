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

<!-- แถบ เนื้อหา -->

<!-- box รูปซ้าย -->
<div class="container">
  <div class="card mb-3" style="max-width: 1500px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="https://images.wallpaperscraft.com/image/single/silhouette_starry_sky_pillars_134464_1920x1080.jpg" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-body-secondary">แสดงข้อมูลเพิ่มเติม</small></p>
          <button type="button" class="btn btn-primary">Primary</button>
        </div>
      </div>
    </div>
  </div>

<!--box รูปขวา-->
    <div class="card mb-3" style="max-width: 1500px">
        <div class="row g-0">
          
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-body-secondary">แสดงข้อมูลเพิ่มเติม</small></p>  
                    <button type="button" class="btn btn-primary">Primary</button>   
                </div>
        </div>
        <div class="col-md-4">
          <img src="https://images.wallpaperscraft.com/image/single/silhouette_starry_sky_pillars_134464_1920x1080.jpg" class="img-fluid rounded-start" alt="...">
      </div>
    </div>
</div>
<!-- สิ่งของแนะนำขาย -->
<h1>แนะนำสินค้า</h1>
<hr>

<div class="row row-cols-1 row-cols-md-2 g-4" >
    <div class="col" v-for="index in 4" :key="index">
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