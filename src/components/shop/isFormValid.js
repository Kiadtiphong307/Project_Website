import { computed } from 'vue'
import { shippingAddress } from './Cart_list.vue'

export const isFormValid = computed(() => {
  return (
    shippingAddress.fullName &&
    shippingAddress.phoneNumber &&
    shippingAddress.province &&
    shippingAddress.district &&
    shippingAddress.subDistrict &&
    shippingAddress.address &&
    shippingAddress.zip
  )
})
