import { ref } from 'vue'
import { defineStore } from 'pinia'

// list แนะนำภาคตะวันออก แต่ละที่
export const item_advice_east_01Store = defineStore('item_advice_east_01', () => {
  const item_advice_east_list_01 = ref([
    {
      name: 'หมวกกันควาร้อน',
      category: 'ของใช้และเสื้อผ้า',
      img: 'https://img.th.my-best.com/contents/f8b0e3dd690b72d9bacaf49005389044.png?ixlib=rails-4.3.1&q=70&lossless=0&w=1200&h=900&fit=crop&s=b0c37306f82db8a451cbba7c90ed9ba8'
    },
    {
      name: 'ครีมกันแดด',
      category: 'ของใช้และเครื่องสำอาง',
      img: 'https://img.wongnai.com/p/1920x0/2020/07/16/e1d8f5e373904069baa1ba441b86afc0.jpg'
    },
    {
      name: 'แว่นตากันแดด',
      category: 'ของใช้',
      img: 'https://img.th.my-best.com/contents/9de1f5a577a0c75948ba1d54ea4a0f80.png?ixlib=rails-4.3.1&q=70&lossless=0&w=1200&h=900&fit=crop&s=9a4f5b86eaf9ed182951a4c95149d896'
    },
    {
      name: 'ร่มกันแดด',
      category: 'ของใช้',
      img: 'https://www.thaicityumbrella.co.th/wp-content/uploads/2019/10/613oQJWR5bL._SX466_.jpg'
    }
  ])

  return { item_advice_east_list_01 }
})

export const item_advice_east_02Store = defineStore('item_advice_east_02', () => {
  const item_advice_east_list_02 = ref([
    {
      name: 'หมวกกันควาร้อน',
      category: 'ของใช้และเสื้อผ้า',
      img: 'https://img.th.my-best.com/contents/f8b0e3dd690b72d9bacaf49005389044.png?ixlib=rails-4.3.1&q=70&lossless=0&w=1200&h=900&fit=crop&s=b0c37306f82db8a451cbba7c90ed9ba8'
    },
    {
      name: 'ครีมกันแดด',
      category: 'ของใช้และเครื่องสำอาง',
      img: 'https://img.wongnai.com/p/1920x0/2020/07/16/e1d8f5e373904069baa1ba441b86afc0.jpg'
    },
    {
      name: 'เสื้อสุภาพหรือชุดขาว',
      category: 'ผ้าและเสื้อผ้า',
      img: 'https://down-th.img.susercontent.com/file/caae7357b0e98eda980df9786eaeff47'
    },
    {
      name: 'ร่มกันแดด',
      category: 'ของใช้',
      img: 'https://www.thaicityumbrella.co.th/wp-content/uploads/2019/10/613oQJWR5bL._SX466_.jpg'
    }
  ])

  return { item_advice_east_list_02 }
})
