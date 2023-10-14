import { reactive } from 'vue'

export const orders = reactive({ list: [] })

export function addOrder(orderData, discountedPrice) {
  const newOrder = {
    id: orders.list.length + 1,
    items: orderData.items,
    shippingAddress: orderData.shippingAddress,
    discountedPrice: discountedPrice 
  }
  orders.list.push(newOrder)
}
