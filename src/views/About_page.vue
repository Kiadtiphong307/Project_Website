<script setup>
import header_bar from '../views/Header_box.vue'
</script>

<template>
    <header_bar></header_bar>
<div class="container">
    <main>
        <!--แถบคำเตือน -->
        <div class="box_text">
            <p class="fs-1">คำเตือน</p>
            <p class="fs-1">เว็ปไซต์นี้ทำเพื่อการศึกษาเเละการทำฝึกทำโปรเจคเพื่อนำเสนอ ข้อมูลในเว็ปไซต์เป็นความความจริงในบางส่วน เเละเว็ปไซต์นี้ไม่ได้นำข้อมูลไปใช้ในเชิงพาณิชย์เเต่อย่างใด
            </p>
        </div>
          
<!--ผู้จัดทำ-->
<hr>
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col" v-for="(i,index) in name_list" :key="index">
    <div class="card h-100" >
        <h5 class="card-title"><strong>{{i.position}}</strong></h5>
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{i.name}}</h5>
        <p class="card-text">{{i.id_code}}</p>
      </div>

    </div>
  </div>
</div>




 
    </main>
  </div>
</template>

<script scope>
import { ref } from 'vue';

const name_list=ref([
    {name:'นายเกียรติ์ติพงษ์ วงศ์มุ่ย', img:"", id_code: '6504101307', position:'Coding' },
    {name:'นายชนะภูมิ มลธุรัช', img:"", id_code:'6504101317',position:'Design UX/UI' },
    {name:'นางสาวซี โชติไพศาลกุล', img:"", id_code:'6504101321', position:'Coding' },
    {name:'นายธนดล อิ่นมะโน', img:"", id_code:'6504101340', position:'Design UX/UI' },
    {name:'นายธันวา ชัยรัตนานนท์', img:"", id_code:'6504101348', position:'CSS Framework'},
    {name:'นายอติเทพ ปักสังคะเณย์', img:"", id_code:'6504101408', position:'CSS Framework' }
])


</script>