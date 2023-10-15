<script setup>
import { ref } from 'vue'

const name_list = ref([
  {
    name: 'นายเกียรติ์ติพงษ์ วงศ์มุ่ย',
    img: 'https://scontent.fbkk4-2.fna.fbcdn.net/v/t1.15752-9/387583417_3743138542582180_2797075733952561804_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEQlKyJmeRAvVMaA29WScFRBXMEcT-F0rAFcwRxP4XSsPPOpar8LiepdXyahJnBIOg4mUUWF7fKU2r2tTlN9ft9&_nc_ohc=iSWOk1rOYMsAX_ZTCbI&_nc_ht=scontent.fbkk4-2.fna&_nc_e2o=f&oh=03_AdQF8MGU5fYgHw3ToqvDp7kcAUAtZKFJqr8j4xResv2Nrw&oe=65533023',
    id_code: '6504101307',
    position: 'Coding'
  },
  {
    name: 'นายชนะภูมิ มลธุรัช',
    img: 'https://scontent.fbkk3-5.fna.fbcdn.net/v/t1.15752-9/385439663_856338019326741_780424584937320246_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFobNpSfK4hoQdJDZqM_QqSEf_pApkxJnkR_-kCmTEmeboAtdhI6ns_zRp1tSnNw_dnisqKRbQ5iLmH_znvHWBC&_nc_ohc=nfUTRfxfqvgAX8ca3hU&_nc_ht=scontent.fbkk3-5.fna&_nc_e2o=f&oh=03_AdT-W80q45Vb_1vlxU5S_-HNNdk5d1cANIf_XdyEahLiyw&oe=65531B91',
    id_code: '6504101317',
    position: 'Design UX/UI'
  },
  {
    name: 'นางสาวซี โชติไพศาลกุล',
    img: 'https://scontent.fbkk3-3.fna.fbcdn.net/v/t1.15752-9/387543712_811676580754350_6356648586817702523_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEKGFyt2CARdkmU5gL8pATktnWVsSkgis62dZWxKSCKzoeOX3ItLFbQ6ml3aLHNJLkWWmeHSiinVKa05rZB8GuW&_nc_ohc=5FjfimHz-BcAX9lGpvh&_nc_ht=scontent.fbkk3-3.fna&_nc_e2o=f&oh=03_AdQwaCNEbA6v_VyT5t9I1XAmXeypIoxSPkLmf3AVRAWBqw&oe=655314E0',
    id_code: '6504101321',
    position: 'Coding'
  },
  {
    name: 'นายธนดล อิ่นมะโน',
    img: 'https://scontent.fbkk4-3.fna.fbcdn.net/v/t1.15752-9/387530741_973998867022106_8377766230977664909_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFDzT2aAeDoM7mQg4ij4mDgTiKs7YxtpwJOIqztjG2nAl9jPuDfG4hHxFyFrjfgH_nOHXT6dR-LoaeEbNCwy0BY&_nc_ohc=ad8-9-OkdXUAX_rFKXs&_nc_ht=scontent.fbkk4-3.fna&_nc_e2o=f&oh=03_AdRny3RPb_dyZbwfj_WYCrHkm4d5pfg6hOnUKy2f-L2krg&oe=65531932',
    id_code: '6504101340',
    position: 'Design UX/UI'
  },
  {
    name: 'นายธันวา ชัยรัตนานนท์',
    img: 'https://scontent.fbkk4-1.fna.fbcdn.net/v/t1.15752-9/370198909_1003897197548331_3077265769432449824_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHGEdWcqY9qVewTfQTT-XdWTtSDlyYLLkdO1IOXJgsuR1k0XvSr5bQu6X8P0ssXT21KKjwZXvymq8S5-Y0Mf4L2&_nc_ohc=8Ml6q16r0YkAX_E7_dg&_nc_ht=scontent.fbkk4-1.fna&_nc_e2o=f&oh=03_AdQbi-h_TN0f1v51Z3oRYe5UaHQJf7l4Qi-N8taHj0Edig&oe=65530DFE',
    id_code: '6504101348',
    position: 'CSS Framework'
  },
  {
    name: 'นายอติเทพ ปักสังคะเณย์',
    img: 'https://scontent.fbkk4-4.fna.fbcdn.net/v/t1.15752-9/387543582_271583298587810_2394559767302345369_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeELrSJqbdnq9BRQlF6DIur0PmZg8Ft9eIg-ZmDwW314iN08obtEAnxZohWY3N1_6zbjK344z_4zuHrSN3n3cGR8&_nc_ohc=mxgb9C4rD8oAX-JHJoh&_nc_ht=scontent.fbkk4-4.fna&_nc_e2o=f&oh=03_AdQGiL_y_i-QVy3lwkJtHgeQ0BLIIiDkFXwOOAwCxJ8TDA&oe=65530D87',
    id_code: '6504101408',
    position: 'CSS Framework'
  }
])
</script>

<template>
  <div class="container">
    <main>
      <!-- แถบคำเตือน -->
      <div class="box_text">
        <p class="fs-1">คำเตือน</p>
        <p>
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
            <img :src="member.img"  class="card-img-top" alt="Profile Image" />
            <div class="card-body">
              <h5 class="card-title">{{ member.name }}</h5>
              <p class="card-text">รหัสนักศึกษา {{ member.id_code }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
