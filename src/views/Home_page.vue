<script setup>
import header_bar from '../views/Header_box.vue'
</script>

<template>
    <header_bar></header_bar>
<div class="container">
    <main>

        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <!--การใส่ภาพ-->
            <div class="carousel-inner">  
              <div class="carousel-item active">
                <img src="https://images.wallpaperscraft.com/image/single/sakura_art_sky_122545_1920x1080.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                    <div class="mb-3">
                        <!--กรอ e-mail และ คำอธิบาย-->
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://images.wallpaperscraft.com/image/single/piano_silhouette_space_156662_1920x1080.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                    </div>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://images.wallpaperscraft.com/image/single/silhouette_starry_sky_pillars_134464_1920x1080.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                    </div>
                </div>
              </div>
            </div>
            <!-- ปุ่ม เลื่อนภาพไป-กลับ-->
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          
          <!--กิจกรรมที่น่าสนใจ-->
          <hr>
          <h1>กิจกรรมที่น่าสนใจ</h1>
          <div class="container_all" >
        
            <!--box รูปท่างซ้าย-->
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
                            </div>
                    </div>
                    <div class="col-md-4">
                      <img src="https://images.wallpaperscraft.com/image/single/silhouette_starry_sky_pillars_134464_1920x1080.jpg" class="img-fluid rounded-start" alt="...">
                  </div>
                </div>
            </div>
          </div>




 
    </main>
  </div>
</template>

<script scope>

</script>