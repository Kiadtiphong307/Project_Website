<script setup>
import { ref } from 'vue'

const name_list = ref([
  { name: 'นายเกียรติ์ติพงษ์ วงศ์มุ่ย', img: '', id_code: '6504101307', position: 'Coding' },
  { name: 'นายชนะภูมิ มลธุรัช', img: '', id_code: '6504101317', position: 'Design UX/UI' },
  { name: 'นางสาวซี โชติไพศาลกุล', img: '', id_code: '6504101321', position: 'Coding' },
  { name: 'นายธนดล อิ่นมะโน', img: '', id_code: '6504101340', position: 'Design UX/UI' },
  { name: 'นายธันวา ชัยรัตนานนท์', img: '', id_code: '6504101348', position: 'CSS Framework' },
  { name: 'นายอติเทพ ปักสังคะเณย์', img: '', id_code: '6504101408', position: 'CSS Framework' }
])
</script>

<template>
  <div class="container">
    <main>
      <!-- แถบคำเตือน -->
      <div class="box_text">
        <p class="fs-1">คำเตือน</p>
        <p class="fs-1">
          เว็ปไซต์นี้ทำเพื่อการศึกษาและการทำฝึกทำโปรเจ็คเพื่อนำเสนอ
          ข้อมูลในเว็บไซต์เป็นความจริงในบางส่วน
          และเว็บไซต์นี้ไม่ได้นำข้อมูลไปใช้ในเชิงพาณิชย์อย่างใด
        </p>
      </div>

      <!-- ผู้จัดทำ -->
      <hr />
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for="(member, index) in name_list" :key="index">
          <div class="card h-100">
            <h5 class="card-title">
              <strong>{{ member.position }}</strong>
            </h5>
            <!-- Replace the src attribute with the appropriate image URL -->
            <img src="https://via.placeholder.com/150" class="card-img-top" alt="Profile Image" />
            <div class="card-body">
              <h5 class="card-title">{{ member.name }}</h5>
              <p class="card-text">{{ member.id_code }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
