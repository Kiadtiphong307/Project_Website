<template>
  <!-- แถบ ภาพ  -->
  <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://images.wallpaperscraft.com/image/single/girl_horns_umbrella_1053728_1920x1080.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
    </div>
  </div>


  <!-- แถบ Menu  -->
  <div class="text-bg-success">
    <nav class="nav  justify-content-between">
      <router-link :to="{ name: 'main' }" class="nav-item nav-link link-body-emphasis active"> <button type="button" class="btn btn-primary">หน้าแรก</button> </router-link>
      <a class="nav-item nav-link link-body-emphasis" href="#"><button type="button" class="btn btn-primary">สินค้าแนะนำ</button></a>
      <a class="nav-item nav-link link-body-emphasis" href="#"><button type="button" class="btn btn-primary">1</button></a>
      <a class="nav-item nav-link link-body-emphasis" href="#"><button type="button" class="btn btn-primary">2</button></a>
      <a class="nav-item nav-link link-body-emphasis" href="#"><button type="button" class="btn btn-primary">3</button></a>
      <a class="nav-item nav-link link-body-emphasis" href="#"><button type="button" class="btn btn-primary">4</button></a>
      <a class="nav-item nav-link link-body-emphasis" href="#"><button type="button" class="btn btn-primary">5</button></a>
    </nav>
  </div>

     <!--กิจกรรมที่น่าสนใจ-->
<div class="container">

     <h1>กิจกรรมที่น่าสนใจ</h1>
     <hr>
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
    </div>
</template>