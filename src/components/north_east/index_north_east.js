import { ref } from 'vue'
import { defineStore } from 'pinia'

// list แนะนำภาคตะวันออกเฉียงเหนือ แต่ละที่
export const item_advice_north_east_01Store = defineStore('item_advice_north_east_01', () => {
  const item_advice_north_east_list_01 = ref([
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
      name: 'กล้องถ่ายรูป',
      category: 'อุปกรณ์การถ่ายภาพ',
      img: 'https://promotions.co.th/wp-content/uploads/2019/09/fsa-1.jpg'
    }
  ])

  return { item_advice_north_east_list_01 }
})

export const item_advice_north_east_02Store = defineStore('item_advice_north_east_02', () => {
  const item_advice_north_east_list_02 = ref([
    {
      name: 'ถุงมือกันหนาวเสื้อ',
      category: 'ของใช้และเสื้อผ้า',
      img: 'https://img.ws.mms.shopee.co.th/a60ea4e7a45fce4521c0736f6feedfd5'
    },
    {
      name: 'ครีมกันแดด',
      category: 'ของใช้และเครื่องสำอาง',
      img: 'https://img.wongnai.com/p/1920x0/2020/07/16/e1d8f5e373904069baa1ba441b86afc0.jpg'
    },
    { name: 'เสื้อกันหนาว', category: 'ผ้าและเสื้อผ้า', img: 'https://inwfile.com/s-a/fwmw97.png' },
    {
      name: 'กล้องถ่ายรูป',
      category: 'อุปกรณ์การถ่ายภาพ',
      img: 'https://s.isanook.com/tr/0/ud/286/1434209/t2.jpg?ip/resize/w728/q80/jpg'
    }
  ])

  return { item_advice_north_east_list_02 }
})
