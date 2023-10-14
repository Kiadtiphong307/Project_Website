<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const items = ref([]);
const url = ref('https://api.openweathermap.org/data/2.5/forecast?lat=15.399186227718017&lon=100.97711638054064&appid=66af6261484edc25c7b1b61803d7547c');

function fetchPosts() {
  axios.get(url.value)
    .then((response) => {
      const uniqueDates = [...new Set(response.data.list.map(item => item.dt_txt.split(' ')[0]))].slice(0, 7);
      items.value = response.data.list.filter(item => uniqueDates.includes(item.dt_txt.split(' ')[0]));
    })
    .catch((err) => {
      console.log('เกิดข้อผิดพลาดในการเรียก API:', err);
    });
}

onMounted(fetchPosts);
</script>

<template>
  <section class="vh-100" >
    <div><h1 style="text-align: center;" class="text_box"><strong>เช็คสภาพอากาศประเทศไทย </strong></h1></div>
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-8 col-lg-6 col-xl-4" v-for="(i,index) in items" :key="index">
  
        <div class="card" style="color: #4B515D; border-radius: 35px;" >
            <div class="card-body p-4" >
              <div class="d-flex">
                <h6 class="flex-grow-1">วันที่ {{ i.dt_txt.split(" ")[0] }}</h6>
                <h6>เวลา {{ i.dt_txt.split(" ")[1].slice(0, 5) }} น</h6>
            </div>
            
            <div class="d-flex flex-column text-center mt-5 mb-4">
              <h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;"> {{ (((i.main.temp - 32) / 1.8) / 6).toFixed(2) }}°C </h6>
              <span class="small" style="color: #868B94">{{ i.weather[0].main }}</span>
            </div>
            <div class="d-flex align-items-center">
              <div class="flex-grow-1" style="font-size: 1rem;">
                  <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ความเร็วลม: {{ i.wind.speed }} ms/s </span></div>
                  <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ระดับความชื้น: {{ i.main.humidity }}% </span></div>
                  <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span class="ms-1"> คำอธิบาย : {{ i.weather[0].description }} </span></div>
              </div>
              <div style="margin-left: 10px">
                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="100px" fill="currentColor" class="bi bi-cloud-lightning-rain" viewBox="0 0 16 16">
                  <path d="M2.658 11.026a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.5 1.5a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-.753-8.499a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973zM8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1zM7.053 11.276A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2z"/>
                </svg>
              </div>
            </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  background-color: #F5F5F5;
  border: none;
  border-radius: 35px;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.card:hover {
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.6);
}
.card{
  margin-bottom: 50px;
}
.text_box{
  margin-top: 50px;
}


</style>